const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const items = document.getElementById(".menu li");
const searchform = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

function openMenu(){
    sidebar.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
}

hamburger.onclick =() =>{
    sidebar.classList.contains("active") ? closeMenu() : openMenu();
};

overlay.onclick = closeMenu;

items.forEach(item =>{
 item.onclick = () =>{
     items.forEach( i => i.classList.remove("active"));
     items.classList.add("active");
     closeMenu();
 };
});

// Search
searchform.addEventListener("submit",
    function(e){
        e.preventDefault();

        const value = searchInput.value.trim();

        if(value == ""){
            alert("Please enter something to search");
            return;
        }
        console.log("search value :",value);
    }
);
