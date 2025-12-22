// ==================== CONFIGURAÇÕES ====================
const TAXA_FIXA = 0.90; // Alterado de 0.25 para 0.90
const TAXA_PORCENTAGEM = 0.015;
// IVA REMOVIDO

// ==================== FUNÇÃO PARA GERAR NOME DA FOTO ====================
function gerarNomeFoto(nomeProduto) {
    // Remover caracteres especiais e converter para formato de arquivo
    let nomeArquivo = nomeProduto
        .toLowerCase() // Converter para minúsculas
        .replace(/\s+/g, '_') // Substituir espaços por underscore
        .replace(/[^\w\s]/gi, '') // Remover caracteres especiais
        .replace(/ç/g, 'c') // Substituir ç por c
        .replace(/ã/g, 'a') // Substituir ã por a
        .replace(/õ/g, 'o') // Substituir õ por o
        .replace(/á/g, 'a') // Substituir á por a
        .replace(/é/g, 'e') // Substituir é por e
        .replace(/í/g, 'i') // Substituir í por i
        .replace(/ó/g, 'o') // Substituir ó por o
        .replace(/ú/g, 'u'); // Substituir ú por u
    
    // Adicionar .JPG no final
    return `foto/${nomeArquivo}.JPG`;
}

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

// ==================== DADOS DO MENU (PREÇOS AJUSTADOS +1€) ====================
const categorias = {
    executivos: [
        {
            nome: 'Executivo Clássico (Segunda)',
            preco: 10.00, // Aumentado de 9.39 para 10.00 (+1€)
            foto: gerarNomeFoto('Executivo Clássico (Segunda)'),
            descricao: 'Bife acebolado, arroz, feijão, batata frita e salada.',
            carneDia: 'Bife',
            dia: 'SEGUNDA'
        },
        {
            nome: 'Executivo Dom Bistrô (Terça)',
            preco: 10.00, // Aumentado de 9.39 para 10.39 (+1€)
            foto: gerarNomeFoto('Executivo Dom Bistrô (Terça)'),
            descricao: 'Empanado de frango, arroz, feijão, batata frita e salada.',
            carneDia: 'Frango',
            dia: 'TERÇA'
        },
        {
            nome: 'Executivo do Chefe (Quinta)',
            preco: 10.00, // Aumentado de 9.39 para 10.39 (+1€)
            foto: gerarNomeFoto('Executivo do Chefe (Quinta)'),
            descricao: 'Carne ao molho Madeira, filé de porco empanado, arroz, feijão, batata frita e salada.',
            carneDia: 'Carne ao Molho + Filé de Porco',
            dia: 'QUINTA'
        },
        {
            nome: 'Executivo Festa Brasileira (Sexta)',
            preco: 10.39, // Aumentado de 9.39 para 10.39 (+1€)
            foto: gerarNomeFoto('Executivo Festa Brasileira (Sexta)'),
            descricao: 'Churrasco misto, arroz, feijão, batata frita, farofa e vinagrete.',
            carneDia: 'Churrasco Misto',
            dia: 'SEXTA'
        },
        {
            nome: 'Feijoada Completa (Sábado)',
            preco: 10.39, // Aumentado de 9.39 para 10.39 (+1€)
            foto: gerarNomeFoto('Feijoada Completa (Sábado)'),
            descricao: 'Feijoada completa, arroz, couve refogada, torresmo, farofa e laranja.',
            carneDia: 'Feijoada',
            dia: 'SÁBADO'
        },
        {
            nome: 'Jantinha',
            preco: 10.00, // Aumentado de 9.39 para 10.39 (+1€)
            foto: gerarNomeFoto('Jantinha'),
            descricao: 'Prato pode escolher um espetinho (Carne, Frango, Frango com Bacon, Linguiça, Queijo Coalho).',
            carneDia: 'Espetinho',
            dia: 'DOMINGO'
        }
    ],
    panelinhas: [
        {
            nome: "Carne",
            preco: 8.86,
            foto: gerarNomeFoto('Panelinha de Carne'),
            descricao: 'Lentamente cozida com cerveja artesanal, resultando em uma carne incrivelmente macia e suculenta. A cerveja adiciona profundidade ao sabor, criando um prato reconfortante ideal para qualquer refeição...'
        },
        {
            nome: "Bacon",
            preco: 8.86,
            foto: gerarNomeFoto('Panelinha de Bacon'),
            descricao: 'Panelinha de bacon crocante e saborosa.'
        },
        {
            nome: "Legumes",
            preco: 8.86,
            foto: gerarNomeFoto('Panelinha de Legumes'),
            descricao: 'Panelinha de legumes frescos e selecionados.'
        },
        {
            nome: "Bacon com Linguiça",
            preco: 8.86,
            foto: gerarNomeFoto('Panelinha de Bacon com Linguiça'),
            descricao: 'Combinação perfeita de bacon e linguiça.'
        }
    ],
    caldos: [
        {
            nome: "Caldo Verde",
            preco: 6.34,
            foto: gerarNomeFoto('Caldo Verde'),
            descricao: 'Tradicional caldo verde português.'
        },
        {
            nome: "Caldo de Feijão",
            preco: 6.34,
            foto: gerarNomeFoto('Caldo de Feijão'),
            descricao: 'Cremoso caldo de feijão brasileiro.'
        },
        {
            nome: "Caldo de Frango",
            preco: 6.34,
            foto: gerarNomeFoto('Caldo de Frango'),
            descricao: 'Caldo de frango caseiro e saboroso.'
        },
        {
            nome: "Carne com Mandioca",
            preco: 6.34,
            foto: gerarNomeFoto('Caldo de Carne com Mandioca'),
            descricao: 'Caldo de carne com mandioca.'
        }
    ],
    hamburgueres: [
        {
            nome: "X-Baguncinha (combo)",
            preco: 11.64,
            foto: gerarNomeFoto('X-Baguncinha'),
            descricao: 'Pão, 2 carnes, ovo, bacon, queijo, presunto, alface, tomate e molho especial.'
        },
        {
            nome: "X-Carioca (combo)",
            preco: 11.64,
            foto: gerarNomeFoto('X-Carioca'),
            descricao: 'Pão, carne, queijo, presunto, abacaxi grelhado, bacon e alface.'
        },
        {
            nome: "X-Mineiro (+ fritas)",
            preco: 10.59,
            foto: gerarNomeFoto('X-Mineiro'),
            descricao: 'Pão, carne, queijo, ovo, bacon, alface, tomate e queijo Minas.'
        },
        {
            nome: "X-Gauchesco (+ fritas)",
            preco: 8.61,
            foto: gerarNomeFoto('X-Gauchesco'),
            descricao: 'Pão, carne, queijo, presunto, linguiça defumada, alface e tomate.'
        },
        {
            nome: "X-Nordestino (+ fritas)",
            preco: 9.56,
            foto: gerarNomeFoto('X-Nordestino'),
            descricao: 'Pão, carne, queijo coalho grelhado, carne de sol desfiada e molho.'
        },
        {
            nome: "X-Brasileiro (combo)",
            preco: 12.67,
            foto: gerarNomeFoto('X-Brasileiro'),
            descricao: 'Pão, 2 carnes, cheddar, bacon, ovo, alface, tomate e batata palha.'
        },
        {
            nome: "X-Dom Cheddar (combo)",
            preco: 14.70,
            foto: gerarNomeFoto('X-Dom Cheddar'),
            descricao: 'Pão, carne, farta porção de queijo cheddar cremoso e cebola caramelizada.'
        }
    ],
    espetinhos: [
        {
            nome: "Carne",
            preco: 5.82,
            foto: gerarNomeFoto('Espetinho de Carne'),
            descricao: 'Espetinho de carne bovina suculenta.'
        },
        {
            nome: "Frango",
            preco: 4.30,
            foto: gerarNomeFoto('Espetinho de Frango'),
            descricao: 'Espetinho de frango temperado.'
        },
        {
            nome: "Frango c/ Bacon",
            preco: 5.31,
            foto: gerarNomeFoto('Espetinho de Frango com Bacon'),
            descricao: 'Espetinho de frango envolto em bacon.'
        },
        {
            nome: "Linguiça",
            preco: 3.79,
            foto: gerarNomeFoto('Espetinho de Linguiça'),
            descricao: 'Espetinho de linguiça defumada.'
        },
        {
            nome: "Queijo Coalho",
            preco: 5.31,
            foto: gerarNomeFoto('Espetinho de Queijo Coalho'),
            descricao: 'Espetinho de queijo coalho grelhado.'
        },
        {
            nome: "Coalho c/ Melaço",
            preco: 5.31,
            foto: gerarNomeFoto('Queijo Coalho com Melaço'),
            descricao: 'Queijo coalho com melaço de cana.'
        }
    ],
    petiscos: [
        {
            nome: "Batata Frita Pequena",
            preco: 3.28,
            foto: gerarNomeFoto('Batata Frita Pequena'),
            descricao: 'Porção pequena de batata frita crocante.'
        },
        {
            nome: "Batata Frita Média",
            preco: 4.80,
            foto: gerarNomeFoto('Batata Frita Média'),
            descricao: 'Porção média de batata frita.'
        },
        {
            nome: "Batata Frita Grande",
            preco: 5.82,
            foto: gerarNomeFoto('Batata Frita Grande'),
            descricao: 'Porção grande de batata frita.'
        },
        {
            nome: "Batata com Nutella + Ninho",
            preco: 7.34,
            foto: gerarNomeFoto('Batata com Nutella e Ninho'),
            descricao: 'Batata frita com Nutella e leite Ninho.'
        },
        {
            nome: "Anéis de Cebola",
            preco: 4.80,
            foto: gerarNomeFoto('Anéis de Cebola'),
            descricao: 'Anéis de cebola empanados e fritos.'
        },
        {
            nome: "Calabresa Acebolada",
            preco: 5.34,
            foto: gerarNomeFoto('Calabresa Acebolada'),
            descricao: 'Calabresa fatiada com cebola.'
        },
        {
            nome: "Asas ao Molho Agridoce",
            preco: 4.33,
            foto: gerarNomeFoto('Asas ao Molho Agridoce'),
            descricao: 'Asas de frango no molho agridoce.'
        },
        {
            nome: "Cuscuz com Ovo e Coalho",
            preco: 2.33,
            foto: gerarNomeFoto('Cuscuz com Ovo e Coalho'),
            descricao: 'Cuscuz com ovo e queijo coalho.'
        }
    ],
    doces: [
        {
            nome: "Bolo de Cenoura",
            preco: 1.80,
            foto: gerarNomeFoto('Bolo de Cenoura'),
            descricao: 'Fatia de bolo de cenoura com cobertura.'
        },
        {
            nome: "Bolo de Chocolate",
            preco: 1.80,
            foto: gerarNomeFoto('Bolo de Chocolate'),
            descricao: 'Fatia de bolo de chocolate.'
        },
        {
            nome: "Bolo Ninho",
            preco: 1.80,
            foto: gerarNomeFoto('Bolo Ninho'),
            descricao: 'Fatia de bolo com leite Ninho.'
        },
        {
            nome: "Bolo de Milho",
            preco: 1.80,
            foto: gerarNomeFoto('Bolo de Milho'),
            descricao: 'Fatia de bolo de milho verde.'
        },
        {
            nome: "Brigadeiro",
            preco: 1.00,
            foto: gerarNomeFoto('Brigadeiro'),
            descricao: 'Tradicional brigadeiro brasileiro.'
        },
        {
            nome: "Pudim",
            preco: 3.28,
            foto: gerarNomeFoto('Pudim'),
            descricao: 'Fatia de pudim de leite condensado.'
        },
        {
            nome: "Bolo de Pote",
            preco: 5.31,
            foto: gerarNomeFoto('Bolo de Pote'),
            descricao: 'Bolo de pote com diversas opções consulte o restaurante para saber.'
        },
        {
            nome: "Bolo Formigueiro",
            preco: 1.80,
            foto: gerarNomeFoto('Bolo Formigueiro'),
            descricao: 'Fatia de bolo formigueiro.'
        }
    ],
    bebidas: [
        {
            nome: "Coca-Cola",
            preco: 2.50,
            foto: gerarNomeFoto('Coca-Cola'),
            descricao: 'Lata 330ml.'
        },
        {
            nome: "Coca Zero",
            preco: 2.80,
            foto: gerarNomeFoto('Coca Zero'),
            descricao: 'Lata 330ml.'
        },
        {
            nome: "Ice Tea",
            preco: 1.67,
            foto: gerarNomeFoto('Ice Tea'),
            descricao: 'Ice Tea sabor pêssego.'
        },
        {
            nome: "Guaraná Antarctica",
            preco: 2.77,
            foto: gerarNomeFoto('Guaraná Antarctica'),
            descricao: 'Lata 350ml.'
        },
        {
            nome: "Sumol Laranja",
            preco: 1.67,
            foto: gerarNomeFoto('Sumol Laranja'),
            descricao: 'Sumol sabor laranja.'
        },
        {
            nome: "Sumol Ananás",
            preco: 1.67,
            foto: gerarNomeFoto('Sumol Ananás'),
            descricao: 'Sumol sabor abacaxi.'
        },
        {
            nome: "Água 0.5L",
            preco: 1.37,
            foto: gerarNomeFoto('Água 0.5L'),
            descricao: 'Garrafa 500ml.'
        },
        {
            nome: "Água das Pedras",
            preco: 2.20,
            foto: gerarNomeFoto('Água das Pedras'),
            descricao: 'Água com gás.'
        },
        {
            nome: "Água das Pedras c/ Limão",
            preco: 2.50,
            foto: gerarNomeFoto('Água das Pedras com Limão'),
            descricao: 'Água com gás e limão.'
        },
        {
            nome: "Seven Up",
            preco: 2.10,
            foto: gerarNomeFoto('Seven Up'),
            descricao: 'Lata 330ml.'
        },
        {
            nome: "Super Bock",
            preco: 2.80,
            foto: gerarNomeFoto('Super Bock'),
            descricao: 'Cerveja Super Bock.'
        },
        {
            nome: "Sumo Natural Laranja",
            preco: 2.80,
            foto: gerarNomeFoto('Sumo Natural Laranja'),
            descricao: 'Suco natural de laranja.'
        },
        {
            nome: "Sumo Natural Abacaxi",
            preco: 2.80,
            foto: gerarNomeFoto('Sumo Natural Abacaxi'),
            descricao: 'Suco natural de abacaxi.'
        },
        {
            nome: "Creme de Morango",
            preco: 3.31,
            foto: gerarNomeFoto('Creme de Morango'),
            descricao: 'Creme de morango gelado.'
        }
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
    const total = subtotal; // IVA REMOVIDO
    
    return { subtotal, total };
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
    
    // Preload de imagens para melhor performance
    preloadImagens();
    
    // Inicializar botão do carrinho topo
    const carrinhoTopoBtn = document.getElementById("carrinhoTopoBtn");
    if (carrinhoTopoBtn && pedido.length > 0) {
        carrinhoTopoBtn.classList.remove("hidden");
        setTimeout(() => {
            carrinhoTopoBtn.classList.add("visible");
        }, 100);
    }
});

