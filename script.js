/* ==========================================================================
   MomoCraft Pure Veg - Interactive 3D Restaurant Website Script
   ========================================================================== */

// --- 1. 100% PURE VEG MENU DATA WITH REALISTIC VISUALS ---
const VEG_MENU = [
  {
    id: 'steamed-veg',
    name: 'Classic Steamed Mountain Veg Momos',
    category: 'steamed',
    tag: 'Bestseller',
    icon: '🥟',
    img: 'steamed_momos.jpg',
    desc: 'Traditional Tibetan dumplings stuffed with crunchy Himalayan cabbage, sweet carrots, shallots, and fresh ginger juice.',
    priceHalf: 50,
    priceFull: 90,
    rating: 4.9,
    reviews: 340,
    spicy: '🌶️ Mild Hot',
    prepTime: '7 Mins',
    doughRecipe: 'Special fine wheat flour kneaded with warm water and rested 30 minutes. Rolled to a 1mm thin border and pleated with 14 precise folds.',
    fillingRecipe: 'Fresh mountain cabbage, sweet carrots, spring onions, ginger juice, cold-pressed oil, butter, and black pepper.'
  },
  {
    id: 'steamed-paneer',
    name: 'Malai Paneer Steamed Momos',
    category: 'steamed',
    tag: 'Chef Special',
    icon: '🧀',
    img: 'steamed_momos.jpg',
    desc: 'Soft creamy Malai Paneer crumbled with bell peppers, melted butter, and aromatic herbs in a tender steamed wrap.',
    priceHalf: 60,
    priceFull: 110,
    rating: 4.8,
    reviews: 280,
    spicy: '🌶️ Mild & Creamy',
    prepTime: '8 Mins',
    doughRecipe: 'Silky translucent dough folded in round pleated pouch to lock in the melted paneer butter juices.',
    fillingRecipe: 'Grated fresh cottage cheese, finely diced tri-color bell peppers, sweet corn, butter, crushed roasted cumin, and black pepper.'
  },
  {
    id: 'kurkure-crunchy',
    name: 'Crispy Kurkure Veg Momos',
    category: 'crispy',
    tag: 'Super Crunchy',
    icon: '🍤',
    img: 'kurkure_momos.jpg',
    desc: 'Steamed dumplings coated in a spiced herb batter and crushed golden cornflakes, fried crisp and peri-peri dusted.',
    priceHalf: 70,
    priceFull: 130,
    rating: 4.9,
    reviews: 410,
    spicy: '🌶️🌶️ High Crunch',
    prepTime: '10 Mins',
    doughRecipe: 'Steamed first to cook inner vegetables, then double-dredged in cornflour slurry and crushed flaky cornflakes.',
    fillingRecipe: 'Spiced mixed veggies and paneer stuffing, seasoned with chatpata chaat masala and black salt.'
  },
  {
    id: 'tandoori-smoked',
    name: 'Smoky Charcoal Tandoori Veg Momos',
    category: 'tandoori',
    tag: 'Live Charcoal',
    icon: '🔥',
    img: 'tandoori_momos.jpg',
    desc: 'Marinated in thick spiced hung curd and mustard oil, roasted on skewers over live charcoal embers, and butter tossed.',
    priceHalf: 80,
    priceFull: 150,
    rating: 4.8,
    reviews: 295,
    spicy: '🌶️🌶️ Medium Spicy',
    prepTime: '12 Mins',
    doughRecipe: 'Reinforced pleat dumpling built to absorb the smoky live charcoal fire without drying out.',
    fillingRecipe: 'Rich hung curd, mustard oil, Kashmiri degi mirch, kasuri methi, garam masala, and lemon juice toss with sliced onions.'
  },
  {
    id: 'afghani-malai',
    name: 'Creamy Afghani Malai Veg Momos',
    category: 'gravy',
    tag: 'Velvety Rich',
    icon: '🥛',
    img: 'afghani_momos.jpg',
    desc: 'Drenched in a velvety reduction of cashew nut paste, fresh dairy cream, butter, and fragrant green cardamom.',
    priceHalf: 90,
    priceFull: 160,
    rating: 4.9,
    reviews: 315,
    spicy: 'Mild Velvet',
    prepTime: '11 Mins',
    doughRecipe: 'Tender steamed dumplings tossed straight into hot rich cashew cream and butter reduction.',
    fillingRecipe: 'Fresh paneer and seasonal vegetable core, tossed in heavy dairy cream, toasted cashews, and cheese melt.'
  },
  {
    id: 'cheese-burst',
    name: 'Molten Cheese Burst Fried Momos',
    category: 'crispy',
    tag: 'Cheesy String',
    icon: '🧀',
    img: 'kurkure_momos.jpg',
    desc: 'Stuffed with generous blend of mozzarella and cheddar cheese with sweet corn that stretches with every bite.',
    priceHalf: 90,
    priceFull: 170,
    rating: 4.8,
    reviews: 260,
    spicy: '🌶️ Cheesy Mild',
    prepTime: '10 Mins',
    doughRecipe: 'Double-pinched sealed wrapper to lock in the molten bubbling cheese center during crisp hot frying.',
    fillingRecipe: 'Gooey mozzarella cheese cubes, processed cheddar, sweet corn kernels, Italian herbs, and crushed chili flakes.'
  },
  {
    id: 'chilli-garlic-gravy',
    name: 'Chilli Garlic Gravy Veg Momos',
    category: 'gravy',
    tag: 'Indo-Chinese',
    icon: '🍲',
    img: 'tandoori_momos.jpg',
    desc: 'Golden crisp momos tossed in a smoking hot wok with dark soy sauce, crushed red chili paste, and fresh scallions.',
    priceHalf: 75,
    priceFull: 140,
    rating: 4.7,
    reviews: 210,
    spicy: '🌶️🌶️🌶️ Fiery Hot',
    prepTime: '10 Mins',
    doughRecipe: 'Lightly fried dumpling skins that hold the savory thick gravy without softening.',
    fillingRecipe: 'Wok tossed with dark soy, vinegar, minced garlic, red chili paste, capsicum, and spring onions.'
  },
  {
    id: 'darjeeling-jhol',
    name: 'Darjeeling Authentic Jhol Momos',
    category: 'gravy',
    tag: 'Sesame Broth',
    icon: '🥣',
    img: 'afghani_momos.jpg',
    desc: 'Steamed dumplings submerged in a piping hot roasted sesame, tomato, and mountain Timur pepper broth soup.',
    priceHalf: 70,
    priceFull: 120,
    rating: 4.9,
    reviews: 245,
    spicy: '🌶️ Zesty & Tangy',
    prepTime: '8 Mins',
    doughRecipe: 'Delicate round dumplings that absorb the hot aromatic Himalayan sesame broth.',
    fillingRecipe: 'Roasted white sesame seed paste, charred tomatoes, Timur (mountain pepper), garlic, coriander, and fresh lemon.'
  },
  {
    id: 'paneer-kurkure',
    name: 'Crunchy Paneer Kurkure Momos',
    category: 'crispy',
    tag: 'Extra Paneer',
    icon: '✨',
    img: 'kurkure_momos.jpg',
    desc: 'Loaded fresh Malai paneer core with a thick golden crunchy exterior seasoned with special peri-peri herbs.',
    priceHalf: 80,
    priceFull: 150,
    rating: 4.9,
    reviews: 290,
    spicy: '🌶️🌶️ Medium Crisp',
    prepTime: '10 Mins',
    doughRecipe: 'Cornflake crumb coated outer shell enclosing tender steamed paneer dumplings.',
    fillingRecipe: 'High-protein fresh paneer, bell peppers, butter, green chilies, and secret chaat masala blend.'
  }
];

