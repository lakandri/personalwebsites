document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.animated-text');
  const text = textElement.innerText;
  textElement.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.innerText = char;
    span.style.setProperty('animation-delay', `${index * 0.1}s`);
    textElement.appendChild(span);
  });
});