function preloadImagens() {
    // Pré-carregar imagens para melhor performance em dispositivos móveis
    const todasImagens = Object.values(categorias).flat().map(item => item.foto);
    const imagensUnicas = [...new Set(todasImagens)];
    
    imagensUnicas.forEach(src => {
        const img = new Image();
        img.src = src;
        // Adicionar fallback em caso de erro
        img.onerror = function() {
            // Se a imagem gerada automaticamente não existir, usar fallback
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvbSBCaXN0csO0IEdyaWxsPC90ZXh0Pjwvc3ZnPg==';
        };
    });
}

function inicializarMenu() {
    const menuTabs = document.getElementById("menuTabs");
    const areas = document.getElementById("areas");

    if (!menuTabs || !areas) {
        console.error("Elementos do menu não encontrados");
        return;
    }

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
        if (div) {
            categorias[cat].forEach(item => {
                div.innerHTML += criarCardProduto(item, cat);
            });
        }
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
                <button class="btn-adicionar" onclick="abrirTelaPersonalizacao('${item.nome.replace(/'/g, "\\'")}', ${item.preco}, '${categoria}'${carneDia ? `, '${carneDia}'` : ''})">
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
            <div class="card-image-container" onclick="abrirDetalhesProduto('${item.nome.replace(/'/g, "\\'")}', '${categoria}')">
                <img src="${item.foto}" alt="${item.nome}" 
                    onerror="this.src='${imagemFallback}'"
                    loading="lazy"
                    class="produto-imagem">
                <div class="ver-detalhes">
                    <i class="fas fa-search-plus"></i> VER DETALHES
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-titulo">${item.nome} ${item.dia ? `(${item.dia})` : ''}</h3>
                <p class="descricao-item">${item.descricao.substring(0, 80)}${item.descricao.length > 80 ? '...' : ''}</p>
                ${botoesHTML}
            </div>
        </div>
    `;
}

// ==================== FUNÇÃO PARA ABRIR PÁGINA DE DETALHES ====================
function abrirDetalhesProduto(nomeProduto, categoria) {
    // Encontrar o produto nos dados
    let produtoEncontrado = null;
    
    // Procurar o produto na categoria correta
    if (categorias[categoria]) {
        produtoEncontrado = categorias[categoria].find(produto => produto.nome === nomeProduto);
    }
    
    if (!produtoEncontrado) {
        console.error('Produto não encontrado:', nomeProduto);
        return;
    }
    
    // Criar a página de detalhes
    const detalhesHTML = `
        <div id="paginaDetalhes" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 9999;
            overflow-y: auto;
            font-family: Arial, sans-serif;
        ">
            <!-- Header -->
            <div style="
                background: linear-gradient(135deg, #E66A11 0%, #D35400 100%);
                color: white;
                padding: 15px;
                position: sticky;
                top: 0;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            ">
                <button onclick="fecharDetalhes()" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 18px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2 style="margin: 0; font-size: 18px; text-align: center;">DETALHES DO PRODUTO</h2>
                <div style="width: 40px;"></div>
            </div>
            
            <!-- Conteúdo -->
            <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
                <!-- Imagem Grande -->
                <div style="
                    width: 100%;
                    height: 300px;
                    border-radius: 15px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                ">
                    <img src="${produtoEncontrado.foto}" 
                         alt="${produtoEncontrado.nome}" 
                         style="width: 100%; height: 100%; object-fit: cover;"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvbSBCaXN0csO0IEdyaWxsPC90ZXh0Pjwvc3ZnPg=='">
                </div>
                
                <!-- Informações do Produto -->
                <div style="margin-bottom: 25px;">
                    <h1 style="
                        color: #333;
                        margin: 0 0 10px 0;
                        font-size: 24px;
                    ">${produtoEncontrado.nome} ${produtoEncontrado.dia ? `<span style="color: #E66A11; font-size: 16px;">(${produtoEncontrado.dia})</span>` : ''}</h1>
                    
                    <div style="
                        background: #F8F9FA;
                        padding: 15px;
                        border-radius: 10px;
                        margin: 15px 0;
                        border-left: 4px solid #E66A11;
                    ">
                        <div style="
                            font-size: 28px;
                            color: #E66A11;
                            font-weight: bold;
                            margin-bottom: 5px;
                        ">€${produtoEncontrado.preco.toFixed(2)}</div>
                        <div style="color: #666; font-size: 14px;">Preço final</div>
                    </div>
                </div>
                
                <!-- Descrição Completa -->
                <div style="margin-bottom: 30px;">
                    <h3 style="
                        color: #333;
                        margin: 0 0 15px 0;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #E66A11;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    ">
                        <i class="fas fa-info-circle" style="color: #E66A11;"></i>
                        DESCRIÇÃO COMPLETA
                    </h3>
                    <p style="
                        color: #555;
                        line-height: 1.6;
                        font-size: 16px;
                        margin: 0;
                    ">${produtoEncontrado.descricao}</p>
                </div>
                
                ${produtoEncontrado.carneDia ? `
                <!-- Carne do Dia -->
                <div style="margin-bottom: 30px;">
                    <h3 style="
                        color: #333;
                        margin: 0 0 15px 0;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #E66A11;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    ">
                        <i class="fas fa-utensils" style="color: #E66A11;"></i>
                        CARNE DO DIA
                    </h3>
                    <div style="
                        background: #FFF8F0;
                        padding: 15px;
                        border-radius: 10px;
                        border: 1px solid #FFE0C2;
                    ">
                        <strong style="color: #E66A11;">${produtoEncontrado.carneDia}</strong>
                        <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">
                            Esta é a proteína principal incluída no prato executivo.
                        </p>
                    </div>
                </div>
                ` : ''}
                
                <!-- Botões de Ação -->
                <div style="
                    position: sticky;
                    bottom: 0;
                    background: white;
                    padding: 20px;
                    margin: 20px -20px -20px -20px;
                    border-top: 1px solid #eee;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                ">
                    <!-- Verificar se o produto pode ser personalizado -->
                    ${['executivos', 'hamburgueres', 'espetinhos'].includes(categoria) || 
                      (categoria === 'petiscos' && produtoEncontrado.nome === 'Calabresa Acebolada') ? `
                    <button onclick="adicionarPersonalizadoNaPaginaDetalhes('${produtoEncontrado.nome.replace(/'/g, "\\'")}', ${produtoEncontrado.preco}, '${categoria}'${produtoEncontrado.carneDia ? `, '${produtoEncontrado.carneDia}'` : ''})" 
                        style="
                            flex: 1;
                            min-width: 200px;
                            background: linear-gradient(135deg, #E66A11 0%, #D35400 100%);
                            color: white;
                            border: none;
                            padding: 16px 20px;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: bold;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            box-shadow: 0 4px 15px rgba(230, 106, 17, 0.3);
                        ">
                        <i class="fas fa-edit"></i>
                        PERSONALIZAR E ADICIONAR
                    </button>
                    ` : ''}
                    
                    <button onclick="addItemNaPaginaDetalhes('${produtoEncontrado.nome.replace(/'/g, "\\'")}', ${produtoEncontrado.preco})" 
                        style="
                            flex: 1;
                            min-width: 200px;
                            background: ${['executivos', 'hamburgueres', 'espetinhos'].includes(categoria) || 
                                       (categoria === 'petiscos' && produtoEncontrado.nome === 'Calabresa Acebolada') ? 
                                       '#28a745' : 'linear-gradient(135deg, #E66A11 0%, #D35400 100%)'};
                            color: white;
                            border: none;
                            padding: 16px 20px;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: bold;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                        ">
                        <i class="fas fa-plus"></i>
                        ${['executivos', 'hamburgueres', 'espetinhos'].includes(categoria) || 
                          (categoria === 'petiscos' && produtoEncontrado.nome === 'Calabresa Acebolada') ? 
                          'ADICIONAR SEM PERSONALIZAR' : 'ADICIONAR AO CARRINHO'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', detalhesHTML);
    document.body.style.overflow = 'hidden';
}

