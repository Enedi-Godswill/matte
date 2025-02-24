
// main navbar page
const navbarEl = document.querySelector(".navbar");
function navbar(){
    navbarEl.innerHTML = 
    `
        <p>Matte</p>
        <ul class="nav-list">
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
        </ul>
        <button class="menu-btn">
            <img class="menuBtn" src="./icons/menu.svg" alt="">
            <img class="closeBtn" src="./icons/close.svg" alt="">
        </button>
    `;
}

navbar();

// navbar button and lists styling
const navEl = document.querySelector(".nav-list");
const menuButton = document.querySelector(".menu-btn");

function ToggleBtn(){
   menuButton.classList.toggle("active");
   navEl.classList.toggle("active");
}

menuButton.addEventListener("click", ToggleBtn);

// navbar bottom borders
window.addEventListener("scroll", () => {
    if(this.scrollY >= 20 ){
        navbarEl.classList.add("nav-border")
    } else {
        navbarEl.classList.remove("nav-border")
    }
})
