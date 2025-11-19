const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    const { items, customerName } = JSON.parse(event.body);

    // Calcular total do pedido
    const total = items.reduce(
      (sum, item) => sum + (item.preco * item.quantidade),
      0
    );

    // Criar pagamento no EasyPay
    const response = await fetch("https://api.prod.easypay.pt/2.0/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "AccountId": process.env.EASYPAY_ACCOUNT_ID,
        "ApiKey": process.env.EASYPAY_API_KEY
      },
      body: JSON.stringify({
        type: "sale",
        capture: true,

        // 🔹 Métodos de pagamento disponíveis
        method: ["cc", "debit", "mb"], // Cartão crédito, débito e referência multibanco
        // Se quiser MB WAY também, use: method: ["cc", "debit", "mb", "mbw"],

        customer: {
          name: customerName || "Cliente"
        },

        items: items.map(i => ({
          description: i.nome,
          quantity: i.quantidade,
          price: i.preco
        })),

        value: total,
        currency: "EUR",
        expiration_time: 30, // Expiração do pagamento em minutos

        success_url: "https://dombistrogrill.com/sucesso.html",
        cancel_url: "https://dombistrogrill.com/cancelado.html"
      })
    });

    const data = await response.json();

    if (!data?.url) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Erro ao criar checkout", details: data })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ url: data.url })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