function fecharDetalhes() {
    const paginaDetalhes = document.getElementById('paginaDetalhes');
    if (paginaDetalhes) {
        paginaDetalhes.remove();
        document.body.style.overflow = 'auto';
    }
}

function addItemNaPaginaDetalhes(nome, preco) {
    addItem(nome, preco);
    
    // Feedback visual
    const btn = event.target;
    const originalHTML = btn.innerHTML;
    const originalBg = btn.style.background;
    
    btn.innerHTML = '<i class="fas fa-check"></i> ADICIONADO!';
    btn.style.background = '#00a650';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = originalBg;
        btn.disabled = false;
    }, 1500);
    
    // Fechar detalhes após um tempo
    setTimeout(() => {
        fecharDetalhes();
    }, 1000);
}

function adicionarPersonalizadoNaPaginaDetalhes(nome, preco, categoria, carneDia = null) {
    fecharDetalhes();
    setTimeout(() => {
        abrirTelaPersonalizacao(nome, preco, categoria, carneDia);
    }, 300);
}

// ==================== NOVA FUNÇÃO: ABRIR TELA DE PERSONALIZAÇÃO ====================
function abrirTelaPersonalizacao(nome, preco, categoria, carneDia = null) {
    itemSelecionadoParaPersonalizar = { nome, preco };
    categoriaSelecionadaParaPersonalizar = categoria;
    carneDiaSelecionada = carneDia;
    
    // Encontrar o produto nos dados para obter a foto e descrição
    let produtoEncontrado = null;
    if (categorias[categoria]) {
        produtoEncontrado = categorias[categoria].find(produto => produto.nome === nome);
    }
    
    if (!produtoEncontrado) {
        console.error('Produto não encontrado:', nome);
        return;
    }
    
    // Determinar quais adicionais mostrar
    const adicionaisFiltrados = filtrarAdicionaisPorCategoria(categoria, carneDia);
    
    // Criar tela de personalização
    const telaPersonalizacaoHTML = `
        <div id="telaPersonalizacao" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 9999;
            overflow-y: auto;
            font-family: Arial, sans-serif;
        ">
            <!-- Header -->
            <div style="
                background: linear-gradient(135deg, #E66A11 0%, #D35400 100%);
                color: white;
                padding: 15px;
                position: sticky;
                top: 0;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            ">
                <button onclick="fecharTelaPersonalizacao()" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 18px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2 style="margin: 0; font-size: 18px; text-align: center;">PERSONALIZAR PRODUTO</h2>
                <div style="width: 40px;"></div>
            </div>
            
            <!-- Conteúdo -->
            <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
                <!-- Imagem Grande do Produto -->
                <div style="
                    width: 100%;
                    height: 250px;
                    border-radius: 15px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                ">
                    <img src="${produtoEncontrado.foto}" 
                         alt="${nome}" 
                         style="width: 100%; height: 100%; object-fit: cover;"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvbSBCaXN0csO0IEdyaWxsPC90ZXh0Pjwvc3ZnPg=='">
                </div>
                
                <!-- Informações do Produto -->
                <div style="margin-bottom: 25px;">
                    <h1 style="
                        color: #333;
                        margin: 0 0 10px 0;
                        font-size: 24px;
                    ">${nome} ${produtoEncontrado.dia ? `<span style="color: #E66A11; font-size: 16px;">(${produtoEncontrado.dia})</span>` : ''}</h1>
                    
                    <div style="
                        background: #F8F9FA;
                        padding: 15px;
                        border-radius: 10px;
                        margin: 15px 0;
                        border-left: 4px solid #E66A11;
                    ">
                        <div style="
                            font-size: 28px;
                            color: #E66A11;
                            font-weight: bold;
                            margin-bottom: 5px;
                        ">€${preco.toFixed(2)}</div>
                        <div style="color: #666; font-size: 14px;">Preço base</div>
                    </div>
                </div>
                
                <!-- Descrição do Produto -->
                <div style="margin-bottom: 30px;">
                    <h3 style="
                        color: #333;
                        margin: 0 0 15px 0;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #E66A11;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    ">
                        <i class="fas fa-info-circle" style="color: #E66A11;"></i>
                        DESCRIÇÃO DO PRODUTO
                    </h3>
                    <p style="
                        color: #555;
                        line-height: 1.6;
                        font-size: 16px;
                        margin: 0;
                    ">${produtoEncontrado.descricao}</p>
                </div>
                
                <!-- Seção de Remover Ingredientes -->
                ${criarSecaoRemoverIngredientesTela(categoria)}
                
                <!-- Seção de Ponto da Carne -->
                ${criarSecaoPontoCarneTela(categoria)}
                
                <!-- Seção de Adicionais -->
                <div style="margin: 25px 0;">
                    <div style="
                        display: flex;
                        align-items: center;
                        margin-bottom: 15px;
                        color: #333;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #E66A11;
                    ">
                        <i class="fas fa-plus-circle" style="margin-right: 10px; color: #E66A11; font-size: 20px;"></i>
                        <h3 style="margin: 0; font-size: 18px;">Adicionar Ingredientes Extras</h3>
                    </div>
                    <div id="gridAdicionaisTela" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px;">
                        ${criarCardsAdicionaisTela(adicionaisFiltrados)}
                    </div>
                </div>
                
                <!-- Observações -->
                <div style="margin: 25px 0;">
                    <div style="
                        display: flex;
                        align-items: center;
                        margin-bottom: 15px;
                        color: #333;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #E66A11;
                    ">
                        <i class="fas fa-edit" style="margin-right: 10px; color: #E66A11; font-size: 20px;"></i>
                        <h3 style="margin: 0; font-size: 18px;">Observações Especiais</h3>
                    </div>
                    <textarea id="observacoesTela" 
                        placeholder="Alguma observação importante? (ex: menos sal, sem pimenta, mais molho, etc.)"
                        style="width: 100%; padding: 15px; border: 2px solid #E66A11; border-radius: 10px; resize: vertical; min-height: 100px; font-size: 14px;"></textarea>
                </div>
                
                <!-- Resumo dos Adicionais Selecionados -->
                <div id="resumoAdicionaisTela" style="display: none; margin: 25px 0;">
                    <div style="
                        background: #F8F9FA;
                        padding: 20px;
                        border-radius: 10px;
                        border: 2px solid #E66A11;
                    ">
                        <div style="
                            display: flex;
                            align-items: center;
                            margin-bottom: 15px;
                            color: #333;
                        ">
                            <i class="fas fa-receipt" style="margin-right: 10px; color: #E66A11; font-size: 20px;"></i>
                            <h4 style="margin: 0; font-size: 16px;">Resumo dos Adicionais</h4>
                        </div>
                        <div id="listaAdicionaisTela" style="margin-bottom: 15px;">
                            <!-- Itens serão inseridos aqui -->
                        </div>
                        <div style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding-top: 15px;
                            border-top: 1px solid #ddd;
                        ">
                            <span style="font-weight: bold;">Total de Adicionais:</span>
                            <span id="totalAdicionaisTela" style="color: #E66A11; font-weight: bold; font-size: 18px;">€0.00</span>
                        </div>
                    </div>
                </div>
                
                <!-- Informação sobre Taxa -->
                <div style="margin: 25px 0; padding: 15px; background: #FFF8F0; border-radius: 10px; border-left: 4px solid #E66A11;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <i class="fas fa-exclamation-circle" style="color: #E66A11; font-size: 20px; margin-right: 10px;"></i>
                        <h4 style="margin: 0; color: #E66A11;">Taxa de Manutenção dos Serviços</h4>
                    </div>
                    <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.5;">
                        Será aplicada uma taxa de <strong>€0.90</strong> para manutenção dos serviços de entrega e plataforma digital.
                    </p>
                </div>
                
                <!-- Resumo Final e Botões -->
                <div style="
                    position: sticky;
                    bottom: 0;
                    background: white;
                    padding: 20px;
                    margin: 20px -20px -20px -20px;
                    border-top: 1px solid #eee;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
                ">
                    <div style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;
                        padding: 15px;
                        background: #F8F9FA;
                        border-radius: 10px;
                        border-left: 4px solid #E66A11;
                    ">
                        <div>
                            <div style="font-size: 14px; color: #666;">Preço base:</div>
                            <div style="font-size: 24px; color: #E66A11; font-weight: bold;">€${preco.toFixed(2)}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 14px; color: #666;">Total do Pedido:</div>
                            <div style="font-size: 28px; color: #E66A11; font-weight: bold;" id="totalFinalTela">€${preco.toFixed(2)}</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 15px;">
                        <button onclick="fecharTelaPersonalizacao()" style="
                            flex: 1;
                            padding: 16px 20px;
                            background: #6c757d;
                            color: white;
                            border: none;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: bold;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                        ">
                            <i class="fas fa-times"></i> Cancelar
                        </button>
                        <button onclick="confirmarPersonalizacaoNaTela()" style="
                            flex: 1;
                            padding: 16px 20px;
                            background: linear-gradient(135deg, #E66A11 0%, #D35400 100%);
                            color: white;
                            border: none;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: bold;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            box-shadow: 0 4px 15px rgba(230, 106, 17, 0.3);
                        ">
                            <i class="fas fa-check"></i> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', telaPersonalizacaoHTML);
    document.body.style.overflow = 'hidden';
    
    // Adicionar eventos
    setTimeout(() => {
        // Eventos para adicionais
        document.querySelectorAll('.card-adicional-tela').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('selecionado');
                atualizarTotalTela(preco);
            });
        });
        
        // Eventos para remover ingredientes
        document.querySelectorAll('.item-remover-tela').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('selecionado');
            });
        });
        
        // Eventos para ponto da carne
        document.querySelectorAll('.opcao-ponto-tela').forEach(opcao => {
            opcao.addEventListener('click', function() {
                document.querySelectorAll('.opcao-ponto-tela').forEach(o => o.classList.remove('selecionado'));
                this.classList.add('selecionado');
            });
        });
        
        // Adicionar CSS para seleção
        const style = document.createElement('style');
        style.textContent = `
            .card-adicional-tela.selecionado {
                border-color: #E66A11 !important;
                background: #FFF8F0 !important;
            }
            .card-adicional-tela.selecionado .selecionar-adicional-tela {
                background: #E66A11 !important;
                color: white !important;
            }
            .card-adicional-tela.selecionado .selecionar-adicional-tela i:before {
                content: "\\f00c" !important;
            }
            .item-remover-tela.selecionado {
                background: #FFE0C2 !important;
                color: #E66A11 !important;
                border-color: #E66A11 !important;
            }
            .opcao-ponto-tela.selecionado {
                background: #FFF8F0 !important;
                border-color: #E66A11 !important;
            }
        `;
        document.head.appendChild(style);
    }, 100);
}

function fecharTelaPersonalizacao() {
    const telaPersonalizacao = document.getElementById('telaPersonalizacao');
    if (telaPersonalizacao) {
        telaPersonalizacao.remove();
        document.body.style.overflow = 'auto';
        itemSelecionadoParaPersonalizar = null;
        categoriaSelecionadaParaPersonalizar = null;
        carneDiaSelecionada = null;
    }
}

function criarSecaoRemoverIngredientesTela(categoria) {
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
            <div class="item-remover-tela" style="
                padding: 12px 15px;
                background: white;
                border: 2px solid #ddd;
                border-radius: 10px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                text-align: center;
                transition: all 0.3s;
            ">
                ${ing}
            </div>
        `).join('');
        
        return `
            <div style="margin: 25px 0;">
                <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    color: #333;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #E66A11;
                ">
                    <i class="fas fa-ban" style="margin-right: 10px; color: #E66A11; font-size: 20px;"></i>
                    <h3 style="margin: 0; font-size: 18px;">Remover Ingredientes</h3>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
                    ${itensHTML}
                </div>
            </div>
        `;
    }
    return '';
}

