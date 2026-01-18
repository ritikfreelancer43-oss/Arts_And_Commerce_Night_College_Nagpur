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
      { title: "Fine Arts Studio", description: "Painting, sculpture, and design spaces to inspire creativity.", category: "arts", image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/10/05/Photos/DSC_97780-kZSH--621x414@LiveMint.JPG" },
      { title: "Performing Arts Theatre", description: "State-of-the-art auditorium for theatre, dance, and music.", category: "arts", image: "https://content.jdmagicbox.com/v2/comp/mumbai/90/022p33090/catalogue/elphinstone-college-of-arts-science-and-commerce-fort-mumbai-colleges-358ee-250.jpg" },
      { title: "Media & Film Lab", description: "Facilities for journalism, film editing, and digital storytelling.", category: "arts", image: "https://www.shutterstock.com/image-photo/electronics-factory-caucasian-male-electrical-260nw-2492758797.jpg" },
      { title: "Commerce Simulation Lab", description: "Practical business simulations for finance, trade, and economics.", category: "commerce", image: "https://www.shutterstock.com/image-photo/electronics-factory-caucasian-male-electrical-260nw-2492758797.jpg" },
      { title: "Entrepreneurship Hub", description: "Startup incubation, pitch events, and mentorship for young entrepreneurs.", category: "commerce", image: "https://www.shutterstock.com/image-photo/electronics-factory-caucasian-male-electrical-260nw-2492758797.jpg" },
      { title: "Accounting & Finance Center", description: "Equipped with accounting software, stock market simulations.", category: "commerce", image: "https://www.shutterstock.com/image-photo/electronics-factory-caucasian-male-electrical-260nw-2492758797.jpg" },
      { title: "Sports & Recreation Center", description: "Facilities for physical wellness, including gym and indoor sports.", category: "life", image: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg" },
      { title: "Student Dining Hall", description: "Nutritious meals and global cuisines for all students.", category: "life", image: "https://media.istockphoto.com/id/2105091005/photo/young-student-taking-notes-while-e-learning-on-laptop-at-the-university.jpg?s=612x612&w=0&k=20&c=5AoTWNFmHm-HeQfx0FzB3LPm3MKQXgokYelEvmC_47E=" },
      { title: "Accounting & Finance Center", description: "Equipped with accounting software, stock market simulations.", category: "commerce", image: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1326947.jpg&fm=jpg" },
      { title: "Student Dormitories", description: "Safe, comfortable housing fostering learning and community.", category: "life", image: "https://media.istockphoto.com/id/2105100634/photo/happy-university-students-e-learning-while-using-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=aM5zY2HI6Nu5xBFxtT0RgrVSBqmfj6MUlt6cVMCI-N8=" }
      
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