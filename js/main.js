/**
 * לחיים בכריתים – Tablet Restaurant App
 */

/* ============================================================
   תרגומים
   ============================================================ */
const TRANSLATIONS = {
  he: {
    bh: 'ב״ה',
    welcome: 'ברוכים הבאים',
    heroRestaurant: 'מסעדת לחיים בכרתים',
    kosher: 'כשר למהדרין',
    hoursDisplay: '14:00–21:00',
    restaurantName: 'לחיים בכריתים',
    pageTitle: 'לחיים בכריתים',
    toMenu: 'צפייה בתפריט',
    search: 'חיפוש',
    myCart: 'הסל שלי',
    cartTitle: 'ההזמנה שלך',
    cartEmpty: 'הסל ריק',
    cartEmptyHint: 'בחרו מנות מהתפריט',
    total: 'סה״כ',
    viewCart: 'צפה בסל',
    sendOrder: 'שליחת הזמנה למלצר',
    searchPlaceholder: 'חיפוש לפי שם מנה...',
    noResults: 'לא נמצאו מנות',
    orderSent: 'ההזמנה נשלחה למלצר בהצלחה!',
    itemsInCart: '{n} פריטים בסל',
    itemsInCartZero: 'אין פריטים בסל',
    oneItemInCart: 'פריט אחד בסל',
    currency: '€',
    langToggleAria: 'החלפת שפה – עברית / English',
    close: 'סגור',
    backHome: 'חזרה למסך הבית',
    mainsNote: 'כל המנות העיקריות מוגשות עם תוספת אחת חמה (למעט שיפודי קבב ומוקפץ עוף).',
    mainsSidesTitle: 'תוספות לבחירה',
    mainsSidesList: "צ'יפס פריך | אורז לבן | שעועית ירוקה | פירה | ירקות בתנור",
    sidesIncluded: 'כלול',
    sidesIncludedNote: 'כלול במנה העיקרית',
    chooseSidesTitle: 'בחרו תוספת חמה',
    chooseSidesSubtitle: 'תוספת אחת למנה: {name}',
    sidesSelected: '{count} מתוך 1 נבחרו',
    sidesContinue: 'המשך',
    chooseMainFirst: 'יש לבחור מנה עיקרית לפני תוספת חמה',
    addToCart: 'הוסף {name}',
    addToCartModal: 'הוסף לסל',
    decrease: 'הפחת כמות',
    increase: 'הוסף כמות',
    sideForMain: 'תוספת ל־{name}',
    servedWith: 'מוגש עם: {sides}',
    maxSidesPerMain: 'ניתן לבחור תוספת חמה אחת לכל מנה עיקרית',
    categories: {
      starters: 'ראשונות ונשנושים',
      mains: 'מנות עיקריות',
      salads: 'סלטים',
      desserts: 'קינוחים',
      coldDrinks: 'שתייה קלה',
      hotDrinks: 'שתייה חמה',
      hotSides: 'תוספות חמות לבחירה',
    },
  },
  en: {
    bh: 'B"H',
    welcome: 'Welcome',
    heroRestaurant: 'Lechaim Restaurant in Crete',
    kosher: 'Mehadrin Kosher',
    hoursDisplay: '14:00–21:00',
    restaurantName: 'LeChaim in Keri',
    pageTitle: 'LeChaim in Keri',
    toMenu: 'View Menu',
    search: 'Search',
    myCart: 'My Cart',
    cartTitle: 'Your Order',
    cartEmpty: 'Cart is empty',
    cartEmptyHint: 'Choose dishes from the menu',
    total: 'Total',
    viewCart: 'View Cart',
    sendOrder: 'Send Order to Waiter',
    searchPlaceholder: 'Search by dish name...',
    noResults: 'No dishes found',
    orderSent: 'Order sent to the waiter!',
    itemsInCart: '{n} items in cart',
    itemsInCartZero: 'No items in cart',
    oneItemInCart: '1 item in cart',
    currency: '€',
    langToggleAria: 'Switch language – Hebrew / English',
    close: 'Close',
    backHome: 'Back to home',
    mainsNote: 'All main courses are served with one hot side (except kebab skewers and stir-fried chicken).',
    mainsSidesTitle: 'Sides to choose from',
    mainsSidesList: 'Crispy fries | White rice | Green beans | Mashed potatoes | Oven vegetables',
    sidesIncluded: 'Included',
    sidesIncludedNote: 'Included with the main course',
    chooseSidesTitle: 'Choose a hot side',
    chooseSidesSubtitle: 'One side for: {name}',
    sidesSelected: '{count} of 1 selected',
    sidesContinue: 'Continue',
    chooseMainFirst: 'Choose a main course before adding a hot side',
    addToCart: 'Add {name}',
    addToCartModal: 'Add to cart',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    sideForMain: 'Side for {name}',
    servedWith: 'Served with: {sides}',
    maxSidesPerMain: 'One hot side per main course',
    categories: {
      starters: 'Starters & Snacks',
      mains: 'Main Courses',
      salads: 'Salads',
      desserts: 'Desserts',
      coldDrinks: 'Soft Drinks',
      hotDrinks: 'Hot Drinks',
      hotSides: 'Hot Sides to Choose',
    },
  },
};

