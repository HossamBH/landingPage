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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

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
            newNavButton.innerText = `Section ${i}`;
            newNavButton.setAttribute('href', `#section${i}`);
            newList.appendChild(newNavButton);
            fragment.appendChild(newList);
        }
    }
    var navBar = document.querySelector('#navbar__list');
    navBar.appendChild(fragment);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function startAnimation(){

// build the nav
addNavSections();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


}