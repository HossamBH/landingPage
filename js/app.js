/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var navBar = document.querySelector('#navbar__list');
var navMenu = document.querySelector('.page__header');
var fixedButton = document.querySelector('#fixedButton');
var delay;
var sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// add active class on click a specific link
function selectSection(id=null){
    let list = document.getElementById('navbar__list');
    let elements = list.getElementsByTagName('li');

    for(let i=1; i<=elements.length; i++){

        // color the selected nav section && mark the section
        let element = document.getElementById(`a${i}`);
        let section = document.getElementById(`section${i}`);
        if(id == i){
            element.classList.add('active');
        }
        else{
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
    }

}


// add navegation buttons according to the number of sections
function addNavSections(){
    let numberOfSections = document.querySelectorAll('section').length;
    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

    for(let i=1; i<=numberOfSections; i++){
        const section = document.getElementById(`section${i}`);
        
        // add the nav button if the section exists
        if(section != null){
            const newList = document.createElement('li');
            const newNavButton = document.createElement('a');
            newNavButton.innerText = `Section${i}`;

            // Scroll to anchor ID using scrollTO event
            newNavButton.setAttribute('href', `#section${i}`);
            newNavButton.setAttribute('id', `a${i}`);
            newList.setAttribute('onclick', `selectSection(${i});`);
            newList.appendChild(newNavButton);
            fragment.appendChild(newList);
        }
    }
    var navBar = document.querySelector('#navbar__list');
    navBar.appendChild(fragment);
}

// hide the nav bar on scrolling
document.addEventListener("scroll", function () {
    navMenu.style.display = "block";
    clearTimeout(delay);
    var currentPosition = window.pageYOffset;
    if (currentPosition > 100) {
      delay = setTimeout(function () {
        navMenu.style.display = "none";
      }, 3000);
      fixedButton.style.display = "block";
    }else{
        fixedButton.style.display = "none";
    }
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        sec.classList.remove("your-active-class");
        if(rect.top >= 0 && rect.top < (window.innerHeight || document.doucmentElement.clientHeight)) {
          sec.classList.add("your-active-class");
        }
    });
  });

// go to the top of the page
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    selectSection();
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function startAnimation(){

    // build the nav
    addNavSections();
}
// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active