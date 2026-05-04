let slideIndex = 0;
let slideInterval; // স্লাইড কন্ট্রোল করার ভেরিয়েবল

const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider");

function showSlides() {
    // সব স্লাইড থেকে active ক্লাস রিমুভ করা
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.opacity = "0";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // বর্তমান স্লাইড দেখানো
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
        slides[slideIndex - 1].style.opacity = "1";
    }
}

// ২ সেকেন্ড পরপর স্লাইড চলার ফাংশন
function startSlider() {
    slideInterval = setInterval(showSlides, 2000); 
}

// স্লাইড বন্ধ করার ফাংশন
function stopSlider() {
    clearInterval(slideInterval);
}

// স্লাইডার কন্ট্রোল শুরু করা
window.onload = () => {
    showSlides(); // লোড হওয়ার সাথে সাথে প্রথম ইমেজ দেখাবে
    startSlider(); // স্লাইডার চালু হবে

    // ১. মাউস নিলে স্লাইড বন্ধ হবে
    sliderContainer.addEventListener("mouseenter", () => {
        stopSlider();
        console.log("Slider Paused");
    });

    // ২. মাউস সরিয়ে নিলে আবার আগের মতো চলতে শুরু করবে
    sliderContainer.addEventListener("mouseleave", () => {
        startSlider();
        console.log("Slider Resumed");
    });
};
