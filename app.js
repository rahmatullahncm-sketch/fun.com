let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    
    // চেক করার জন্য: যদি স্লাইড খুঁজে না পায় তবে কনসোলে জানাবে
    if (slides.length === 0) {
        console.log("No slides found! Check your HTML class names.");
        return;
    }

    // সব স্লাইড থেকে active ক্লাস সরানো
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.opacity = "0"; // নিশ্চিত করতে অপাসিটি ০ করা
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // বর্তমান স্লাইড দেখানো
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].style.opacity = "1"; // অপাসিটি ১ করা

    console.log("Showing slide index: " + slideIndex);

    // ২ সেকেন্ড পর পর চলবে
    setTimeout(showSlides, 2000);
}

// পেজ লোড হওয়া শেষ হলে স্লাইডার শুরু হবে
window.onload = showSlides;