/** תרגום שמות ותיאורי מנות */
const DISH_I18N = {
  en: {
    'salad-plate': { name: 'Opening Salad Platter', desc: 'Selection of refreshing house salads with warm pitas (recommended for the table center)' },
    hummus: { name: 'House Hummus', desc: 'Creamy handmade hummus, served with olive oil, cumin and pitas' },
    'hummus-egg': { name: 'Hummus with Egg', desc: 'Creamy handmade hummus, served with olive oil, cumin and pitas, topped with egg' },
    'hummus-meat': { name: 'Hummus with Meat', desc: 'Creamy handmade hummus, served with olive oil, cumin and pitas, topped with meat' },
    mushrooms: { name: 'Hot Mushrooms', desc: 'Fresh mushrooms sautéed in garlic, olive oil and parsley' },
    'fries-classic': { name: 'Classic Fries', desc: 'Crispy potato fries' },
    'fries-side': { name: 'Crispy Fries', desc: '' },
    schnitzel: { name: "Chef's Schnitzel", desc: 'Crispy chicken breast in golden breadcrumb coating' },
    'chicken-steak': { name: 'Grilled Chicken Steak', desc: 'Juicy chicken cut with Mediterranean seasoning' },
    denis: { name: 'Whole Baked Sea Bream', desc: 'Fresh sea bream baked with herbs and olive oil' },
    'denis-fillet': { name: 'Oven-Baked Sea Bream Fillet', desc: 'Sea bream fillet baked with green herbs and olive oil' },
    salmon: { name: 'Oven-Baked Salmon', desc: 'Salmon fillet baked with delicate seasoning' },
    kebab: { name: 'Kebab Skewers', desc: 'Served with tahini and a small side salad' },
    'chicken-stirfry': { name: 'Stir-Fried Chicken', desc: 'Chicken pieces stir-fried with vegetables in soy and ginger sauce' },
    'white-rice': { name: 'White Rice', desc: '' },
    'green-beans': { name: 'Green Beans', desc: '' },
    puree: { name: 'Mashed Potatoes', desc: '' },
    'oven-vegetables': { name: 'Oven Vegetables', desc: '' },
    'chicken-salad': { name: 'Rich Chicken Salad', desc: 'Warm chicken on lettuce with seasonal vegetables and vinaigrette' },
    'israeli-salad': { name: 'Israeli Chopped Salad', desc: 'Fresh chopped vegetable salad with herbs' },
    'green-salad': { name: 'Green Salad', desc: 'Selection of fresh leaves with vinaigrette' },
    'market-salad': { name: 'Market Salad', desc: 'Fresh seasonal vegetables' },
    'fruit-plate': { name: 'Seasonal Fruit Platter', desc: 'Selection of fresh, refreshing cut fruits' },
    coke: { name: 'Coca-Cola', desc: '' },
    'coke-zero': { name: 'Coke Zero', desc: '' },
    fanta: { name: 'Fanta', desc: '' },
    sprite: { name: 'Sprite', desc: '' },
    'red-bull': { name: 'Red Bull', desc: '' },
    heineken: { name: 'Heineken', desc: '' },
    corona: { name: 'Corona', desc: '' },
    soda: { name: 'Soda', desc: '' },
    water: { name: 'Mineral Water', desc: '' },
    'fruit-shake': { name: 'Refreshing Fruit Shake', desc: 'Water / orange / soda base (depending on available fruits)' },
    'espresso-hafukh': { name: 'Espresso / Hafukh', desc: '' },
    'black-coffee': { name: 'Black Coffee', desc: '' },
    'mint-tea': { name: 'Hot Mint Tea', desc: '' },
  },
};

let currentLang = 'he';

function getItemName(item) {
  if (currentLang === 'en' && DISH_I18N.en[item.id]) {
    return DISH_I18N.en[item.id].name;
  }
  return item.name;
}

function ensurePeriod(text) {
  const trimmed = text?.trim();
  if (!trimmed) return text ?? '';
  if (/[.!?]$/.test(trimmed)) return trimmed;
  return `${trimmed}.`;
}

function getItemDesc(item) {
  let desc;
  if (currentLang === 'en' && DISH_I18N.en[item.id]) {
    desc = DISH_I18N.en[item.id].desc;
  } else {
    desc = item.desc;
  }
  return ensurePeriod(desc);
}

/** מעדכן את מצב הכפתורים (מסך בית + תפריט) */
function updateLangToggleUI() {
  document.querySelectorAll('.lang-toggle [data-lang]').forEach((opt) => {
    opt.classList.toggle('lang-toggle__option--active', opt.dataset.lang === currentLang);
  });
}

function setDocumentLanguage() {
  const dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.title = t('pageTitle');
}

/** החלפת שפה */
function toggleLanguage(targetLang) {
  const nextLang = targetLang === 'he' || targetLang === 'en'
    ? targetLang
    : (currentLang === 'he' ? 'en' : 'he');

  if (nextLang === currentLang) return;

  currentLang = nextLang;
  setDocumentLanguage();
  updateLangToggleUI();
  applyTranslations();
  refreshLocalizedUI();
}

function t(key) {
  const keys = key.split('.');
  let value = TRANSLATIONS[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

function tReplace(key, vars) {
  let text = t(key);
  Object.entries(vars).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, v);
  });
  return text;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
}

function refreshLocalizedUI() {
  if (!els.menuScreen.classList.contains('screen--active')) return;

  renderCategories();
  updateSectionTitle();
  renderDishes();
  updateCart();

  if (state.dishModalId) {
    const item = findItem(state.dishModalId);
    if (item) {
      els.dishModalImage.alt = getItemName(item);
      els.dishModalTitle.textContent = getItemName(item);
      const desc = getItemDesc(item);
      els.dishModalDesc.textContent = desc;
      els.dishModalDesc.hidden = !desc;
      els.dishModalPrice.textContent = formatDishPrice(item.price);
      updateDishModalAddBtn();
    }
  }

  if (state.openSidesMainLineId) refreshSidesModal();
}

/** נתיב תמונת מנה (WebP) */
function dishImage(id) {
  return `assets/images/dishes/${id}.webp`;
}

const DEFAULT_DISH_IMAGE = dishImage('salmon');

/* ============================================================
   תפריט
   ============================================================ */
