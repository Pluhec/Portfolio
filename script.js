
/*
TOTO POD TIMTO KOMENTAREM POUZIT NA COLOPHON HEADING, BUDE TO MOZNA FUNGOVAT 
*/

// window.addEventListener('scroll' , () =>{
//     const heading = document.getElementById("main-heading-animation");
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scroll = window.scrollY 

//     if(scroll >= 50 && scroll <= 300){ // scroll smerem dolu, pokud je vetsi nez 50 ale mensi nez 300 
//         const offset = (scroll - 100) * 1.5; // Rychlos animace
//         heading.style.transform = `translateY(${50}px)`; // O kolik se posune
//     }

//     //scroll smerem nahoru, pokud je mensi nez 50, tak se posune na svou default pozici
//     if(scroll <= 50){
//         const offset = (scroll - 60) * 1.5; // Rychlost animace
//         heading.style.transform = `translateY(${-50}px)`; // O kolik se posune
//     }

//     console.log(scroll)

//     heading.style.marginTop = scroll + "px"
// }   
//     console.log(scroll)

// })


const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkImg = document.getElementsByClassName('link-icon');
let darkMode = localStorage.getItem('darkMode');

// Function to enable dark mode
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  darkModeToggle.innerHTML = "Dark mode";
  for (let i = 0; i < darkImg.length; i++) {
    darkImg[i].src = ('Icons/link-black.png');
  }
}

// Function to disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
  darkModeToggle.innerHTML = "Light mode";
  for (let i = 0; i < darkImg.length; i++) {
    darkImg[i].src = ('Icons/link-white.png');
  }
}

// Check user's preference based on OS/browser settings
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set dark mode based on user's preference
if (darkMode === 'enabled' || (darkMode === null && prefersDarkMode)) {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});