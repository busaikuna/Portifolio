const texts = [
    "tecnologia.",
    "desenvolvimento web.",
    "inovação.",
    "programação.",
    "design criativo.",
    "soluções digitais.",
    "experiências de usuário.",
    "aprendizado contínuo.",
    "automação.",
    "empreendedorismo.",
    "desafios técnicos.",
    "engenharia de software.",
    "inteligência artificial.",
    "aplicações mobile.",
    "prototipagem rápida.",
    "metodologias ágeis.",
    "desenvolvimento full stack.",
    "colaboração em equipe.",
    "resolução de problemas.",
    "performance e otimização.",
    "segurança da informação.",
    "criatividade em código.",
    "integração de sistemas.",
    "cloud computing.",
    "open source."
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenTexts = 2000;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let cursorVisible = true;
  
  function typeText() {
      const typingContainer = document.getElementById("typing-text");
      const currentText = texts[textIndex];
  
      if (cursorVisible) {
          typingContainer.innerHTML = currentText.slice(0, charIndex) + "|";
      } else {
          typingContainer.innerHTML = currentText.slice(0, charIndex) + " ";
      }
  
      if (!isDeleting && charIndex <= currentText.length) {
          charIndex++;
          setTimeout(typeText, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
          charIndex--;
          setTimeout(typeText, deletingSpeed);
      } else if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeText, pauseBetweenTexts);
      } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeText, typingSpeed);
      }
  
      cursorVisible = !cursorVisible;
      setTimeout(() => {
          cursorVisible = !cursorVisible;
      }, 500);
  }
  
  document.addEventListener("DOMContentLoaded", typeText);
  