const MENU = [
  {
    id: 'starters',
    labelKey: 'categories.starters',
    items: [
      { id: 'salad-plate', name: 'פלטת סלטים פתיחה', desc: 'מבחר סלטי הבית המרעננים לצד פיתות חמות (מומלץ למרכז שולחן).', price: 15, image: dishImage('salad-plate') },
      { id: 'hummus', name: 'חומוס הבית', desc: 'חומוס קרמי בעבודת יד, מוגש עם שמן זית, כמון ופיתות.', price: 15, image: dishImage('hummus') },
      { id: 'hummus-egg', name: 'חומוס עם ביצה', desc: 'חומוס קרמי בעבודת יד, מוגש עם שמן זית, כמון ופיתות בתוספת ביצה.', price: 17, image: dishImage('hummus-egg') },
      { id: 'hummus-meat', name: 'חומוס בשר', desc: 'חומוס קרמי בעבודת יד, מוגש עם שמן זית, כמון ופיתות בתוספת בשר.', price: 19, image: dishImage('hummus-meat') },
      { id: 'mushrooms', name: 'פטריות חמות', desc: 'פטריות טריות מוקפצות בשום, שמן זית ופטרוזיליה.', price: 10, image: dishImage('mushrooms') },
      { id: 'fries-classic', name: "צ'יפס קלאסי", desc: 'מנת תפוחי אדמה פריכים.', price: 10, image: dishImage('fries') },
    ],
  },
  {
    id: 'mains',
    labelKey: 'categories.mains',
    items: [
      { id: 'schnitzel', name: 'שניצל של השף', desc: 'חזה עוף פריך בציפוי פירורי לחם מוזהבים.', price: 25, image: dishImage('schnitzel') },
      { id: 'chicken-steak', name: 'סטייק פרגית בגריל', desc: 'נתח פרגית עסיסי בתיבול ים־תיכוני.', price: 26, image: dishImage('chicken-steak') },
      { id: 'denis', name: 'דג שלם בתנור', desc: 'דניס טרי אפוי עם עשבי תיבול ושמן זית.', price: 29, image: dishImage('denis') },
      { id: 'denis-fillet', name: 'פילה דניס בתנור', desc: 'פילה דניס בתנור בעשבי תיבול ירוקים ושמן זית.', price: 29, image: dishImage('denis-fillet') },
      { id: 'salmon', name: 'נתח סלמון בתנור', desc: 'פילה סלמון אפוי בתיבול עדין.', price: 29, image: dishImage('salmon') },
      { id: 'kebab', name: 'שיפודי קבב', desc: 'מוגש לצד טחינה וסלטון קטן.', price: 27, image: dishImage('kebab') },
      { id: 'chicken-stirfry', name: 'מוקפץ עוף', desc: 'נתחי עוף מוקפצים עם ירקות ברוטב סויה וג\'ינג\'ר.', price: 20, image: dishImage('chicken-stirfry') },
    ],
    sections: [
      {
        labelKey: 'categories.hotSides',
        items: [
          { id: 'fries-side', name: "צ'יפס פריך", desc: '', price: 0, image: dishImage('fries') },
          { id: 'white-rice', name: 'אורז לבן', desc: '', price: 0, image: dishImage('white-rice') },
          { id: 'green-beans', name: 'שעועית ירוקה', desc: '', price: 0, image: dishImage('green-beans') },
          { id: 'puree', name: 'פירה', desc: '', price: 0, image: dishImage('puree') },
          { id: 'oven-vegetables', name: 'ירקות בתנור', desc: '', price: 0, image: dishImage('oven-vegetables') },
        ],
      },
    ],
  },
  {
    id: 'salads',
    labelKey: 'categories.salads',
    items: [
      { id: 'chicken-salad', name: 'סלט פרגית עשיר', desc: 'נתחי פרגית חמים על מצע חסות, ירקות העונה ורוטב ויניגרט.', price: 18, image: dishImage('chicken-salad') },
      { id: 'israeli-salad', name: 'סלט קצוץ ישראלי', desc: 'סלט ירקות קצוץ טרי עם עשבי תיבול.', price: 10, image: dishImage('israeli-salad') },
      { id: 'green-salad', name: 'סלט ירוק', desc: 'מבחר עלים טריים עם רוטב ויניגרט.', price: 9, image: dishImage('green-salad') },
      { id: 'market-salad', name: 'סלט שוק', desc: 'ירקות העונה טריים.', price: 9, image: dishImage('market-salad') },
    ],
  },
  {
    id: 'desserts',
    labelKey: 'categories.desserts',
    items: [
      { id: 'fruit-plate', name: 'פלטת פירות העונה', desc: 'מבחר פירות טריים, מרעננים וחתוכים.', price: 18, image: dishImage('fruit-plate') },
    ],
  },
  {
    id: 'coldDrinks',
    labelKey: 'categories.coldDrinks',
    items: [
      { id: 'coke', name: 'קוקה קולה', desc: '', price: 3, image: dishImage('coke') },
      { id: 'coke-zero', name: 'קולה זירו', desc: '', price: 3, image: dishImage('coke-zero') },
      { id: 'fanta', name: 'פאנטה', desc: '', price: 3, image: dishImage('fanta') },
      { id: 'sprite', name: 'ספרייט', desc: '', price: 3, image: dishImage('sprite') },
      { id: 'red-bull', name: 'רד בול', desc: '', price: 3, image: dishImage('red-bull') },
      { id: 'heineken', name: 'בירה הייניקן', desc: '', price: 4, image: dishImage('heineken') },
      { id: 'corona', name: 'בירה קורונה', desc: '', price: 4, image: dishImage('corona') },
      { id: 'soda', name: 'סודה', desc: '', price: 3, image: dishImage('soda') },
      { id: 'water', name: 'מים מינרליים', desc: '', price: 3, image: dishImage('water') },
      { id: 'fruit-shake', name: 'שייק פירות מרענן', desc: 'על בסיס מים / תפוזים / סודה (בהתאם לפירות הזמינים).', price: 8, image: dishImage('fruit-shake') },
    ],
  },
  {
    id: 'hotDrinks',
    labelKey: 'categories.hotDrinks',
    items: [
      { id: 'espresso-hafukh', name: 'קפה אספרסו / הפוך', desc: '', price: 5, image: dishImage('cappuccino') },
      { id: 'black-coffee', name: 'קפה שחור', desc: '', price: 5, image: dishImage('black-coffee') },
      { id: 'mint-tea', name: 'תה חם עם נענע', desc: '', price: 5, image: dishImage('mint-tea') },
    ],
  },
];

/** מנות עיקריות הזכאיות לתוספת חמה אחת */
const MAIN_COURSE_IDS = new Set(['schnitzel', 'chicken-steak', 'denis', 'denis-fillet', 'salmon']);
const HOT_SIDE_IDS = new Set(['fries-side', 'white-rice', 'green-beans', 'puree', 'oven-vegetables']);
const MAX_SIDES_PER_MAIN = 1;

function isMainCourse(itemId) {
  return MAIN_COURSE_IDS.has(itemId);
}

function isHotSide(itemId) {
  return HOT_SIDE_IDS.has(itemId);
}

