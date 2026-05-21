const checkingText = document.querySelector(".text");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy");
const deleteText = document.querySelector(".deleteText");
const pasted = document.querySelector(".pasted"); // Додав селектор про всяк випадок

// Оптимізований процес заміни за допомогою Регулярних виразів
function processText() {
  let text = checkingText.value;

  // 1. Спочатку уніфікуємо всі різновиди екзотичних лапок до звичайних прямих
  text = text.replace(/[„“”]/g, '"');

  // 2. Розумна заміна прямих лапок на ялинки:
  // Відкриваюча лапка: якщо перед нею пробіл, новий рядок або початок тексту, або дужка
  text = text.replace(/(^|[\s([\n])"/g, '$1«');
  
  // Закриваюча лапка: всі інші випадки (після букв, розділових знаків)
  text = text.replace(/"/g, '»');

  // 3. Специфічні фікси для переносів та дужок, якщо вони лишилися
  text = text.replace(/\n»/g, '\n«');
  text = text.replace(/\(»/g, '(«');

  checkingText.value = text.trim();
  checkingText.classList.add("access");
  copy.classList.remove("hidden");
}

// Спрощений та надійніший біндер гарячих клавіш
function bindShortcut(targetKey, func) {
  document.addEventListener("keydown", (e) => {
    // Перевіряємо Ctrl (лівий чи правий) + потрібну клавішу (ігноруючи регістр)
    if (e.ctrlKey && e.key.toLowerCase() === targetKey.toLowerCase()) {
      e.preventDefault(); // Скасовуємо стандартну дію браузера (наприклад, Ctrl+X вирізання)
      func();
    }
  });
}

// Копіювання тексту
function copyText() {
  const text = checkingText.value;
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    copy.value = "Скопійовано"; // Якщо це input[type="button"], краще через .value
    copy.innerText = "Скопійовано"; // Якщо це <button>
    copy.setAttribute("disabled", "true");
    checkingText.classList.add("access-copy");

    setTimeout(() => {
      copy.value = "Копіювати";
      copy.innerText = "Копіювати";
      copy.removeAttribute("disabled");
    }, 2000);
  });
}

// Очищення поля
function clearText() {
  checkingText.style.minHeight = "";
  checkingText.value = "";
  if (pasted) pasted.innerHTML = "0"; // Безпечна перевірка
  checkingText.classList.remove("access", "access-copy");
  checkingText.setAttribute("placeholder", "Введіть текст");
  copy.classList.add("hidden");
}

function activateButton() {
  btn.removeAttribute("disabled");
  checkingText.classList.remove("access", "access-copy");
}

// Слухачі подій
checkingText.addEventListener("input", activateButton);
btn.addEventListener("click", processText);
copy.addEventListener("click", copyText);
deleteText.addEventListener("click", clearText);

// Реєстрація гарячих клавіш (передаємо прості літери)
bindShortcut("x", processText);
bindShortcut("c", copyText);
bindShortcut("q", clearText);

// Зміна тайтлу для SEO / UX
document.onblur = () => (document.title = "«😳» ЗАМІНА");
document.onfocus = () => (document.title = "Заміна лапок на ялинки онлайн");
