// ==================== CONFIGURAÇÕES ====================
const TAXA_FIXA = 0.25;
const TAXA_PORCENTAGEM = 0.015;
const IVA = 0.13;

// ==================== PREÇOS DOS ADICIONAIS MELHORADOS ====================
const PRECOS_ADICIONAIS = {
    // Adicionais para Executivos (com descrições)
    'Arroz Extra': { preco: 1.00, descricao: 'Porção adicional de arroz soltinho', categoria: 'executivo' },
    'Feijão com Caldo': { preco: 1.50, descricao: 'Feijão com caldo temperado', categoria: 'executivo' },
    'Feijão Tropeiro': { preco: 2.00, descricao: 'Feijão tropeiro com bacon e linguiça', categoria: 'executivo' },
    'Batata Frita': { preco: 1.50, descricao: 'Porção de batata frita crocante', categoria: 'executivo' },
    'Duas Carnes': { preco: 3.50, descricao: 'Porção dupla da carne do dia', categoria: 'executivo' },
    'Carne Extra (Feijoada)': { preco: 2.50, descricao: 'Carne suína adicional para feijoada', categoria: 'executivo' },
    'Torresmo Extra': { preco: 1.50, descricao: 'Porção extra de torresmo crocante', categoria: 'executivo' },
    'Couve Refogada': { preco: 1.00, descricao: 'Couve refogada no alho', categoria: 'executivo' },
    
    // Adicionais para Hamburgueres
    'Carne Hamburguer': { preco: 2.00, descricao: 'Hambúrguer artesanal extra', categoria: 'hamburguer' },
    'Bacon Crocante': { preco: 1.50, descricao: 'Bacon extra crocante', categoria: 'hamburguer' },
    'Ovo': { preco: 1.00, descricao: 'Ovo frito ou cozido', categoria: 'hamburguer' },
    'Queijo': { preco: 1.00, descricao: 'Fatia de queijo', categoria: 'hamburguer' },
    'Presunto': { preco: 1.00, descricao: 'Fatia de presunto', categoria: 'hamburguer' },
    'Cheddar Cremoso': { preco: 1.50, descricao: 'Cheddar cremoso especial', categoria: 'hamburguer' },
    'Alface': { preco: 0.50, descricao: 'Folhas de alface frescas', categoria: 'hamburguer' },
    'Tomate': { preco: 0.50, descricao: 'Fatias de tomate', categoria: 'hamburguer' },
    'Cebola Caramelizada': { preco: 1.00, descricao: 'Cebola caramelizada no mel', categoria: 'hamburguer' },
    'Molho Especial': { preco: 0.50, descricao: 'Molho secreto da casa', categoria: 'hamburguer' },
    
    // Adicionais para Espetinhos
    'Farofa': { preco: 0.50, descricao: 'Farofa crocante temperada', categoria: 'espetinho' },
    'Vinagrete': { preco: 0.50, descricao: 'Vinagrete de tomate e cebola', categoria: 'espetinho' },
    'Arroz Branco': { preco: 1.00, descricao: 'Porção de arroz', categoria: 'espetinho' },
    'Molho à Parte': { preco: 0.50, descricao: 'Molho de alho ou pimenta', categoria: 'espetinho' }
};

