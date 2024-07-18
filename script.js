document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.animated-text');
  const text = textElement.innerText;
  textElement.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.innerText = char;
    span.style.setProperty('--i', index);
    textElement.appendChild(span);
  });
});
