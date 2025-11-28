const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Método não permitido" })
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Body vazio" })
      };
    }

    let data;
    try {
      data = JSON.parse(event.body);
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "JSON inválido" })
      };
    }

    const { items, customerName } = data;

    // ====== VALIDAÇÕES ======
    if (!Array.isArray(items) || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Nenhum item enviado no pedido" })
      };
    }

    // valida cada item
    for (const item of items) {
      if (!item.nome || typeof item.nome !== "string") {
        return { statusCode: 400, body: JSON.stringify({ error: "Item sem nome válido" }) };
      }
      if (!item.quantidade || item.quantidade < 1) {
        return { statusCode: 400, body: JSON.stringify({ error: "Quantidade inválida" }) };
      }
      if (!item.preco || item.preco <= 0) {
        return { statusCode: 400, body: JSON.stringify({ error: "Preço inválido" }) };
      }
    }

    // total seguro
    const total = items.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
    const totalFormatado = Number(total.toFixed(2));

    if (totalFormatado <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Total do pedido inválido" })
      };
    }

    // ====== PAYLOAD EASYPAY ======
    const payload = {
      type: ["single"],
      order: {
        key: "pedido-" + Date.now(),
        value: totalFormatado,
        items: items.map(i => ({
          description: i.nome,
          quantity: i.quantidade,
          value: i.preco
        }))
      },

      payment: {
        type: "sale",
        currency: "EUR",
        methods: ["cc", "mb", "mbw"]
      },

      customer: {
        name: customerName || "Cliente"
      },

      urls: {
        success: "https://dombistrogrill.com/sucesso.html",
        cancel: "https://dombistrogrill.com/cancelado.html"
      }
    };

    // ====== CHAMADA EASYPAY ======
    const response = await fetch("https://api.prod.easypay.pt/2.0/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "AccountId": process.env.EASYPAY_ACCOUNT_ID,
        "ApiKey": process.env.EASYPAY_API_KEY
      },
      body: JSON.stringify(payload)
    });

    const easypay = await response.json();

    if (!response.ok || !easypay?.url) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Erro ao criar checkout",
          easypayResponse: easypay
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ url: easypay.url })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