function createCartLineId() {
  return `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function findCartLine(lineId) {
  return state.cartLines.find((l) => l.lineId === lineId);
}

/* ============================================================
   מצב
   ============================================================ */
const state = {
  activeCategory: MENU[0].id,
  searchQuery: '',
  cartLines: [],
  cartLineOrder: [],
  lastMainLineId: null,
  cartDrawerOpen: false,
  searchOpen: false,
  dishModalId: null,
  openSidesMainLineId: null,
};

function moveCartLineToTop(lineId) {
  state.cartLineOrder = state.cartLineOrder.filter((id) => id !== lineId);
  state.cartLineOrder.unshift(lineId);
}

function getSideLinesForMain(mainLineId) {
  return state.cartLines.filter((l) => l.linkedToMainLineId === mainLineId);
}

function countSidesForMain(mainLineId) {
  return getSideLinesForMain(mainLineId).reduce((sum, l) => sum + l.qty, 0);
}

function canAddSideToMain(mainLineId, addQty = 1) {
  if (!mainLineId) return false;
  return countSidesForMain(mainLineId) + addQty <= MAX_SIDES_PER_MAIN;
}

function findMainLineForNewSide() {
  if (state.lastMainLineId) {
    const last = findCartLine(state.lastMainLineId);
    if (last && isMainCourse(last.itemId) && canAddSideToMain(last.lineId)) {
      return last.lineId;
    }
  }

  for (const lineId of state.cartLineOrder) {
    const line = findCartLine(lineId);
    if (line && isMainCourse(line.itemId) && canAddSideToMain(line.lineId)) {
      return line.lineId;
    }
  }

  return null;
}

function getCartQtyForItem(itemId) {
  return state.cartLines
    .filter((l) => l.itemId === itemId)
    .reduce((sum, l) => sum + l.qty, 0);
}

function removeCartLine(lineId) {
  const line = findCartLine(lineId);
  if (!line) return;

  if (isMainCourse(line.itemId)) {
    getSideLinesForMain(lineId).forEach((sideLine) => {
      state.cartLines = state.cartLines.filter((l) => l.lineId !== sideLine.lineId);
      state.cartLineOrder = state.cartLineOrder.filter((id) => id !== sideLine.lineId);
    });
    if (state.lastMainLineId === lineId) state.lastMainLineId = null;
    if (state.openSidesMainLineId === lineId) closeSidesModal();
  }

  state.cartLines = state.cartLines.filter((l) => l.lineId !== lineId);
  state.cartLineOrder = state.cartLineOrder.filter((id) => id !== lineId);
}

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(text) {
  return escapeHtml(text);
}

function getHotSideItems() {
  const mains = MENU.find((c) => c.id === 'mains');
  const section = mains?.sections?.find((s) => s.labelKey === 'categories.hotSides');
  return section?.items || [];
}

function getSideQtyForMain(mainLineId, sideItemId) {
  const line = state.cartLines.find(
    (l) => l.linkedToMainLineId === mainLineId && l.itemId === sideItemId
  );
  return line ? line.qty : 0;
}

function addSideToMainLine(mainLineId, sideItemId) {
  const otherSides = state.cartLines.filter(
    (l) => l.linkedToMainLineId === mainLineId && l.itemId !== sideItemId
  );
  otherSides.forEach((line) => removeCartLine(line.lineId));

  if (!canAddSideToMain(mainLineId)) {
    showToast(t('maxSidesPerMain'));
    return false;
  }

  const existing = state.cartLines.find(
    (l) => l.linkedToMainLineId === mainLineId && l.itemId === sideItemId
  );

  if (existing) {
    existing.qty += 1;
    moveCartLineToTop(existing.lineId);
  } else {
    const lineId = createCartLineId();
    state.cartLines.push({
      lineId,
      itemId: sideItemId,
      qty: 1,
      linkedToMainLineId: mainLineId,
    });
    moveCartLineToTop(lineId);
  }

  updateCart();
  refreshSidesModal();
  return true;
}

function removeSideFromMainLine(mainLineId, sideItemId) {
  const line = state.cartLines.find(
    (l) => l.linkedToMainLineId === mainLineId && l.itemId === sideItemId
  );
  if (!line) return;

  if (line.qty <= 1) {
    removeCartLine(line.lineId);
  } else {
    line.qty -= 1;
  }

  updateCart();
  refreshSidesModal();
}

function renderSidesModal() {
  if (!els.sidesModalBody || !state.openSidesMainLineId) return;

  const mainLine = findCartLine(state.openSidesMainLineId);
  if (!mainLine) {
    closeSidesModal();
    return;
  }

  const mainItem = findItem(mainLine.itemId);
  if (!mainItem) {
    closeSidesModal();
    return;
  }

  const selectedCount = countSidesForMain(state.openSidesMainLineId);
  const cellsHtml = getHotSideItems().map((side) => {
    const qty = getSideQtyForMain(state.openSidesMainLineId, side.id);
    const selected = qty > 0;
    const imgPath = side.image || DEFAULT_DISH_IMAGE;

    return `
      <button
        type="button"
        class="sides-picker-cell${selected ? ' is-selected' : ''}"
        data-action="toggle-side"
        data-item-id="${escapeAttr(side.id)}"
        aria-pressed="${selected ? 'true' : 'false'}"
      >
        <span class="sides-picker-thumb">
          <img class="sides-picker-image" src="${escapeAttr(imgPath)}" alt="" loading="lazy" width="72" height="72">
        </span>
        <span class="sides-picker-name">${escapeHtml(getItemName(side))}</span>
        <span class="sides-picker-check" aria-hidden="true">${selected ? '✓' : ''}</span>
      </button>
    `;
  }).join('');

  els.sidesModalBody.innerHTML = `
    <div class="sides-modal__content">
      <header class="sides-modal__header">
        <h2 id="sides-modal-title" class="sides-modal__title">${escapeHtml(t('chooseSidesTitle'))}</h2>
        <p class="sides-modal__subtitle">${escapeHtml(tReplace('chooseSidesSubtitle', { name: getItemName(mainItem) }))}</p>
        <p class="sides-modal__count" aria-live="polite">${escapeHtml(tReplace('sidesSelected', { count: String(selectedCount) }))}</p>
      </header>
      <div class="sides-picker-table" role="group" aria-label="${escapeAttr(t('chooseSidesTitle'))}">
        ${cellsHtml}
      </div>
      <footer class="sides-modal__footer">
        <button type="button" class="btn btn--navy sides-modal__continue" data-action="sides-continue">
          ${escapeHtml(t('sidesContinue'))}
        </button>
      </footer>
    </div>
  `;
}

function refreshSidesModal() {
  if (!state.openSidesMainLineId || els.sidesModal?.hidden) return;
  renderSidesModal();
}

function openSidesModal(mainLineId) {
  if (!els.sidesModal || !els.sidesModalBody) return;

  state.openSidesMainLineId = mainLineId;
  state.lastMainLineId = mainLineId;

  closeDishModal();
  renderSidesModal();

  els.sidesModal.hidden = false;
  els.sidesModal.setAttribute('aria-hidden', 'false');

  requestAnimationFrame(() => {
    els.sidesModal.classList.add('sides-modal--open');
    els.btnCloseSidesModal?.focus();
  });
}

function closeSidesModal() {
  if (!els.sidesModal || els.sidesModal.hidden) return;

  state.openSidesMainLineId = null;
  els.sidesModal.classList.remove('sides-modal--open');
  els.sidesModal.setAttribute('aria-hidden', 'true');

  window.setTimeout(() => {
    if (els.sidesModal.classList.contains('sides-modal--open')) return;
    els.sidesModal.hidden = true;
    els.sidesModalBody.replaceChildren();
  }, 280);
}

/* ============================================================
   DOM
   ============================================================ */
const els = {
  splashScreen: document.getElementById('splash-screen'),
  menuScreen: document.getElementById('menu-screen'),
  btnStart: document.getElementById('btn-start'),
  btnBackHome: document.getElementById('btn-back-home'),
  categoriesNav: document.getElementById('categories-nav'),
  dishesGrid: document.getElementById('dishes-grid'),
  dishesEmpty: document.getElementById('dishes-empty'),
  sectionTitleText: document.getElementById('section-title-text'),
  sectionSubtitle: document.getElementById('section-subtitle'),
  searchInput: document.getElementById('search-input'),
  searchPanel: document.getElementById('search-panel'),
  btnSearchToggle: document.getElementById('btn-search-toggle'),
  btnCloseSearch: document.getElementById('btn-close-search'),
  cartList: document.getElementById('cart-list'),
  cartEmpty: document.getElementById('cart-empty'),
  cartTotal: document.getElementById('cart-total'),
  cartBarTotal: document.getElementById('cart-bar-total'),
  cartBarCount: document.getElementById('cart-bar-count'),
  cartBar: document.getElementById('cart-bar'),
  headerCartBadge: document.getElementById('header-cart-badge'),
  btnSendOrder: document.getElementById('btn-send-order'),
  btnViewCart: document.getElementById('btn-view-cart'),
  btnExpandCart: document.getElementById('btn-expand-cart'),
  btnOpenCart: document.getElementById('btn-open-cart'),
  btnCloseCart: document.getElementById('btn-close-cart'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
  splashLogo: document.getElementById('splash-logo'),
  headerLogo: document.getElementById('header-logo'),
  dishModal: document.getElementById('dish-modal'),
  dishModalBackdrop: document.getElementById('dish-modal-backdrop'),
  dishModalImage: document.getElementById('dish-modal-image'),
  dishModalTitle: document.getElementById('dish-modal-title'),
  dishModalDesc: document.getElementById('dish-modal-desc'),
  dishModalPrice: document.getElementById('dish-modal-price'),
  btnCloseDishModal: document.getElementById('btn-close-dish-modal'),
  btnModalAdd: document.getElementById('btn-modal-add'),
  sidesModal: document.getElementById('sides-modal'),
  sidesModalBody: document.getElementById('sides-modal-body'),
  sidesModalBackdrop: document.getElementById('sides-modal-backdrop'),
  btnCloseSidesModal: document.getElementById('btn-close-sides-modal'),
};

/* ============================================================
   עזר
   ============================================================ */
function getCategoryItems(category) {
  const items = [...(category.items || [])];
  category.sections?.forEach((section) => items.push(...section.items));
  return items;
}

function findItem(itemId) {
  for (const category of MENU) {
    const item = getCategoryItems(category).find((i) => i.id === itemId);
    if (item) return item;
  }
  return null;
}

function formatPrice(amount) {
  return `${t('currency')}${amount}`;
}

function formatDishPrice(amount) {
  if (amount === 0) return t('sidesIncluded');
  return formatPrice(amount);
}

function getCartItemCount() {
  return state.cartLines
    .filter((l) => !isHotSide(l.itemId))
    .reduce((sum, l) => sum + l.qty, 0);
}

function getCartTotal() {
  return state.cartLines.reduce((sum, line) => {
    const item = findItem(line.itemId);
    return sum + (item ? item.price * line.qty : 0);
  }, 0);
}

function buildCartDisplayQueue() {
  const queue = [];
  const used = new Set();

  for (const lineId of state.cartLineOrder) {
    const line = findCartLine(lineId);
    if (!line || used.has(lineId) || line.linkedToMainLineId) continue;

    if (isMainCourse(line.itemId)) {
      const sides = state.cartLineOrder
        .map(findCartLine)
        .filter((l) => l && l.linkedToMainLineId === line.lineId);
      queue.push({ kind: 'main-group', main: line, sides });
      used.add(line.lineId);
      sides.forEach((s) => used.add(s.lineId));
    } else {
      queue.push({ kind: 'single', line });
      used.add(line.lineId);
    }
  }

  for (const line of state.cartLines) {
    if (!used.has(line.lineId)) {
      queue.push({ kind: 'single', line });
    }
  }

  return queue;
}

function getItemsInCartText(count) {
  if (count === 0) return t('itemsInCartZero');
  if (count === 1) return t('oneItemInCart');
  return t('itemsInCart').replace('{n}', count);
}

/** לוגו ב-Header (אייקון + טקסט) – מציג fallback אם קובץ חסר */
function setupHeaderLogo(groupEl) {
  if (!groupEl) return;

  const images = [...groupEl.querySelectorAll('img')];
  const fallback = groupEl.nextElementSibling;
  const status = new Map(images.map((img) => [img, null]));

  const update = () => {
    const values = [...status.values()];
    if (values.some((v) => v === 'error')) {
      groupEl.classList.add('menu-header__logo-group--hidden');
      if (fallback) fallback.style.display = 'flex';
      return;
    }
    if (values.every((v) => v === 'ok')) {
      groupEl.classList.remove('menu-header__logo-group--hidden');
      if (fallback) fallback.style.display = 'none';
    }
  };

  const markImage = (img, ok) => {
    status.set(img, ok ? 'ok' : 'error');
    update();
  };

  images.forEach((img) => {
    img.addEventListener('error', () => markImage(img, false));
    img.addEventListener('load', () => markImage(img, img.naturalWidth > 0));
    if (img.complete) markImage(img, img.naturalWidth > 0);
  });
}

/** לוגו במסך הבית */
function setupSplashLogo(imgEl) {
  if (!imgEl) return;
  imgEl.addEventListener('error', () => {
    imgEl.alt = 'לחיים בכריתים';
    imgEl.style.display = 'none';
  });
}

/* ============================================================
   ניווט מסכים
   ============================================================ */
function showMenu() {
  els.splashScreen.classList.remove('screen--active');
  els.menuScreen.hidden = false;
  els.menuScreen.classList.add('screen--active');
  renderCategories();
  updateSectionTitle();
  renderDishes();
}

function showHome() {
  closeDishModal();
  closeSidesModal();
  closeCartDrawer();
  if (state.searchOpen) closeSearch();
  els.menuScreen.classList.remove('screen--active');
  els.menuScreen.hidden = true;
  els.splashScreen.classList.add('screen--active');
}

/* ============================================================
   קטגוריות ומנות
   ============================================================ */
function renderCategories() {
  els.categoriesNav.innerHTML = MENU.map((cat) => {
    const label = t(cat.labelKey);
    const isActive = cat.id === state.activeCategory ? 'category-btn--active' : '';
    return `
      <button type="button" class="category-btn ${isActive}" data-category="${cat.id}">
        <img src="assets/icons/categories/${cat.id}.svg" alt="" class="category-btn__icon" width="26" height="26">
        <span class="category-btn__label">${label}</span>
      </button>
    `;
  }).join('');
}

function updateSectionTitle() {
  const cat = MENU.find((c) => c.id === state.activeCategory);
  const isSearch = Boolean(state.searchQuery.trim());
  const showMainsNote = !isSearch && state.activeCategory === 'mains';

  if (state.searchQuery.trim()) {
    els.sectionTitleText.textContent = t('search');
  } else if (cat) {
    els.sectionTitleText.textContent = t(cat.labelKey);
  }

  if (els.sectionSubtitle) {
    els.sectionSubtitle.hidden = !showMainsNote;
    if (showMainsNote) {
      els.sectionSubtitle.innerHTML = `
        <p class="section-subtitle__note">${escapeHtml(t('mainsNote'))}</p>
        <p class="section-subtitle__sides-title">${escapeHtml(t('mainsSidesTitle'))}</p>
        <p class="section-subtitle__sides-list">${escapeHtml(t('mainsSidesList'))}</p>
      `;
    } else {
      els.sectionSubtitle.innerHTML = '';
    }
  }
}

function getFilteredItems() {
  const query = state.searchQuery.trim().toLowerCase();

  if (query) {
    const items = [];
    MENU.forEach((cat) => {
      getCategoryItems(cat).forEach((item) => {
        if (isHotSide(item.id)) return;
        if (getItemName(item).toLowerCase().includes(query)) {
          items.push(item);
        }
      });
    });
    return items;
  }

  const category = MENU.find((c) => c.id === state.activeCategory);
  return category ? getCategoryItems(category) : [];
}

function renderSubsectionTitle(labelKey) {
  const label = t(labelKey);
  const note = labelKey === 'categories.hotSides'
    ? `<p class="dishes-subsection-note">${t('sidesIncludedNote')}</p>`
    : '';
  return `
    <h3 class="section-title dishes-subsection-title">
      <img src="assets/icons/leaf-deco.svg" alt="" class="section-title__deco" aria-hidden="true">
      <span class="section-title__text">${label}</span>
      <img src="assets/icons/leaf-deco.svg" alt="" class="section-title__deco section-title__deco--flip" aria-hidden="true">
    </h3>
    ${note}
  `;
}

function renderDishCardActions(item) {
  const qty = getCartQtyForItem(item.id);
  const name = getItemName(item);

  if (qty > 0) {
    return `
      <div class="qty-control dish-card__qty">
        <button type="button" class="qty-btn qty-btn--minus" data-qty-minus="${item.id}" aria-label="${t('decrease')}">−</button>
        <span class="qty-value" aria-live="polite">${qty}</span>
        <button type="button" class="qty-btn" data-qty-plus="${item.id}" aria-label="${t('increase')}">+</button>
      </div>
    `;
  }

  return `
    <button type="button" class="btn-add" data-add="${item.id}" aria-label="${tReplace('addToCart', { name })}">+</button>
  `;
}

function renderDishCard(item) {
  const qty = getCartQtyForItem(item.id);
  const imgPath = item.image || DEFAULT_DISH_IMAGE;
  const inCartClass = qty > 0 ? ' dish-card--in-cart' : '';
  const desc = getItemDesc(item);
  const descHtml = desc
    ? `<p class="dish-card__desc">${desc}</p>`
    : '';

  return `
    <article class="dish-card${inCartClass}" role="listitem" data-id="${item.id}">
      <div class="dish-card__image-wrap">
        <img
          class="dish-card__image"
          src="${imgPath}"
          alt="${getItemName(item)}"
          loading="lazy"
        >
      </div>
      <div class="dish-card__body">
        <h3 class="dish-card__name">${getItemName(item)}</h3>
        ${descHtml}
        <div class="dish-card__footer">
          <span class="dish-card__price">${formatDishPrice(item.price)}</span>
          ${renderDishCardActions(item)}
        </div>
      </div>
    </article>
  `;
}

/** מעדכן רק את כפתורי הכמות בכרטיס — בלי לרנדר מחדש את כל הרשת (מונע קפיצות) */
function updateDishCardActions(card, item) {
  if (!card || !item) return;

  const qty = getCartQtyForItem(item.id);
  card.classList.toggle('dish-card--in-cart', qty > 0);

  const footer = card.querySelector('.dish-card__footer');
  if (!footer) return;

  const priceEl = footer.querySelector('.dish-card__price');
  const priceHtml = priceEl
    ? priceEl.outerHTML
    : `<span class="dish-card__price">${formatDishPrice(item.price)}</span>`;

  footer.innerHTML = `${priceHtml}${renderDishCardActions(item)}`;
}

function refreshDishCard(itemId) {
  if (!itemId) return;
  const item = findItem(itemId);
  if (!item) return;

  els.dishesGrid.querySelectorAll(`.dish-card[data-id="${CSS.escape(itemId)}"]`).forEach((card) => {
    updateDishCardActions(card, item);
  });
}

function refreshDishCards(itemIds) {
  if (itemIds == null) {
    els.dishesGrid.querySelectorAll('.dish-card[data-id]').forEach((card) => {
      const item = findItem(card.dataset.id);
      if (item) updateDishCardActions(card, item);
    });
    return;
  }

  const ids = Array.isArray(itemIds) ? itemIds : [itemIds];
  ids.forEach(refreshDishCard);
}

function changeItemQuantity(itemId, delta) {
  if (delta > 0) {
    addToCart(itemId);
    return;
  }

  for (const lineId of state.cartLineOrder) {
    const line = findCartLine(lineId);
    if (line && line.itemId === itemId) {
      changeQuantity(lineId, -1);
      return;
    }
  }
}

function renderDishesGridHtml() {
  const query = state.searchQuery.trim();

  if (query) {
    return getFilteredItems().map(renderDishCard).join('');
  }

  const category = MENU.find((c) => c.id === state.activeCategory);
  if (!category) return '';

  let html = category.items.map(renderDishCard).join('');

  // תוספות חמות נבחרות במודאל בלבד — בלי כותרת/כרטיסים בתפריט

  return html;
}

function renderDishes() {
  updateSectionTitle();
  const html = renderDishesGridHtml();

  if (!html) {
    els.dishesGrid.innerHTML = '';
    els.dishesEmpty.hidden = false;
    return;
  }

  els.dishesEmpty.hidden = true;
  els.dishesGrid.innerHTML = html;
}

/* ============================================================
   סל
   ============================================================ */
function addToCart(itemId) {
  let newMainLineId = null;

  if (isMainCourse(itemId)) {
    const lineId = createCartLineId();
    state.cartLines.push({ lineId, itemId, qty: 1, linkedToMainLineId: null });
    moveCartLineToTop(lineId);
    state.lastMainLineId = lineId;
    newMainLineId = lineId;
  } else if (isHotSide(itemId)) {
    let mainLineId = null;
    if (state.lastMainLineId) {
      const last = findCartLine(state.lastMainLineId);
      if (last && isMainCourse(last.itemId)) mainLineId = last.lineId;
    }
    if (!mainLineId) {
      for (const lineId of state.cartLineOrder) {
        const line = findCartLine(lineId);
        if (line && isMainCourse(line.itemId)) {
          mainLineId = line.lineId;
          break;
        }
      }
    }

    if (!mainLineId) {
      showToast(t('chooseMainFirst'));
      return;
    }

    openSidesModal(mainLineId);
    return;
  } else {
    const existing = state.cartLines.find(
      (l) => l.itemId === itemId && !l.linkedToMainLineId && !isMainCourse(l.itemId)
    );

    if (existing) {
      existing.qty += 1;
      moveCartLineToTop(existing.lineId);
    } else {
      const lineId = createCartLineId();
      state.cartLines.push({ lineId, itemId, qty: 1, linkedToMainLineId: null });
      moveCartLineToTop(lineId);
    }
  }

  updateCart();
  if (!isHotSide(itemId)) {
    refreshDishCard(itemId);
    updateDishModalAddBtn();
  }

  if (newMainLineId) {
    openSidesModal(newMainLineId);
  }
}

/* ============================================================
   מודל מנה
   ============================================================ */
function updateDishModalAddBtn() {
  if (!state.dishModalId || !els.btnModalAdd) return;
  const inCart = getCartQtyForItem(state.dishModalId) > 0;
  els.btnModalAdd.classList.toggle('btn-add--added', inCart);
  const item = findItem(state.dishModalId);
  if (item) {
    els.btnModalAdd.setAttribute('aria-label', tReplace('addToCart', { name: getItemName(item) }));
  }
}

function openDishModal(itemId) {
  const item = findItem(itemId);
  if (!item) return;

  state.dishModalId = itemId;
  els.dishModalImage.src = item.image || DEFAULT_DISH_IMAGE;
  els.dishModalImage.alt = getItemName(item);
  els.dishModalTitle.textContent = getItemName(item);
  const desc = getItemDesc(item);
  els.dishModalDesc.textContent = desc;
  els.dishModalDesc.hidden = !desc;
  els.dishModalPrice.textContent = formatDishPrice(item.price);
  updateDishModalAddBtn();

  els.dishModal.classList.add('dish-modal--open');
  els.dishModal.setAttribute('aria-hidden', 'false');
}

function closeDishModal() {
  state.dishModalId = null;
  els.dishModal.classList.remove('dish-modal--open');
  els.dishModal.setAttribute('aria-hidden', 'true');
}

function changeQuantity(lineId, delta) {
  const line = findCartLine(lineId);
  if (!line) return;

  const itemId = line.itemId;
  const newQty = line.qty + delta;
  if (newQty <= 0) {
    removeCartLine(lineId);
  } else if (delta > 0 && isHotSide(line.itemId) && line.linkedToMainLineId) {
    if (!canAddSideToMain(line.linkedToMainLineId)) {
      showToast(t('maxSidesPerMain'));
      return;
    }
    line.qty = newQty;
    moveCartLineToTop(lineId);
  } else {
    line.qty = newQty;
    if (delta > 0) moveCartLineToTop(lineId);
  }

  updateCart();
  if (!isHotSide(itemId)) {
    refreshDishCard(itemId);
  }
}

function createCartItemElement(lineId, variant) {
  const cartEl = document.createElement('li');
  cartEl.className = `cart-item${variant === 'child' ? ' cart-item--side' : ''}`;
  cartEl.dataset.cartLineId = lineId;

  const qtyHtml = variant === 'child'
    ? ''
    : `
      <div class="qty-control">
        <button type="button" class="qty-btn qty-btn--minus" data-qty-minus aria-label="${t('decrease')}">−</button>
        <span class="qty-value"></span>
        <button type="button" class="qty-btn" data-qty-plus aria-label="${t('increase')}">+</button>
      </div>
    `;

  cartEl.innerHTML = `
    <div class="cart-item__image-wrap">
      <img class="cart-item__image" src="" alt="">
    </div>
    <div class="cart-item__info">
      <span class="cart-item__name"></span>
      <span class="cart-item__meta"></span>
    </div>
    <div class="cart-item__side">
      <span class="cart-item__price"></span>
      ${qtyHtml}
    </div>
  `;
  return cartEl;
}

function fillCartItemElement(cartEl, line) {
  const item = findItem(line.itemId);
  if (!item) return;

  const mainLine = line.linkedToMainLineId ? findCartLine(line.linkedToMainLineId) : null;
  const mainItem = mainLine ? findItem(mainLine.itemId) : null;
  const isSide = Boolean(line.linkedToMainLineId) || isHotSide(line.itemId);

  const imgEl = cartEl.querySelector('.cart-item__image');
  imgEl.src = item.image || DEFAULT_DISH_IMAGE;
  imgEl.alt = getItemName(item);

  cartEl.querySelector('.cart-item__name').textContent = getItemName(item);
  cartEl.querySelector('.cart-item__price').textContent = item.price === 0
    ? t('sidesIncluded')
    : formatPrice(item.price * line.qty);

  if (isSide) {
    cartEl.classList.add('cart-item--side');
    cartEl.querySelector('.qty-control')?.remove();
  }

  const qtyValue = cartEl.querySelector('.qty-value');
  if (qtyValue) qtyValue.textContent = line.qty;

  const metaEl = cartEl.querySelector('.cart-item__meta');
  if (isSide && mainItem) {
    metaEl.textContent = tReplace('sideForMain', { name: getItemName(mainItem) });
    metaEl.hidden = false;
  } else if (isMainCourse(line.itemId)) {
    const sideNames = getSideLinesForMain(line.lineId)
      .map((s) => {
        const sideItem = findItem(s.itemId);
        return sideItem ? getItemName(sideItem) : '';
      })
      .filter(Boolean)
      .join(', ');
    metaEl.textContent = sideNames ? tReplace('servedWith', { sides: sideNames }) : '';
    metaEl.hidden = !sideNames;
  } else {
    metaEl.textContent = '';
    metaEl.hidden = true;
  }

  cartEl.querySelector('[data-qty-minus]')?.setAttribute('aria-label', t('decrease'));
  cartEl.querySelector('[data-qty-plus]')?.setAttribute('aria-label', t('increase'));
}

function updateCart() {
  const count = getCartItemCount();
  const total = getCartTotal();
  const totalStr = formatPrice(total);
  const displayQueue = buildCartDisplayQueue();

  els.headerCartBadge.textContent = count;
  els.headerCartBadge.dataset.count = count;
  els.cartTotal.textContent = totalStr;
  els.cartBarTotal.textContent = totalStr;
  els.cartBarCount.textContent = getItemsInCartText(count);
  if (els.btnSendOrder) els.btnSendOrder.disabled = count === 0;

  els.cartBar.classList.toggle('cart-bar--empty', count === 0);

  if (displayQueue.length === 0) {
    els.cartEmpty.style.display = '';
    els.cartList.querySelectorAll('.cart-item').forEach((el) => el.remove());
    return;
  }

  els.cartEmpty.style.display = 'none';

  const usedLineIds = new Set();

  displayQueue.forEach((entry) => {
    if (entry.kind === 'main-group') {
      const { main, sides } = entry;
      usedLineIds.add(main.lineId);

      let mainEl = els.cartList.querySelector(`[data-cart-line-id="${main.lineId}"]`);
      if (!mainEl) {
        mainEl = createCartItemElement(main.lineId, 'main');
        els.cartList.appendChild(mainEl);
      }
      fillCartItemElement(mainEl, main);
      els.cartList.appendChild(mainEl);

      sides.forEach((sideLine) => {
        usedLineIds.add(sideLine.lineId);
        let sideEl = els.cartList.querySelector(`[data-cart-line-id="${sideLine.lineId}"]`);
        if (!sideEl) {
          sideEl = createCartItemElement(sideLine.lineId, 'child');
          els.cartList.appendChild(sideEl);
        }
        fillCartItemElement(sideEl, sideLine);
        els.cartList.appendChild(sideEl);
      });
    } else {
      const { line } = entry;
      usedLineIds.add(line.lineId);

      let cartEl = els.cartList.querySelector(`[data-cart-line-id="${line.lineId}"]`);
      if (!cartEl) {
        cartEl = createCartItemElement(line.lineId, 'single');
        els.cartList.appendChild(cartEl);
      }
      fillCartItemElement(cartEl, line);
      els.cartList.appendChild(cartEl);
    }
  });

  els.cartList.querySelectorAll('.cart-item').forEach((el) => {
    if (!usedLineIds.has(el.dataset.cartLineId)) el.remove();
  });
}

function openCartDrawer() {
  state.cartDrawerOpen = true;
  els.cartDrawer.classList.add('cart-drawer--open');
  els.cartDrawer.setAttribute('aria-hidden', 'false');
  els.btnExpandCart.setAttribute('aria-expanded', 'true');
}

function closeCartDrawer() {
  state.cartDrawerOpen = false;
  els.cartDrawer.classList.remove('cart-drawer--open');
  els.cartDrawer.setAttribute('aria-hidden', 'true');
  els.btnExpandCart.setAttribute('aria-expanded', 'false');
}

function toggleCartDrawer() {
  if (state.cartDrawerOpen) closeCartDrawer();
  else openCartDrawer();
}

function sendOrder() {
  if (getCartItemCount() === 0) return;
  state.cartLines = [];
  state.cartLineOrder = [];
  state.lastMainLineId = null;
  updateCart();
  refreshDishCards();
  closeCartDrawer();
  showToast(t('orderSent'));
}

function showToast(message) {
  els.toastMessage.textContent = message;
  els.toast.hidden = false;
  requestAnimationFrame(() => els.toast.classList.add('toast--visible'));
  setTimeout(() => {
    els.toast.classList.remove('toast--visible');
    setTimeout(() => { els.toast.hidden = true; }, 350);
  }, 2800);
}

/* ============================================================
   חיפוש
   ============================================================ */
function openSearch() {
  if (state.searchOpen) return;
  state.searchOpen = true;
  els.searchPanel.hidden = false;
  els.btnSearchToggle.setAttribute('aria-expanded', 'true');
  els.searchInput.focus();
}

function closeSearch() {
  if (!state.searchOpen) return;
  state.searchOpen = false;
  els.searchPanel.hidden = true;
  els.btnSearchToggle.setAttribute('aria-expanded', 'false');
  els.searchInput.value = '';
  state.searchQuery = '';
  els.searchInput.blur();
  renderDishes();
}

function toggleSearch() {
  if (state.searchOpen) closeSearch();
  else openSearch();
}

/* ============================================================
   אירועים
   ============================================================ */
function bindEvents() {
  els.btnStart.addEventListener('click', showMenu);
  els.btnBackHome.addEventListener('click', showHome);

  els.categoriesNav.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    state.activeCategory = btn.dataset.category;
    if (state.searchOpen) closeSearch();
    else {
      state.searchQuery = '';
      els.searchInput.value = '';
    }
    renderCategories();
    renderDishes();
  });

  els.dishesGrid.addEventListener('click', (e) => {
    const plusBtn = e.target.closest('[data-qty-plus]');
    if (plusBtn) {
      e.stopPropagation();
      changeItemQuantity(plusBtn.dataset.qtyPlus, 1);
      return;
    }

    const minusBtn = e.target.closest('[data-qty-minus]');
    if (minusBtn) {
      e.stopPropagation();
      changeItemQuantity(minusBtn.dataset.qtyMinus, -1);
      return;
    }

    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      e.stopPropagation();
      addToCart(addBtn.dataset.add);
      return;
    }

    const card = e.target.closest('.dish-card');
    if (card) openDishModal(card.dataset.id);
  });

  els.btnCloseDishModal.addEventListener('click', closeDishModal);
  els.dishModalBackdrop.addEventListener('click', closeDishModal);
  els.btnModalAdd.addEventListener('click', () => {
    if (!state.dishModalId) return;
    addToCart(state.dishModalId);
    closeDishModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (state.openSidesMainLineId) closeSidesModal();
    else if (state.dishModalId) closeDishModal();
    else if (state.searchOpen) closeSearch();
  });

  els.sidesModalBody?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    if (action === 'toggle-side' && btn.dataset.itemId) {
      const sideItemId = btn.dataset.itemId;
      const qty = getSideQtyForMain(state.openSidesMainLineId, sideItemId);
      if (qty > 0) removeSideFromMainLine(state.openSidesMainLineId, sideItemId);
      else addSideToMainLine(state.openSidesMainLineId, sideItemId);
      return;
    }

    if (action === 'sides-continue') closeSidesModal();
  });

  els.btnCloseSidesModal?.addEventListener('click', closeSidesModal);
  els.sidesModalBackdrop?.addEventListener('click', closeSidesModal);

  els.cartList.addEventListener('click', (e) => {
    const cartItem = e.target.closest('.cart-item');
    if (!cartItem) return;
    const lineId = cartItem.dataset.cartLineId;
    if (e.target.closest('[data-qty-plus]')) changeQuantity(lineId, 1);
    if (e.target.closest('[data-qty-minus]')) changeQuantity(lineId, -1);
  });

  els.btnSendOrder?.addEventListener('click', sendOrder);
  els.btnViewCart.addEventListener('click', openCartDrawer);
  els.btnOpenCart.addEventListener('click', openCartDrawer);
  els.btnExpandCart.addEventListener('click', toggleCartDrawer);
  els.btnCloseCart.addEventListener('click', closeCartDrawer);
  els.cartDrawerBackdrop.addEventListener('click', closeCartDrawer);

  els.btnSearchToggle.addEventListener('click', toggleSearch);
  els.btnCloseSearch.addEventListener('click', closeSearch);
  els.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderDishes();
  });

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.closest('[data-lang]')?.dataset.lang;
      toggleLanguage(lang);
    });
  });
}

function init() {
  setDocumentLanguage();
  applyTranslations();
  updateLangToggleUI();
  setupSplashLogo(els.splashLogo);
  setupHeaderLogo(els.headerLogo);
  bindEvents();
  updateCart();
}

document.addEventListener('DOMContentLoaded', init);