function criarSecaoPontoCarneTela(categoria) {
    if (['executivos', 'espetinhos'].includes(categoria)) {
        return `
            <div style="margin: 25px 0;">
                <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    color: #333;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #E66A11;
                ">
                    <i class="fas fa-fire" style="margin-right: 10px; color: #E66A11; font-size: 20px;"></i>
                    <h3 style="margin: 0; font-size: 18px;">Ponto da Carne</h3>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                    <div class="opcao-ponto-tela" data-ponto="Bem Passado" style="
                        padding: 15px;
                        background: white;
                        border: 2px solid #ddd;
                        border-radius: 10px;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        <div style="font-weight: bold; font-size: 16px; color: #333;">Bem Passado</div>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">Totalmente cozida</div>
                    </div>
                    <div class="opcao-ponto-tela" data-ponto="Ao Ponto" style="
                        padding: 15px;
                        background: white;
                        border: 2px solid #ddd;
                        border-radius: 10px;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        <div style="font-weight: bold; font-size: 16px; color: #333;">Ao Ponto</div>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">Perfeito equilíbrio</div>
                    </div>
                    <div class="opcao-ponto-tela" data-ponto="Mal Passado" style="
                        padding: 15px;
                        background: white;
                        border: 2px solid #ddd;
                        border-radius: 10px;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        <div style="font-weight: bold; font-size: 16px; color: #333;">Mal Passado</div>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">Suculenta e macia</div>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

function criarCardsAdicionaisTela(adicionais) {
    if (Object.keys(adicionais).length === 0) {
        return '<p style="text-align: center; color: #666; padding: 20px; grid-column: 1 / -1;">Nenhum adicional disponível para esta categoria.</p>';
    }
    
    return Object.keys(adicionais).map(key => {
        const adicional = adicionais[key];
        return `
            <div class="card-adicional-tela" data-nome="${key}" data-preco="${adicional.preco}" style="
                padding: 15px;
                background: white;
                border: 2px solid #ddd;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
                position: relative;
            ">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div style="font-weight: bold; font-size: 15px; color: #333;">${key}</div>
                    <div style="color: #E66A11; font-weight: bold; font-size: 16px;">€${adicional.preco.toFixed(2)}</div>
                </div>
                <div style="font-size: 13px; color: #666; margin-bottom: 10px;">${adicional.descricao}</div>
                <div style="
                    background: #f0f0f0;
                    color: #666;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: bold;
                    display: inline-block;
                    text-transform: uppercase;
                ">
                    ${adicional.categoria}
                </div>
                <div class="selecionar-adicional-tela" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    color: #666;
                ">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        `;
    }).join('');
}

