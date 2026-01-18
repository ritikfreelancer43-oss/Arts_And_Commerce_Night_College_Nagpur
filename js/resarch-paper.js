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
                            title: 'Digital Transformation in Indian Commerce: A Post-COVID Analysis',
                            description: 'This paper examines the accelerated digital transformation in Indian commercial sectors following the COVID-19 pandemic, analyzing market shifts and adaptation strategies.',
                            authors: ['Dr. Priya Sharma', 'Prof. Rajesh Kumar', 'Dr. Anita Patel'],
                            department: 'Commerce',
                            publicationDate: '2024-01-15',
                            category: 'Digital Commerce',
                            abstract: 'The COVID-19 pandemic has fundamentally altered the landscape of Indian commerce, accelerating digital adoption across various sectors. This study presents a comprehensive analysis of the transformation patterns observed in retail, banking, and e-commerce sectors. Through extensive surveys and case studies of 500+ businesses, we examine the adaptation strategies, challenges faced, and long-term implications of this digital shift. Our findings reveal that businesses that embraced digital technologies early showed 40% better resilience during the pandemic. The paper also discusses policy implications and provides recommendations for sustained digital growth in the post-pandemic era.',
                            keywords: ['Digital Commerce', 'COVID-19 Impact', 'E-commerce', 'Indian Markets', 'Digital Transformation'],
                            downloadUrl: 'https://hislopcollege.ac.in/wp-content/uploads/2025/06/RTMNU-Academic-Calendar-2025-26.pdf',
                            pages: 45,
                            language: 'English'
                        },
                        {
                            id: '2',
                            title: 'Sustainable Art Practices in Contemporary Indian Culture',
                            description: 'An exploration of how contemporary Indian artists are incorporating sustainable practices and environmental consciousness into their artistic expressions.',
                            authors: ['Dr. Maya Krishnan', 'Prof. Suresh Nair'],
                            department: 'Arts',
                            publicationDate: '2023-11-20',
                            category: 'Cultural Studies',
                            abstract: 'This research investigates the growing movement of sustainable art practices among contemporary Indian artists. Through interviews with 75 artists across various mediums - painting, sculpture, installation, and performance art - we document how environmental consciousness is reshaping artistic expression. The study reveals emerging trends in eco-friendly materials usage, waste recycling in art creation, and the role of art in environmental activism. Case studies include prominent artists who have successfully integrated sustainability without compromising artistic integrity. The paper contributes to the discourse on art\'s role in addressing climate change and offers frameworks for sustainable artistic practices.',
                            keywords: ['Sustainable Art', 'Environmental Art', 'Contemporary Indian Art', 'Eco-friendly Practices'],
                            downloadUrl: '/downloads/sustainable-art-practices.pdf',
                            pages: 38,
                            language: 'English'
                        },
                        {
                            id: '3',
                            title: 'Financial Inclusion Through Digital Banking in Rural Maharashtra',
                            description: 'A comprehensive study on how digital banking initiatives have improved financial inclusion among rural populations in Maharashtra state.',
                            authors: ['Dr. Vinod Deshmukh', 'Prof. Sunita Joshi', 'Dr. Rahul Patil'],
                            department: 'Commerce',
                            publicationDate: '2023-09-10',
                            category: 'Rural Finance',
                            abstract: 'Financial inclusion remains a critical challenge in rural India, with Maharashtra being a significant case study due to its diverse economic landscape. This paper examines the impact of digital banking initiatives on rural financial inclusion over the past five years. Using data from 200 villages across 15 districts, we analyze adoption patterns, barriers to usage, and socio-economic outcomes. The study employs mixed-method research combining quantitative analysis of banking data with qualitative insights from focus group discussions. Key findings indicate a 65% increase in bank account ownership and a 45% rise in digital transaction adoption. The paper provides policy recommendations for enhancing digital financial services accessibility.',
                            keywords: ['Financial Inclusion', 'Digital Banking', 'Rural Finance', 'Maharashtra', 'Digital Payments'],
                            downloadUrl: '/downloads/financial-inclusion-rural.pdf',
                            pages: 52,
                            language: 'English'
                        },
                        {
                            id: '4',
                            title: 'भारतीय लोककला आणि आधुनिक कलाकृती: एक तुलनात्मक अभ्यास',
                            description: 'भारतीय पारंपरिक लोककला आणि आधुनिक कलाकृतींमधील साम्य आणि विषमता यांचा सखोल अभ्यास.',
                            authors: ['डॉ. संजय काळे', 'प्राध्यापक मीरा देशपांडे'],
                            department: 'Arts',
                            publicationDate: '2023-12-05',
                            category: 'Folk Art Studies',
                            abstract: 'हा संशोधन पत्र भारतीय लोककला परंपरा आणि समकालीन कलाकृतींमधील संबंधांचा अभ्यास करतो. महाराष्ट्र, गुजरात, राजस्थान आणि पश्चिम बंगालमधील विविध लोककला प्रकारांचे विश्लेषण करून, आधुनिक कलाकारांनी कशा प्रकारे या पारंपरिक तंत्रांना समकालीन संदर्भात जतन केले आहे याचा अभ्यास केला आहे. या अभ्यासात 150 कलाकारांच्या मुलाखती, कलाकृतींचे विश्लेषण आणि सांस्कृतिक केंद्रांचे सर्वेक्षण समाविष्ट आहे. संशोधनाचे निष्कर्ष दर्शवतात की लोककला परंपरा कशी आधुनिक कलेत नवीन आयाम घेत आहे.',
                            keywords: ['लोककला', 'आधुनिक कला', 'भारतीय परंपरा', 'सांस्कृतिक अभ्यास', 'कलाकृती विश्लेषण'],
                            downloadUrl: '/downloads/folk-art-comparative-study.pdf',
                            pages: 41,
                            language: 'Marathi'
                        },
                        {
                            id: '5',
                            title: 'Cryptocurrency Adoption and Regulatory Challenges in India',
                            description: 'Analysis of cryptocurrency adoption trends in India and the evolving regulatory landscape affecting digital asset markets.',
                            authors: ['Dr. Amit Singh', 'Prof. Neha Agarwal', 'Dr. Kiran Shah'],
                            department: 'Commerce',
                            publicationDate: '2024-02-28',
                            category: 'Digital Finance',
                            abstract: 'This paper provides a comprehensive analysis of cryptocurrency adoption in India from 2020 to 2024, examining market trends, user demographics, and regulatory developments. Through surveys of 2000+ cryptocurrency users and interviews with industry stakeholders, we map the evolving landscape of digital assets in India. The study analyzes the impact of regulatory announcements on market behavior, adoption patterns across different demographics, and the role of exchanges in promoting financial literacy. Key findings include the significant growth in retail investor participation and the challenges posed by regulatory uncertainty. The paper concludes with recommendations for balanced regulatory frameworks that foster innovation while ensuring consumer protection.',
                            keywords: ['Cryptocurrency', 'Digital Assets', 'Financial Regulation', 'Blockchain Technology', 'Indian Markets'],
                            downloadUrl: '/downloads/cryptocurrency-adoption-india.pdf',
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