// --- 2. HERO DISHES WITH REALISTIC VISUALS ---
const HERO_DISHES = {
  steamed: {
    id: 'steamed-veg',
    title: 'Classic Steamed Mountain Veg Momos',
    img: 'steamed_momos.jpg',
    priceHalf: 50,
    priceFull: 90,
    desc: 'Hand-pleated paper-thin translucent dough stuffed with shredded Himalayan cabbage, carrots, bell peppers, fresh ginger extract, and tossed in melted butter.'
  },
  kurkure: {
    id: 'kurkure-crunchy',
    title: 'Crispy Kurkure Veg Momos',
    img: 'kurkure_momos.jpg',
    priceHalf: 70,
    priceFull: 130,
    desc: 'Steamed tender dumplings dipped in seasoned herb batter, coated in crushed flaky cornflakes, and fried crisp to golden perfection with peri-peri masala.'
  },
  tandoori: {
    id: 'tandoori-smoked',
    title: 'Smoky Charcoal Tandoori Veg Momos',
    img: 'tandoori_momos.jpg',
    priceHalf: 80,
    priceFull: 150,
    desc: 'Marinated in thick spiced curd, degi mirch, and mustard oil, roasted on skewers over live charcoal embers, and butter tossed with mint chutney.'
  },
  afghani: {
    id: 'afghani-malai',
    title: 'Creamy Afghani Malai Veg Momos',
    img: 'afghani_momos.jpg',
    priceHalf: 90,
    priceFull: 160,
    desc: 'Drenched in a velvety reduction of cashew nut paste, fresh dairy cream, butter, and fragrant green cardamom with green chili garnish.'
  }
};

