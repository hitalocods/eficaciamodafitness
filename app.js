// ============================================================================
// EFICÁCIA MODA FITNESS — LOJA VIRTUAL COMPLETA
// Rua Francisca de Melo Lobo, QD 56, Casa 14 — Bairro Saci, Teresina - PI
// ============================================================================

const STORE_CONFIG = {
  name: 'Eficácia Moda Fitness',
  whatsapp: '5586995332517',
  instagram: 'eficaciamodafitness',
  address: 'Rua Francisca de Melo Lobo, QD 56, Casa 14 — Saci, Teresina - PI (64020-190)',
  coupons: {
    EFICACIA10: { percent: 10, label: '10% OFF' },
    BEMVINDA: { percent: 10, label: '10% OFF' },
    SACI5: { percent: 5, label: '5% OFF' }
  }
};

// Catálogo de Produtos com Fotos Reais para Cada Cor Selecionada
const PRODUCTS = [
  {
    id: 1,
    name: 'Top Fitness Um Ombro Só Drapeado',
    category: 'Tops & Croppeds',
    price: 69.90,
    oldPrice: 84.90,
    badge: 'Mais Vendido',
    isNew: true,
    description: 'Alça única anatômica super estilosa, franzido lateral que valoriza a silhueta e aplicação de logo dourada exclusiva.',
    fabric: 'Poliamida Premium (90% Poliamida, 10% Elastano) • Bojo removível',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Rosa Bebê', hex: '#f4a8c2', img: 'assets/products/prod_1_rosa-bebe.jpg' },
      { id: 'rosa-pink', name: 'Rosa Pink', hex: '#e0588a', img: 'assets/products/prod_1_rosa-pink.jpg' },
      { id: 'turquesa', name: 'Turquesa Original', hex: '#12a8b4', img: 'assets/products/prod_1_turquesa.jpg' },
      { id: 'lilas', name: 'Lilás Lavanda', hex: '#ba98e4', img: 'assets/products/prod_1_lilas.jpg' },
      { id: 'verde-menta', name: 'Verde Menta', hex: '#76ccb6', img: 'assets/products/prod_1_verde-menta.jpg' },
      { id: 'preto', name: 'Preto Clássico', hex: '#303036', img: 'assets/products/prod_1_preto.jpg' }
    ]
  },
  {
    id: 2,
    name: 'Conjunto Tennis Cropped Zíper & Saia-Short Plissada',
    category: 'Conjuntos',
    price: 149.90,
    oldPrice: 179.90,
    badge: 'Lançamento',
    isNew: true,
    description: 'Conjunto completo composto por cropped manga curta com zíper frontal e gola alta + saia plissada com short interno de segurança.',
    fabric: 'Suplex Poliamida Toque Gelado • Short interno com bolso lateral',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Rosa Bebê', hex: '#f5adc6', img: 'assets/products/prod_2_rosa-bebe.jpg' },
      { id: 'rosa-quartzo', name: 'Rosa Quartzo', hex: '#e0769b', img: 'assets/products/prod_2_rosa-quartzo.jpg' },
      { id: 'azul-ceu', name: 'Azul Céu', hex: '#8ab4f0', img: 'assets/products/prod_2_azul-ceu.jpg' },
      { id: 'lilas', name: 'Lilás Pastel', hex: '#c0a2e8', img: 'assets/products/prod_2_lilas.jpg' },
      { id: 'verde-agua', name: 'Verde Água', hex: '#84d2c3', img: 'assets/products/prod_2_verde-agua.jpg' },
      { id: 'preto', name: 'Preto Eclipse', hex: '#34343a', img: 'assets/products/prod_2_preto.jpg' }
    ]
  },
  {
    id: 3,
    name: 'Macaquinho Fitness Costas Nuas com Viés Contrastante',
    category: 'Macacões & Macaquinhos',
    price: 129.90,
    oldPrice: 154.90,
    badge: 'Tendência',
    isNew: false,
    description: 'Modelagem costas nuas com amarração ajustável e viés branco contrastante que desenha o corpo com zero transparência.',
    fabric: 'Poliamida Canelada / Lisa de Alta Compressão • Zero transparência',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Rosa Bebê c/ Branco', hex: '#f4a8c2', img: 'assets/products/prod_3_rosa-bebe.jpg' },
      { id: 'rosa-pink', name: 'Rosa Pink c/ Branco', hex: '#de5c8c', img: 'assets/products/prod_3_rosa-pink.jpg' },
      { id: 'terracota', name: 'Terracota c/ Branco', hex: '#b26044', img: 'assets/products/prod_3_terracota.jpg' },
      { id: 'lilas', name: 'Lilás c/ Branco', hex: '#be9ce6', img: 'assets/products/prod_3_lilas.jpg' },
      { id: 'azul-bebe', name: 'Turquesa c/ Branco', hex: '#1498a4', img: 'assets/products/prod_3_azul-bebe.jpg' },
      { id: 'preto', name: 'Preto c/ Branco', hex: '#34343a', img: 'assets/products/prod_3_preto.jpg' }
    ]
  },
  {
    id: 4,
    name: 'Short Runner Duplo Soltinho com Viés',
    category: 'Shorts & Saias',
    price: 64.90,
    oldPrice: 79.90,
    badge: 'Conforto Total',
    isNew: false,
    description: 'Short corrida leve com cós elástico anatômico, cordão ajustável, acabamento em viés contrastante e shortinho interno antiatrito.',
    fabric: 'Tactel Premium c/ Elastano + Forro interno em Poliamida',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Rosa Bebê c/ Marinho', hex: '#f6b2ca', img: 'assets/products/prod_4_rosa-bebe.jpg' },
      { id: 'rosa-chiclete', name: 'Rosa Chiclete c/ Marinho', hex: '#e8709c', img: 'assets/products/prod_4_rosa-chiclete.jpg' },
      { id: 'branco', name: 'Branco c/ Marinho', hex: '#f4f5fa', img: 'assets/products/prod_4_branco.jpg' },
      { id: 'azul-bebe', name: 'Azul Bebê c/ Marinho', hex: '#a6c6f2', img: 'assets/products/prod_4_azul-bebe.jpg' },
      { id: 'verde-menta', name: 'Verde Menta c/ Marinho', hex: '#9cdeca', img: 'assets/products/prod_4_verde-menta.jpg' },
      { id: 'lilas', name: 'Lilás c/ Marinho', hex: '#cab2ee', img: 'assets/products/prod_4_lilas.jpg' }
    ]
  },
  {
    id: 5,
    name: 'Macacão Longo Modelador Zíper & Recortes',
    category: 'Macacões & Macaquinhos',
    price: 169.90,
    oldPrice: 199.90,
    badge: 'Modelador Sculpt',
    isNew: true,
    description: 'Macacão longo manga curta com zíper frontal e linhas de contorno brancas estratégicas que afinam a cintura e realçam as curvas.',
    fabric: 'Poliamida Power Sculpt 320g • Alta sustentação e compressão',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Rosa Bebê c/ Branco', hex: '#eea6c0', img: 'assets/products/prod_5_rosa-bebe.jpg' },
      { id: 'rosa-quartzo', name: 'Rosa Quartzo c/ Branco', hex: '#da7e9c', img: 'assets/products/prod_5_rosa-quartzo.jpg' },
      { id: 'chumbo', name: 'Cinza Chumbo c/ Branco', hex: '#52525c', img: 'assets/products/prod_5_chumbo.jpg' },
      { id: 'lilas', name: 'Lilás c/ Branco', hex: '#b694de', img: 'assets/products/prod_5_lilas.jpg' },
      { id: 'cacau', name: 'Marrom Cacau c/ Branco', hex: '#885c4e', img: 'assets/products/prod_5_cacau.jpg' },
      { id: 'azul-petroleo', name: 'Azul Petróleo c/ Branco', hex: '#44708a', img: 'assets/products/prod_5_azul-petroleo.jpg' }
    ]
  },
  {
    id: 6,
    name: 'Conjunto Completo Top Um Ombro + Legging Cintura Alta',
    category: 'Conjuntos',
    price: 139.90,
    oldPrice: 169.90,
    badge: 'Look Completo',
    isNew: true,
    description: 'Conjunto completo combinando o Top Um Ombro Só Drapeado com nossa Legging Cintura Alta Eficácia Sculpt de cós duplo modelador.',
    fabric: 'Poliamida Dupla Compressão • Cós anatômico que não enrola',
    sizes: ['P', 'M', 'G', 'GG'],
    defaultSize: 'M',
    colors: [
      { id: 'rosa-bebe', name: 'Conjunto Rosa Bebê', hex: '#f4a8c2', img: 'assets/products/prod_6_rosa-bebe.jpg' },
      { id: 'rosa-pink', name: 'Conjunto Rosa Pink', hex: '#de5c8c', img: 'assets/products/prod_6_rosa-pink.jpg' },
      { id: 'turquesa-preto', name: 'Conjunto Turquesa', hex: '#12a8b4', img: 'assets/products/prod_6_turquesa-preto.jpg' },
      { id: 'lilas', name: 'Conjunto Lilás Lavanda', hex: '#ba98e4', img: 'assets/products/prod_6_lilas.jpg' },
      { id: 'verde-menta', name: 'Conjunto Verde Menta', hex: '#76ccb6', img: 'assets/products/prod_6_verde-menta.jpg' },
      { id: 'all-black', name: 'Conjunto All Black', hex: '#303036', img: 'assets/products/prod_6_all-black.jpg' }
    ]
  }
];

