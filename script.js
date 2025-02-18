const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.onload = function() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
};

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function buy(){
    window.location.href = "information1.html";
}


       document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        firstname: document.querySelector('input[name="firstname"]').value,
        lastname: document.querySelector('input[name="lastname"]').value,
        address: document.querySelector('input[name="address"]').value,
        city: document.querySelector('input[name="city"]').value,
        state: document.querySelector('input[name="state"]').value,
        pincode: document.querySelector('input[name="pincode"]').value,
        phone: document.querySelector('input[name="phone"]').value
    };
    // Form validation
  
        fetch("https://script.google.com/macros/s/AKfycbws8zo85G9mtvLCKzKPXRD_Nbd1JHcqDcRIuZyHs40QG0IOuYJxu2L4PFZO7hCqRAhg/exec", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",  
        body: JSON.stringify(formData)
        
    })
    document.getElementById("contactForm").reset();
    alert("Your order has been placed successfully");
    window.location.href = "https://pay.upilink.in/pay/80005096354-1@ybl?am=156";

    });
    
      

