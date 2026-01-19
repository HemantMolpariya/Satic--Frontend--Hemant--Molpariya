
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Disable background scroll when menu is open
  document.body.style.overflow =
    navLinks.classList.contains("show") ? "hidden" : "auto";
});

// Close menu when any link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});


// ==============================
// SEARCH BAR FUNCTIONALITY
// ==============================
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = searchInput.value.trim();

    if (!value) {
      alert("Please enter a search term");
      searchInput.focus();
      return;
    }

    alert("Searching for: " + value);
  });
}
/* ===== Day 7: Notification ===== */
const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  message.textContent = "Success! Task deployed successfully.";
  notification.className = "notification success";
}

function showError() {
  message.textContent = "Error! Something went wrong.";
  notification.className = "notification error";
}

function dismiss() {
  notification.classList.add("hidden");
}

// gotonup button
const gotonup = document.getElementById("goTopBtn");

window.addEventListener("scroll",()=>{
  if(window.scrollY > 350){
    gotonup.classList.add("show");
  }else{
    gotonup.classList.remove("show");
  }
});

gotonup.addEventListener("click", ()=>{
  window.scrollTo({
    top : 0,
    behavior : "smooth",
  });
});

//from
const form = document.getElementById("basicfrom");
const username = document.getElementById("username");
const submitBtn = document.getElementById("SubitBtn");
const errorText = document.getElementById("nameError");
username.addEventListener("input", ()=>{
 const valid = username.value.trim() !== "";
 submitBtn.disabled=!valid;
 errorText.style.display=valid ? "none" : "block";
 username.classList.toggle("error",!valid);
});

form.addEventListener("submit",(e)=>{
e.preventDefault();
if(!username.value.trim()) return;
showSuccess();
form.reset();
submitBtn.disabled= true;
});
