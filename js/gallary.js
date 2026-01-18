const images = [
      { src: "./img/1.jpg", title: "Kyoto", strip: "one" },
      { src: "./img/2.jpg", title: "Halstatt", strip: "one" },
      { src: "./img/3.jpg", title: "Peru", strip: "one" },
      { src: "./img/4.jpg", title: "Rio", strip: "one" },
      { src: "./img/20.png", title: "Rio", strip: "one" },

      { src: "./img/5.jpg", title: "Italy", strip: "two" },
      { src: "./img/6.jpg", title: "Osaka", strip: "two" },
      { src: "./img/7.jpg", title: "Bali", strip: "two" },
      { src: "./img/8.jpg", title: "Paris", strip: "two" },
      { src: "./img/19.png", title: "Paris", strip: "two" },

      { src: "./img/16.jpg", title: "Cusco", strip: "three" },
      { src: "./img/9.jpg", title: "Rome", strip: "three" },
      { src: "./img/10.jpg", title: "Paris", strip: "three" },
      { src: "./img/18.png", title: "Paris", strip: "three" },
      { src: "./img/11.jpg", title: "Bali", strip: "three" },

      { src: "./img/12.jpg", title: "Milan", strip: "four" },
      { src: "./img/13.png", title: "Budapest", strip: "four" },
      { src: "./img/14.png", title: "Vienna", strip: "four" },
      { src: "./img/17.png", title: "Vienna", strip: "four" },
      { src: "./img/15.png", title: "Mexico", strip: "four" }
    ];

    const gallery = document.getElementById("gallery");
    const strips = {};

    images.forEach(img => {
      if (!strips[img.strip]) {
        strips[img.strip] = [];
      }
      strips[img.strip].push(img);
    });

    Object.keys(strips).forEach(stripName => {
      const wrapper = document.createElement("div");
      wrapper.className = "gallery__strip__wrapper";

      const strip = document.createElement("div");
      strip.className = `gallery__strip ${stripName}`;

      strips[stripName].forEach(img => {
        const photo = document.createElement("div");
        photo.className = "photo";

        const imgDiv = document.createElement("div");
        imgDiv.className = "photo__image";
        imgDiv.innerHTML = `<img src="${img.src}" alt="${img.title}">`;

        const nameDiv = document.createElement("div");
        nameDiv.className = "photo__name";
        nameDiv.textContent = img.title;

        photo.appendChild(imgDiv);
        photo.appendChild(nameDiv);
        strip.appendChild(photo);
      });

      wrapper.appendChild(strip);
      gallery.appendChild(wrapper);
    });