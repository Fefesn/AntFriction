const products = {
  tipo1: { id: "tipo1", name: "Tipo 1 - Hidratacao leve", price: 39.9, explanation: "Ideal para fios com boa saude que precisam de hidratacao leve e frequente.", usage: "Use 3x por semana no comprimento e pontas. Enxague apos 3 minutos.", image: "images/red.png", concerns: ["manutencao", "leveza"] },
  tipo2: { id: "tipo2", name: "Tipo 2 - Controle de frizz", price: 37.6, explanation: "Perfeito para quem luta contra frizz e umidade no dia a dia.", usage: "Aplique mecha a mecha apos lavar, sem exagero na raiz.", image: "images/pink-heart.png", concerns: ["frizz", "umidade"] },
  tipo3: { id: "tipo3", name: "Tipo 3 - Nutricao equilibrada", price: 36.6, explanation: "Balanceia nutricao e leveza para manter brilho e movimento natural.", usage: "Use 2x por semana em etapas de nutricao da rotina capilar.", image: "images/black.png", concerns: ["nutricao", "brilho"] },
  tipo4: { id: "tipo4", name: "Tipo 4 - Hidratacao intensa", price: 32.8, explanation: "Recomendado para fios ressecados, opacos ou com toque aspero.", usage: "Use 2 a 3x por semana, deixando agir por 5 a 7 minutos.", image: "images/green.png", concerns: ["ressecamento", "hidratar"] },
  tipo5: { id: "tipo5", name: "Tipo 5 - Reparacao profunda", price: 45.7, explanation: "Focado em danos severos por quimica, descoloracao e uso de calor.", usage: "Use 1 a 2x por semana e finalize com protetor termico.", image: "images/pink-bottle.png", concerns: ["quebra", "quimica"] },
  tipo6: { id: "tipo6", name: "Edicao Celestial", price: 35.8, explanation: "Creme noturno com foco em brilho intenso e aspecto saudavel ao acordar.", usage: "Aplique no cabelo umido a seco, principalmente a noite. Deixe agir 5 a 10 minutos ou overnight conforme a rotina.", image: "images/celestial.png", concerns: ["brilho", "premium"] },
  tipo7: { id: "tipo7", name: "Linha Black Luxe", price: 52.9, explanation: "Tratamento premium com acabamento de salao, ideal para fios que pedem sofisticacao.", usage: "Distribua com pente fino, enfatizando meios e pontas. Use 1 a 2x por semana.", image: "images/luxe-trio.png", concerns: ["luxo", "acabamento"] },
  tipo8: { id: "tipo8", name: "Te Fiti - Tropical", price: 37.6, explanation: "Protege e realca fios apos sol, sal e cloro, com definicao e maciez frutada.", usage: "Aplique apos praia ou piscina, ou como finalizador em dias muito quentes. Reaplique se necessario.", image: "images/tropical-te-fiti.png", concerns: ["praia", "protecao"] },
  tipo9: { id: "tipo9", name: "Edição Medieval", price: 37.6, explanation: "Florest: Creme ideal para admiradores do filme Valente", usage: "Aplique no cabelo umido, amasse os fios e finalize com difusor ou secagem natural.", image: "images/valente-floresta.png", concerns: ["volume", "movimento"] }
};

const quizQuestions = [
  {
    text: "Qual e o seu tipo de cabelo?",
    options: [
      { label: "Liso/ondulado fino", points: { tipo1: 2, tipo2: 1 } },
      { label: "Ondulado com volume", points: { tipo2: 2, tipo3: 1 } },
      { label: "Cacheado/crespo", points: { tipo3: 2, tipo4: 2 } },
      { label: "Misto (oleoso na raiz e seco nas pontas)", points: { tipo1: 1, tipo3: 2 } }
    ]
  },
  {
    text: "Qual e o principal problema hoje?",
    options: [
      { label: "Frizz", points: { tipo2: 3 } },
      { label: "Ressecamento", points: { tipo4: 3 } },
      { label: "Quebra e danos", points: { tipo5: 3 } },
      { label: "Sem brilho e sem nutricao", points: { tipo3: 3, tipo6: 1 } },
      { label: "Sol, mar, piscina com frequencia", points: { tipo8: 3 } }
    ]
  },
  {
    text: "Com que frequencia voce cuida do cabelo?",
    options: [
      { label: "Todos os dias", points: { tipo1: 3, tipo2: 1 } },
      { label: "2 a 3 vezes por semana", points: { tipo3: 2, tipo4: 2 } },
      { label: "1 vez por semana", points: { tipo4: 2, tipo5: 1 } },
      { label: "Quase nunca", points: { tipo5: 3 } }
    ]
  },
  {
    text: "Voce usa quimica ou calor frequente?",
    options: [
      { label: "Nao uso", points: { tipo1: 2, tipo2: 1 } },
      { label: "Uso secador/chapinha", points: { tipo2: 1, tipo4: 2 } },
      { label: "Tintura/relaxamento", points: { tipo4: 2, tipo5: 2 } },
      { label: "Descoloracao/quimica forte", points: { tipo5: 4 } }
    ]
  },
  {
    text: "Qual resultado voce quer sentir apos a lavagem?",
    options: [
      { label: "Leveza e toque suave", points: { tipo1: 3 } },
      { label: "Alinhamento sem frizz", points: { tipo2: 3 } },
      { label: "Brilho e nutricao", points: { tipo3: 3 } },
      { label: "Maciez intensa e recuperacao", points: { tipo4: 2, tipo5: 2 } },
      { label: "Brilho noturno (efeito celeste)", points: { tipo6: 3 } },
      { label: "Acabamento de salao, linha luxo", points: { tipo7: 3 } },
      { label: "Protecao tropical e pos-praia", points: { tipo8: 3 } },
      { label: "Controle com movimento (efeito Valente)", points: { tipo9: 3 } }
    ]
  }
];

