// ---------------------- Dados do cardápio ----------------------
const categorias = {
    executivos: [
        {nome: 'Executivo Clássico (Segunda)', preco: 9.00, foto: 'fotos/bife.jpg', descricao: 'Bife acebolado, arroz, feijão, batata frita e salada.'},
        {nome: 'Executivo Dom Bistrô (Terça)', preco: 9.00, foto: 'fotos/frango.jpg', descricao: 'Empanado de frango, arroz, feijão, batata frita e salada.'},
        {nome: 'Executivo do Chefe (Quinta)', preco: 9.00, foto: 'fotos/molho.png', descricao: 'Carne ao molho Madeira, filé de porco empanado, arroz, feijão, batata frita e salada.'},
        {nome: 'Executivo Festa Brasileira (Sexta)', preco: 9.00, foto: 'fotos/mix.jpg', descricao: 'Churrasco misto, arroz, feijão, batata frita, farofa e vinagrete.'},
        {nome: 'Feijoada (Sábado)', preco: 9.00, foto: 'fotos/feijoada.png', descricao: 'Feijoada, arroz, couve refogada, torresmo e laranja.'},
        {nome: 'Jantinha', preco: 9.00, foto: 'fotos/jantinha.jpg', descricao: 'Prato pode escolher um espetinho (Carne,Frango,Frango com Bacon,Linguiça,Queijo Coalho).'}
    ],
    panelinhas: [
        {nome:"Carne", preco:7.50, foto:'fotos/Captura1.png', descricao: 'Deliciosa panelinha de carne com temperos especiais.'},
        {nome:"Bacon", preco:7.50, foto:'fotos/Captura1.png', descricao: 'Panelinha de bacon crocante e saborosa.'},
        {nome:"Legumes", preco:7.50, foto:'fotos/Captura1.png', descricao: 'Panelinha de legumes frescos e selecionados.'},
        {nome:"Bacon com Linguiça", preco:7.50, foto:'fotos/Captura1.png', descricao: 'Combinação perfeita de bacon e linguiça.'}
    ],
    caldos: [
        {nome:"Caldo Verde", preco:6.00, foto:'fotos/caldoverde.jpeg', descricao: 'Tradicional caldo verde português.'},
        {nome:"Caldo de Feijão", preco:6.00, foto:'fotos/caldofeijao.jpeg', descricao: 'Cremoso caldo de feijão brasileiro.'},
        {nome:"Caldo de Frango", preco:6.00, foto:'fotos/caldofrango.jpeg', descricao: 'Caldo de frango caseiro e saboroso.'},
        {nome:"Carne com Mandioca", preco:6.00, foto:'fotos/mandioca.jpeg', descricao: 'Caldo de carne com mandioca.'}
    ],
    hamburgueres: [
        {nome:"X-Baguncinha (combo)", preco:10.00, foto:'fotos/xbaguncinha.jpg', descricao:'Pão, 2 carnes, ovo, bacon, queijo, presunto, alface, tomate e molho especial.'},
        {nome:"X-Carioca (combo)", preco:10.00, foto:'fotos/xcarioca.jpg', descricao:'Pão, carne, queijo, presunto, abacaxi grelhado, bacon e alface.'},
        {nome:"X-Mineiro (+ fritas)", preco:9.00, foto:'fotos/xmineiro.jpg', descricao:'Pão, carne, queijo, ovo, bacon, alface, tomate e queijo Minas.'},
        {nome:"X-Gauchesco (+ fritas)", preco:7.00, foto:'fotos/xgauchesco.jpg', descricao:'Pão, carne, queijo, presunto, linguiça defumada, alface e tomate.'},
        {nome:"X-Nordestino (+ fritas)", preco:8.00, foto:'fotos/xnordestino.jpg', descricao:'Pão, carne, queijo coalho grelhado, carne de sol desfiada e molho.'},
        {nome:"X-Brasileiro (combo)", preco:11.00, foto:'fotos/xbrasileiro.jpg', descricao:'Pão, 2 carnes, cheddar, bacon, ovo, alface, tomate e batata palha.'},
        {nome:"X-Dom Cheddar (combo)", preco:13.00, foto:'fotos/power.jpg', descricao:'Pão, carne, farta porção de queijo cheddar cremoso e cebola caramelizada.'}
    ],
    espetinhos: [
        {nome:"Carne", preco:4.50, foto:'fotos/carne.jpeg', descricao: 'Espetinho de carne bovina suculenta.'},
        {nome:"Frango", preco:3.00, foto:'fotos/frango.jpeg', descricao: 'Espetinho de frango temperado.'},
        {nome:"Frango c/ Bacon", preco:4.00, foto:'fotos/frangocbacon.jpeg', descricao: 'Espetinho de frango envolto em bacon.'},
        {nome:"Linguiça", preco:2.50, foto:'fotos/linguiça.jpeg', descricao: 'Espetinho de linguiça defumada.'},
        {nome:"Queijo Coalho", preco:4.00, foto:'fotos/queijo.jpeg', descricao: 'Espetinho de queijo coalho grelhado.'},
        {nome:"Coalho c/ Melaço", preco:4.00, foto:'fotos/melaso.jpg', descricao: 'Queijo coalho com melaço de cana.'}
    ],
    petiscos: [
        {nome:"Batata Frita Pequena", preco:2.00, foto:'fotos/batatapequena.jpeg', descricao: 'Porção pequena de batata frita crocante.'},
        {nome:"Batata Frita Média", preco:3.50, foto:'fotos/batatamedia.jpeg', descricao: 'Porção média de batata frita.'},
        {nome:"Batata Frita Grande", preco:4.50, foto:'fotos/batatagrande.jpeg', descricao: 'Porção grande de batata frita.'},
        {nome:"Batata com Nutella + Ninho", preco:6.00, foto:'fotos/batatanutela.jpeg', descricao: 'Batata frita com Nutella e leite Ninho.'},
        {nome:"Anéis de Cebola", preco:3.50, foto:'fotos/aneiscebola.jpeg', descricao: 'Anéis de cebola empanados e fritos.'},
        {nome:"Calabresa Acebolada", preco:6.00, foto:'fotos/calabresa.jpeg', descricao: 'Calabresa fatiada com cebola.'},
        {nome:"Asas ao Molho Agridoce", preco:5.00, foto:'fotos/asasdefrango.jpeg', descricao: 'Asas de frango no molho agridoce.'},
        {nome:"Cuscuz com Ovo e Coalho", preco:5.00, foto:'fotos/cuscuz.jpeg', descricao: 'Cuscuz com ovo e queijo coalho.'}
    ],
    doces: [
        {nome:"Bolo de Cenoura", preco:1.50, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de cenoura com cobertura.'},
        {nome:"Bolo de Chocolate", preco:1.50, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de chocolate.'},
        {nome:"Bolo Ninho", preco:1.50, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo com leite Ninho.'},
        {nome:"Bolo de Milho", preco:1.50, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de milho verde.'},
        {nome:"Brownie", preco:2.50, foto:'fotos/brawer.jpg', descricao: 'Brownie de chocolate.'},
        {nome:"Brigadeiro", preco:0.50, foto:'fotos/brigadeiro.png', descricao: 'Tradicional brigadeiro brasileiro.'},
        {nome:"Pudim", preco:2.00, foto:'fotos/Captura1.png', descricao: 'Fatia de pudim de leite condensado.'},
        {nome:"Bolo de Pote", preco:4.00, foto:'fotos/bolonopote.png', descricao: 'Bolo de pote com diversas opções.'},
        {nome:"Bolo Formigueiro", preco:1.50, foto:'fotos/boloformigueiro.jpg', descricao: 'Fatia de bolo formigueiro.'}
        
    ],
    bebidas: [
        {nome:"Coca-Cola", preco:2.00, foto:'fotos/coca.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Coca Zero", preco:2.20, foto:'fotos/cocazero.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Ice Tea", preco:1.40, foto:'fotos/IceTea.jpeg', descricao: 'Ice Tea sabor pêssego.'},
        {nome:"Guaraná Antarctica", preco:1.50, foto:'fotos/guarana.jpeg', descricao: 'Lata 350ml.'},
        {nome:"Sumol Laranja", preco:1.40, foto:'fotos/sumollaranja.jpeg', descricao: 'Sumol sabor laranja.'},
        {nome:"Sumol Ananás", preco:1.40, foto:'fotos/sumolananas.jpeg', descricao: 'Sumol sabor abacaxi.'},
        {nome:"Água 0.5L", preco:1.10, foto:'fotos/agua.jpeg', descricao: 'Garrafa 500ml.'},
        {nome:"Água das Pedras", preco:1.80, foto:'fotos/aguasdaspedras.jpeg', descricao: 'Água com gás.'},
        {nome:"Água das Pedras c/ Limão", preco:1.80, foto:'fotos/limao.jpeg', descricao: 'Água com gás e limão.'},
        {nome:"Seven Up", preco:2.00, foto:'fotos/seven.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Super Bock", preco:2.00, foto:'fotos/superbock.jpg', descricao: 'Cerveja Super Bock.'},
        {nome:"Sumo Natural Laranja", preco:3.50, foto:'fotos/sumodelaranja.jpeg', descricao: 'Suco natural de laranja.'},
        {nome:"Sumo Natural Abacaxi", preco:3.50, foto:'fotos/sumodeabacaxi.jpeg', descricao: 'Suco natural de abacaxi.'},
        {nome:"Creme de Morango", preco:4.00, foto:'fotos/cremedemorango.jpeg', descricao: 'Creme de morango gelado.'}
    ]
};

// ---------------------- Função para calcular total com IVA ----------------------
function calcularTotal() {
    const subtotal = pedido.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const iva = subtotal * 0.13; // 13% de IVA
    const total = subtotal + iva;
    
    return {
        subtotal: subtotal,
        iva: iva,
        total: total
    };
}

// ---------------------- Inicialização ----------------------
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenu();
    inicializarCarrinho();
    configurarEventListeners();
});

// ---------------------- Construção do Menu ----------------------
function inicializarMenu() {
    const menuTabs = document.getElementById("menuTabs");
    const areas = document.getElementById("areas");

    const nomesCategorias = {
        executivos: 'PRATOS EXECUTIVOS',
        panelinhas: 'PANELINHAS',
        caldos: 'CALDOS',
        hamburgueres: 'HAMBÚRGUERES',
        espetinhos: 'ESPETINHOS',
        petiscos: 'PETISCOS',
        doces: 'SOBREMESAS',
        bebidas: 'BEBIDAS'
    };

    Object.keys(categorias).forEach((cat, idx) => {
        const nomeExibicao = nomesCategorias[cat] || cat.toUpperCase();
        menuTabs.innerHTML += `<button onclick="abrirSecao('${cat}')" class="${idx===0?'active':''}">${nomeExibicao}</button>`;
        areas.innerHTML += `<div id="${cat}" class="section ${idx===0?'active':''}"></div>`;
    });

    Object.keys(categorias).forEach(cat => {
        const div = document.getElementById(cat);
        categorias[cat].forEach(item => {
            div.innerHTML += criarCardProduto(item, cat);
        });
    });

    const hash = window.location.hash.replace("#","").trim();
    if(hash && document.getElementById(hash)){
        abrirSecao(hash);
    }
}

function criarCardProduto(item, categoria) {
    return `
        <div class="card" data-categoria="${categoria}">
            <div class="card-image-container">
                <img src="${item.foto}" alt="${item.nome}" 
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvbSBCaXN0csO0IEdyaWxsPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gbsOjbyBjYXJyZWdhZGE8L3RleHQ+PC9zdmc+'">
            </div>
            <div class="card-content">
                <h3>${item.nome}</h3>
                <p class="descricao-item">${item.descricao}</p>
                <div class="card-preco">
                    <span class="preco">€${item.preco.toFixed(2)}</span>
                    <button onclick="addItem('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, this)">
                        <i class="fas fa-plus"></i> ADICIONAR
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ---------------------- Navegação entre Seções ----------------------
function abrirSecao(cat) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".menu-centralizado button").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById(cat).classList.add("active");
    const botao = Array.from(document.querySelectorAll(".menu-centralizado button"))
        .find(btn => btn.onclick && btn.onclick.toString().includes(cat));
    if(botao) botao.classList.add("active");
    
    window.location.hash = cat;
}

// ---------------------- Gerenciamento do Carrinho ----------------------
let pedido = JSON.parse(localStorage.getItem("pedido")) || [];

function inicializarCarrinho() {
    atualizarCarrinho();
}

function addItem(nome, preco, botao) {
    const itemExistente = pedido.find(item => item.nome === nome);
    
    if(itemExistente) itemExistente.quantidade++;
    else pedido.push({nome, preco, quantidade:1});
    
    salvarPedido();
    mostrarFeedbackAdicao(botao);
}

function mostrarFeedbackAdicao(botao) {
    const originalHTML = botao.innerHTML;
    const originalBg = botao.style.background;
    
    botao.innerHTML = '<i class="fas fa-check"></i> ADICIONADO!';
    botao.style.background = '#00a650';
    botao.disabled = true;
    
    setTimeout(() => {
        botao.innerHTML = originalHTML;
        botao.style.background = originalBg;
        botao.disabled = false;
    }, 1500);
}

function salvarPedido() {
    localStorage.setItem("pedido", JSON.stringify(pedido));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador-itens");
    const totalMini = document.getElementById("total-mini");
    const totalElement = document.getElementById("total");
    
    let total = 0;
    let totalItens = 0;
    
    lista.innerHTML = pedido.map((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        totalItens += item.quantidade;
        
        return `
            <li class="carrinho-item">
                <div>
                    <strong>${item.nome}</strong><br>
                    <small>€${item.preco.toFixed(2)} cada</small>
                </div>
                <div class="quantidade-box">
                    <button onclick="alterarQuantidade(${index}, -1)">−</button>
                    <span>${item.quantidade}</span>
                    <button onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
                <button class="remover" onclick="removerItem(${index})" title="Remover item">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        `;
    }).join('');

    // Caso não haja elementos no DOM (ex.: página sem carrinho), evitar erro
    if (lista) lista.innerHTML = pedido.length ? lista.innerHTML : '<li style="padding:12px;color:#666">Carrinho vazio.</li>';

    // Atualizar o total com o novo formato (subtotal, IVA e total)
    const totalCalculado = calcularTotal();
    if (totalElement) {
        totalElement.innerHTML = `
            <strong>Subtotal:</strong> €${totalCalculado.subtotal.toFixed(2)}<br>
            <strong>IVA (13%):</strong> €${totalCalculado.iva.toFixed(2)}<br>
            <strong>Total a Pagar:</strong> €${totalCalculado.total.toFixed(2)}
        `;
    }
    
    if (totalMini) totalMini.textContent = totalCalculado.total.toFixed(2);
    if (contador) contador.textContent = totalItens;
}

function alterarQuantidade(index, delta) {
    if (!pedido[index]) return;
    pedido[index].quantidade += delta;

    if (pedido[index].quantidade <= 0) {
        removerItem(index);
    } else {
        salvarPedido();
    }
}

function removerItem(index) {
    if (index < 0 || index >= pedido.length) return;
    pedido.splice(index, 1);
    salvarPedido();
}

// ---------------------- Controle do Carrinho ----------------------
function abrirCarrinho() {
    atualizarCarrinho();
    const carrinhoBox = document.getElementById("carrinho-box");
    if (carrinhoBox) {
        carrinhoBox.classList.add("carrinho-open");
        // Impedir scroll do body quando carrinho estiver aberto
        document.body.style.overflow = 'hidden';
    }
}

function fecharCarrinho() {
    const carrinhoBox = document.getElementById("carrinho-box");
    if (carrinhoBox) {
        carrinhoBox.classList.remove("carrinho-open");
        // Restaurar scroll do body
        document.body.style.overflow = 'auto';
    }
}

// ---------------------- WhatsApp (UNIFICADO) ----------------------
function enviarWhatsApp() {
    const nomeEl = document.getElementById("nomeCliente");
    const nome = nomeEl ? nomeEl.value.trim() : "";

    if(!nome) {
        alert("⚠ Digite seu nome antes de enviar o pedido!");
        if (nomeEl) nomeEl.focus();
        return;
    }

    if(pedido.length === 0) {
        alert("🛒 Seu carrinho está vazio! Adicione itens antes de enviar.");
        return;
    }

    const observacoesEl = document.getElementById("obs");
    const observacoes = observacoesEl ? observacoesEl.value : "";

    // Número correto com código (Portugal): 351930580520
    const numeroWhatsApp = "351930580520";

    let mensagem = `🍔 *PEDIDO - DOM BISTRÔ GRILL*%0A%0A`;
    mensagem += `👤 *Cliente:* ${nome}%0A%0A`;
    mensagem += `📋 *Itens do Pedido:*%0A`;

    pedido.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        mensagem += `• ${item.nome} x${item.quantidade} - €${subtotal.toFixed(2)}%0A`;
    });

    const total = pedido.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    mensagem += `%0A💰 *Total: €${total.toFixed(2)}*%0A%0A`;
    mensagem += `📝 *Observações:*%0A${observacoes || "Nenhuma observação"}`;

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // MARCAR QUE O PEDIDO FOI ENVIADO
    localStorage.setItem('pedidoEnviado', 'true');

    // NÃO limpar o carrinho - apenas fechar o modal/carrinho
    fecharCarrinho();

    // Abrir WhatsApp em nova aba/guia
    window.open(urlWhatsApp, '_blank');

    // Mensagem informativa ao usuário
    setTimeout(() => {
        alert("📝 Pedido enviado com sucesso!\n\n💳 Agora você pode realizar o pagamento online.\n\nOs itens foram mantidos no carrinho para facilitar o pagamento.");
    }, 800);
}

// ---------------------- Configurar Event Listeners GLOBAIS ----------------------
function configurarEventListeners() {
    const pagarBtn = document.getElementById("pagarLinkBtn");
    const nomeInput = document.getElementById("nomeCliente");

    if(pagarBtn) {
        pagarBtn.addEventListener("click", processarPagamento);
    }

    if(nomeInput) {
        nomeInput.addEventListener("input", function(e) {
            e.target.value = e.target.value.toUpperCase();
        });
    }

    // Fechar carrinho ao clicar fora (melhoria)
    document.addEventListener('click', function(event) {
        const carrinho = document.getElementById('carrinho-box');
        const floatingCart = document.querySelector('.floating-cart');

        if (!carrinho || !floatingCart) return;

        if (!carrinho.contains(event.target) &&
            !floatingCart.contains(event.target) &&
            carrinho.classList.contains('carrinho-open')) {
            fecharCarrinho();
        }
    });
}

// ---------------------- PROCESSAR PAGAMENTO (fluxo único) ----------------------
function processarPagamento() {
    if(pedido.length === 0) {
        alert("🛒 Seu carrinho está vazio! Adicione itens antes de pagar.");
        return;
    }

    const nomeCliente = (document.getElementById("nomeCliente") || {value: ""}).value.trim().toUpperCase();
    if(!nomeCliente) {
        alert("⚠ Digite seu nome antes de pagar!");
        const el = document.getElementById("nomeCliente");
        if (el) el.focus();
        return;
    }

    const pedidoEnviado = localStorage.getItem('pedidoEnviado') === 'true';

    if (!pedidoEnviado) {
        const confirmarProcesso = confirm("📋 RECOMENDAMOS:\n\n1. Primeiro envie seu pedido pelo WhatsApp\n2. Depois realize o pagamento\n\nDeseja enviar o pedido primeiro?");
        if (confirmarProcesso) {
            enviarWhatsApp();
            return;
        }
        const continuarSemEnviar = confirm("⚠️ ATENÇÃO:\n\nVocê está prestes a pagar sem enviar o pedido pelo WhatsApp.\n\nO restaurante pode não receber seu pedido!\n\nDeseja continuar mesmo assim?");
        if (!continuarSemEnviar) return;
    }

    criarModalPagamento(nomeCliente);
}

// ---------------------- Modal de Pagamento ----------------------
function criarModalPagamento(nomeCliente) {
    if (document.getElementById('modalPagamento')) return;

    const pedidoEnviado = localStorage.getItem('pedidoEnviado') === 'true';
    const avisoTexto = pedidoEnviado ? "✅ Pedido já enviado pelo WhatsApp. Você pode prosseguir com o pagamento." : "⚠️ ATENÇÃO: Você ainda não enviou o pedido pelo WhatsApp.";

    const modalHTML = `
        <div id="modalPagamento" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        ">
            <div id="modalPagamentoInner" style="
                background: white;
                padding: 28px;
                border-radius: 10px;
                width: 92%;
                max-width: 480px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                position: relative;
            ">
                <h3 style="margin-top:0;text-align:center;color:#333">💳 Finalizar Pagamento</h3>

                <div style="background:${pedidoEnviado ? '#d4edda' : '#fff3cd'}; border:1px solid ${pedidoEnviado ? '#c3e6cb' : '#ffeaa7'}; padding:12px; border-radius:8px; margin-bottom:16px; text-align:center;">
                    <strong style="display:block;color:${pedidoEnviado ? '#155724' : '#856404'}; margin-bottom:6px;">
                        <i class="fas ${pedidoEnviado ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${pedidoEnviado ? 'PEDIDO CONFIRMADO' : 'ATENÇÃO IMPORTANTE'}
                    </strong>
                    <span style="color:${pedidoEnviado ? '#155724' : '#856404'}; font-size:14px; line-height:1.4;">${avisoTexto}</span>
                </div>

                <label style="display:block;margin-top:8px;font-weight:bold;">Email</label>
                <input type="email" id="emailPagamento" placeholder="seu@email.com" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:6px;box-sizing:border-box" />

                <label style="display:block;margin-top:12px;font-weight:bold;">Telefone</label>
                <input type="tel" id="telefonePagamento" placeholder="+351 9XX XXX XXX" value="+351" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:6px;box-sizing:border-box" />

                <div style="display:flex;gap:10px;margin-top:18px;">
                    <button onclick="fecharModalPagamento()" style="flex:1;padding:10px;background:#6c757d;color:white;border:none;border-radius:6px;cursor:pointer;">Cancelar</button>
                    <button onclick="finalizarPagamento()" style="flex:1;padding:10px;background:#28a745;color:white;border:none;border-radius:6px;cursor:pointer;">Continuar para Pagamento</button>
                </div>

                ${!pedidoEnviado ? `
                <div style="text-align:center;margin-top:12px;border-top:1px solid #eee;padding-top:12px;">
                    <button onclick="enviarWhatsAppPrimeiro()" style="background:#25D366;color:white;border:none;padding:10px 14px;border-radius:6px;cursor:pointer;">
                        <i class="fab fa-whatsapp"></i> Enviar Pedido pelo WhatsApp Primeiro
                    </button>
                </div>`: ''}

            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // fechar ao clicar fora do inner
    const modal = document.getElementById('modalPagamento');
    modal.addEventListener('click', function(e){
        if (e.target.id === 'modalPagamento') fecharModalPagamento();
    });

    // focar email
    setTimeout(()=> {
        const email = document.getElementById('emailPagamento');
        if (email) email.focus();
    }, 120);

    document.addEventListener('keydown', fecharComESC);
}

function enviarWhatsAppPrimeiro() {
    fecharModalPagamento();
    setTimeout(() => enviarWhatsApp(), 250);
}

function fecharComESC(e) {
    if (e.key === 'Escape') fecharModalPagamento();
}

function fecharModalPagamento() {
    const modal = document.getElementById('modalPagamento');
    if (modal) {
        modal.remove();
        document.removeEventListener('keydown', fecharComESC);
    }
}

// ---------------------- FINALIZAR PAGAMENTO / EasyPay ----------------------
function finalizarPagamento() {
    const emailInput = document.getElementById('emailPagamento');
    const telefoneInput = document.getElementById('telefonePagamento');

    const emailCliente = emailInput ? emailInput.value.trim() : '';
    const telefoneCliente = telefoneInput ? telefoneInput.value.trim() : '';

    if (!emailCliente) {
        alert("📧 Email é obrigatório para pagamento!");
        if (emailInput) emailInput.focus();
        return;
    }
    if (!telefoneCliente) {
        alert("📞 Telefone é obrigatório para pagamento!");
        if (telefoneInput) telefoneInput.focus();
        return;
    }

    if (!isValidEmail(emailCliente)) {
        alert("📧 Por favor, insira um email válido!");
        if (emailInput) emailInput.focus();
        return;
    }

    if (telefoneCliente.replace(/\s/g,'').length < 9) {
        alert("📞 Por favor, insira um telefone válido com código do país!");
        if (telefoneInput) telefoneInput.focus();
        return;
    }

    const nomeCliente = (document.getElementById("nomeCliente") || {value: ""}).value.trim().toUpperCase();

    // Calcular total com IVA
    const totalCalculado = calcularTotal();

    // Salvar pedido para sucesso/cancelado
    const pedidoInfo = {
        id: "pedido_" + Date.now(),
        cliente: nomeCliente || 'Não informado',
        telefone: telefoneCliente,
        email: emailCliente,
        itens: [...pedido],
        subtotal: totalCalculado.subtotal,
        iva: totalCalculado.iva,
        total: totalCalculado.total,
        obs: (document.getElementById('obs')||{value:''}).value || '',
        data: new Date().toISOString()
    };
    localStorage.setItem('ultimoPedido', JSON.stringify(pedidoInfo));

    // Criar descrição curta
    let descricao = "Dom Bistrô Grill - ";
    pedido.forEach((it, idx) => {
        if (idx < 3) descricao += it.nome + ", ";
    });
    descricao = descricao.slice(0, -2);
    if (pedido.length > 3) descricao += " e outros";

    // URLs de retorno (mesmo domínio)
    const baseUrl = window.location.origin;
    const successUrl = baseUrl + "/sucesso.html";
    const cancelUrl = baseUrl + "/cancelado.html";

    // Montar URL EasyPay (atenção: veja se os parâmetros são os corretos para sua conta)
    const easypayUrl =
        "https://www.easypay.pt/pay?" +
        "a=999002530" + // SEU ACCOUNT ID - revise antes de publicar
        "&k=T28056C+e3d5x-07fx4f8vac2" + // SUA API KEY - reveja
        "&v=" + totalCalculado.total.toFixed(2) + // Usar o total com IVA
        "&o=" + encodeURIComponent(descricao) +
        "&n=" + encodeURIComponent(nomeCliente) +
        "&e=" + encodeURIComponent(emailCliente) +
        "&t=" + encodeURIComponent(telefoneCliente) +
        "&s=" + encodeURIComponent(successUrl) +
        "&c=" + encodeURIComponent(cancelUrl);

    // Limpar estado local ANTES de redirecionar (já salvamos ultimoPedido)
    fecharModalPagamento();
    localStorage.removeItem("pedido");
    localStorage.removeItem("pedidoEnviado");
    pedido = [];
    atualizarCarrinho();
    fecharCarrinho();

    // Mostrar loading e redirecionar
    mostrarLoadingPagamento(easypayUrl);
}

// ---------------------- VALIDADORES E HELPERS ----------------------
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function mostrarLoadingPagamento(url) {
    if (document.getElementById('loadingPagamento')) return;

    const loadingHTML = `
        <div id="loadingPagamento" style="
            position: fixed; top:0; left:0; width:100%; height:100%;
            background: rgba(0,0,0,0.95); display:flex; align-items:center; justify-content:center;
            z-index:3000; color:white; font-family:Arial, sans-serif;
        ">
            <div style="text-align:center; padding:20px;">
                <i class="fas fa-spinner fa-spin" style="font-size:60px; color:#E66A11; margin-bottom:18px;"></i>
                <h2 style="margin:0 0 8px;">Redirecionando para Pagamento...</h2>
                <p style="opacity:0.88; margin:0 0 12px;">Aguarde, você será direcionado para a EasyPay em instantes.</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);

    setTimeout(() => {
        console.log("Redirecionando para:", url);
        window.location.href = url;
    }, 1200);
}