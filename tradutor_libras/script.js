document.addEventListener("DOMContentLoaded", function() {
  const inputText = document.getElementById("inputText");
  const translatedText = document.getElementById("translatedText");

  inputText.addEventListener("input", function() {
    const text = inputText.value;
    const textWithoutAccents = removeAccents(text);
    const translated = translateToLibras(textWithoutAccents);
    translatedText.textContent = translated;
  });

  function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function translateToLibras(text) {
    // Implement your translation logic here
    // This is just a placeholder function
    return text;
  }
  const increaseFontButton = document.getElementById("increaseFont");
  const decreaseFontButton = document.getElementById("decreaseFont");
  let fontSize = 25; // Initial font size in pixels

  increaseFontButton.addEventListener("click", function() {
    fontSize += 2;
    updateFontSize();
  });

  decreaseFontButton.addEventListener("click", function() {
    fontSize -= 2;
    updateFontSize();
  });

  function updateFontSize() {
    inputText.style.fontSize = `${fontSize}px`;
    translatedText.style.fontSize = `${fontSize}px`;
  }

});