const quizState = {
  currentQuestion: 0,
  scores: { tipo1: 0, tipo2: 0, tipo3: 0, tipo4: 0, tipo5: 0, tipo6: 0, tipo7: 0, tipo8: 0, tipo9: 0 },
  recommendedProductId: null,
  recommendedKit: []
};

const cart = [];

const quizStepLabel = document.getElementById("quiz-step-label");
const quizProgress = document.getElementById("quiz-progress");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizResult = document.getElementById("quiz-result");
const resultTitle = document.getElementById("result-title");
const resultExplanation = document.getElementById("result-explanation");
const resultUsage = document.getElementById("result-usage");
const resultKit = document.getElementById("result-kit");
const addResultToCartBtn = document.getElementById("add-result-to-cart");
const addKitToCartBtn = document.getElementById("add-kit-to-cart");
const shareWhatsappBtn = document.getElementById("share-whatsapp");
const restartQuizBtn = document.getElementById("restart-quiz");

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartUpsell = document.getElementById("cart-upsell");
const mobileStickyCta = document.getElementById("mobile-sticky-cta");
const mobileStickyTotal = document.getElementById("mobile-sticky-total");
const mobileOpenCartBtn = document.getElementById("mobile-open-cart-btn");
const cartGoalText = document.getElementById("cart-goal-text");
const cartGoalProgress = document.getElementById("cart-goal-progress");
const cartDiscountText = document.getElementById("cart-discount-text");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const STORAGE_KEYS = {
  cart: "antfriction_cart_v1",
  quiz: "antfriction_quiz_v3"
};

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function persistCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function persistQuizState() {
  const payload = {
    currentQuestion: quizState.currentQuestion,
    scores: quizState.scores,
    recommendedProductId: quizState.recommendedProductId,
    recommendedKit: quizState.recommendedKit
  };
  localStorage.setItem(STORAGE_KEYS.quiz, JSON.stringify(payload));
}

function hydrateStateFromStorage() {
  try {
    const oldQuiz = localStorage.getItem("antfriction_quiz_v1");
    if (oldQuiz && !localStorage.getItem(STORAGE_KEYS.quiz)) {
      localStorage.setItem(STORAGE_KEYS.quiz, oldQuiz);
      localStorage.removeItem("antfriction_quiz_v1");
    }

    const savedCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
    if (Array.isArray(savedCart)) {
      savedCart.forEach((item) => {
        if (products[item.id] && Number.isFinite(item.quantity) && item.quantity > 0) {
          cart.push({ ...products[item.id], quantity: item.quantity });
        }
      });
    }

    const savedQuiz = JSON.parse(localStorage.getItem(STORAGE_KEYS.quiz) || "null");
    if (savedQuiz && typeof savedQuiz === "object") {
      const isValidQuestion =
        Number.isInteger(savedQuiz.currentQuestion) &&
        savedQuiz.currentQuestion >= 0 &&
        savedQuiz.currentQuestion <= quizQuestions.length;
      if (isValidQuestion) quizState.currentQuestion = savedQuiz.currentQuestion;
      if (savedQuiz.scores && typeof savedQuiz.scores === "object") {
        quizState.scores = { ...quizState.scores, ...savedQuiz.scores };
      }
      if (savedQuiz.recommendedProductId && products[savedQuiz.recommendedProductId]) {
        quizState.recommendedProductId = savedQuiz.recommendedProductId;
      }
      if (Array.isArray(savedQuiz.recommendedKit)) {
        quizState.recommendedKit = savedQuiz.recommendedKit.filter((id) => products[id]);
      }
    }
  } catch (_error) {
    // Ignore localStorage corruption and continue with defaults.
  }
}

