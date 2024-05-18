let darkMode = localStorage.getItem('darkMode'); // ulozeni do uzivatelova prohlizece, aby kdyz znovu nacte web tak aby se mu zobralil mode ktery si predtim nastavil
const darkModeToggle = document.querySelector('#dark-mode-toggle'); // vythanuti z tagu z HTML
const modeIcon = document.getElementById('dark-mode-toggle');
const jpLogo = document.getElementById('jp-logo');
const darkImg = document.getElementsByClassName('link-icon');

const enableDarkMode = () => { 
  document.body.classList.add('darkmode'); // pridavani classy do body
  localStorage.setItem('darkMode', 'enabled'); // ukladani promene do local storage
  modeIcon.src = "Icons/night-mode.png";
  jpLogo.src = "Icons/jp-logo-black.png";

  for (let i = 0; i< darkImg.length; i++) { // menim ikonu tim ze projedu to pole a zmenim kazdy img v poli
    darkImg[i].src = ('Icons/link-black.png');
  }
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
  modeIcon.src = "Icons/sun.png";
  jpLogo.src = "Icons/jp-logo-white.png";

  for (let i = 0; i< darkImg.length; i++) { 
    darkImg[i].src = ('Icons/link-white.png');
  }
};

if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
}else {
  disableDarkMode();

}

darkModeToggle.addEventListener('click', () => {
  const darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
