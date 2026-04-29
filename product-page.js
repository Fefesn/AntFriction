const products = {
  tipo1: { id: "tipo1", name: "Tipo 1 - Hidratacao leve", price: 39.9, explanation: "Ideal para fios com boa saude que precisam de hidratacao leve e frequente.", usage: "Use 3x por semana no comprimento e pontas. Enxague apos 3 minutos.", image: "images/red.png" },
  tipo2: { id: "tipo2", name: "Tipo 2 - Controle de frizz", price: 42.9, explanation: "Perfeito para quem luta contra frizz e umidade no dia a dia.", usage: "Aplique mecha a mecha apos lavar, sem exagero na raiz.", image: "images/pink-heart.png" },
  tipo3: { id: "tipo3", name: "Tipo 3 - Nutricao equilibrada", price: 44.9, explanation: "Balanceia nutricao e leveza para manter brilho e movimento natural.", usage: "Use 2x por semana em etapas de nutricao da rotina capilar.", image: "images/black.png" },
  tipo4: { id: "tipo4", name: "Tipo 4 - Hidratacao intensa", price: 46.9, explanation: "Recomendado para fios ressecados, opacos ou com toque aspero.", usage: "Use 2 a 3x por semana, deixando agir por 5 a 7 minutos.", image: "images/green.png" },
  tipo5: { id: "tipo5", name: "Tipo 5 - Reparacao profunda", price: 49.9, explanation: "Focado em danos severos por quimica, descoloracao e uso de calor.", usage: "Use 1 a 2x por semana e finalize com protetor termico.", image: "images/pink-bottle.png" },
  tipo6: { id: "tipo6", name: "Edicao Celestial", price: 59.9, explanation: "Creme noturno com foco em brilho intenso e aspecto saudavel ao acordar.", usage: "Aplique no cabelo umido a seco, principalmente a noite.", image: "images/celestial.png" },
  tipo7: { id: "tipo7", name: "Linha Black Luxe", price: 64.9, explanation: "Tratamento premium com acabamento de salao.", usage: "Distribua com pente fino, enfatizando meios e pontas.", image: "images/luxe-trio.png" },
  tipo8: { id: "tipo8", name: "Te Fiti - Tropical", price: 54.9, explanation: "Protege e realca fios apos sol, sal e cloro.", usage: "Aplique apos praia ou piscina, com reaplicacao se necessario.", image: "images/tropical-te-fiti.png" },
  tipo9: { id: "tipo9", name: "Valente - Floresta", price: 57.9, explanation: "Controle de volume com movimento natural e toque leve para dias de umidade.", usage: "Aplique no cabelo umido e finalize com difusor ou secagem natural.", image: "images/valente-floresta.png" }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "tipo1";
const product = products[productId] || products.tipo1;

document.getElementById("p-name").textContent = `${product.name} - ${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
document.getElementById("p-explanation").textContent = product.explanation;
document.getElementById("p-usage").textContent = product.usage;
document.getElementById("p-image").src = product.image;
document.getElementById("p-image").alt = product.name;

document.getElementById("p-add-cart").addEventListener("click", () => {
  const current = JSON.parse(localStorage.getItem("antfriction_cart_v1") || "[]");
  const existing = current.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else current.push({ id: product.id, quantity: 1 });
  localStorage.setItem("antfriction_cart_v1", JSON.stringify(current));
  window.location.href = "index.html";
});