// ==================== DADOS DO MENU ====================
const categorias = {
    executivos: [
        {
            nome: 'Executivo Clássico (Segunda)',
            preco: 9.39,
            foto: 'fotos/bife.png',
            descricao: 'Bife acebolado, arroz, feijão, batata frita e salada.',
            carneDia: 'Bife',
            dia: 'SEGUNDA'
        },
        {
            nome: 'Executivo Dom Bistrô (Terça)',
            preco: 9.39,
            foto: 'fotos/empanado.png',
            descricao: 'Empanado de frango, arroz, feijão, batata frita e salada.',
            carneDia: 'Frango',
            dia: 'TERÇA'
        },
        {
            nome: 'Executivo do Chefe (Quinta)',
            preco: 9.39,
            foto: 'fotos/molho.png',
            descricao: 'Carne ao molho Madeira, filé de porco empanado, arroz, feijão, batata frita e salada.',
            carneDia: 'Carne ao Molho + Filé de Porco',
            dia: 'QUINTA'
        },
        {
            nome: 'Executivo Festa Brasileira (Sexta)',
            preco: 9.39,
            foto: 'fotos/mix.png',
            descricao: 'Churrasco misto, arroz, feijão, batata frita, farofa e vinagrete.',
            carneDia: 'Churrasco Misto',
            dia: 'SEXTA'
        },
        {
            nome: 'Feijoada Completa (Sábado)',
            preco: 9.39,
            foto: 'fotos/feijoada.png',
            descricao: 'Feijoada completa, arroz, couve refogada, torresmo, farofa e laranja.',
            carneDia: 'Feijoada',
            dia: 'SÁBADO'
        },
        {
            nome: 'Jantinha',
            preco: 9.39,
            foto: 'fotos/jantinha.jpg',
            descricao: 'Prato pode escolher um espetinho (Carne, Frango, Frango com Bacon, Linguiça, Queijo Coalho).',
            carneDia: 'Espetinho',
            dia: 'DOMINGO'
        }
    ],
    panelinhas: [
        {nome:"Carne", preco: 7.86, foto:'fotos/Captura1.png', descricao: 'Deliciosa panelinha de carne com temperos especiais.'},
        {nome:"Bacon", preco: 7.86, foto:'fotos/Captura1.png', descricao: 'Panelinha de bacon crocante e saborosa.'},
        {nome:"Legumes", preco: 7.86, foto:'fotos/Captura1.png', descricao: 'Panelinha de legumes frescos e selecionados.'},
        {nome:"Bacon com Linguiça", preco: 7.86, foto:'fotos/Captura1.png', descricao: 'Combinação perfeita de bacon e linguiça.'}
    ],
    caldos: [
        {nome:"Caldo Verde", preco: 6.34, foto:'fotos/caldoverde.jpeg', descricao: 'Tradicional caldo verde português.'},
        {nome:"Caldo de Feijão", preco: 6.34, foto:'fotos/caldofeijao.jpeg', descricao: 'Cremoso caldo de feijão brasileiro.'},
        {nome:"Caldo de Frango", preco: 6.34, foto:'fotos/caldofrango.jpeg', descricao: 'Caldo de frango caseiro e saboroso.'},
        {nome:"Carne com Mandioca", preco: 6.34, foto:'fotos/mandioca.jpeg', descricao: 'Caldo de carne com mandioca.'}
    ],
    hamburgueres: [
        {nome:"X-Baguncinha (combo)", preco: 10.64, foto:'fotos/xbaguncinha.jpg', descricao:'Pão, 2 carnes, ovo, bacon, queijo, presunto, alface, tomate e molho especial.'},
        {nome:"X-Carioca (combo)", preco: 10.64, foto:'fotos/xcarioca.jpg', descricao:'Pão, carne, queijo, presunto, abacaxi grelhado, bacon e alface.'},
        {nome:"X-Mineiro (+ fritas)", preco: 9.59, foto:'fotos/xmineiro.jpg', descricao:'Pão, carne, queijo, ovo, bacon, alface, tomate e queijo Minas.'},
        {nome:"X-Gauchesco (+ fritas)", preco: 7.61, foto:'fotos/xgauchesco.jpg', descricao:'Pão, carne, queijo, presunto, linguiça defumada, alface e tomate.'},
        {nome:"X-Nordestino (+ fritas)", preco: 8.56, foto:'fotos/xnordestino.jpg', descricao:'Pão, carne, queijo coalho grelhado, carne de sol desfiada e molho.'},
        {nome:"X-Brasileiro (combo)", preco: 11.67, foto:'fotos/xbrasileiro.jpg', descricao:'Pão, 2 carnes, cheddar, bacon, ovo, alface, tomate e batata palha.'},
        {nome:"X-Dom Cheddar (combo)", preco: 13.70, foto:'fotos/dom.jpg', descricao:'Pão, carne, farta porção de queijo cheddar cremoso e cebola caramelizada.'}
    ],
    espetinhos: [
        {nome:"Carne", preco: 4.82, foto:'fotos/carne.jpeg', descricao: 'Espetinho de carne bovina suculenta.'},
        {nome:"Frango", preco: 3.30, foto:'fotos/frango.jpeg', descricao: 'Espetinho de frango temperado.'},
        {nome:"Frango c/ Bacon", preco: 4.31, foto:'fotos/frangocbacon.jpeg', descricao: 'Espetinho de frango envolto em bacon.'},
        {nome:"Linguiça", preco: 2.79, foto:'fotos/linguiça.jpeg', descricao: 'Espetinho de linguiça defumada.'},
        {nome:"Queijo Coalho", preco: 4.31, foto:'fotos/queijo.jpeg', descricao: 'Espetinho de queijo coalho grelhado.'},
        {nome:"Coalho c/ Melaço", preco: 4.31, foto:'fotos/queijo.png', descricao: 'Queijo coalho com melaço de cana.'}
    ],
    petiscos: [
        {nome:"Batata Frita Pequena", preco: 2.28, foto:'fotos/batatapequena.jpeg', descricao: 'Porção pequena de batata frita crocante.'},
        {nome:"Batata Frita Média", preco: 3.80, foto:'fotos/batatamedia.jpeg', descricao: 'Porção média de batata frita.'},
        {nome:"Batata Frita Grande", preco: 4.82, foto:'fotos/batatagrande.jpeg', descricao: 'Porção grande de batata frita.'},
        {nome:"Batata com Nutella + Ninho", preco: 6.34, foto:'fotos/batatanutela.jpeg', descricao: 'Batata frita com Nutella e leite Ninho.'},
        {nome:"Anéis de Cebola", preco: 3.80, foto:'fotos/aneiscebola.jpeg', descricao: 'Anéis de cebola empanados e fritos.'},
        {nome:"Calabresa Acebolada", preco: 6.34, foto:'fotos/calabresa.jpeg', descricao: 'Calabresa fatiada com cebola.'},
        {nome:"Asas ao Molho Agridoce", preco: 5.33, foto:'fotos/asasdefrango.jpeg', descricao: 'Asas de frango no molho agridoce.'},
        {nome:"Cuscuz com Ovo e Coalho", preco: 5.33, foto:'fotos/cuscuz.jpeg', descricao: 'Cuscuz com ovo e queijo coalho.'}
    ],
    doces: [
        {nome:"Bolo de Cenoura", preco: 1.77, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de cenoura com cobertura.'},
        {nome:"Bolo de Chocolate", preco: 1.77, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de chocolate.'},
        {nome:"Bolo Ninho", preco: 1.77, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo com leite Ninho.'},
        {nome:"Bolo de Milho", preco: 1.77, foto:'fotos/Captura1.png', descricao: 'Fatia de bolo de milho verde.'},
        {nome:"Brownie", preco: 2.79, foto:'fotos/bk.png', descricao: 'Brownie de chocolate.'},
        {nome:"Brigadeiro", preco: 0.75, foto:'fotos/brigadeiro.png', descricao: 'Tradicional brigadeiro brasileiro.'},
        {nome:"Pudim", preco: 2.28, foto:'fotos/Captura1.png', descricao: 'Fatia de pudim de leite condensado.'},
        {nome:"Bolo de Pote", preco: 4.31, foto:'fotos/bolonopote.png', descricao: 'Bolo de pote com diversas opções.'},
        {nome:"Bolo Formigueiro", preco: 1.77, foto:'fotos/boloformigueiro.jpg', descricao: 'Fatia de bolo formigueiro.'}
    ],
    bebidas: [
        {nome:"Coca-Cola", preco: 2.28, foto:'fotos/coca.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Coca Zero", preco: 2.48, foto:'fotos/cocazero.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Ice Tea", preco: 1.67, foto:'fotos/IceTea.jpeg', descricao: 'Ice Tea sabor pêssego.'},
        {nome:"Guaraná Antarctica", preco: 1.77, foto:'fotos/guarana.jpeg', descricao: 'Lata 350ml.'},
        {nome:"Sumol Laranja", preco: 1.67, foto:'fotos/sumollaranja.jpeg', descricao: 'Sumol sabor laranja.'},
        {nome:"Sumol Ananás", preco: 1.67, foto:'fotos/sumolananas.jpeg', descricao: 'Sumol sabor abacaxi.'},
        {nome:"Água 0.5L", preco: 1.37, foto:'fotos/agua.jpeg', descricao: 'Garrafa 500ml.'},
        {nome:"Água das Pedras", preco: 2.08, foto:'fotos/aguasdaspedras.jpeg', descricao: 'Água com gás.'},
        {nome:"Água das Pedras c/ Limão", preco: 2.08, foto:'fotos/limao.jpeg', descricao: 'Água com gás e limão.'},
        {nome:"Seven Up", preco: 2.28, foto:'fotos/seven.jpeg', descricao: 'Lata 330ml.'},
        {nome:"Super Bock", preco: 2.28, foto:'fotos/superbock.jpg', descricao: 'Cerveja Super Bock.'},
        {nome:"Sumo Natural Laranja", preco: 3.80, foto:'fotos/sumodelaranja.jpeg', descricao: 'Suco natural de laranja.'},
        {nome:"Sumo Natural Abacaxi", preco: 3.80, foto:'fotos/sumodeabacaxi.jpeg', descricao: 'Suco natural de abacaxi.'},
        {nome:"Creme de Morango", preco: 4.31, foto:'fotos/cremedemorango.jpeg', descricao: 'Creme de morango gelado.'}
    ]
};

// ==================== VARIÁVEIS GLOBAIS ====================
let pedido = JSON.parse(localStorage.getItem("pedido")) || [];
let itemSelecionadoParaPersonalizar = null;
let categoriaSelecionadaParaPersonalizar = null;
let carneDiaSelecionada = null;

// ==================== FUNÇÕES UTILITÁRIAS ====================
function calcularPrecoComTaxa(precoOriginal) {
    let precoComPorcentagem = precoOriginal * (1 + TAXA_PORCENTAGEM);
    let precoFinal = precoComPorcentagem + TAXA_FIXA;
    return Math.round(precoFinal * 100) / 100;
}

function calcularTotal() {
    const subtotal = pedido.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const iva = subtotal * IVA;
    const total = subtotal + iva;
    
    return { subtotal, iva, total };
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==================== INICIALIZAÇÃO DO MENU ====================
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenu();
    inicializarCarrinho();
    configurarEventListeners();
    
    // Inicializar botão do carrinho topo
    const carrinhoTopoBtn = document.getElementById("carrinhoTopoBtn");
    if (carrinhoTopoBtn && pedido.length > 0) {
        carrinhoTopoBtn.classList.remove("hidden");
        setTimeout(() => {
            carrinhoTopoBtn.classList.add("visible");
        }, 100);
    }
    
    setTimeout(() => {
        iniciarLightbox();
    }, 1000);
});

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

// ==================== FUNÇÃO ATUALIZADA PARA CRIAR CARDS ====================
function criarCardProduto(item, categoria) {
    // Categorias que NÃO terão personalização
    const categoriasSemPersonalizacao = ['caldos', 'doces', 'bebidas', 'panelinhas'];
    
    // Verificar se é petisco e se é Calabresa Acebolada
    const isCalabresaAcebolada = categoria === 'petiscos' && item.nome === 'Calabresa Acebolada';
    
    // Verificar se deve mostrar botão de personalização
    const mostrarPersonalizacao = 
        categoria === 'hamburgueres' || 
        categoria === 'executivos' || 
        categoria === 'espetinhos' || 
        isCalabresaAcebolada;
    
    let botoesHTML = '';
    
    if (mostrarPersonalizacao) {
        // Passar carneDia para executivos
        const carneDia = categoria === 'executivos' ? item.carneDia : null;
        botoesHTML = `
            <div class="card-preco">
                <span class="preco">€${item.preco.toFixed(2)}</span>
                <button class="btn-adicionar" onclick="mostrarModalPersonalizacao('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, '${categoria}', this${carneDia ? `, '${carneDia}'` : ''})">
                    <i class="fas fa-edit"></i> PERSONALIZAR
                </button>
            </div>
            <button class="btn-adicionar-rapido" onclick="addItem('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, this)">
                <i class="fas fa-plus"></i> ADICIONAR SEM PERSONALIZAR
            </button>
        `;
    } else if (categoriasSemPersonalizacao.includes(categoria)) {
        // Para categorias sem personalização, apenas botão de adicionar
        botoesHTML = `
            <div class="card-preco">
                <span class="preco">€${item.preco.toFixed(2)}</span>
                <button class="btn-adicionar" onclick="addItem('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, this)">
                    <i class="fas fa-plus"></i> ADICIONAR
                </button>
            </div>
        `;
    } else {
        // Para outros petiscos (exceto Calabresa Acebolada)
        botoesHTML = `
            <div class="card-preco">
                <span class="preco">€${item.preco.toFixed(2)}</span>
                <button class="btn-adicionar" onclick="addItem('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, this)">
                    <i class="fas fa-plus"></i> ADICIONAR
                </button>
            </div>
        `;
    }
    
    const imagemFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvbSBCaXN0csO0IEdyaWxsPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gbsOjbyBjYXJyZWdhZGE8L3RleHQ+PC9zdmc+';
    
    return `
        <div class="card" data-categoria="${categoria}">
            <div class="card-image-container">
                <img src="${item.foto}" alt="${item.nome}" 
                    onerror="this.src='${imagemFallback}'">
            </div>
            <div class="card-content">
                <h3 class="card-titulo">${item.nome} ${item.dia ? `(${item.dia})` : ''}</h3>
                <p class="descricao-item">${item.descricao}</p>
                ${botoesHTML}
            </div>
        </div>
    `;
}

// ==================== NAVEGAÇÃO ENTRE SEÇÕES ====================
function abrirSecao(cat) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".menu-centralizado button").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById(cat).classList.add("active");
    const botao = Array.from(document.querySelectorAll(".menu-centralizado button"))
        .find(btn => btn.onclick && btn.onclick.toString().includes(cat));
    if(botao) botao.classList.add("active");
    
    window.location.hash = cat;
    
    reiniciarLightboxAposMudanca();
}

// ==================== MODAL DE PERSONALIZAÇÃO MELHORADO ====================
function mostrarModalPersonalizacao(nome, preco, categoria, botao, carneDia = null) {
    itemSelecionadoParaPersonalizar = { nome, preco };
    categoriaSelecionadaParaPersonalizar = categoria;
    carneDiaSelecionada = carneDia;
    
    // Determinar quais adicionais mostrar
    const adicionaisFiltrados = filtrarAdicionaisPorCategoria(categoria, carneDia);
    
    // Criar modal com estrutura nova
    const modalHTML = `
        <div class="modal-overlay" id="modalPersonalizacao">
            <div class="modal-personalizacao">
                <!-- Header -->
                <div class="modal-header">
                    <button class="btn-fechar-modal" onclick="fecharModalPersonalizacao()">
                        <i class="fas fa-times"></i>
                    </button>
                    <h3>🍽️ Personalizar: ${nome}</h3>
                    <p>Adicione, remova ou personalize seu pedido</p>
                </div>
                
                <!-- Body -->
                <div class="modal-body">
                    <!-- Seção de Remover Ingredientes -->
                    ${criarSecaoRemoverIngredientes(categoria)}
                    
                    <!-- Seção de Ponto da Carne (se aplicável) -->
                    ${criarSecaoPontoCarne(categoria)}
                    
                    <!-- Seção de Adicionais (NOVA VERSÃO MELHORADA) -->
                    <div class="secao-adicionais">
                        <div class="secao-titulo">
                            <i class="fas fa-plus-circle"></i>
                            <span>Adicionar Ingredientes Extras</span>
                        </div>
                        <div class="grid-adicionais" id="gridAdicionais">
                            ${criarCardsAdicionais(adicionaisFiltrados)}
                        </div>
                    </div>
                    
                    <!-- Observações -->
                    <div style="margin: 25px 0;">
                        <div class="secao-titulo">
                            <i class="fas fa-edit"></i>
                            <span>Observações Especiais</span>
                        </div>
                        <textarea id="observacoesPersonalizacao" 
                            placeholder="Alguma observação importante? (ex: menos sal, sem pimenta, mais molho, etc.)"
                            style="width: 100%; padding: 15px; border: 2px solid #E66A11; border-radius: 10px; resize: vertical; min-height: 100px; font-size: 14px;"></textarea>
                    </div>
                    
                    <!-- Resumo dos Adicionais Selecionados -->
                    <div class="resumo-adicionais" id="resumoAdicionais" style="display: none;">
                        <div class="resumo-titulo">
                            <i class="fas fa-receipt"></i>
                            <span>Resumo dos Adicionais</span>
                        </div>
                        <div class="lista-adicionais" id="listaAdicionais">
                            <!-- Itens serão inseridos aqui -->
                        </div>
                        <div class="total-adicionais">
                            <span>Total de Adicionais:</span>
                            <span id="totalAdicionais">€0.00</span>
                        </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="modal-footer">
                    <button class="btn-cancelar" onclick="fecharModalPersonalizacao()">
                        <i class="fas fa-times"></i> Cancelar
                    </button>
                    <button class="btn-confirmar" onclick="confirmarPersonalizacao()">
                        <i class="fas fa-check"></i> Adicionar ao Carrinho (€${preco.toFixed(2)})
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Adicionar eventos aos cards de adicionais
    document.querySelectorAll('.card-adicional').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('selecionado');
            atualizarResumoAdicionais();
        });
    });
    
    // Adicionar eventos aos itens de remover
    document.querySelectorAll('.item-remover').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selecionado');
        });
    });
    
    // Adicionar eventos às opções de ponto
    document.querySelectorAll('.opcao-ponto').forEach(opcao => {
        opcao.addEventListener('click', function() {
            document.querySelectorAll('.opcao-ponto').forEach(o => o.classList.remove('selecionado'));
            this.classList.add('selecionado');
        });
    });
}

function filtrarAdicionaisPorCategoria(categoria, carneDia) {
    const adicionaisFiltrados = {};
    
    Object.keys(PRECOS_ADICIONAIS).forEach(key => {
        const adicional = PRECOS_ADICIONAIS[key];
        
        // Lógica para filtrar adicionais por categoria
        if (categoria === 'executivos') {
            if (adicional.categoria === 'executivo') {
                // Para Feijoada, adicionar opções especiais
                if (carneDia === 'Feijoada') {
                    if (key.includes('Carne Extra') || key.includes('Torresmo') || key.includes('Couve')) {
                        adicionaisFiltrados[key] = adicional;
                    }
                }
                adicionaisFiltrados[key] = adicional;
            }
        } else if (categoria === 'hamburgueres') {
            if (adicional.categoria === 'hamburguer') {
                adicionaisFiltrados[key] = adicional;
            }
        } else if (categoria === 'espetinhos') {
            if (adicional.categoria === 'espetinho') {
                adicionaisFiltrados[key] = adicional;
            }
        }
    });
    
    return adicionaisFiltrados;
}

function criarSecaoRemoverIngredientes(categoria) {
    if (['executivos', 'hamburgueres'].includes(categoria)) {
        const ingredientes = categoria === 'executivos' ? [
            'Sem Cebola', 'Sem Azeitonas', 'Sem Vinagrete', 
            'Sem Salada', 'Sem Torresmo', 'Sem Couve'
        ] : [
            'Sem Cebola', 'Sem Ervilhas', 'Sem Abacaxi', 
            'Sem Bacon', 'Sem Queijo', 'Sem Molho',
            'Sem Alface', 'Sem Tomate'
        ];
        
        const itensHTML = ingredientes.map(ing => `
            <div class="item-remover">
                ${ing}
            </div>
        `).join('');
        
        return `
            <div class="secao-remover">
                <div class="secao-titulo">
                    <i class="fas fa-ban"></i>
                    <span>Remover Ingredientes</span>
                </div>
                <div class="grid-remover">
                    ${itensHTML}
                </div>
            </div>
        `;
    }
    return '';
}

function criarSecaoPontoCarne(categoria) {
    if (['executivos', 'espetinhos'].includes(categoria)) {
        return `
            <div class="secao-ponto">
                <div class="secao-titulo">
                    <i class="fas fa-fire"></i>
                    <span>Ponto da Carne</span>
                </div>
                <div class="opcoes-ponto">
                    <div class="opcao-ponto" data-ponto="Bem Passado">
                        <div class="ponto-nome">Bem Passado</div>
                        <div class="ponto-descricao">Totalmente cozida</div>
                    </div>
                    <div class="opcao-ponto" data-ponto="Ao Ponto">
                        <div class="ponto-nome">Ao Ponto</div>
                        <div class="ponto-descricao">Perfeito equilíbrio</div>
                    </div>
                    <div class="opcao-ponto" data-ponto="Mal Passado">
                        <div class="ponto-nome">Mal Passado</div>
                        <div class="ponto-descricao">Suculenta e macia</div>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

function criarCardsAdicionais(adicionais) {
    return Object.keys(adicionais).map(key => {
        const adicional = adicionais[key];
        return `
            <div class="card-adicional" data-nome="${key}" data-preco="${adicional.preco}">
                <div class="adicional-titulo">
                    <span>${key.replace('Adicional ', '')}</span>
                    <span class="adicional-preco">€${adicional.preco.toFixed(2)}</span>
                </div>
                <div class="adicional-descricao">${adicional.descricao}</div>
                <div class="tag-adicional">${adicional.categoria.toUpperCase()}</div>
                <div class="selecionar-adicional"></div>
            </div>
        `;
    }).join('');
}

function atualizarResumoAdicionais() {
    const adicionaisSelecionados = document.querySelectorAll('.card-adicional.selecionado');
    const resumoDiv = document.getElementById('resumoAdicionais');
    const listaDiv = document.getElementById('listaAdicionais');
    const totalSpan = document.getElementById('totalAdicionais');
    
    if (adicionaisSelecionados.length > 0) {
        let total = 0;
        let listaHTML = '';
        
        adicionaisSelecionados.forEach(card => {
            const nome = card.dataset.nome;
            const preco = parseFloat(card.dataset.preco);
            total += preco;
            
            listaHTML += `
                <div class="item-resumo">
                    <span class="item-resumo-nome">${nome}</span>
                    <span class="item-resumo-preco">€${preco.toFixed(2)}</span>
                </div>
            `;
        });
        
        listaDiv.innerHTML = listaHTML;
        totalSpan.textContent = `€${total.toFixed(2)}`;
        resumoDiv.style.display = 'block';
    } else {
        resumoDiv.style.display = 'none';
    }
}

function fecharModalPersonalizacao() {
    const modal = document.getElementById('modalPersonalizacao');
    if (modal) {
        modal.remove();
        itemSelecionadoParaPersonalizar = null;
        categoriaSelecionadaParaPersonalizar = null;
        carneDiaSelecionada = null;
    }
}

function confirmarPersonalizacao() {
    if (!itemSelecionadoParaPersonalizar) return;
    
    // Coletar ingredientes removidos
    const ingredientesRemovidos = [];
    document.querySelectorAll('.item-remover.selecionado').forEach(item => {
        ingredientesRemovidos.push(item.textContent.trim());
    });
    
    // Coletar ponto da carne
    let pontoCarne = null;
    const pontoSelecionado = document.querySelector('.opcao-ponto.selecionado');
    if (pontoSelecionado) {
        pontoCarne = pontoSelecionado.dataset.ponto;
    }
    
    // Coletar adicionais
    const adicionais = [];
    let precoTotalAdicionais = 0;
    document.querySelectorAll('.card-adicional.selecionado').forEach(card => {
        const nome = card.dataset.nome;
        const preco = parseFloat(card.dataset.preco);
        adicionais.push({ nome, preco });
        precoTotalAdicionais += preco;
    });
    
    // Coletar observações
    const observacoes = document.getElementById('observacoesPersonalizacao').value;
    
    // Criar item personalizado
    const itemPersonalizado = {
        ...itemSelecionadoParaPersonalizar,
        ingredientesRemovidos,
        pontoCarne,
        adicionais,
        precoTotalAdicionais,
        observacoes: observacoes || ''
    };
    
    // Adicionar ao carrinho
    addItemPersonalizado(itemPersonalizado);
    fecharModalPersonalizacao();
}

function addItemPersonalizado(item) {
    const precoTotal = item.preco + item.precoTotalAdicionais;
    
    // Criar nome com personalizações
    let nomeCompleto = item.nome;
    
    if (item.ingredientesRemovidos.length > 0) {
        nomeCompleto += ` (${item.ingredientesRemovidos.join(', ')})`;
    }
    
    if (item.pontoCarne) {
        nomeCompleto += ` [${item.pontoCarne}]`;
    }
    
    if (item.adicionais.length > 0) {
        const adicionaisNomes = item.adicionais.map(a => a.nome);
        nomeCompleto += ` [+ ${adicionaisNomes.join(', ')}]`;
    }
    
    // Verificar se item já existe no carrinho
    const itemExistente = pedido.find(p => p.nome === nomeCompleto);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        pedido.push({
            nome: nomeCompleto,
            preco: precoTotal,
            quantidade: 1,
            ingredientesRemovidos: item.ingredientesRemovidos,
            pontoCarne: item.pontoCarne,
            adicionais: item.adicionais,
            precoBase: item.preco,
            precoAdicionais: item.precoTotalAdicionais,
            observacoes: item.observacoes
        });
    }
    
    salvarPedido();
    mostrarFeedbackAdicao();
}

// ==================== FUNÇÕES DO CARRINHO ====================
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
    if (botao) {
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
    
    // Animação no carrinho topo
    const carrinhoTopoBtn = document.getElementById("carrinhoTopoBtn");
    if (carrinhoTopoBtn) {
        carrinhoTopoBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            carrinhoTopoBtn.style.transform = 'scale(1)';
        }, 300);
    }
}

