const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  const { items, customerName } = JSON.parse(event.body);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.nome },
        unit_amount: Math.round(item.preco * 100),
      },
      quantity: item.quantidade,
    })),
    mode: 'payment',
    success_url: 'https://guimaraesdf.netlify.app/sucesso.html',
    cancel_url: 'https://guimaraesdf.netlify.app/cancelado.html',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url }),
  };
}