// --- 3. APPLICATION STATE ---
let cart = {};
let currentTable = 'Table 3';
let selectedCategory = 'all';
let searchKeyword = '';
let activeHeroDishId = 'steamed-veg';

try {
  const saved = localStorage.getItem('momocraft_cart');
  if (saved) cart = JSON.parse(saved);
  const savedTbl = localStorage.getItem('momocraft_table');
  if (savedTbl) currentTable = savedTbl;
} catch(e) {}

// --- 4. TOAST NOTIFICATIONS ---
function showToast(msg, icon = 'fa-solid fa-circle-check', color = 'text-emerald-400') {
  const shelf = document.getElementById('toast-shelf');
  if (!shelf) return;
  const toast = document.createElement('div');
  toast.className = 'glass-card px-4 py-3 rounded-2xl border border-slate-700 shadow-2xl flex items-center space-x-3 text-xs text-white transform transition-all duration-300 translate-y-3 opacity-0';
  toast.innerHTML = `<i class="${icon} ${color} text-sm"></i><span class="font-medium">${msg}</span>`;
  shelf.appendChild(toast);

  requestAnimationFrame(() => toast.classList.remove('translate-y-3', 'opacity-0'));
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-4');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- 5. RENDER MENU WITH REALISTIC VISUALS ---
function renderVegMenu() {
  const grid = document.getElementById('menu-items-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = VEG_MENU.filter(item => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                        item.desc.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 space-y-2">
        <div class="text-3xl">🌱</div>
        <p class="font-bold text-white text-base">No momos found matching '${searchKeyword}'</p>
        <p class="text-xs">Try searching for 'kurkure', 'paneer', 'tandoori' or click 'All Veg Momos'.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'dish-3d-card glass-card rounded-3xl p-5 border border-slate-800 flex flex-col justify-between relative group';
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="glare-overlay"></div>

      <!-- Top Row: Veg Mark & Rating -->
      <div class="flex items-center justify-between pb-2 relative z-10">
        <div class="flex items-center space-x-2">
          <span class="w-4 h-4 border border-emerald-500 p-0.5 rounded-sm flex items-center justify-center">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          </span>
          <span class="bg-emerald-500/20 text-emerald-400 text-[10px] uppercase font-black px-2 py-0.5 rounded-full border border-emerald-500/40">
            ${item.tag}
          </span>
        </div>
        <div class="flex items-center space-x-1 text-xs text-amber-400 font-bold">
          <i class="fa-solid fa-star text-[10px]"></i>
          <span>${item.rating}</span>
          <span class="text-slate-500 text-[10px]">(${item.reviews})</span>
        </div>
      </div>

      <!-- Realistic Visual Photo Thumbnail -->
      <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden my-2 shadow-lg border border-slate-700/80 relative bg-slate-950">
        <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
        <div class="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-slate-700 text-[10px] text-white flex items-center space-x-1.5">
          <span>${item.icon}</span>
          <span class="text-slate-300 font-medium">${item.spicy}</span>
          <span>•</span>
          <span class="text-amber-400 font-bold"><i class="fa-solid fa-clock mr-1 text-[9px]"></i>${item.prepTime}</span>
        </div>
      </div>

      <!-- Title & Description -->
      <div class="space-y-1.5 flex-1 relative z-10 pt-1">
        <h3 class="font-heading font-black text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors leading-tight">
          ${item.name}
        </h3>
        <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">
          ${item.desc}
        </p>
      </div>

      <!-- Portion Toggle & Pricing -->
      <div class="mt-4 pt-3 border-t border-slate-800 relative z-10">
        <div class="flex items-center justify-between text-xs mb-2.5">
          <span class="text-slate-400 font-medium">Portion Size:</span>
          <div class="flex items-center space-x-1 bg-slate-950 p-0.5 rounded-xl border border-slate-800">
            <button data-portion="half" class="portion-choice-btn active px-2.5 py-1 rounded-lg font-bold text-[11px] bg-emerald-600 text-white transition">
              Half (5 pcs)
            </button>
            <button data-portion="full" class="portion-choice-btn px-2.5 py-1 rounded-lg font-semibold text-[11px] text-slate-400 hover:text-white transition">
              Full (10 pcs)
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div>
            <span class="text-[10px] text-slate-400 block">Price</span>
            <div class="flex items-baseline space-x-1">
              <span class="text-xl font-black font-heading text-amber-400 price-val">₹${item.priceHalf}</span>
              <span class="text-[10px] text-slate-400 portion-unit">/ 5 pcs</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <button class="btn-inspect-recipe w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 flex items-center justify-center text-xs transition" title="Secret Recipe">
              <i class="fa-solid fa-book-open"></i>
            </button>
            <button class="btn-order-add bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center space-x-1.5 shadow-md shadow-emerald-600/25 transition active:scale-95">
              <i class="fa-solid fa-plus"></i>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    `;

    attachTilt(card);

    const portionBtns = card.querySelectorAll('.portion-choice-btn');
    const priceVal = card.querySelector('.price-val');
    const portionUnit = card.querySelector('.portion-unit');
    let chosenPortion = 'half';

    portionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        portionBtns.forEach(b => {
          b.classList.remove('active', 'bg-emerald-600', 'text-white');
          b.classList.add('text-slate-400');
        });
        btn.classList.add('active', 'bg-emerald-600', 'text-white');
        btn.classList.remove('text-slate-400');

        chosenPortion = btn.dataset.portion;
        if (chosenPortion === 'full') {
          priceVal.textContent = `₹${item.priceFull}`;
          portionUnit.textContent = '/ 10 pcs';
        } else {
          priceVal.textContent = `₹${item.priceHalf}`;
          portionUnit.textContent = '/ 5 pcs';
        }
      });
    });

    card.querySelector('.btn-inspect-recipe').addEventListener('click', () => {
      openRecipeModal(item);
    });

    card.querySelector('.btn-order-add').addEventListener('click', () => {
      addToCart(item.id, chosenPortion);
    });

    grid.appendChild(card);
  });
}

// --- 6. 3D TILT WITH REALISTIC PERSPECTIVE ---
function attachTilt(el) {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    el.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// --- 7. REALISTIC BILLOWING STEAM CANVAS SIMULATION ---
function initRealisticSteam() {
  const canvas = document.getElementById('steam-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * 0.35 + Math.random() * (width * 0.3),
      y: height * 0.5 + Math.random() * (height * 0.4),
      radius: 18 + Math.random() * 26,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.6 - Math.random() * 0.8,
      alpha: 0.05 + Math.random() * 0.15,
      life: Math.random()
    });
  }

  function drawSteam() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx + Math.sin(p.life * 5) * 0.3;
      p.y += p.vy;
      p.life += 0.007;

      const currentAlpha = p.alpha * (1 - (p.y / (height * 0.8)));

      if (currentAlpha > 0 && p.y > 0) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, currentAlpha)})`);
        grad.addColorStop(0.6, `rgba(255, 255, 255, ${Math.max(0, currentAlpha * 0.4)})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (p.y < 20 || p.life >= 1) {
        p.x = width * 0.35 + Math.random() * (width * 0.3);
        p.y = height * 0.65 + Math.random() * (height * 0.25);
        p.life = 0;
      }
    });

    requestAnimationFrame(drawSteam);
  }
  drawSteam();

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });
}

// --- 8. CART & ORDERS ---
function addToCart(itemId, portion = 'half') {
  const key = `${itemId}_${portion}`;
  if (cart[key]) {
    cart[key].qty += 1;
  } else {
    cart[key] = {
      itemId: itemId,
      portion: portion,
      qty: 1
    };
  }
  saveCart();
  updateCartUI();

  const item = VEG_MENU.find(i => i.id === itemId);
  showToast(`Added ${item.name} (${portion.toUpperCase()}) to cart!`);

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 22,
      spread: 60,
      origin: { y: 0.85, x: 0.9 },
      colors: ['#22c55e', '#f97316', '#fbbf24']
    });
  }
}

function modifyCartQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('momocraft_cart', JSON.stringify(cart));
  } catch(e) {}
}

function updateCartUI() {
  let totalCount = 0;
  let totalAmount = 0;

  const list = document.getElementById('cart-items-list');
  if (!list) return;
  list.innerHTML = '';

  const keys = Object.keys(cart);
  if (keys.length === 0) {
    list.innerHTML = `
      <div id="cart-empty-view" class="text-center py-16 space-y-3">
        <div class="text-4xl">🥟</div>
        <p class="font-bold text-white text-sm">Your order is empty</p>
        <p class="text-xs text-slate-400">Select any pure veg momos from the menu!</p>
      </div>
    `;
  } else {
    keys.forEach(k => {
      const entry = cart[k];
      const item = VEG_MENU.find(i => i.id === entry.itemId);
      if (!item) return;

      const unitPrice = entry.portion === 'full' ? item.priceFull : item.priceHalf;
      const lineTotal = unitPrice * entry.qty;

      totalCount += entry.qty;
      totalAmount += lineTotal;

      const row = document.createElement('div');
      row.className = 'bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-xs';
      row.innerHTML = `
        <div class="flex items-center space-x-2.5 overflow-hidden">
          <img src="${item.img}" class="w-10 h-10 rounded-lg object-cover border border-slate-700">
          <div class="truncate">
            <h4 class="font-bold text-white truncate">${item.name}</h4>
            <div class="text-[11px] text-slate-400">
              <span class="text-emerald-400 uppercase font-bold">${entry.portion} (${entry.portion === 'full' ? '10 pcs' : '5 pcs'})</span> • ₹${unitPrice}
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2 shrink-0">
          <div class="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-2 py-1 rounded-xl">
            <button class="btn-minus text-slate-400 hover:text-white font-bold px-1">-</button>
            <span class="font-bold text-white text-xs w-4 text-center">${entry.qty}</span>
            <button class="btn-plus text-slate-400 hover:text-white font-bold px-1">+</button>
          </div>
          <span class="font-black font-heading text-amber-400 text-xs w-12 text-right">₹${lineTotal}</span>
        </div>
      `;

      row.querySelector('.btn-minus').addEventListener('click', () => modifyCartQty(k, -1));
      row.querySelector('.btn-plus').addEventListener('click', () => modifyCartQty(k, 1));

      list.appendChild(row);
    });
  }

  document.getElementById('cart-pill-count').textContent = totalCount;
  document.getElementById('cart-pill-total').textContent = `₹${totalAmount}`;
  document.getElementById('cart-calc-subtotal').textContent = `₹${totalAmount}`;
  document.getElementById('cart-calc-grand-total').textContent = `₹${totalAmount}`;
  document.getElementById('cart-table-badge').textContent = currentTable;
  document.getElementById('header-table-name').textContent = currentTable;
}

// --- 9. RECIPE DETAILS MODAL ---
function openRecipeModal(item) {
  document.getElementById('modal-dish-icon').textContent = item.icon;
  document.getElementById('modal-dish-title').textContent = item.name;
  document.getElementById('modal-dish-badge').textContent = `100% PURE VEG • ${item.tag.toUpperCase()}`;
  document.getElementById('modal-spice').textContent = item.spicy;
  document.getElementById('modal-time').textContent = item.prepTime;
  document.getElementById('modal-dough').textContent = item.doughRecipe;
  document.getElementById('modal-filling').textContent = item.fillingRecipe;

  const addBtn = document.getElementById('modal-btn-add-order');
  addBtn.onclick = () => {
    addToCart(item.id, 'half');
    closeRecipeModal();
  };

  document.getElementById('recipe-modal').classList.remove('hidden');
}

function openRecipeById(id) {
  const item = VEG_MENU.find(i => i.id === id);
  if (item) openRecipeModal(item);
}

function closeRecipeModal() {
  document.getElementById('recipe-modal').classList.add('hidden');
}

// --- 10. QR CODE STANDEE GENERATOR ---
let qrInstance = null;
function refreshStandee() {
  const shop = document.getElementById('standee-shop-input').value;
  const table = document.getElementById('standee-table-input').value;
  const phone = document.getElementById('standee-phone-input').value;
  const url = document.getElementById('standee-url-input').value || 'https://momocraft.menu';
  const tagline = document.getElementById('standee-tagline-input').value;

  document.getElementById('preview-shop').textContent = shop;
  document.getElementById('preview-table').textContent = table;
  document.getElementById('preview-phone').textContent = phone;
  document.getElementById('preview-tagline').textContent = tagline;

  const qrContainer = document.getElementById('standee-qrcode-canvas');
  qrContainer.innerHTML = '';

  if (typeof QRCode !== 'undefined') {
    qrInstance = new QRCode(qrContainer, {
      text: url,
      width: 180,
      height: 180,
      colorDark: '#0a0d14',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

// --- 11. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderVegMenu();
  updateCartUI();
  initRealisticSteam();
  refreshStandee();

  const heroCard = document.getElementById('hero-3d-card');
  if (heroCard) attachTilt(heroCard);

  // Hero dish pill switcher
  document.querySelectorAll('.hero-dish-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.hero-dish-pill').forEach(p => {
        p.classList.remove('active', 'bg-brand-600', 'text-white');
        p.classList.add('bg-slate-800', 'text-slate-300');
      });
      pill.classList.add('active', 'bg-brand-600', 'text-white');
      pill.classList.remove('bg-slate-800', 'text-slate-300');

      const key = pill.dataset.dish;
      const dishData = HERO_DISHES[key];
      if (dishData) {
        activeHeroDishId = dishData.id;
        document.getElementById('hero-dish-title').textContent = dishData.title;
        document.getElementById('hero-dish-desc').textContent = dishData.desc;
        const heroImg = document.getElementById('hero-dish-img');
        if (heroImg) heroImg.src = dishData.img;
        const heroPrice = document.getElementById('hero-dish-price');
        if (heroPrice) heroPrice.innerHTML = `₹${dishData.priceHalf} <span class="text-[10px] text-slate-400 font-normal">/ Half</span> • ₹${dishData.priceFull} <span class="text-[10px] text-slate-400 font-normal">/ Full</span>`;
      }
    });
  });

  document.getElementById('btn-hero-read-recipe')?.addEventListener('click', () => {
    openRecipeById(activeHeroDishId);
  });
  document.getElementById('btn-hero-order-this')?.addEventListener('click', () => {
    addToCart(activeHeroDishId, 'half');
  });

  // Category filter tabs
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(b => {
        b.classList.remove('active', 'bg-emerald-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-emerald-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      selectedCategory = btn.dataset.cat;
      renderVegMenu();
    });
  });

  // Search input
  document.getElementById('menu-search-input')?.addEventListener('input', (e) => {
    searchKeyword = e.target.value.trim();
    renderVegMenu();
  });

  // Cart Drawer
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const openCart = () => {
    cartOverlay.classList.remove('hidden');
    cartDrawer.classList.remove('translate-x-full');
  };
  const closeCart = () => {
    cartOverlay.classList.add('hidden');
    cartDrawer.classList.add('translate-x-full');
  };

  document.getElementById('btn-open-cart')?.addEventListener('click', openCart);
  document.getElementById('btn-close-cart')?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  // Modals
  document.getElementById('btn-close-recipe-modal')?.addEventListener('click', closeRecipeModal);
  document.getElementById('recipe-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'recipe-modal') closeRecipeModal();
  });

  // Table Seating Modal
  const tableModal = document.getElementById('table-modal');
  document.getElementById('btn-select-table')?.addEventListener('click', () => {
    tableModal.classList.remove('hidden');
  });
  document.getElementById('btn-close-table-modal')?.addEventListener('click', () => {
    tableModal.classList.add('hidden');
  });
  document.querySelectorAll('.tbl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tbl-btn').forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-200');
      });
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-200');
      currentTable = btn.dataset.tbl;
    });
  });
  document.getElementById('btn-confirm-table')?.addEventListener('click', () => {
    tableModal.classList.add('hidden');
    document.getElementById('header-table-name').textContent = currentTable;
    document.getElementById('standee-table-input').value = currentTable;
    try {
      localStorage.setItem('momocraft_table', currentTable);
    } catch(e) {}
    updateCartUI();
    refreshStandee();
    showToast(`Table seating set to ${currentTable}`);
  });

  // Standee Controls
  document.getElementById('btn-update-qr')?.addEventListener('click', () => {
    refreshStandee();
    showToast('Table Standee Updated!');
  });
  document.getElementById('btn-print-standee')?.addEventListener('click', () => {
    window.print();
  });

  // WhatsApp Order Dispatch
  document.getElementById('btn-send-whatsapp-order')?.addEventListener('click', () => {
    const keys = Object.keys(cart);
    if (keys.length === 0) {
      showToast('Please add delicious pure veg momos to cart first!', 'fa-solid fa-triangle-exclamation', 'text-amber-400');
      return;
    }

    let total = 0;
    let lines = [
      `*🌱 NEW 100% PURE VEG ORDER - ${currentTable.toUpperCase()}*`,
      `----------------------------------`
    ];

    keys.forEach(k => {
      const entry = cart[k];
      const item = VEG_MENU.find(i => i.id === entry.itemId);
      if (item) {
        const price = entry.portion === 'full' ? item.priceFull : item.priceHalf;
        const lineTotal = price * entry.qty;
        total += lineTotal;
        lines.push(`• ${item.name} (${entry.portion.toUpperCase()}) x ${entry.qty} = ₹${lineTotal}`);
      }
    });

    const notes = document.getElementById('order-notes-input').value.trim();
    if (notes) {
      lines.push(`----------------------------------`);
      lines.push(`*Special Request:* ${notes}`);
    }

    lines.push(`----------------------------------`);
    lines.push(`*Total Amount: ₹${total}*`);
    lines.push(`*Seating / Location:* ${currentTable}`);
    lines.push(`Please confirm cooking time. Thank you!`);

    const encoded = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/919876543210?text=${encoded}`;
    window.open(waUrl, '_blank');
  });

});