// Tabela Completa de Bairros de Teresina e Timon com Taxas de Entrega (Saindo do Bairro Saci)
const BAIRROS_ZONES = [
  {
    zone: 'Zona Sul (Próximos à Loja no Saci)',
    bairros: [
      { name: 'Saci (Bairro da Loja)', fee: 0.00 },
      { name: 'Distrito Industrial', fee: 5.00 },
      { name: 'Lourival Parente', fee: 6.00 },
      { name: 'Bela Vista', fee: 6.00 },
      { name: 'Parque Piauí', fee: 7.00 },
      { name: 'Promorar', fee: 7.00 },
      { name: 'Morada Nova', fee: 7.00 },
      { name: 'Triunfo', fee: 7.00 },
      { name: 'Pio XII', fee: 8.00 },
      { name: 'Macaúba', fee: 8.00 },
      { name: 'Monte Castelo', fee: 8.00 },
      { name: 'Vermelha', fee: 8.00 },
      { name: 'São Pedro', fee: 8.00 },
      { name: 'Tabuleta', fee: 8.00 },
      { name: 'Nossa Senhora das Graças', fee: 9.00 },
      { name: 'Redenção', fee: 9.00 },
      { name: 'Três Andares', fee: 9.00 },
      { name: 'Catarina', fee: 9.00 },
      { name: 'Cristo Rei', fee: 10.00 },
      { name: 'Santo Antônio', fee: 10.00 },
      { name: 'Angelim', fee: 10.00 },
      { name: 'Esplanada', fee: 12.00 },
      { name: 'Portal da Alegria', fee: 12.00 },
      { name: 'Irmã Dulce', fee: 12.00 },
      { name: 'Torquato Neto', fee: 13.00 }
    ]
  },
  {
    zone: 'Centro',
    bairros: [
      { name: 'Piçarra', fee: 9.00 },
      { name: 'Centro (Sul)', fee: 10.00 },
      { name: 'Centro (Norte)', fee: 10.00 },
      { name: 'Ilhotas', fee: 10.00 },
      { name: 'Cabral', fee: 10.00 },
      { name: 'Frei Serafim', fee: 10.00 }
    ]
  },
  {
    zone: 'Zona Leste',
    bairros: [
      { name: 'Fátima', fee: 12.00 },
      { name: 'Jóquei', fee: 12.00 },
      { name: 'Noivos', fee: 12.00 },
      { name: 'São João', fee: 12.00 },
      { name: 'São Cristóvão', fee: 13.00 },
      { name: 'Horto', fee: 13.00 },
      { name: 'Ininga', fee: 13.00 },
      { name: 'Campestre', fee: 13.00 },
      { name: 'Morada do Sol', fee: 14.00 },
      { name: 'Santa Isabel', fee: 14.00 },
      { name: 'Planalto Ininga', fee: 14.00 },
      { name: 'Recanto das Palmeiras', fee: 14.00 },
      { name: 'Uruguai', fee: 15.00 },
      { name: 'Satélite', fee: 15.00 },
      { name: 'Porto do Centro', fee: 15.00 },
      { name: 'Vale Quem Tem', fee: 15.00 },
      { name: 'Samapi', fee: 15.00 },
      { name: 'Pedra Mole', fee: 16.00 }
    ]
  },
  {
    zone: 'Zona Sudeste',
    bairros: [
      { name: 'Parque Ideal', fee: 12.00 },
      { name: 'Novo Horizonte', fee: 12.00 },
      { name: 'Dirceu I', fee: 12.00 },
      { name: 'Dirceu II', fee: 13.00 },
      { name: 'Colorado', fee: 13.00 },
      { name: 'Renascença', fee: 13.00 },
      { name: 'Gurupi', fee: 13.00 },
      { name: 'Verdecap', fee: 13.00 },
      { name: 'São Sebastião', fee: 14.00 },
      { name: 'Todos os Santos', fee: 14.00 }
    ]
  },
  {
    zone: 'Zona Norte',
    bairros: [
      { name: 'Mafuá', fee: 11.00 },
      { name: 'Marquês', fee: 11.00 },
      { name: 'Pirajá', fee: 12.00 },
      { name: 'Matinha', fee: 12.00 },
      { name: 'Vila Operária', fee: 12.00 },
      { name: 'Porenquanto', fee: 12.00 },
      { name: 'Primavera', fee: 13.00 },
      { name: 'Aeroporto', fee: 13.00 },
      { name: 'Real Copagre', fee: 13.00 },
      { name: 'Água Mineral', fee: 14.00 },
      { name: 'Memorare', fee: 14.00 },
      { name: 'São Joaquim', fee: 14.00 },
      { name: 'Nova Brasília', fee: 14.00 },
      { name: 'Itaperu', fee: 14.00 },
      { name: 'Mocambinho', fee: 15.00 },
      { name: 'Buenos Aires', fee: 15.00 },
      { name: 'Santa Maria da Codipi', fee: 18.00 }
    ]
  },
  {
    zone: 'Timon - MA',
    bairros: [
      { name: 'Centro (Timon)', fee: 13.00 },
      { name: 'Parque Piauí (Timon)', fee: 14.00 },
      { name: 'Formosa (Timon)', fee: 14.00 },
      { name: 'São Benedito (Timon)', fee: 15.00 }
    ]
  }
];

