 let researchPapers = [];
        let searchTerm = '';
        let selectedDepartment = 'All';

        // Simulated API endpoint (replace with actual API URL in production)
        async function fetchData() {
            try {
                // Simulated JSON response
                const response = {
                    researchPapers: [
                        {
                            id: '1',
                            title: 'Use of N-LIST E-Resources By the Users in Affiliated Colleges in Nagpur District ',
                            description: 'This study analyzes N-LIST e-resource usage among affiliated colleges in Nagpur, examining demographics, access patterns, awareness, purposes, satisfaction, and utilization.',
                            authors: ['Badwaik Sachin', 'Khobaragade Ashokkumar'],
                            department: 'Arts',
                            publicationDate: '2020-12-12',
                            category: 'Digital Arts and Media',
                            abstract: `Theresearch paper, describes use of N-LIST e-resources
by affiliated college users in Nagpur District. The study
aims to verify the optimum utilization of users for use of
N-LIST e-resources in affiliated college in Nagpur
District, Gender-wise distribution users, Age group wise
users, place of access, sources of awareness of N-LIST,
Purpose of use and level of satisfaction are the variables
of this study to be find out. For this purpose, the
researcher prepared a well-structured Google Form
questionnaire as a tool of data collection for N-LIST
Users (Faculty Members, PG Students and Research
Scholars) and the same was analyzed and presented with
tables and graphs. The article summarized the output
results with highlighting major findings, conclusion and
suggestions.`,
                            keywords: ['N-LIST e-resources', 'N-LIST Programme', 'Electronic Resources', 'Library Consortium', 'Library Users'],

                            downloadUrl: 'https://drive.google.com/file/d/1fcOlVrTuFYBGlDKuZPP5jBBxIW4S78yH/view?usp=drive_link',
                            pages: 104,
                            language: 'English'
                        },
                        {
                            id: '2',
                            title: `SOCIAL MEDIA: AN IMPRESSIVE TEACHING MEDIUM`,
                            description: 'The study discusses positive and academic use of mobile technology and social media to enhance student engagement and improve academic performance.',
                            authors: ['Dr. Ajay B. Kukade'],
                            department: 'Arts',
                            publicationDate: '2023-02-01',
                            category: 'Education',
                            abstract: 'To use mobiles is a common feature of our lives now. Almost all students use mobile and its features a lot. We teachers get angry to see the students in their spare time engaging inmobiles, when we are in college, university campuses. We have to accept the fact that it is a normal thing for young generation to use mobiles. So instead of getting irritated, we need to start focusing on the positives of the technology that would help students in many different ways and also would help us keep calm. The usage of social media like whatsapp, facebook, twitter, telegram, and other applications has grown a lot in recent past. So we need to use it smartly in our communication with students in such manner that students would start spending their online time in more useful activities as far as their studies are concerned. The paper aims at an overview of such activities that would prove beneficial to students in increasing their academic performances.',
                            keywords: ['Social Media','Mobile Technology', 'Teaching and Learning', 'Academic Performance', 'Educational Technology'],
                            downloadUrl: 'https://drive.google.com/file/d/1iNRIKoZU9JprLp5VFwX4-IyFXZWAvzuQ/view?usp=sharing',
                            pages: 234,
                            language: 'English'
                        },
                        {
                            id: '3',
                            title: `DECLINING GDP GROWTH RATE AND EMPLOYMENT IN THE WAKE OF COVID-19, AND FISCAL STIMULATION`,
                            description: 'The study examines the combined impact of demonetisation, GST implementation, and the COVID-19 pandemic on India’s economy, with special focus on unemployment and the unorganized sector.',
                            authors: ['Mrunal Khobragade'],
                            department: 'Commerce',
                            publicationDate: '2023-04-01',
                            category: 'Economics',
  abstract: 'The Indian economy experienced a slowdown due to demonetisation and improperly implemented GST, reflected in declining GDP and rising unemployment. The COVID-19 pandemic further intensified this crisis, severely affecting employment, especially in the unorganized sector. Although the government introduced various packages, schemes, and reforms to boost employment, lack of proper coordination has limited their effectiveness.',
  keywords: [
    'Demonetisation',
    'GST',
    'COVID-19',
    'Unemployment',
    'Unorganized Sector',
    'Indian Economy'
  ],
  downloadUrl: 'https://drive.google.com/file/d/1ZfoWcbCeFbMRrYrl9drG1Pa28rLSxLOR/view?usp=sharing',
                            pages: 336,
                            language: 'English'
                        },
                        {
                            id: '4',
                            title: `A STUDY ON EFFECTIVENESS OF NATIONAL DIGITAL REPOSITORY OF IGNOU –EGYANKOSH`,
                            description: 'The study examines the role of ICT in Open and Distance Learning with special reference to the effectiveness of eGyanKosh as an e-learning platform of IGNOU.',
                            authors: ['Dr. Bhavana Khapekar'],
                            department: 'Arts',
                            publicationDate: '2023-12-05',
                            category: 'Library and Information Science / Education',
  abstract: 'The use of Information and Communication Technology (ICT) has significantly transformed the Open and Distance Learning system worldwide. Indira Gandhi National Open University (IGNOU) utilizes technology-enabled platforms and innovative teaching methodologies such as teleconferencing, video lectures, CBTs, online resources, and interactive learning. eGyanKosh, IGNOU’s National Digital Repository, plays a vital role in storing, preserving, and disseminating digital learning resources. This paper discusses the effectiveness of eGyanKosh as an e-learning platform for empowering learners.',
  keywords: [
    'Information and Communication Technology',
    'Open and Distance Learning',
    'IGNOU',
    'eGyanKosh',
    'E-Learning'
  ],
  downloadUrl: 'https://drive.google.com/file/d/1NcFRsfc7aHx9X3_fCb9RqULKwtYhJhrV/view?usp=sharing',
                            pages: 94,
                            language: 'English'
                        },
                        {
                            id: '5',
                            title: `A STUDY ON EFFECTIVENESS OF NATIONAL DIGITAL REPOSITORY OF IGNOU –EGYANKOSH`,
                           description: 'The study highlights the use of ICT in Open and Distance Learning and evaluates the effectiveness of eGyanKosh as an e-learning platform of IGNOU.',
                            authors: ['Dr. Bhavana Khapekar'],
                            department: 'Arts',
                            publicationDate: '2020-01-01',
                            category: 'Library and Information Science',
  abstract: 'The use of Information and Communication Technology (ICT) has significantly influenced the Open and Distance Learning (ODL) system worldwide. Indira Gandhi National Open University (IGNOU) delivers its programmes through technology-enabled platforms using innovative teaching methods such as satellite-based teleconferencing, video lectures, computer-based training, internet resources, and interactive online learning. IGNOU’s national digital repository, eGyanKosh, plays a vital role in storing, preserving, and disseminating digital learning resources. This paper discusses the effectiveness of eGyanKosh as an e-learning platform for learners.',
  keywords: [
    'Information and Communication Technology',
    'Open and Distance Learning',
    'IGNOU',
    'eGyanKosh',
    'E-Learning'
  ],
  downloadUrl: 'https://drive.google.com/file/d/1qCtO6f6vbnR-siXK00ea7jOIyitffs0z/view?usp=sharing',
                            pages: 47,
                            language: 'English'
                        }
                    ]
                };
                researchPapers = response.researchPapers;
                renderPapers();
                renderDepartments();
                document.getElementById('results-count').textContent = `Showing ${researchPapers.length} of ${researchPapers.length} research papers`;
            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('results-count').textContent = 'Error loading data. Please try again later.';
            }
        }

        // Functions
        function renderPapers() {
            const grid = document.getElementById('papers-grid');
            grid.innerHTML = '';
            const filtered = researchPapers.filter(paper => {
                const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      paper.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
                const matchesDept = selectedDepartment === 'All' || paper.department === selectedDepartment;
                return matchesSearch && matchesDept;
            });
            if (filtered.length === 0) {
                document.getElementById('no-papers').classList.remove('hidden');
            } else {
                document.getElementById('no-papers').classList.add('hidden');
                filtered.forEach(paper => {
                    const card = document.createElement('div');
                    card.className = 'academic-card h-full flex flex-col';
                    card.innerHTML = `
                        <div class="p-6">
                            <div class="flex flex-wrap gap-2 mb-3 mb-[10px]">
                                <span class="px-2 py-1 text-xs font-medium rounded orange-gradient text-white">${paper.department}</span>
                                <span class="px-2 py-1 text-xs font-medium rounded border border-red-200">${paper.category}</span>
                                <span class="px-2 py-1 text-xs font-medium rounded border border-red-200 text-gray-500">${paper.language}</span>
                            </div>
                            <h3 class="academic-heading text-lg leading-tight line-clamp-2 mb-4">${paper.title}</h3>
                            <p class="academic-body text-sm mb-4 line-clamp-3 flex-1">${paper.description}</p>
                            <div class="space-y-3 mb-4">
                                <div class="flex items-center gap-2 text-sm text-gray-500">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
                                    <span class="line-clamp-1">${paper.authors.join(', ')}</span>
                                </div>
                                <div class="flex items-center gap-4 text-sm text-gray-500">
                                    <div class="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                        <span>${new Date(paper.publicationDate).toLocaleDateString()}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2V5"/><path d="M16 2V5"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10H21"/></svg>
                                        <span>${paper.pages} pages</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${paper.keywords.slice(0, 3).map(k => `<span class="px-2 py-1 text-xs rounded bg-red-200">${k}</span>`).join('')}
                                ${paper.keywords.length > 3 ? `<span class="px-2 py-1 text-xs rounded bg-red-200">+${paper.keywords.length - 3} more</span>` : ''}
                            </div>
                            <button class="w-full bg-red-600 text-white py-2 rounded group mt-auto" onclick="showDetailView('${paper.id}')">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline mr-2 group-hover:scale-110 transition-transform"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/><path d="M8 12L12 16L16 12"/></svg>
                                Read Full Paper
                            </button>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            }
            document.getElementById('results-count').textContent = `Showing ${filtered.length} of ${researchPapers.length} research papers`;
        }

        function renderDepartments() {
            const filters = document.getElementById('department-filters');
            filters.innerHTML = '';
            const depts = ['All', ...new Set(researchPapers.map(p => p.department))];
            depts.forEach(dept => {
                const card = document.createElement('div');
                card.className = `filter-card ${selectedDepartment === dept ? 'active' : ''}`;
                card.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
                        <path d="${dept === 'All' ? 'M12 8V16' : dept === 'Arts' ? 'M12 6V12L16 14' : 'M4 12H20'}"/>
                    </svg>
                    ${dept}
                `;
                card.onclick = () => {
                    selectedDepartment = dept;
                    filters.querySelectorAll('.filter-card').forEach(c => c.className = `filter-card ${c.textContent.trim() === dept ? 'active' : ''}`);
                    renderPapers();
                };
                filters.appendChild(card);
            });
        }

        function showDetailView(id) {
            const paper = researchPapers.find(p => p.id === id);
            if (!paper) return;
            document.getElementById('papers-list-section').parentElement.querySelectorAll('section:not(#paper-detail-section)').forEach(s => s.classList.add('hidden'));
            const detailSection = document.getElementById('paper-detail-section');
            detailSection.classList.remove('hidden');

            document.getElementById('detail-title').textContent = paper.title;
            document.getElementById('detail-description').textContent = paper.description;
            document.getElementById('detail-abstract').textContent = paper.abstract;
            document.getElementById('detail-language').textContent = paper.language;
            document.getElementById('detail-size').textContent = `~${Math.ceil(paper.pages / 3)} MB`;

            const badges = document.getElementById('detail-badges');
            badges.innerHTML = `
                <span class="px-2 py-1 text-xs font-medium rounded bg-white/20 text-white border border-white/20">${paper.department}</span>
                <span class="px-2 py-1 text-xs font-medium rounded bg-white/20 text-white border border-white/20">${paper.category}</span>
                <span class="px-2 py-1 text-xs font-medium rounded bg-white/20 text-white border border-white/20">${paper.language}</span>
            `;

            const meta = document.getElementById('detail-meta');
            meta.innerHTML = `
                <div class="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
                    <span>${paper.authors.join(', ')}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>${new Date(paper.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2V5"/><path d="M16 2V5"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10H21"/></svg>
                    <span>${paper.pages} pages</span>
                </div>
            `;

            const keywords = document.getElementById('detail-keywords');
            keywords.innerHTML = paper.keywords.map(k => `<span class="px-2 py-1 text-xs rounded orange-gradient text-white">${k}</span>`).join('');

            const authors = document.getElementById('detail-authors');
            authors.innerHTML = paper.authors.map((a, i) => `
                <div class="${i < paper.authors.length - 1 ? 'pb-3 border-b border-red-200' : ''}">
                    <p class="font-medium text-gray-900">${a}</p>
                    <p class="text-sm text-gray-500">Department of ${paper.department}</p>
                </div>
            `).join('');

            const citation = document.getElementById('detail-citation');
            citation.innerHTML = `${paper.authors.join(', ')} (${new Date(paper.publicationDate).getFullYear()}). <em>${paper.title}</em>. Arts and Commerce College Research Journal. ${paper.pages}p.`;

            window.scrollTo(0, 0);
        }

        function showListView() {
            document.getElementById('paper-detail-section').classList.add('hidden');
            document.querySelectorAll('section:not(#paper-detail-section)').forEach(s => s.classList.remove('hidden'));
            window.scrollTo(0, 0);
        }

        function handleDownload() {
    const paper = researchPapers.find(p => p.title === document.getElementById('detail-title').textContent);
    if (paper && paper.downloadUrl) {
        // Redirect user to the download URL
        window.location.href = paper.downloadUrl;
    } else {
        alert('Download link not available for this paper.');
    }
}

        // Init
        document.getElementById('search-input').addEventListener('input', e => {
            searchTerm = e.target.value;
            renderPapers();
        });

        // Load data on page load
        window.addEventListener('load', fetchData);