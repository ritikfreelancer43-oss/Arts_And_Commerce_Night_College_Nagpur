const stats = [
      { label: "Total Facilities", value: "40+", description: "Arts & Commerce Spaces" },
      { label: "Commerce Labs", value: "10", description: "Business Simulation Centers" },
      { label: "Art Studios", value: "15+", description: "Painting, Theatre, Music" },
      { label: "Students Served", value: "12,000+", description: "Daily Campus Usage" }
    ];

    const statsContainer = document.getElementById("stats-container");
    stats.forEach((stat, i) => {
      const div = document.createElement("div");
      div.className = "p-6 text-center bg-white rounded-xl shadow-md hover:shadow-2xl animate-fade-scale";
      div.style.animationDelay = `${i * 0.15}s`;
      div.innerHTML = `
        <div class="text-3xl font-bold text-red-600 mb-2">${stat.value}</div>
        <div class="text-lg font-semibold text-gray-700 mb-1">${stat.label}</div>
        <div class="text-sm text-gray-500">${stat.description}</div>
      `;
      statsContainer.appendChild(div);
    });

    // Facilities with images
    const facilities = [
      { title: "Workshops & Seminars", description: "Regular sessions to enhance practical skills and knowledge.", category: "arts", image: "./img/15.png" },
      { title: "Cultural Programs", description: "Platforms to showcase artistic talents through exhibitions, performances, and festivals.", category: "arts", image: "./img/21.jpg" },
      { title: "Media & Film Lab", description: "Facilities for journalism, film editing, and digital storytelling.", category: "arts", image: "https://www.shutterstock.com/image-photo/electronics-factory-caucasian-male-electrical-260nw-2492758797.jpg" },
      { title: "Industrial Visits", description: "Gain real-world exposure by visiting industries and connecting classroom learning with practical experience.", category: "commerce", image: "./img/22.JPEG" },
      { title: "Online Business Learning", description: "Learn anytime, anywhere with our flexible online learning platform.", category: "commerce", image: "./img/c1.png" },
      { title: "Accounting & Finance Center", description: "Equipped with accounting software, stock market simulations.", category: "commerce", image: "./img/27.JPEG" },
      { title: "Leadership through Voice", description: "Encourages students to analyze topics deeply and present well-structured arguments.", category: "life", image: "./img/l2.png" },
      { title: "Mindfulness & Meditation Yoga", description: "A blend of yoga and meditation practices to enhance concentration and inner peace.", category: "life", image: "./img/l1.png" },
      { title: "Annual Athletic Meet", description: "Annual sports event showcasing student talents and team spirit.", category: "life", image: "img/26.JPEG" },
      { title: "Exploration & Learning", description: "Trips designed to broaden horizons, explore new cultures, and learn beyond the classroom.", category: "commerce", image: "./img/9.jpg" }
      
    ];

   function renderFacilities(category, containerId) {
  const container = document.getElementById(containerId);
  facilities.filter(f => f.category === category).forEach((facility, i) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden animate-fade-scale";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="w-full h-56 overflow-hidden">
        <img src="${facility.image}" alt="${facility.title}" 
          class="w-full h-full object-cover rounded-t-xl">
      </div>
      <div class="p-6">
        <h4 class="text-xl font-bold text-red-600 mb-2">${facility.title}</h4>
        <p class="text-gray-600">${facility.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}


    renderFacilities("arts", "arts-facilities");
    renderFacilities("commerce", "commerce-facilities");

    renderFacilities("life", "life-facilities");