// Estado da Aplicação
const state = {
  selectedCategory: 'todos',
  selectedSizeFilter: 'todos',
  searchQuery: '',
  sortBy: 'destaques',
  onlyFavorites: false,
  // Seleções ativas em cada card (cor e tamanho por produto)
  cardSelections: {},
  // Lista de favoritos (IDs)
  favorites: JSON.parse(localStorage.getItem('eficacia_favs') || '[]'),
  // Sacola de compras
  cart: JSON.parse(localStorage.getItem('eficacia_cart') || '[]'),
  // Dados de entrega no carrinho
  deliveryMode: 'entrega', // 'entrega' | 'retirada'
  selectedBairro: localStorage.getItem('eficacia_bairro') || 'Saci (Bairro da Loja)',
  appliedCoupon: null,
  modalProductId: null
};

// Inicializa seleções padrão de cada card (começando no tom rosa suave de cada peça!)
PRODUCTS.forEach((p) => {
  state.cardSelections[p.id] = {
    colorId: p.colors[0].id,
    size: p.defaultSize
  };
});

// Pré-carrega todas as imagens de variantes de cor para troca instantânea ao clicar
function preloadProductImages() {
  PRODUCTS.forEach((p) => {
    p.colors.forEach((c) => {
      const img = new Image();
      img.src = c.img;
    });
  });
}

// Formatação de moeda BRL
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Busca dados de um bairro pelo nome
function getBairroData(bairroName) {
  for (const z of BAIRROS_ZONES) {
    const found = z.bairros.find((b) => b.name === bairroName);
    if (found) return { ...found, zone: z.zone };
  }
  return null;
}

// Salva sacola e favoritos no localStorage
function persistState() {
  localStorage.setItem('eficacia_cart', JSON.stringify(state.cart));
  localStorage.setItem('eficacia_favs', JSON.stringify(state.favorites));
  if (state.selectedBairro) {
    localStorage.setItem('eficacia_bairro', state.selectedBairro);
  }
}

// Exibe notificação Toast suave e delicada no topo
function showToast(message) {
  const container = document.getElementById('toastContainer');
  container.innerHTML = ''; // Mantém apenas 1 aviso limpo por vez
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-check">✓</span><span class="toast-text">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-8px)';
    toast.style.transition = '0.22s ease';
    setTimeout(() => toast.remove(), 220);
  }, 1900);
}

// ============================================================================
// RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS
// ============================================================================
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    if (state.onlyFavorites && !state.favorites.includes(p.id)) return false;
    if (state.selectedCategory !== 'todos' && p.category !== state.selectedCategory) return false;
    if (state.selectedSizeFilter !== 'todos' && !p.sizes.includes(state.selectedSizeFilter)) return false;
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchColor = p.colors.some((c) => c.name.toLowerCase().includes(q));
      if (!matchName && !matchCat && !matchDesc && !matchColor) return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'menor-preco') return a.price - b.price;
    if (state.sortBy === 'maior-preco') return b.price - a.price;
    if (state.sortBy === 'nome') return a.name.localeCompare(b.name, 'pt-BR');
    return a.id - b.id;
  });
}

