
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

/*******
 NAV OPENING 
********/

function openNav() {
  var x = document.getElementById("nav-bar");
  var y = document.getElementById("main-content");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