function atualizarTotalTela(precoBase) {
    const adicionaisSelecionados = document.querySelectorAll('.card-adicional-tela.selecionado');
    const resumoDiv = document.getElementById('resumoAdicionaisTela');
    const listaDiv = document.getElementById('listaAdicionaisTela');
    const totalAdicionaisSpan = document.getElementById('totalAdicionaisTela');
    const totalFinalSpan = document.getElementById('totalFinalTela');
    
    if (!resumoDiv || !listaDiv || !totalAdicionaisSpan || !totalFinalSpan) return;
    
    let totalAdicionais = 0;
    let listaHTML = '';
    
    adicionaisSelecionados.forEach(card => {
        const nome = card.dataset.nome;
        const preco = parseFloat(card.dataset.preco);
        totalAdicionais += preco;
        
        listaHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px;">
                <span>${nome}</span>
                <span style="color: #E66A11; font-weight: bold;">€${preco.toFixed(2)}</span>
            </div>
        `;
    });
    
    const totalFinal = precoBase + totalAdicionais;
    
    if (adicionaisSelecionados.length > 0) {
        listaDiv.innerHTML = listaHTML;
        totalAdicionaisSpan.textContent = `€${totalAdicionais.toFixed(2)}`;
        totalFinalSpan.textContent = `€${totalFinal.toFixed(2)}`;
        resumoDiv.style.display = 'block';
    } else {
        listaDiv.innerHTML = '';
        totalAdicionaisSpan.textContent = '€0.00';
        totalFinalSpan.textContent = `€${precoBase.toFixed(2)}`;
        resumoDiv.style.display = 'none';
    }
}

function confirmarPersonalizacaoNaTela() {
    if (!itemSelecionadoParaPersonalizar) return;
    
    // Coletar ingredientes removidos
    const ingredientesRemovidos = [];
    document.querySelectorAll('.item-remover-tela.selecionado').forEach(item => {
        ingredientesRemovidos.push(item.textContent.trim());
    });
    
    // Coletar ponto da carne
    let pontoCarne = null;
    const pontoSelecionado = document.querySelector('.opcao-ponto-tela.selecionado');
    if (pontoSelecionado) {
        pontoCarne = pontoSelecionado.dataset.ponto;
    }
    
    // Coletar adicionais
    const adicionais = [];
    let precoTotalAdicionais = 0;
    document.querySelectorAll('.card-adicional-tela.selecionado').forEach(card => {
        const nome = card.dataset.nome;
        const preco = parseFloat(card.dataset.preco);
        adicionais.push({ nome, preco });
        precoTotalAdicionais += preco;
    });
    
    // Coletar observações
    const observacoesInput = document.getElementById('observacoesTela');
    const observacoes = observacoesInput ? observacoesInput.value : '';
    
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
    
    // Feedback visual
    const btn = event.target;
    const originalHTML = btn.innerHTML;
    const originalBg = btn.style.background;
    
    btn.innerHTML = '<i class="fas fa-check"></i> ADICIONADO!';
    btn.style.background = '#00a650';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = originalBg;
        btn.disabled = false;
        fecharTelaPersonalizacao();
    }, 1500);
}

// ==================== NAVEGAÇÃO ENTRE SEÇÕES ====================
function abrirSecao(cat) {
    const sections = document.querySelectorAll(".section");
    const buttons = document.querySelectorAll(".menu-centralizado button");
    
    if (sections.length === 0 || buttons.length === 0) return;
    
    sections.forEach(s => s.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const targetSection = document.getElementById(cat);
    if (targetSection) {
        targetSection.classList.add("active");
    }
    
    const botao = Array.from(buttons)
        .find(btn => btn.onclick && btn.onclick.toString().includes(cat));
    if(botao) botao.classList.add("active");
    
    window.location.hash = cat;
}

// ==================== FUNÇÕES AUXILIARES ====================
function filtrarAdicionaisPorCategoria(categoria, carneDia) {
    const adicionaisFiltrados = {};
    
    Object.keys(PRECOS_ADICIONAIS).forEach(key => {
        const adicional = PRECOS_ADICIONAIS[key];
        
        // Lógica para filtrar adicionais por categoria
        if (categoria === 'executivos') {
            if (adicional.categoria === 'executivo') {
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
    
    if (!lista) return;
    
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

// Verificar console para debug
console.log("=== DOM BISTRÔ GRILL - SISTEMA CARREGADO ===");
console.log("Tela de personalização implementada!");
console.log("Taxa ajustada para €0.90 (Taxa de Manutenção dos Serviços)");
console.log("Todos os preços aumentados em €1.00");
console.log("IVA REMOVIDO - Preços já incluem todas as taxas");
console.log("Sistema de imagens automático ativado - caminhos gerados automaticamente");