function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('catalogCountText');
  const filtered = getFilteredProducts();

  countEl.innerHTML = state.onlyFavorites
    ? `Mostrando <strong>${filtered.length}</strong> peça(s) nos seus Favoritos ❤️`
    : `Mostrando <strong>${filtered.length}</strong> peça(s) disponíveis`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; background: #fff; border-radius: 20px; border: 1.5px solid var(--border-soft);">
        <p style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">
          Nenhuma peça encontrada para esse filtro 🌸
        </p>
        <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Experimente limpar a busca ou visualizar todas as categorias.
        </p>
        <button type="button" class="cat-pill active" id="clearAllFiltersBtn">Ver Todas as Peças</button>
      </div>
    `;
    const btn = document.getElementById('clearAllFiltersBtn');
    if (btn) btn.addEventListener('click', resetFilters);
    return;
  }

  grid.innerHTML = filtered
    .map((product) => {
      const sel = state.cardSelections[product.id];
      const activeColor = product.colors.find((c) => c.id === sel.colorId) || product.colors[0];
      const isFav = state.favorites.includes(product.id);
      const pixPrice = product.price * 0.95;

      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-media">
            <img
              src="${activeColor.img}"
              alt="${product.name} - ${activeColor.name}"
              class="product-img"
              id="card-img-${product.id}"
            />

            <div class="card-badges">
              ${product.isNew ? `<span class="badge-tag new">✨ Novo</span>` : ''}
              ${product.badge ? `<span class="badge-tag">${product.badge}</span>` : ''}
            </div>

            <div class="card-top-actions">
              <button
                type="button"
                class="icon-circle-btn ${isFav ? 'fav-active' : ''}"
                data-toggle-fav="${product.id}"
                title="Favoritar peça"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>

            <div class="active-color-pill" id="card-pill-${product.id}">
              <span class="active-color-dot" style="background:${activeColor.hex};"></span>
              <span>${activeColor.name}</span>
            </div>
          </div>

          <div class="product-body">
            <div>
              <div class="product-cat">${product.category}</div>
              <h2 class="product-title">${product.name}</h2>
            </div>

            <p class="product-desc">${product.description}</p>

            <div class="price-row">
              <div class="price-block">
                <span class="price-current">${formatBRL(product.price)}</span>
                ${product.oldPrice ? `<span class="price-old">${formatBRL(product.oldPrice)}</span>` : ''}
              </div>
              <span class="price-pix">${formatBRL(pixPrice)} no Pix</span>
            </div>

            <!-- Seletor de Cores com Troca de Foto no Clique -->
            <div class="selector-block">
              <div class="selector-header">
                <span class="selector-label">
                  Cor: <strong id="card-color-label-${product.id}">${activeColor.name}</strong>
                </span>
                <span class="color-hint-text">Toque p/ mudar</span>
              </div>
              <div class="color-swatches">
                ${product.colors
                  .map(
                    (c) => `
                  <button
                    type="button"
                    class="color-swatch ${c.id === activeColor.id ? 'active' : ''}"
                    style="background-color: ${c.hex};"
                    data-select-color="${c.id}"
                    data-product-id="${product.id}"
                    title="${c.name}"
                    aria-label="Selecionar cor ${c.name}"
                  ></button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Seletor de Tamanho (P, M, G, GG) -->
            <div class="selector-block">
              <div class="selector-header">
                <span class="selector-label">
                  Tamanho: <strong id="card-size-label-${product.id}">${sel.size}</strong>
                </span>
                <button type="button" class="size-guide-btn" data-open-size-guide="true">Guia de medidas</button>
              </div>
              <div class="size-options">
                ${product.sizes
                  .map(
                    (sz) => `
                  <button
                    type="button"
                    class="size-btn ${sz === sel.size ? 'active' : ''}"
                    data-select-size="${sz}"
                    data-product-id="${product.id}"
                  >
                    ${sz}
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Botão de Adicionar à Sacola -->
            <div class="card-footer-actions">
              <button
                type="button"
                class="add-to-cart-btn"
                id="add-btn-${product.id}"
                data-add-cart="${product.id}"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Adicionar à Sacola</span>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// ============================================================================
// TROCA DE COR E TAMANHO COM ANIMAÇÃO SUAVE
// ============================================================================
function selectProductColor(productId, colorId, fromModal = false) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const colorObj = product.colors.find((c) => c.id === colorId);
  if (!colorObj) return;

  state.cardSelections[productId].colorId = colorId;

  // Atualiza Card no Catálogo sem recarregar todo o grid (transição super fluida!)
  const cardImg = document.getElementById(`card-img-${productId}`);
  const cardLabel = document.getElementById(`card-color-label-${productId}`);
  const cardPill = document.getElementById(`card-pill-${productId}`);
  const cardEl = document.querySelector(`.product-card[data-product-id="${productId}"]`);

  if (cardImg) {
    cardImg.classList.add('switching');
    setTimeout(() => {
      cardImg.src = colorObj.img;
      cardImg.alt = `${product.name} - ${colorObj.name}`;
      cardImg.classList.remove('switching');
    }, 90);
  }

  if (cardLabel) cardLabel.textContent = colorObj.name;
  if (cardPill) {
    cardPill.innerHTML = `
      <span class="active-color-dot" style="background:${colorObj.hex};"></span>
      <span>${colorObj.name}</span>
    `;
  }

  if (cardEl) {
    cardEl.querySelectorAll('.color-swatch').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-select-color') === colorId);
    });
  }

  // Se o modal de detalhes daquela peça estiver aberto, sincroniza também
  if (fromModal || state.modalProductId === productId) {
    renderProductModalContent(productId);
  }
}

function selectProductSize(productId, size, fromModal = false) {
  state.cardSelections[productId].size = size;

  const sizeLabel = document.getElementById(`card-size-label-${productId}`);
  if (sizeLabel) sizeLabel.textContent = size;

  const cardEl = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (cardEl) {
    cardEl.querySelectorAll('.size-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-select-size') === size);
    });
  }

  if (fromModal || state.modalProductId === productId) {
    renderProductModalContent(productId);
  }
}

// ============================================================================
// MODAL DE DETALHES / ZOOM DO PRODUTO
// ============================================================================
function openProductModal(productId) {
  state.modalProductId = productId;
  renderProductModalContent(productId);
  document.getElementById('productModal').classList.add('open');
}

function renderProductModalContent(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const sel = state.cardSelections[productId];
  const activeColor = product.colors.find((c) => c.id === sel.colorId) || product.colors[0];
  const pixPrice = product.price * 0.95;

  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('productModalBody').innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-img-wrap">
        <img src="${activeColor.img}" alt="${product.name} - ${activeColor.name}" class="product-modal-img" />
        <div class="active-color-pill">
          <span class="active-color-dot" style="background:${activeColor.hex};"></span>
          <span>Cor selecionada: ${activeColor.name}</span>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:1rem;">
        <div>
          <span class="product-cat">${product.category}</span>
          <h2 style="font-size:1.3rem;font-weight:800;margin-top:0.2rem;">${product.name}</h2>
        </div>

        <div class="price-row" style="border-bottom:1px solid var(--border-soft);padding-bottom:0.8rem;">
          <div class="price-block">
            <span class="price-current" style="font-size:1.55rem;">${formatBRL(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatBRL(product.oldPrice)}</span>` : ''}
          </div>
          <span class="price-pix">${formatBRL(pixPrice)} no Pix (5% OFF)</span>
        </div>

        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.55;">
          ${product.description}
        </p>

        <div style="background:var(--pink-50);border:1px solid var(--border-soft);padding:0.7rem 0.9rem;border-radius:12px;font-size:0.8rem;color:var(--text-secondary);">
          <strong>✨ Composição & Acabamento:</strong><br />
          ${product.fabric}
        </div>

        <div class="selector-block">
          <div class="selector-header">
            <span class="selector-label">Escolha a Cor: <strong>${activeColor.name}</strong></span>
          </div>
          <div class="color-swatches">
            ${product.colors
              .map(
                (c) => `
              <button
                type="button"
                class="color-swatch ${c.id === activeColor.id ? 'active' : ''}"
                style="background-color:${c.hex};width:34px;height:34px;"
                data-modal-color="${c.id}"
                data-product-id="${product.id}"
                title="${c.name}"
              ></button>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="selector-block">
          <div class="selector-header">
            <span class="selector-label">Escolha o Tamanho: <strong>${sel.size}</strong></span>
            <button type="button" class="size-guide-btn" data-open-size-guide="true">Ver tabela de medidas</button>
          </div>
          <div class="size-options">
            ${product.sizes
              .map(
                (sz) => `
              <button
                type="button"
                class="size-btn ${sz === sel.size ? 'active' : ''}"
                data-modal-size="${sz}"
                data-product-id="${product.id}"
              >
                ${sz}
              </button>
            `
              )
              .join('')}
          </div>
        </div>

        <button
          type="button"
          class="add-to-cart-btn"
          style="margin-top:0.5rem;padding:0.95rem;"
          data-modal-add-cart="${product.id}"
        >
          🛍️ Adicionar à Sacola (${activeColor.name} • Tam ${sel.size})
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// SACOLA DE COMPRAS (CARRINHO COMPLETO + BAIRROS COM TAXA)
// ============================================================================
function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const sel = state.cardSelections[productId];
  const colorObj = product.colors.find((c) => c.id === sel.colorId) || product.colors[0];
  const cartKey = `${product.id}_${colorObj.id}_${sel.size}`;

  const existing = state.cart.find((item) => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      cartKey,
      productId: product.id,
      name: product.name,
      price: product.price,
      colorId: colorObj.id,
      colorName: colorObj.name,
      colorHex: colorObj.hex,
      img: colorObj.img,
      size: sel.size,
      qty: 1
    });
  }

  persistState();
  updateCartUI();

  // Feedback visual no botão do card
  const addBtn = document.getElementById(`add-btn-${productId}`);
  if (addBtn) {
    const originalHTML = addBtn.innerHTML;
    addBtn.classList.add('added');
    addBtn.innerHTML = `<span>✓ Na Sacola!</span>`;
    setTimeout(() => {
      addBtn.classList.remove('added');
      addBtn.innerHTML = originalHTML;
    }, 1300);
  }

  showToast(`Adicionado à sacola • ${colorObj.name} (${sel.size})`);
}

function updateCartItemQty(cartKey, delta) {
  const idx = state.cart.findIndex((item) => item.cartKey === cartKey);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }

  persistState();
  updateCartUI();
}

function removeCartItem(cartKey) {
  state.cart = state.cart.filter((item) => item.cartKey !== cartKey);
  persistState();
  updateCartUI();
}

function calculateCartTotals() {
  const totalQty = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const couponDiscount = state.appliedCoupon
    ? subtotal * (state.appliedCoupon.percent / 100)
    : 0;

  const afterCoupon = Math.max(0, subtotal - couponDiscount);

  const paymentMethod = document.getElementById('paymentMethod')?.value || 'Pix (5% OFF)';
  const isPix = paymentMethod.startsWith('Pix');
  const pixDiscount = isPix ? afterCoupon * 0.05 : 0;

  let deliveryFee = 0;
  let bairroLabel = 'Retirada no Saci (Grátis)';

  if (state.deliveryMode === 'entrega') {
    const bData = getBairroData(state.selectedBairro);
    if (bData) {
      deliveryFee = bData.fee;
      bairroLabel = bData.name;
    } else {
      deliveryFee = 0;
      bairroLabel = 'Escolha o bairro';
    }
  }

  const total = Math.max(0, afterCoupon - pixDiscount + deliveryFee);

  return {
    totalQty,
    subtotal,
    couponDiscount,
    pixDiscount,
    deliveryFee,
    bairroLabel,
    total
  };
}

function updateCartUI() {
  const totals = calculateCartTotals();

  // Badges de contagem
  document.getElementById('cartCountBadge').textContent = totals.totalQty;
  document.getElementById('drawerHeaderCount').textContent = `${totals.totalQty} ${totals.totalQty === 1 ? 'peça' : 'peças'}`;
  document.getElementById('favCountBadge').textContent = state.favorites.length;

  // Barra mobile
  const mobileBar = document.getElementById('mobileCartBar');
  document.getElementById('mobileCartCount').textContent = totals.totalQty;
  document.getElementById('mobileCartTotal').textContent = formatBRL(totals.total);
  mobileBar.classList.toggle('visible', totals.totalQty > 0);

  const itemsContainer = document.getElementById('cartItemsContainer');
  const checkoutSections = document.getElementById('cartCheckoutSections');
  const drawerFooter = document.getElementById('cartDrawerFooter');

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h4 style="font-size:1rem;color:var(--text-main);margin-bottom:0.35rem;">Sua sacola está vazia</h4>
        <p style="font-size:0.84rem;margin-bottom:1.1rem;">Escolha suas peças favoritas, clique nas cores para testar e adicione à sacola!</p>
        <button type="button" class="cat-pill active" id="emptyCartContinueBtn">Explorar Peças</button>
      </div>
    `;
    checkoutSections.style.display = 'none';
    drawerFooter.style.display = 'none';

    const contBtn = document.getElementById('emptyCartContinueBtn');
    if (contBtn) contBtn.addEventListener('click', closeCartDrawer);
    return;
  }

  checkoutSections.style.display = 'flex';
  drawerFooter.style.display = 'flex';

  itemsContainer.innerHTML = `
    <div class="cart-items-list">
      ${state.cart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name} - ${item.colorName}" class="cart-item-img" />
          <div class="cart-item-info">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.4rem;">
              <h4 class="cart-item-title">${item.name}</h4>
              <button type="button" class="cart-item-remove" data-remove-key="${item.cartKey}" title="Remover item">✕</button>
            </div>

            <div class="cart-item-specs">
              <span class="spec-badge">
                <span class="active-color-dot" style="background:${item.colorHex};width:9px;height:9px;"></span>
                Cor: <strong>${item.colorName}</strong>
              </span>
              <span class="spec-badge">Tam: <strong>${item.size}</strong></span>
            </div>

            <div class="cart-item-bottom">
              <div class="qty-control">
                <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-delta="-1">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn" data-qty-key="${item.cartKey}" data-delta="1">+</button>
              </div>
              <div class="cart-item-price">
                <span class="cart-item-unit">${item.qty}x ${formatBRL(item.price)}</span>
                <span class="cart-item-subtotal">${formatBRL(item.price * item.qty)}</span>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  // Atualiza banner de bairro e taxa
  const bData = getBairroData(state.selectedBairro);
  const bairroNameEl = document.getElementById('selectedBairroName');
  const bairroFeeEl = document.getElementById('selectedBairroFee');

  if (bData) {
    bairroNameEl.textContent = bData.name;
    bairroFeeEl.textContent = bData.fee === 0 ? 'GRÁTIS (R$ 0,00)' : formatBRL(bData.fee);
  } else {
    bairroNameEl.textContent = 'não selecionado';
    bairroFeeEl.textContent = 'Selecione acima';
  }

  // Atualiza linhas de resumo financeiro
  document.getElementById('summaryQty').textContent = `${totals.totalQty} ${totals.totalQty === 1 ? 'peça' : 'peças'}`;
  document.getElementById('summarySubtotal').textContent = formatBRL(totals.subtotal);

  const couponRow = document.getElementById('summaryCouponRow');
  if (state.appliedCoupon && totals.couponDiscount > 0) {
    couponRow.style.display = 'flex';
    document.getElementById('summaryCouponCode').textContent = state.appliedCoupon.code;
    document.getElementById('summaryCouponVal').textContent = `- ${formatBRL(totals.couponDiscount)}`;
  } else {
    couponRow.style.display = 'none';
  }

  const pixRow = document.getElementById('summaryPixRow');
  if (totals.pixDiscount > 0) {
    pixRow.style.display = 'flex';
    document.getElementById('summaryPixVal').textContent = `- ${formatBRL(totals.pixDiscount)}`;
  } else {
    pixRow.style.display = 'none';
  }

  document.getElementById('summaryBairroLabel').textContent = totals.bairroLabel;
  document.getElementById('summaryDeliveryFee').textContent =
    totals.deliveryFee === 0 && (state.deliveryMode === 'retirada' || state.selectedBairro.startsWith('Saci'))
      ? 'Grátis (R$ 0,00)'
      : formatBRL(totals.deliveryFee);

  document.getElementById('summaryTotal').textContent = formatBRL(totals.total);
}

// Popula o <select> de Bairros no Carrinho e a Tabela no Modal de Bairros
function populateBairrosUI(searchFilter = '') {
  const selectEl = document.getElementById('bairroSelect');
  if (selectEl && selectEl.options.length <= 1) {
    selectEl.innerHTML = `<option value="">-- Escolha seu bairro para calcular a taxa --</option>` +
      BAIRROS_ZONES.map(
        (z) => `
        <optgroup label="${z.zone}">
          ${z.bairros
            .map(
              (b) => `
            <option value="${b.name}" ${b.name === state.selectedBairro ? 'selected' : ''}>
              ${b.name} — ${b.fee === 0 ? 'Grátis (R$ 0,00)' : formatBRL(b.fee)}
            </option>
          `
            )
            .join('')}
        </optgroup>
      `
      ).join('');
  }

  // Renderiza os cards por zona no Modal de Bairros
  const zonesGrid = document.getElementById('bairrosZonesGrid');
  if (!zonesGrid) return;

  const q = searchFilter.toLowerCase().trim();
  const html = BAIRROS_ZONES.map((z) => {
    const filteredBairros = z.bairros.filter(
      (b) => !q || b.name.toLowerCase().includes(q) || z.zone.toLowerCase().includes(q)
    );
    if (filteredBairros.length === 0) return '';

    return `
      <div class="zone-box">
        <h4>${z.zone}</h4>
        <div>
          ${filteredBairros
            .map(
              (b) => `
            <div class="bairro-row" data-pick-bairro="${b.name}" title="Clique para selecionar este bairro">
              <span>${b.name}</span>
              <span>${b.fee === 0 ? 'Grátis' : formatBRL(b.fee)}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }).join('');

  zonesGrid.innerHTML = html || `<p style="grid-column:1/-1;text-align:center;color:var(--text-secondary);">Nenhum bairro encontrado para "${searchFilter}".</p>`;
}

// ============================================================================
// FINALIZAÇÃO DO PEDIDO E COMPROVANTE COMPLETO
// ============================================================================
function handleFinishOrder() {
  if (state.cart.length === 0) return;

  const customerName = document.getElementById('customerName').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const addressStreet = document.getElementById('addressStreet').value.trim();
  const addressRef = document.getElementById('addressRef').value.trim();
  const customerObs = document.getElementById('customerObs').value.trim();
  const paymentMethod = document.getElementById('paymentMethod').value;
  const trocoInput = document.getElementById('trocoInput').value.trim();

  if (state.deliveryMode === 'entrega') {
    if (!state.selectedBairro) {
      showToast('Por favor, selecione o seu bairro para calcular a taxa de entrega!');
      document.getElementById('bairroSelect').focus();
      return;
    }
    if (!addressStreet) {
      showToast('Por favor, informe sua Rua, Quadra ou Número para entrega!');
      document.getElementById('addressStreet').focus();
      return;
    }
  }

  if (!customerName) {
    showToast('Por favor, informe o seu nome para identificarmos o pedido!');
    document.getElementById('customerName').focus();
    return;
  }

  const totals = calculateCartTotals();
  const orderCode = `EF-${Math.floor(100000 + Math.random() * 900000)}`;
  const nowStr = new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  // Monta texto estruturado do pedido
  const itemsLines = state.cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.qty}x ${item.name}\n   • Cor: ${item.colorName} | Tam: ${item.size} — ${formatBRL(item.price * item.qty)}`
    )
    .join('\n');

  const deliveryInfoText =
    state.deliveryMode === 'retirada'
      ? `🏪 Retirada na Loja (Rua Francisca de Melo Lobo, QD 56, Casa 14 — Saci) — GRÁTIS`
      : `🛵 Entrega em Domicílio\n• Bairro: ${state.selectedBairro} (Taxa: ${formatBRL(totals.deliveryFee)})\n• Endereço: ${addressStreet}${addressRef ? `\n• Ref/Compl: ${addressRef}` : ''}`;

  const summaryText = [
    `🌸 *PEDIDO ${orderCode} — EFICÁCIA MODA FITNESS* 🌸`,
    `Data: ${nowStr}`,
    ``,
    `👩🏻 *Cliente:* ${customerName}`,
    customerPhone ? `📱 *Telefone:* ${customerPhone}` : null,
    ``,
    `🛍️ *ITENS ESCOLHIDOS (${totals.totalQty} ${totals.totalQty === 1 ? 'peça' : 'peças'}):*`,
    itemsLines,
    ``,
    `📍 *RECEBIMENTO:*`,
    deliveryInfoText,
    customerObs ? `📝 *Obs:* ${customerObs}` : null,
    ``,
    `💳 *PAGAMENTO E VALORES:*`,
    `• Forma de pagamento: ${paymentMethod}${paymentMethod === 'Dinheiro' && trocoInput ? ` (Troco para: ${trocoInput})` : ''}`,
    `• Subtotal: ${formatBRL(totals.subtotal)}`,
    totals.couponDiscount > 0 ? `• Cupom (${state.appliedCoupon.code}): -${formatBRL(totals.couponDiscount)}` : null,
    totals.pixDiscount > 0 ? `• Desconto Pix (5%): -${formatBRL(totals.pixDiscount)}` : null,
    `• Taxa de Entrega: ${totals.deliveryFee === 0 ? 'Grátis' : formatBRL(totals.deliveryFee)}`,
    `✨ *TOTAL A PAGAR: ${formatBRL(totals.total)}*`
  ]
    .filter(Boolean)
    .join('\n');

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(summaryText)}`;

  const receiptBody = document.getElementById('orderReceiptBody');
  receiptBody.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem;">
      <div style="background:var(--success-bg);border:1px solid #bfe6d3;padding:0.9rem 1rem;border-radius:14px;color:#1f6b47;font-size:0.86rem;">
        <strong>✨ Pedido ${orderCode} gerado com sucesso, ${customerName}!</strong><br />
        Confira abaixo o resumo completo com suas cores, tamanhos e taxa de entrega.
      </div>

      <div style="background:var(--pink-50);border:1.5px solid var(--border-soft);border-radius:14px;padding:1rem;font-size:0.83rem;display:flex;flex-direction:column;gap:0.65rem;">
        <div><strong>Cliente:</strong> ${customerName} ${customerPhone ? `• ${customerPhone}` : ''}</div>
        <div>
          <strong>Recebimento:</strong>
          ${
            state.deliveryMode === 'retirada'
              ? 'Retirada na Loja (Bairro Saci) — Grátis'
              : `Entrega no bairro <strong>${state.selectedBairro}</strong> (${addressStreet}${addressRef ? `, ${addressRef}` : ''})`
          }
        </div>
        <div><strong>Pagamento:</strong> ${paymentMethod}</div>

        <hr style="border:none;border-top:1px dashed var(--pink-200);" />

        <div style="display:flex;flex-direction:column;gap:0.45rem;">
          ${state.cart
            .map(
              (item) => `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <img src="${item.img}" alt="" style="width:36px;height:46px;object-fit:cover;border-radius:6px;border:1px solid var(--pink-200);" />
                <div>
                  <div style="font-weight:700;color:var(--text-main);">${item.qty}x ${item.name}</div>
                  <div style="font-size:0.75rem;color:var(--text-secondary);">Cor: ${item.colorName} • Tam: ${item.size}</div>
                </div>
              </div>
              <strong style="color:var(--pink-700);">${formatBRL(item.price * item.qty)}</strong>
            </div>
          `
            )
            .join('')}
        </div>

        <hr style="border:none;border-top:1px dashed var(--pink-200);" />

        <div style="display:flex;justify-content:space-between;">
          <span>Subtotal das peças:</span>
          <span>${formatBRL(totals.subtotal)}</span>
        </div>
        ${
          totals.couponDiscount > 0
            ? `<div style="display:flex;justify-content:space-between;color:var(--success);font-weight:700;">
                <span>Cupom (${state.appliedCoupon.code}):</span>
                <span>- ${formatBRL(totals.couponDiscount)}</span>
              </div>`
            : ''
        }
        ${
          totals.pixDiscount > 0
            ? `<div style="display:flex;justify-content:space-between;color:var(--success);font-weight:700;">
                <span>Desconto Pix (5%):</span>
                <span>- ${formatBRL(totals.pixDiscount)}</span>
              </div>`
            : ''
        }
        <div style="display:flex;justify-content:space-between;">
          <span>Taxa de Entrega (${totals.bairroLabel}):</span>
          <strong>${totals.deliveryFee === 0 ? 'Grátis (R$ 0,00)' : formatBRL(totals.deliveryFee)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;color:var(--pink-700);padding-top:0.35rem;border-top:1px solid var(--pink-200);">
          <span>Total Final:</span>
          <span>${formatBRL(totals.total)}</span>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:0.65rem;">
        <a
          href="${waUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="checkout-btn"
          style="text-decoration:none;flex:1;min-width:220px;"
        >
          📲 Enviar Pedido p/ Loja no WhatsApp
        </a>
        <button
          type="button"
          class="action-btn"
          id="copyReceiptBtn"
          style="justify-content:center;padding:0.85rem 1.1rem;"
        >
          📋 Copiar Resumo
        </button>
      </div>
    </div>
  `;

  closeCartDrawer();
  document.getElementById('orderReceiptModal').classList.add('open');

  document.getElementById('copyReceiptBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      showToast('Resumo do pedido copiado para a área de transferência!');
    });
  });
}

