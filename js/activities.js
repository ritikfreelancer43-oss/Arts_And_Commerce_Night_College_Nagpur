 const featuredProgram = {
      title: "Excellence in Education",
      description: "Our integrated approach combines traditional academic rigor with innovative teaching methods, ensuring students develop both intellectual curiosity and practical skills for the 21st century.",
      button: "View Full Curriculum",
      image: "https://thumbs.dreamstime.com/b/successful-hispanic-female-student-group-multi-ethnic-college-students-classroom-university-178637283.jpg"
    };

    const programs = [
      {
        icon: "fas fa-book-open",
        title: "Language Arts",
        description: "Comprehensive literature, writing, and communication skills development.",
        features: ["Creative Writing", "Public Speaking", "Critical Analysis", "World Literature"]
      },
      {
        icon: "fas fa-microscope",
        title: "STEM Programs",
        description: "Science, Technology, Engineering, and Mathematics with hands-on learning.",
        features: ["Laboratory Research", "Robotics", "Coding", "Environmental Science"]
      },
      {
        icon: "fas fa-palette",
        title: "Arts & Design",
        description: "Visual and performing arts to foster creativity and self-expression.",
        features: ["Digital Art", "Theater", "Music Production", "Graphic Design"]
      },
      {
        icon: "fas fa-calculator",
        title: "Mathematics",
        description: "Advanced mathematical concepts from algebra to calculus and beyond.",
        features: ["Applied Mathematics", "Statistics", "Financial Literacy", "Logic & Reasoning"]
      },
      {
        icon: "fas fa-globe",
        title: "Social Studies",
        description: "Understanding cultures, history, and global citizenship.",
        features: ["World History", "Geography", "Economics", "Civic Engagement"]
      },
      {
        icon: "fas fa-music",
        title: "Performing Arts",
        description: "Music, dance, and theater programs for artistic development.",
        features: ["Orchestra", "Jazz Band", "Drama Club", "Dance Ensemble"]
      }
    ];

    // ---------------------
    // Student Life Data
    // ---------------------
    const highlights = [
      {
        title: "Vibrant Campus Life",
        description: "Students engage in diverse activities that build friendships, develop skills, and create lasting memories.",
        stats: ["95% Student Participation", "200+ Events", "50+ Partnerships"],
        image: "https://media.istockphoto.com/id/2105100634/photo/happy-university-students-e-learning-while-using-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=aM5zY2HI6Nu5xBFxtT0RgrVSBqmfj6MUlt6cVMCI-N8="
      },
      {
        title: "Innovation Hub",
        description: "State-of-the-art facilities including maker spaces, science labs, and technology centers.",
        stats: [" Lab", " Learning Center", " Workshop"],
        image: "https://thumbs.dreamstime.com/b/successful-hispanic-female-student-group-multi-ethnic-college-students-classroom-university-178637283.jpg"
      }
    ];

    const activities = [
      { icon: "fas fa-trophy", title: "Sports & Athletics", description: "Competitive and recreational sports programs for all skill levels.", highlight: "15+ Sports Teams" },
      { icon: "fas fa-users", title: "Clubs & Organizations", description: "Over 30 clubs covering academics, arts, service, and special interests.", highlight: "30+ Active Clubs" },
      { icon: "fas fa-camera", title: "Events & Traditions", description: "Annual events, cultural celebrations, and school traditions.", highlight: "Year-Round Events" },
      { icon: "fas fa-rocket", title: "Leadership Programs", description: "Student government, peer mentoring, and leadership development.", highlight: "Future Leaders" }
    ];

    const testimonial = {
      quote: "Arts and Night College  gave me the confidence to pursue my dreams and the skills to achieve them. The friendships I made and the experiences I had shaped who I am today.",
      author: "Sarah Chen",
      title: "Class of 2023, Harvard University"
    };

    // ---------------------
    // Rendering Logic
    // ---------------------
    document.getElementById("featured-program").innerHTML = `
      <div class="featured-content">
        <h3>${featuredProgram.title}</h3>
        <p>${featuredProgram.description}</p>
        <button class="btn btn-outline">${featuredProgram.button}</button>
      </div>
      <div class="featured-image">
        <img src="${featuredProgram.image}" alt="${featuredProgram.title}">
      </div>
    `;

    document.getElementById("programs-grid").innerHTML = programs.map(p => `
      <div class="program-card">
        <div class="program-icon"><i class="${p.icon}"></i></div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="program-features">
          ${p.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    `).join("");

    document.getElementById("highlights-grid").innerHTML = highlights.map(h => `
      <div class="highlight-item">
        <div class="highlight-image">
          <img src="${h.image}" alt="${h.title}">
        </div>
        <h3>${h.title}</h3>
        <p>${h.description}</p>
        <div class="highlight-stats">
          ${h.stats.map(s => `<span class="stat-tag">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");

    document.getElementById("activities-grid").innerHTML = activities.map(a => `
      <div class="activity-card">
        <div class="activity-icon"><i class="${a.icon}"></i></div>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <div class="activity-highlight">${a.highlight}</div>
      </div>
    `).join("");

    document.getElementById("testimonial").innerHTML = `
      <blockquote>"${testimonial.quote}"</blockquote>
      <div class="testimonial-author">
        <div class="author-name">${testimonial.author}</div>
        <div class="author-title">${testimonial.title}</div>
      </div>
    `;