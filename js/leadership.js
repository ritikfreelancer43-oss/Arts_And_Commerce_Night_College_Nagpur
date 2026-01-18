const messages = {
    principal: {
      en: {
        name: "Dr. Rajesh Kumar",
        title: "Principal",
        message: "Welcome to Excellence College, where we are committed to nurturing minds and shaping futures. Our institution stands as a beacon of educational excellence, fostering innovation, critical thinking, and holistic development. We believe in empowering our students with knowledge, skills, and values that will enable them to become responsible global citizens and leaders of tomorrow.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxf9a4Z2HRf1tYhkCYdBGOpphTRgidkHiK5Q&s"
      },
      hi: {
        name: "डॉ. राजेश कुमार",
        title: "प्राचार्य",
        message: "एक्सीलेंस कॉलेज में आपका स्वागत है, जहाँ हम मन को पोषित करने और भविष्य को आकार देने के लिए प्रतिबद्ध हैं। हमारा संस्थान शैक्षिक उत्कृष्टता का प्रतीक है, जो नवाचार, आलोचनात्मक सोच और समग्र विकास को बढ़ावा देता है। हम अपने छात्रों को ज्ञान, कौशल और मूल्यों के साथ सशक्त बनाने में विश्वास करते हैं।",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxf9a4Z2HRf1tYhkCYdBGOpphTRgidkHiK5Q&s"
      }
    },
    vice: {
      en: {
        name: "Dr. Priya Sharma",
        title: "Vice Principal",
        message: "At Excellence College, we strive to create an environment that encourages academic excellence and personal growth. Our dedicated faculty and state-of-the-art facilities ensure that every student receives the highest quality education. We are committed to building character, fostering creativity, and preparing our students for the challenges of the modern world.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5Oh1ff3nnQk6C0rOLLXuZ0a8f6M-hWSI_w&s"
      },
      hi: {
        name: "डॉ. प्रिया शर्मा",
        title: "उप-प्राचार्य",
        message: "एक्सीलेंस कॉलेज में, हम एक ऐसा माहौल बनाने का प्रयास करते हैं जो शैक्षणिक उत्कृष्टता और व्यक्तिगत विकास को प्रोत्साहित करता है। हमारे समर्पित शिक्षक और अत्याधुनिक सुविधाएं सुनिश्चित करती हैं कि प्रत्येक छात्र को उच्चतम गुणवत्ता की शिक्षा मिले।",
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