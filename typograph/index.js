const checkingText = document.querySelector(".text");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy");
const deleteText = document.querySelector(".deleteText");

// Універсальна функція для заміни тексту по шаблону
function replaceAll(text, search, replace) {
  return text.replaceAll(search, replace);
}

// Ланцюг замін лапок
function processText() {
  let text = " " + checkingText.value;

  const replacements = [
    { from: "„", to: " «" },
    { from: "“", to: "»" },
    { from: " “", to: " «" },
    { from: "”", to: "»" },
    { from: '"', to: "»" },
    { from: '("', to: '«' },
    { from: '\n»', to: '\n«' },
    { from: ' »', to: ' «' },
    { from: '(»', to: '(«' },
  ];

  replacements.forEach(({ from, to }) => {
    text = replaceAll(text, from, to);
  });

  checkingText.value = text.trim();
  checkingText.classList.add("access");
  copy.classList.remove("hidden");
}

// Універсальний биндер комбінацій клавіш
function bindShortcut(func, ...codes) {
  const pressed = new Set();
  document.addEventListener("keydown", (e) => {
    pressed.add(e.code);
    if (codes.every((code) => pressed.has(code))) {
      pressed.clear();
      func();
    }
  });
  document.addEventListener("keyup", (e) => pressed.delete(e.code));
}

// Копіювання тексту в буфер обміну
function copyText() {
  const text = checkingText.value;
  if (!text) return;

  navigator.clipboard.writeText(text);
  copy.setAttribute("value", "Скопійовано");
  copy.setAttribute("disabled", "true");
  checkingText.classList.add("access-copy");

  setTimeout(() => {
    copy.setAttribute("value", "Копіювати");
    copy.removeAttribute("disabled");
  }, 2000);
}

// Очищення текстового поля
function clearText() {
  checkingText.style.minHeight = "";
  checkingText.value = "";
  pasted.innerHTML = 0;
  checkingText.classList.remove("access", "access-copy");
  checkingText.setAttribute("placeholder", "Введіть текст");
  copy.classList.add("hidden");
}

// Активувати кнопку при зміні тексту
function activateButton() {
  btn.removeAttribute("disabled");
  checkingText.classList.remove("access", "access-copy");
}

// Події
checkingText.addEventListener("input", activateButton);
checkingText.addEventListener("change", activateButton);
btn.addEventListener("click", processText);
copy.addEventListener("click", copyText);
deleteText.addEventListener("click", clearText);

// Гарячі клавіші
bindShortcut(processText, "ControlLeft", "KeyX");
bindShortcut(copyText, "ControlLeft", "KeyC");
bindShortcut(clearText, "ControlLeft", "KeyQ");

// Зміна заголовка вкладки
document.onblur = () => (document.title = "«😳» ЗАМІНА");
document.onfocus = () =>
  (document.title =
    "Заміна лапок на ялинки онлайн || Замінити лапки|| замінити лапки на ялинки онлайн");