function salvarPedido() {
    localStorage.setItem("pedido", JSON.stringify(pedido));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    // Botão do carrinho fixo no topo
    const carrinhoTopoBtn = document.getElementById("carrinhoTopoBtn");
    const contadorTopo = document.getElementById("contadorTopo");
    
    // Mostrar/ocultar botão do carrinho
    if (carrinhoTopoBtn) {
        if (pedido.length > 0) {
            carrinhoTopoBtn.classList.remove("hidden");
            setTimeout(() => {
                carrinhoTopoBtn.classList.add("visible");
            }, 100);
        } else {
            carrinhoTopoBtn.classList.remove("visible");
            setTimeout(() => {
                carrinhoTopoBtn.classList.add("hidden");
            }, 400);
        }
    }
    
    // Atualizar contador do botão topo
    if (contadorTopo) {
        const totalItens = pedido.reduce((sum, item) => sum + item.quantidade, 0);
        contadorTopo.textContent = totalItens;
    }
    
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador-itens");
    const totalElement = document.getElementById("total");
    
    let total = 0;
    let totalItens = 0;
    
    lista.innerHTML = pedido.map((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        totalItens += item.quantidade;
        
        // Mostrar informações de personalização no carrinho
        let infoAdicional = '';
        if (item.ingredientesRemovidos && item.ingredientesRemovidos.length > 0) {
            infoAdicional += `<br><small style="color: #666;">${item.ingredientesRemovidos.join(', ')}</small>`;
        }
        if (item.pontoCarne) {
            infoAdicional += `<br><small style="color: #666;">Ponto: ${item.pontoCarne}</small>`;
        }
        if (item.adicionais && item.adicionais.length > 0) {
            const adicionaisText = item.adicionais.map(a => a.nome).join(', ');
            const precoAdicionais = item.adicionais.reduce((sum, a) => sum + a.preco, 0);
            infoAdicional += `<br><small style="color: #28a745;">+ ${adicionaisText} (€${precoAdicionais.toFixed(2)})</small>`;
        }
        if (item.observacoes) {
            infoAdicional += `<br><small style="color: #666;">Obs: ${item.observacoes}</small>`;
        }
        
        return `
            <li class="carrinho-item">
                <div>
                    <strong>${item.nome}</strong>
                    ${infoAdicional}
                    <br>
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

    if (lista) lista.innerHTML = pedido.length ? lista.innerHTML : '<li style="padding:12px;color:#666">Carrinho vazio.</li>';

    const totalCalculado = calcularTotal();
    if (totalElement) {
        totalElement.innerHTML = `
            Subtotal: €${totalCalculado.subtotal.toFixed(2)}<br>
            IVA (13%): €${totalCalculado.iva.toFixed(2)}<br>
            <strong>Total a Pagar: €${totalCalculado.total.toFixed(2)}</strong>
        `;
    }
    
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

// ==================== CONTROLE DO CARRINHO ====================
function abrirCarrinho() {
    atualizarCarrinho();
    const carrinhoBox = document.getElementById("carrinho-box");
    if (carrinhoBox) {
        carrinhoBox.classList.add("carrinho-open");
        document.body.style.overflow = 'hidden';
    }
}

function fecharCarrinho() {
    const carrinhoBox = document.getElementById("carrinho-box");
    if (carrinhoBox) {
        carrinhoBox.classList.remove("carrinho-open");
        document.body.style.overflow = 'auto';
    }
}

// ==================== WHATSAPP ====================
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
    const numeroWhatsApp = "351930580520";

    let mensagem = `🍔 *PEDIDO - DOM BISTRÔ GRILL*%0A%0A`;
    mensagem += `👤 *Cliente:* ${nome}%0A%0A`;
    mensagem += `📋 *Itens do Pedido:*%0A`;

    pedido.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        mensagem += `• ${item.nome} x${item.quantidade} - €${subtotal.toFixed(2)}%0A`;
        
        // Adicionar informações de personalização ao WhatsApp
        if (item.ingredientesRemovidos && item.ingredientesRemovidos.length > 0) {
            mensagem += `  ${item.ingredientesRemovidos.join(', ')}%0A`;
        }
        if (item.pontoCarne) {
            mensagem += `  Ponto: ${item.pontoCarne}%0A`;
        }
        if (item.adicionais && item.adicionais.length > 0) {
            mensagem += `  Adicionais: ${item.adicionais.map(a => a.nome).join(', ')}%0A`;
        }
        if (item.observacoes) {
            mensagem += `  Obs: ${item.observacoes}%0A`;
        }
        mensagem += `%0A`;
    });

    const totalCalculado = calcularTotal();
    mensagem += `%0A💰 *Resumo do Pedido:*%0A`;
    mensagem += `Subtotal: €${totalCalculado.subtotal.toFixed(2)}%0A`;
    mensagem += `IVA (13%): €${totalCalculado.iva.toFixed(2)}%0A`;
    mensagem += `*TOTAL: €${totalCalculado.total.toFixed(2)}*%0A%0A`;
    mensagem += `📝 *Observações Gerais:*%0A${observacoes || "Nenhuma observação"}`;

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    localStorage.setItem('pedidoEnviado', 'true');
    fecharCarrinho();
    window.open(urlWhatsApp, '_blank');

    setTimeout(() => {
        alert("📝 Pedido enviado com sucesso!\n\n💳 Agora você pode realizar o pagamento online.");
    }, 800);
}

// ==================== CONFIGURAR EVENT LISTENERS GLOBAIS ====================
function configurarEventListeners() {
    // Configurar evento para o botão do carrinho no topo
    const carrinhoTopoBtn = document.getElementById("carrinhoTopoBtn");
    if (carrinhoTopoBtn) {
        carrinhoTopoBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            abrirCarrinho();
        });
    }
    
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

    document.addEventListener('click', function(event) {
        const carrinho = document.getElementById('carrinho-box');
        const carrinhoTopoBtn = document.getElementById('carrinhoTopoBtn');

        if (!carrinho || !carrinhoTopoBtn) return;

        if (!carrinho.contains(event.target) &&
            !carrinhoTopoBtn.contains(event.target) &&
            carrinho.classList.contains('carrinho-open')) {
            fecharCarrinho();
        }
    });
}

// ==================== PROCESSAR PAGAMENTO ====================
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

// ==================== MODAL DE PAGAMENTO ====================
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

    const modal = document.getElementById('modalPagamento');
    modal.addEventListener('click', function(e){
        if (e.target.id === 'modalPagamento') fecharModalPagamento();
    });

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

// ==================== FINALIZAR PAGAMENTO ====================
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
    const totalCalculado = calcularTotal();

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

    let descricao = "Dom Bistrô Grill - ";
    pedido.forEach((it, idx) => {
        if (idx < 3) descricao += it.nome + ", ";
    });
    descricao = descricao.slice(0, -2);
    if (pedido.length > 3) descricao += " e outros";

    const baseUrl = window.location.origin;
    const successUrl = baseUrl + "/sucesso.html";
    const cancelUrl = baseUrl + "/cancelado.html";

    const easypayUrl =
        "https://www.easypay.pt/pay?" +
        "a=999002530" +
        "&k=T28056C+e3d5x-07fx4f8vac2" +
        "&v=" + totalCalculado.total.toFixed(2) +
        "&o=" + encodeURIComponent(descricao) +
        "&n=" + encodeURIComponent(nomeCliente) +
        "&e=" + encodeURIComponent(emailCliente) +
        "&t=" + encodeURIComponent(telefoneCliente) +
        "&s=" + encodeURIComponent(successUrl) +
        "&c=" + encodeURIComponent(cancelUrl);

    fecharModalPagamento();
    localStorage.removeItem("pedido");
    localStorage.removeItem("pedidoEnviado");
    pedido = [];
    atualizarCarrinho();
    fecharCarrinho();

    mostrarLoadingPagamento(easypayUrl);
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

// ==================== LIGHTBOX PARA IMAGENS ====================
let todasImagensLightbox = [];
let indiceImagemAtual = 0;

function iniciarLightbox() {
    console.log("🔍 Iniciando lightbox...");
    
    const imagensProdutos = document.querySelectorAll('.card-image-container img');
    todasImagensLightbox = Array.from(imagensProdutos);
    console.log(`✅ Encontradas ${todasImagensLightbox.length} imagens`);
    
    todasImagensLightbox.forEach((imagem, index) => {
        imagem.onclick = null;
        
        imagem.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            console.log(`🖼️ Clicou na imagem ${index + 1}: ${this.alt}`);
            abrirLightbox(this.src, this.alt, index);
        });
        
        imagem.style.cursor = 'zoom-in';
        
        imagem.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
        });
        
        imagem.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
    
    configurarEventosLightbox();
}

function configurarEventosLightbox() {
    const modal = document.getElementById('modalLightbox');
    const fecharBtn = document.querySelector('.fechar-modal-lightbox');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProximo = document.getElementById('btnProximo');
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    
    console.log("⚙️ Configurando eventos do modal...");
    
    if (fecharBtn) {
        fecharBtn.addEventListener('click', fecharLightbox);
        console.log("✅ Evento de fechar configurado");
    }
    
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                fecharLightbox();
            }
        });
    }
    
    // Configurar botões de navegação apenas para desktop
    if (btnAnterior && window.innerWidth > 768) {
        btnAnterior.addEventListener('click', function(event) {
            event.stopPropagation();
            navegarImagem(-1);
        });
    }
    
    if (btnProximo && window.innerWidth > 768) {
        btnProximo.addEventListener('click', function(event) {
            event.stopPropagation();
            navegarImagem(1);
        });
    }
    
    if (imagemAmpliada) {
        imagemAmpliada.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('zoom-ativo');
            
            if (this.classList.contains('zoom-ativo')) {
                mostrarMensagemZoom('Zoom ativado • Toque novamente para sair do zoom');
            }
        });
    }
    
    // Controles por toque para dispositivos móveis
    let touchStartY = 0;
    let touchEndY = 0;
    
    if (imagemAmpliada) {
        imagemAmpliada.addEventListener('touchstart', function(event) {
            touchStartY = event.changedTouches[0].screenY;
        });
        
        imagemAmpliada.addEventListener('touchend', function(event) {
            touchEndY = event.changedTouches[0].screenY;
            handleVerticalSwipe();
        });
    }
    
    function handleVerticalSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndY < touchStartY - swipeThreshold) {
            navegarImagem(1);
        }
        
        if (touchEndY > touchStartY + swipeThreshold) {
            navegarImagem(-1);
        }
    }
    
    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('modalLightbox');
        if (modal && modal.style.display === 'flex') {
            switch(event.key) {
                case 'Escape':
                    fecharLightbox();
                    break;
                case 'ArrowLeft':
                    navegarImagem(-1);
                    break;
                case 'ArrowRight':
                    navegarImagem(1);
                    break;
                case 'ArrowUp':
                    navegarImagem(-1);
                    break;
                case 'ArrowDown':
                    navegarImagem(1);
                    break;
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    const img = document.getElementById('imagemAmpliada');
                    if (img) img.classList.toggle('zoom-ativo');
                    break;
                case 'z':
                case 'Z':
                    event.preventDefault();
                    const imgZ = document.getElementById('imagemAmpliada');
                    if (imgZ) imgZ.classList.toggle('zoom-ativo');
                    break;
            }
        }
    });
    
    window.addEventListener('resize', function() {
        ajustarTamanhoImagemResponsivo();
        atualizarVisibilidadeBotoes();
    });
}

function atualizarVisibilidadeBotoes() {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProximo = document.getElementById('btnProximo');
    
    if (window.innerWidth <= 768) {
        if (btnAnterior) btnAnterior.style.display = 'none';
        if (btnProximo) btnProximo.style.display = 'none';
    } else {
        if (btnAnterior) btnAnterior.style.display = 'flex';
        if (btnProximo) btnProximo.style.display = 'flex';
    }
}

function ajustarTamanhoImagemResponsivo() {
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    const modal = document.getElementById('modalLightbox');
    
    if (!imagemAmpliada || !modal || modal.style.display !== 'flex') return;
    
    const larguraTela = window.innerWidth;
    
    if (larguraTela <= 768) {
        imagemAmpliada.style.maxWidth = '95%';
        imagemAmpliada.style.maxHeight = '70vh';
    } else {
        imagemAmpliada.style.maxWidth = '90%';
        imagemAmpliada.style.maxHeight = '80vh';
    }
    
    atualizarVisibilidadeBotoes();
}

function abrirLightbox(src, alt, index) {
    console.log(`📂 Abrindo lightbox - índice: ${index}`);
    
    const modal = document.getElementById('modalLightbox');
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    const infoDiv = document.getElementById('infoLightbox');
    
    if (!modal || !imagemAmpliada) {
        console.error('❌ Elementos do modal não encontrados!');
        alert('Erro ao carregar o visualizador de imagens.');
        return;
    }
    
    indiceImagemAtual = index;
    
    imagemAmpliada.classList.remove('zoom-ativo');
    
    imagemAmpliada.onload = function() {
        ajustarTamanhoImagemResponsivo();
    };
    
    imagemAmpliada.src = src;
    imagemAmpliada.alt = alt;
    
    if (infoDiv && todasImagensLightbox[index]) {
        const card = todasImagensLightbox[index].closest('.card');
        if (card) {
            const nome = card.querySelector('h3');
            const descricao = card.querySelector('.descricao-item');
            const preco = card.querySelector('.preco');
            
            if (nome && descricao && preco) {
                infoDiv.innerHTML = `
                    <strong>${nome.textContent}</strong><br>
                    ${descricao.textContent}<br>
                    <span style="color: #E66A11; font-weight: bold;">${preco.textContent}</span>
                `;
            } else {
                infoDiv.innerHTML = alt || 'Dom Bistrô Grill';
            }
        } else {
            infoDiv.innerHTML = alt || 'Dom Bistrô Grill';
        }
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    void modal.offsetHeight;
    
    ajustarTamanhoImagemResponsivo();
    atualizarBotoesNavegacao();
    
    const isMobile = window.innerWidth <= 768;
    const mensagem = isMobile 
        ? 'Toque na imagem para zoom • Deslize para cima/baixo para navegar • Toque fora para sair'
        : 'Clique na imagem para zoom • Use as setas para navegar • ESC para sair';
    
    mostrarMensagemZoom(mensagem);
}

function mostrarMensagemZoom(texto) {
    const mensagemAnterior = document.querySelector('.mensagem-zoom');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
    
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-zoom';
    mensagem.textContent = texto;
    mensagem.style.cssText = `
        position: absolute;
        bottom: ${window.innerWidth <= 768 ? '60px' : '80px'};
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: ${window.innerWidth <= 768 ? '8px 15px' : '10px 20px'};
        border-radius: 20px;
        font-size: ${window.innerWidth <= 768 ? '12px' : '14px'};
        z-index: 10001;
        animation: fadeInOut 3s ease;
        text-align: center;
        max-width: 90%;
        word-wrap: break-word;
    `;
    
    document.querySelector('.modal-conteudo').appendChild(mensagem);
    
    setTimeout(() => {
        if (mensagem.parentNode) {
            mensagem.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                if (mensagem.parentNode) mensagem.remove();
            }, 500);
        }
    }, 3000);
}

function fecharLightbox() {
    const modal = document.getElementById('modalLightbox');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log("🔒 Lightbox fechado");
    }
}

function navegarImagem(direcao) {
    if (todasImagensLightbox.length === 0) return;
    
    const imagemAmpliada = document.getElementById('imagemAmpliada');
    if (imagemAmpliada) {
        imagemAmpliada.classList.remove('zoom-ativo');
    }
    
    indiceImagemAtual += direcao;
    
    if (indiceImagemAtual < 0) {
        indiceImagemAtual = todasImagensLightbox.length - 1;
    } else if (indiceImagemAtual >= todasImagensLightbox.length) {
        indiceImagemAtual = 0;
    }
    
    console.log(`➡️ Navegando para imagem ${indiceImagemAtual + 1} de ${todasImagensLightbox.length}`);
    
    const novaImagem = todasImagensLightbox[indiceImagemAtual];
    if (novaImagem) {
        const imagemAmpliada = document.getElementById('imagemAmpliada');
        const infoDiv = document.getElementById('infoLightbox');
        
        if (imagemAmpliada) {
            imagemAmpliada.style.opacity = '0';
            imagemAmpliada.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                imagemAmpliada.classList.remove('zoom-ativo');
                imagemAmpliada.src = novaImagem.src;
                imagemAmpliada.alt = novaImagem.alt;
                
                setTimeout(() => {
                    imagemAmpliada.style.opacity = '1';
                    ajustarTamanhoImagemResponsivo();
                }, 50);
                
                if (infoDiv) {
                    const card = novaImagem.closest('.card');
                    if (card) {
                        const nome = card.querySelector('h3');
                        const descricao = card.querySelector('.descricao-item');
                        const preco = card.querySelector('.preco');
                        
                        if (nome && descricao && preco) {
                            infoDiv.innerHTML = `
                                <strong>${nome.textContent}</strong><br>
                                ${descricao.textContent}<br>
                                <span style="color: #E66A11; font-weight: bold;">${preco.textContent}</span>
                            `;
                        } else {
                            infoDiv.innerHTML = novaImagem.alt || 'Dom Bistrô Grill';
                        }
                    } else {
                        infoDiv.innerHTML = novaImagem.alt || 'Dom Bistrô Grill';
                    }
                }
                
                atualizarBotoesNavegacao();
                
                const isMobile = window.innerWidth <= 768;
                const mensagem = isMobile 
                    ? 'Toque na imagem para zoom • Deslize para cima/baixo para navegar • Toque fora para sair'
                    : 'Clique na imagem para zoom • Use as setas para navegar • ESC para sair';
                
                mostrarMensagemZoom(mensagem);
                
            }, 300);
        }
    }
}

function atualizarBotoesNavegacao() {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProximo = document.getElementById('btnProximo');
    
    if (btnAnterior && btnProximo) {
        if (todasImagensLightbox.length <= 1) {
            btnAnterior.style.opacity = '0.3';
            btnProximo.style.opacity = '0.3';
            btnAnterior.style.cursor = 'not-allowed';
            btnProximo.style.cursor = 'not-allowed';
            btnAnterior.disabled = true;
            btnProximo.disabled = true;
        } else {
            btnAnterior.style.opacity = '1';
            btnProximo.style.opacity = '1';
            btnAnterior.style.cursor = 'pointer';
            btnProximo.style.cursor = 'pointer';
            btnAnterior.disabled = false;
            btnProximo.disabled = false;
        }
        
        atualizarVisibilidadeBotoes();
    }
}

function reiniciarLightboxAposMudanca() {
    setTimeout(() => {
        console.log("🔄 Re-iniciando lightbox após mudança de conteúdo...");
        iniciarLightbox();
    }, 300);
}

// Adicionar animações CSS para mensagens
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Verificar console para debug
console.log("=== DOM BISTRÔ GRILL - SISTEMA CARREGADO ===");
console.log("Sistema de adicionais melhorado com visualização moderna!");
console.log("Feijoada agora tem opção de adicionar carne extra!");