AOS.init({ duration: 1000, once: true });

// Data for dynamic rendering
const data = {
  hero: {
    bg: 'history-building.jpg',
    title: 'About Us',
    subtitle: 'A legacy of academic excellence and innovation spanning over 150 years'
  },
  visionMission: [
    { icon: 'fa-heart', title: 'Our Vision', text: 'To be a globally recognized institution...', details: 'The vision of the college is social upliftment, practical skills, and fostering a commitment to society through accessible education with earning' },
    { icon: 'fa-award', title: 'Our Mission', text: 'To provide exceptional education...', details: 'We are committed to fostering an inclusive environment...' }
  ],
  history: {
    timeline: [
      { year: '1873', title: 'Foundation', text: 'Founded as a small liberal arts college...' },
      { year: '1920s', title: 'Expansion Era', text: 'Rapid growth led to the establishment of multiple departments...' },
      { year: '1960s-80s', title: 'Research Revolution', text: 'Established world-class research facilities...' },
      { year: '2000s-Present', title: 'Digital Innovation', text: 'Pioneered online learning platforms...' }
    ],
    images: [
      'library-interior.jpg',
      'graduation.jpg'
    ]
  },
  policies: [
    { icon: 'fa-shield-alt', title: 'Academic Integrity', text: 'We maintain the highest standards of honesty...' },
    { icon: 'fa-users', title: 'Diversity & Inclusion', text: 'We celebrate diversity and create an inclusive environment...' },
    { icon: 'fa-book-open', title: 'Research Ethics', text: 'Research adheres to strict ethical guidelines...' },
    { icon: 'fa-heart', title: 'Student Welfare', text: 'We provide counseling, healthcare, and academic assistance.' },
    { icon: 'fa-user-shield', title: 'Privacy Protection', text: 'We protect personal information...' },
    { icon: 'fa-award', title: 'Excellence Standards', text: 'We strive for excellence in teaching, research, and service.' }
  ],
  facts: [
    { number: '8,550', label: 'Total Students' },
    { number: '308', label: 'Faculty Members' },
    { number: '50+', label: 'Research Centers' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '40+', label: 'Countries Represented' },
    { number: '150+', label: 'Years of History' },
    { number: '200+', label: 'Industry Partners' },
    { number: '15:1', label: 'Student-Faculty Ratio' }
  ]
};

// Render Hero
document.getElementById('hero-bg').style.backgroundImage = `url(${data.hero.bg})`;
document.getElementById('hero-title').innerHTML = data.hero.title;
document.getElementById('hero-subtitle').textContent = data.hero.subtitle;

// Render Vision & Mission
document.getElementById('vision-mission').innerHTML = data.visionMission.map(vm => `
  <div class="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-500" data-aos="fade-up">
    <h3 class="flex items-center gap-3 text-2xl font-semibold">
      <i class="fas ${vm.icon} text-red-600"></i> ${vm.title}
    </h3>
    <p class="mt-4 text-lg text-gray-600">${vm.text}</p>
    <p class="mt-2 text-base text-gray-600">${vm.details}</p>
  </div>
`).join('');

// Render History
document.getElementById('history-timeline').innerHTML = data.history.timeline.map((item, idx) => `
  <div data-aos="fade-up" data-aos-delay="${(idx+1)*100}">
    <div class="flex items-center gap-3">
      <i class="fas fa-calendar text-red-600"></i>
      <span class="border px-2 py-1 text-sm rounded text-gray-600">${item.year}</span>
    </div>
    <h3 class="text-2xl font-bold mt-2">${item.title}</h3>
    <p class="text-gray-600 mt-1">${item.text}</p>
  </div>
`).join('');

document.getElementById('history-images').innerHTML = data.history.images.map((img, idx) => `
  <img src="${img}" class="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition duration-500" data-aos="fade-left" data-aos-delay="${idx*150}">
`).join('');

// Render Policies
document.getElementById('policies').innerHTML = data.policies.map(policy => `
  <div class="bg-white shadow-lg rounded-lg p-6">
    <h3 class="flex items-center gap-3 font-semibold">
      <i class="fas ${policy.icon} text-red-600"></i> ${policy.title}
    </h3>
    <p class="mt-2 text-gray-600">${policy.text}</p>
  </div>
`).join('');

// Render Facts
document.getElementById('facts').innerHTML = data.facts.map(fact => `
  <div>
    <div class="text-4xl font-bold text-red-600">${fact.number}</div>
    <div class="text-gray-600">${fact.label}</div>
  </div>
`).join('');