function findUpsellProductId() {
  const sourceId =
    quizState.recommendedProductId ||
    (cart[0] ? cart[0].id : null);
  if (!sourceId) return null;

  const upsellMap = {
    tipo1: "tipo3",
    tipo2: "tipo4",
    tipo3: "tipo2",
    tipo4: "tipo5",
    tipo5: "tipo1",
    tipo6: "tipo2",
    tipo7: "tipo3",
    tipo8: "tipo4",
    tipo9: "tipo2"
  };
  const suggestedId = upsellMap[sourceId];
  if (!suggestedId) return null;
  const alreadyInCart = cart.some((item) => item.id === suggestedId);
  return alreadyInCart ? null : suggestedId;
}

function renderUpsell() {
  const upsellId = findUpsellProductId();
  if (!upsellId) {
    cartUpsell.classList.add("hidden");
    cartUpsell.innerHTML = "";
    return;
  }

  const item = products[upsellId];
  cartUpsell.classList.remove("hidden");
  cartUpsell.innerHTML = `
    <p>Complete seu kit com <strong>${item.name}</strong> por ${formatCurrency(item.price)}</p>
    <button class="add-upsell-btn" data-upsell-id="${item.id}">Adicionar sugestao</button>
  `;
}

function calculateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  let discountRate = 0;
  if (quantity >= 3) discountRate = 0.1;
  else if (quantity >= 2) discountRate = 0.05;
  const discountValue = subtotal * discountRate;
  const total = subtotal - discountValue;
  return { subtotal, quantity, discountRate, discountValue, total };
}

function getRecommendedKit(winnerId) {
  const pairMap = {
    tipo1: ["tipo3", "tipo2"],
    tipo2: ["tipo4", "tipo3"],
    tipo3: ["tipo2", "tipo1"],
    tipo4: ["tipo5", "tipo2"],
    tipo5: ["tipo4", "tipo3"],
    tipo6: ["tipo7", "tipo3"],
    tipo7: ["tipo6", "tipo5"],
    tipo8: ["tipo4", "tipo2"],
    tipo9: ["tipo2", "tipo4"]
  };
  return [winnerId, ...(pairMap[winnerId] || [])].slice(0, 3);
}

