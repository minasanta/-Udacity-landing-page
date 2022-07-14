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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function createNavLinks()
{
    const fragment = document.createDocumentFragment();

    sections.forEach((section) => {
        const list = document.createElement('li');
        const link = document.createElement('a');

        list.className = "list-item";
        fragment.appendChild(list);

        link.textContent = section.dataset.nav;
        link.className = "menu__link";
        link.href = `#${section.id}`;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        });
        list.appendChild(link);
    });
    navBar.appendChild(fragment);
}

// build the nav

createNavLinks()

// Add class 'active' to section when a link is clicked

const links = Array.from(document.querySelectorAll(".menu__link"));
links.forEach((link) => {
    link.addEventListener('click', () => {
        for (const section of sections) 
        {
            if(section.dataset.nav === link.textContent)
            {
                section.className = 'your-active-class';
            }
            else 
            {
                section.className = '';
            }
        }
    });
});

// Add class 'active' to section when near top of viewport

window.onscroll = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -150 && rect.top <= 400)
        {
            section.className = 'your-active-class';
            links.forEach((link)=> {
                if (link.textContent === section.dataset.nav) 
                {
                    link.style.backgroundColor = '#7f62a9';
                }
                else
                {
                    link.removeAttribute("style");
                }
            });
        }
        else 
        {
            section.className = '';
        }
    });
};



