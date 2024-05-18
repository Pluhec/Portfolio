let darkMode = localStorage.getItem('darkMode'); // ulozeni do uzivatelova prohlizece, aby kdyz znovu nacte web tak aby se mu zobralil mode ktery si predtim nastavil
const darkModeToggle = document.querySelector('#dark-mode-toggle'); // vythanuti z tagu z HTML
const darkImg = document.getElementsByClassName('link-icon') // vythanuti z tagu z HTML

const enableDarkMode = () => { 
  document.body.classList.add('darkmode'); // pridavani classy
  localStorage.setItem('darkMode', 'enabled'); // ukladani promene do local storage
  darkModeToggle.innerHTML = "Dark mode"; // zmena napisu pri zmeneni barvy
  for (let i = 0; i< darkImg.length; i++) { // menim ikonu tim ze projedu to pole a zmenim kazdy img v poli
    darkImg[i].src = ('Icons/link-black.png')
  }
  for (let i = 0; i< darkImg.length; i++) { // menim ikonu tim ze projedu to pole a zmenim kazdy img v poli
    darkImg[i].src = ('Icons/link-black.png')
  }
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
  darkModeToggle.innerHTML = "Light mode"; 

  for (let i = 0; i< darkImg.length; i++) { 
    darkImg[i].src = ('Icons/link-white.png')
  }
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