function renderKit(ids) {
  resultKit.innerHTML = "";
  if (!ids.length) return;
  const ul = document.createElement("ul");
  ids.forEach((id) => {
    const item = products[id];
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${formatCurrency(item.price)}`;
    ul.appendChild(li);
  });
  resultKit.appendChild(ul);
}

function animateQuizSwap(onComplete) {
  if (reduceMotion) {
    onComplete();
    return;
  }

  quizQuestion.classList.add("quiz-transition-out");
  quizOptions.classList.add("quiz-transition-out");

  setTimeout(() => {
    onComplete();
    quizQuestion.classList.remove("quiz-transition-out");
    quizOptions.classList.remove("quiz-transition-out");
    quizQuestion.classList.add("quiz-transition-in");
    quizOptions.classList.add("quiz-transition-in");
    setTimeout(() => {
      quizQuestion.classList.remove("quiz-transition-in");
      quizOptions.classList.remove("quiz-transition-in");
    }, 220);
  }, 120);
}

function renderQuizQuestion() {
  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion) / totalQuestions) * 100;

  quizStepLabel.textContent = `Pergunta ${quizState.currentQuestion + 1} de ${totalQuestions}`;
  quizProgress.style.width = `${progress}%`;
  quizQuestion.textContent = question.text;
  quizOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.label;
    button.addEventListener("click", () => handleQuizAnswer(option.points, button));
    quizOptions.appendChild(button);
  });

  persistQuizState();
}

function handleQuizAnswer(points, clickedButton) {
  const allOptionButtons = quizOptions.querySelectorAll("button");
  allOptionButtons.forEach((btn) => btn.classList.remove("active-choice"));
  clickedButton.classList.add("active-choice");

  Object.entries(points).forEach(([type, value]) => {
    quizState.scores[type] += value;
  });

  setTimeout(() => {
    quizState.currentQuestion += 1;
    if (quizState.currentQuestion < quizQuestions.length) {
      animateQuizSwap(renderQuizQuestion);
      return;
    }

    animateQuizSwap(showQuizResult);
  }, 250);
}

function showQuizResult() {
  quizProgress.style.width = "100%";
  quizStepLabel.textContent = "Resultado pronto";

  const winner = Object.entries(quizState.scores).sort((a, b) => b[1] - a[1])[0][0];
  quizState.recommendedProductId = winner;
  quizState.recommendedKit = getRecommendedKit(winner);
  const product = products[winner];

  resultTitle.textContent = `Recomendacao: ${product.name}`;
  resultExplanation.textContent = product.explanation;
  resultUsage.textContent = `Modo de uso: ${product.usage}`;
  renderKit(quizState.recommendedKit);
  const shareText = encodeURIComponent(`Meu resultado no quiz Ant Friction: ${product.name}. Meu kit ideal tem ${quizState.recommendedKit.map((id) => products[id].name).join(", ")}.`);
  shareWhatsappBtn.href = `https://wa.me/?text=${shareText}`;

  quizOptions.innerHTML = "";
  quizQuestion.textContent = "Seu perfil capilar foi analisado com sucesso.";
  quizResult.classList.remove("hidden");
  persistQuizState();
  renderUpsell();
}

function resetQuiz() {
  quizState.currentQuestion = 0;
  quizState.scores = { tipo1: 0, tipo2: 0, tipo3: 0, tipo4: 0, tipo5: 0, tipo6: 0, tipo7: 0, tipo8: 0, tipo9: 0 };
  quizState.recommendedProductId = null;
  quizState.recommendedKit = [];
  quizResult.classList.add("hidden");
  renderQuizQuestion();
  persistQuizState();
  renderUpsell();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("show");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("show");
  document.body.classList.remove("cart-open");
}

function addToCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products[productId];
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
  persistCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }

  renderCart();
  persistCart();
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Seu carrinho esta vazio.</p>';
  } else {
    cart.forEach((item) => {
      const itemElement = document.createElement("article");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
        <div class="cart-item-top">
          <strong>${item.name}</strong>
          <button class="remove-item-btn" data-remove-id="${item.id}">Remover</button>
        </div>
        <small>Qtd: ${item.quantity}</small>
        <small>${formatCurrency(item.price)} cada</small>
      `;
      cartItems.appendChild(itemElement);
    });
  }

  const summary = calculateCartSummary();
  cartTotal.textContent = formatCurrency(summary.total);
  cartCount.textContent = summary.quantity;
  mobileStickyTotal.textContent = formatCurrency(summary.total);
  mobileStickyCta.classList.toggle("visible", summary.quantity > 0);
  const freteGoal = 80;
  const progress = Math.min(100, (summary.total / freteGoal) * 100);
  cartGoalProgress.style.width = `${progress}%`;
  if (summary.total >= freteGoal) {
    cartGoalText.textContent = "Parabens! Frete gratis liberado.";
  } else {
    cartGoalText.textContent = `Faltam ${formatCurrency(freteGoal - summary.total)} para frete gratis.`;
  }
  if (summary.discountRate > 0) {
    cartDiscountText.textContent = `Desconto de ${(summary.discountRate * 100).toFixed(0)}% aplicado: -${formatCurrency(summary.discountValue)}.`;
  } else {
    cartDiscountText.textContent = "Compre 2 itens para 5% OFF no kit.";
  }
  renderUpsell();
}

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.productId);
    button.classList.add("added");
    button.textContent = "Adicionado";
    setTimeout(() => {
      button.classList.remove("added");
      button.textContent = "Adicionar";
    }, 850);
  });
});

const bundles = {
  frizz: ["tipo2", "tipo4", "tipo9"],
  repair: ["tipo5", "tipo4", "tipo7"],
  beach: ["tipo8", "tipo2", "tipo1"]
};

document.querySelectorAll(".add-bundle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const ids = bundles[button.dataset.bundle] || [];
    ids.forEach((id) => addToCart(id));
    button.textContent = "Kit adicionado";
    setTimeout(() => {
      button.textContent = "Adicionar kit";
    }, 1000);
  });
});

addResultToCartBtn.addEventListener("click", () => {
  if (quizState.recommendedProductId) {
    addToCart(quizState.recommendedProductId);
  }
});

addKitToCartBtn.addEventListener("click", () => {
  if (!quizState.recommendedKit.length) return;
  quizState.recommendedKit.forEach((id) => addToCart(id));
});

restartQuizBtn.addEventListener("click", resetQuiz);

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-item-btn");
  if (!button) return;
  removeFromCart(button.dataset.removeId);
});

cartUpsell.addEventListener("click", (event) => {
  const button = event.target.closest(".add-upsell-btn");
  if (!button) return;
  addToCart(button.dataset.upsellId);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});

document.addEventListener("pointerdown", (event) => {
  const tapTarget = event.target.closest("button, .btn, nav a");
  if (!tapTarget) return;
  tapTarget.classList.add("is-pressed");
});

document.addEventListener("pointerup", () => {
  document.querySelectorAll(".is-pressed").forEach((element) => {
    element.classList.remove("is-pressed");
  });
});

mobileOpenCartBtn.addEventListener("click", openCart);

const revealElements = document.querySelectorAll("section, .site-footer");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealElements.forEach((element) => {
  element.classList.add("reveal-on-scroll");
  observer.observe(element);
});

hydrateStateFromStorage();
if (quizState.currentQuestion >= quizQuestions.length) {
  showQuizResult();
} else {
  renderQuizQuestion();
}
renderCart();
