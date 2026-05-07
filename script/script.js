function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// Contact form validation
function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;

    if(name=="" || email=="" || msg==""){
        alert("Please fill all fields");
        return false;
    }

    // mailto (basic)
    window.location.href = `mailto:your@email.com?subject=Contact from ${name}&body=${msg}`;
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function autoSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

setInterval(autoSlide, 3000);