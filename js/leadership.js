const messages = {
    principal: {
      en: {
        name: "Shri. Hiralalji Meshram",
        title: "Principal",
        message: "The only thing you absolutely have to know is the location of the library so we believe in Earning with Learning Concept for Arts & Commerce Night College Students.",
        img: "./img/principle.png"
      },
      hi: {
        name: "श्री. हिरालालजी मेश्राम",
        title: "प्राचार्य",
        message: "तुम्हाला फक्त ग्रंथालयाचे स्थान माहित असणे आवश्यक आहे, म्हणून आम्ही कला आणि वाणिज्य रात्रीच्या महाविद्यालयीन विद्यार्थ्यांसाठी शिक्षणासह कमाईच्या संकल्पनेवर विश्वास ठेवतो.",
        img: "./img/principle.png"
      }
    },
    vice: {
      en: {
        name: "Dr. Priya Sharma",
        title: "Librarian",
        message: "We hope your semester is off to a great start! As your library team, we’re here to support your academic journey with resources, study spaces, and guidance tailored to your needs as evening and nontraditional learners. Arts & Commerce Night College Assured you to quick access of all the facilities which required in the library.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5Oh1ff3nnQk6C0rOLLXuZ0a8f6M-hWSI_w&s"
      },
      hi: {
        name: "डॉ. प्रिया शर्मा",
        title: "ग्रंथालयकर्मी",
        message: "आम्हाला आशा आहे की तुमच्या सत्राची सुरुवात चांगली झाली असेल! तुमच्या ग्रंथालय टीम म्हणून, आम्ही तुमच्या शैक्षणिक प्रवासाला संसाधने, अभ्यासाची जागा आणि संध्याकाळच्या आणि पारंपारिक नसलेल्या विद्यार्थ्यांच्या गरजांनुसार मार्गदर्शन देऊन पाठिंबा देण्यासाठी येथे आहोत. कला आणि वाणिज्य रात्र महाविद्यालयाने तुम्हाला ग्रंथालयात आवश्यक असलेल्या सर्व सुविधा जलद उपलब्ध करून देण्यাচी हमी दिली.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5Oh1ff3nnQk6C0rOLLXuZ0a8f6M-hWSI_w&s"
      }
    }
  };

  const sectionTitle = document.getElementById("section-title");
  const btnEn = document.getElementById("btn-en");
  const btnHi = document.getElementById("btn-hi");

  const principalName = document.getElementById("principal-name");
  const principalTitle = document.getElementById("principal-title");
  const principalMessage = document.getElementById("principal-message");
  const principalImg = document.getElementById("principal-img");

  const viceName = document.getElementById("vice-name");
  const viceTitle = document.getElementById("vice-title");
  const viceMessage = document.getElementById("vice-message");
  const viceImg = document.getElementById("vice-img");

  function updateLanguage(lang) {
    sectionTitle.textContent = lang === "en" ? "Leadership Message" : "नेतृत्व संदेश";

    const p = messages.principal[lang];
    principalName.textContent = p.name;
    principalTitle.textContent = p.title;
    principalMessage.textContent = p.message;
    principalImg.src = p.img;

    const v = messages.vice[lang];
    viceName.textContent = v.name;
    viceTitle.textContent = v.title;
    viceMessage.textContent = v.message;
    viceImg.src = v.img;

    btnEn.classList.toggle("active", lang === "en");
    btnHi.classList.toggle("active", lang === "hi");
  }

  updateLanguage("en");

  btnEn.addEventListener("click", () => updateLanguage("en"));
  btnHi.addEventListener("click", () => updateLanguage("hi"));