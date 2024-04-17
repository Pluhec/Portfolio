const button = document.getElementsByClassName('nav-button');

button.addEventListener('mouseover', () => {
  button.style.Color = 'blue';
  console.log("mouse enter")
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'white';
});