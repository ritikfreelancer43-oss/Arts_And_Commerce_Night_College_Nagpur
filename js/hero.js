  const imageSources = [
        { src: "./img/24.JPEG", alt: "Bloom School Campus" },
        { src: "https://content.jdmagicbox.com/v2/comp/delhi/l2/011pxx11.xx11.170919220015.u9l2/catalogue/aicte-office-vasant-vihar-delhi-schools-2mpw1ridwr.jpg", alt: "Bloom School Library" },
        { src: "https://images.shiksha.com/mediadata/images/1526979654phpXmuhOZ.jpeg", alt: "Bloom School Sports Ground" }
    ];

    const sliderContainer = document.getElementById("slider");
    const dotsContainer = document.getElementById("slider-dots");

    // Create slides dynamically
    imageSources.forEach((img, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        if (index === 0) slide.classList.add("active");

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;

        slide.appendChild(image);
        sliderContainer.appendChild(slide);

        // Create dots dynamically
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dots span");
    let currentIndex = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[i].classList.add("active");
        dots[i].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Auto-slide every 4s