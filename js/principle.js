 let principalContent = {
      english: {
        message: "Welcome to our Arts and Commerce College, where tradition meets innovation. Our institution has been a beacon of academic excellence for over five decades, nurturing young minds and fostering research that addresses contemporary challenges. The research papers showcased here represent the dedication and scholarly pursuit of our esteemed faculty members. Each study reflects our commitment to generating knowledge that contributes to societal development and academic discourse. We believe in the power of interdisciplinary research that bridges the gap between theoretical understanding and practical applications.",
        name: "Dr. Rajesh Kumar Sharma",
        title: "Principal, Arts and Commerce College",
        qual: "M.A., Ph.D. in Economics | 25+ Years in Academic Leadership"
      },
      marathi: {
        message: "आमच्या कला आणि वाणिज्य महाविद्यालयात आपले स्वागत आहे, जिथे परंपरा आणि नाविन्य यांचा मेळ घडतो. आमची संस्था पाच दशकांहून अधिक काळ शैक्षणिक उत्कृष्टतेचे दर्शनस्थान राहिली आहे, तरुण मनांचे संगोपन करत आणि समकालीन आव्हानांना तोंड देणारे संशोधन प्रोत्साहन देत आहे. येथे प्रदर्शित केलेले संशोधन पत्र आमच्या आदरणीय प्राध्यापकांच्या समर्पण आणि विद्वत्तापूर्ण प्रयत्नांचे प्रतिनिधित्व करतात. प्रत्येक अभ्यास समाज विकास आणि शैक्षणिक चर्चेत योगदान देणारे ज्ञान निर्माण करण्याच्या आमच्या वचनबद्धतेचे प्रतिबिंब आहे.",
        name: "डॉ. राजेश कुमार शर्मा",
        title: "प्राचार्य, कला आणि वाणिज्य महाविद्यालय",
        qual: "एम.ए., पीएच.डी. (अर्थशास्त्र) | २५+ वर्षे शैक्षणिक नेतृत्वाचा अनुभव"
      }
    };

    function toggleLanguage(lang) {
      document.getElementById("principal-message-text").textContent = principalContent[lang].message;
      document.getElementById("principal-name").textContent = principalContent[lang].name;
      document.getElementById("principal-title").textContent = principalContent[lang].title;
      document.getElementById("principal-qual").textContent = principalContent[lang].qual;

      // Toggle button styles
      document.getElementById("lang-en").classList.toggle("bg-red-100", lang === "english");
      document.getElementById("lang-en").classList.toggle("text-red-800", lang === "english");
      document.getElementById("lang-en").classList.toggle("bg-gray-200", lang !== "english");
      document.getElementById("lang-en").classList.toggle("text-gray-800", lang !== "english");

      document.getElementById("lang-mar").classList.toggle("bg-red-100", lang === "marathi");
      document.getElementById("lang-mar").classList.toggle("text-red-800", lang === "marathi");
      document.getElementById("lang-mar").classList.toggle("bg-gray-200", lang !== "marathi");
      document.getElementById("lang-mar").classList.toggle("text-gray-800", lang !== "marathi");
    }

    // Initialize default language
    window.addEventListener("load", () => toggleLanguage("english"));