// ============================================================================
// CONTROLES DE DRAWER, FILTROS E EVENTOS GERAIS
// ============================================================================
function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('open');
  updateCartUI();
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('open');
}

function resetFilters() {
  state.selectedCategory = 'todos';
  state.selectedSizeFilter = 'todos';
  state.searchQuery = '';
  state.onlyFavorites = false;
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClearBtn').classList.remove('visible');

  document.querySelectorAll('.cat-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === 'todos');
  });
  document.querySelectorAll('.size-filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-size') === 'todos');
  });
  renderCatalog();
}

function setupEventListeners() {
  // Delegação de cliques no Grid de Produtos
  document.getElementById('productsGrid').addEventListener('click', (e) => {
    const colorBtn = e.target.closest('[data-select-color]');
    if (colorBtn) {
      const pid = Number(colorBtn.getAttribute('data-product-id'));
      const cid = colorBtn.getAttribute('data-select-color');
      selectProductColor(pid, cid);
      return;
    }

    const sizeBtn = e.target.closest('[data-select-size]');
    if (sizeBtn) {
      const pid = Number(sizeBtn.getAttribute('data-product-id'));
      const sz = sizeBtn.getAttribute('data-select-size');
      selectProductSize(pid, sz);
      return;
    }

    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      const pid = Number(addBtn.getAttribute('data-add-cart'));
      addToCart(pid);
      return;
    }

    const favBtn = e.target.closest('[data-toggle-fav]');
    if (favBtn) {
      const pid = Number(favBtn.getAttribute('data-toggle-fav'));
      const idx = state.favorites.indexOf(pid);
      if (idx >= 0) {
        state.favorites.splice(idx, 1);
        showToast('Peça removida dos favoritos');
      } else {
        state.favorites.push(pid);
        showToast('Peça salva nos seus favoritos ❤️');
      }
      persistState();
      renderCatalog();
      updateCartUI();
      return;
    }

    const sizeGuideTrigger = e.target.closest('[data-open-size-guide]');
    if (sizeGuideTrigger) {
      document.getElementById('sizeGuideModal').classList.add('open');
      return;
    }

    const modalTrigger = e.target.closest('[data-open-modal]');
    if (modalTrigger) {
      const pid = Number(modalTrigger.getAttribute('data-open-modal'));
      openProductModal(pid);
    }
  });

  // Delegação de cliques no Modal de Detalhes do Produto
  document.getElementById('productModalBody').addEventListener('click', (e) => {
    const colorBtn = e.target.closest('[data-modal-color]');
    if (colorBtn) {
      const pid = Number(colorBtn.getAttribute('data-product-id'));
      const cid = colorBtn.getAttribute('data-modal-color');
      selectProductColor(pid, cid, true);
      return;
    }

    const sizeBtn = e.target.closest('[data-modal-size]');
    if (sizeBtn) {
      const pid = Number(sizeBtn.getAttribute('data-product-id'));
      const sz = sizeBtn.getAttribute('data-modal-size');
      selectProductSize(pid, sz, true);
      return;
    }

    const addBtn = e.target.closest('[data-modal-add-cart]');
    if (addBtn) {
      const pid = Number(addBtn.getAttribute('data-modal-add-cart'));
      addToCart(pid);
      document.getElementById('productModal').classList.remove('open');
      openCartDrawer();
      return;
    }

    const guideBtn = e.target.closest('[data-open-size-guide]');
    if (guideBtn) {
      document.getElementById('sizeGuideModal').classList.add('open');
    }
  });

  // Busca
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    searchClearBtn.classList.toggle('visible', state.searchQuery.length > 0);
    renderCatalog();
  });

  searchClearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    renderCatalog();
  });

  // Categorias
  document.getElementById('categoryPills').addEventListener('click', (e) => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;
    state.onlyFavorites = false;
    state.selectedCategory = pill.getAttribute('data-cat');
    document.querySelectorAll('.cat-pill').forEach((b) => b.classList.toggle('active', b === pill));
    renderCatalog();
  });

  // Filtro de Tamanho
  document.getElementById('sizeFilterGroup').addEventListener('click', (e) => {
    const btn = e.target.closest('.size-filter-btn');
    if (!btn) return;
    state.selectedSizeFilter = btn.getAttribute('data-size');
    document.querySelectorAll('.size-filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    renderCatalog();
  });

  // Ordenação
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  // Botão Favoritos no Topo
  document.getElementById('favFilterBtn').addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;
    renderCatalog();
  });

  // Reset clicando na logo
  document.getElementById('resetCatalogBrand').addEventListener('click', (e) => {
    e.preventDefault();
    resetFilters();
  });

  // Abrir e fechar Sacola
  document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
  document.getElementById('mobileCartBar').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('drawerBackdrop').addEventListener('click', closeCartDrawer);

  // Eventos dentro da Sacola (quantidade e remoção)
  document.getElementById('cartItemsContainer').addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('[data-qty-key]');
    if (qtyBtn) {
      const key = qtyBtn.getAttribute('data-qty-key');
      const delta = Number(qtyBtn.getAttribute('data-delta'));
      updateCartItemQty(key, delta);
      return;
    }

    const remBtn = e.target.closest('[data-remove-key]');
    if (remBtn) {
      const key = remBtn.getAttribute('data-remove-key');
      removeCartItem(key);
    }
  });

  // Modo Entrega vs Retirada
  const tabEntrega = document.getElementById('tabModeEntrega');
  const tabRetirada = document.getElementById('tabModeRetirada');
  const deliveryFields = document.getElementById('deliveryAddressFields');
  const pickupBox = document.getElementById('pickupInfoBox');

  tabEntrega.addEventListener('click', () => {
    state.deliveryMode = 'entrega';
    tabEntrega.classList.add('active');
    tabRetirada.classList.remove('active');
    deliveryFields.style.display = 'flex';
    pickupBox.style.display = 'none';
    updateCartUI();
  });

  tabRetirada.addEventListener('click', () => {
    state.deliveryMode = 'retirada';
    tabRetirada.classList.add('active');
    tabEntrega.classList.remove('active');
    deliveryFields.style.display = 'none';
    pickupBox.style.display = 'block';
    updateCartUI();
  });

  // Seleção de Bairro no <select> do Carrinho
  document.getElementById('bairroSelect').addEventListener('change', (e) => {
    state.selectedBairro = e.target.value;
    persistState();
    updateCartUI();
  });

  // Forma de Pagamento (exibe campo de troco se Dinheiro, recalcula 5% Pix)
  document.getElementById('paymentMethod').addEventListener('change', (e) => {
    const isCash = e.target.value === 'Dinheiro';
    document.getElementById('trocoFieldWrap').style.display = isCash ? 'flex' : 'none';
    updateCartUI();
  });

  // Cupom de Desconto
  document.getElementById('applyCouponBtn').addEventListener('click', () => {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    const feedback = document.getElementById('couponFeedback');
    if (!code) return;

    if (STORE_CONFIG.coupons[code]) {
      state.appliedCoupon = { code, ...STORE_CONFIG.coupons[code] };
      feedback.style.color = 'var(--success)';
      feedback.textContent = `✓ Cupom ${code} (${state.appliedCoupon.label}) aplicado!`;
      showToast(`Cupom ${code} aplicado com sucesso!`);
    } else {
      state.appliedCoupon = null;
      feedback.style.color = 'var(--danger)';
      feedback.textContent = `Cupom inválido. Use EFICACIA10 para ganhar 10% OFF!`;
    }
    updateCartUI();
  });

  // Finalizar Pedido
  document.getElementById('finishOrderBtn').addEventListener('click', handleFinishOrder);

  // Abrir e fechar Modal de Bairros e Taxas
  const openBairros = () => {
    populateBairrosUI('');
    document.getElementById('bairroModalSearch').value = '';
    document.getElementById('bairrosModal').classList.add('open');
  };
  document.getElementById('openBairrosTopBtn').addEventListener('click', openBairros);
  document.getElementById('openBairrosHeaderBtn').addEventListener('click', openBairros);
  document.getElementById('openBairrosInfoBtn').addEventListener('click', openBairros);
  document.getElementById('openBairrosFromCartBtn').addEventListener('click', openBairros);
  document.getElementById('closeBairrosModalBtn').addEventListener('click', () => {
    document.getElementById('bairrosModal').classList.remove('open');
  });

  document.getElementById('bairroModalSearch').addEventListener('input', (e) => {
    populateBairrosUI(e.target.value);
  });

  // Clicar num bairro dentro do Modal já seleciona o bairro no Carrinho
  document.getElementById('bairrosZonesGrid').addEventListener('click', (e) => {
    const row = e.target.closest('[data-pick-bairro]');
    if (!row) return;
    const bName = row.getAttribute('data-pick-bairro');
    state.selectedBairro = bName;
    state.deliveryMode = 'entrega';
    const selEl = document.getElementById('bairroSelect');
    if (selEl) selEl.value = bName;
    persistState();
    updateCartUI();
    document.getElementById('bairrosModal').classList.remove('open');
    const bData = getBairroData(bName);
    showToast(`Bairro ${bName} selecionado (Taxa: ${bData && bData.fee === 0 ? 'Grátis' : formatBRL(bData?.fee || 0)})`);
  });

  // Guia de Medidas e Fechamento de Modais
  document.getElementById('openSizeGuideHeaderBtn').addEventListener('click', () => {
    document.getElementById('sizeGuideModal').classList.add('open');
  });
  document.getElementById('closeSizeGuideModalBtn').addEventListener('click', () => {
    document.getElementById('sizeGuideModal').classList.remove('open');
  });
  document.getElementById('closeProductModalBtn').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('open');
  });
  document.getElementById('closeReceiptModalBtn').addEventListener('click', () => {
    document.getElementById('orderReceiptModal').classList.remove('open');
  });

  // Fechar modais clicando fora do card
  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
}

// Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
  preloadProductImages();
  populateBairrosUI();
  renderCatalog();
  updateCartUI();
  setupEventListeners();
});

