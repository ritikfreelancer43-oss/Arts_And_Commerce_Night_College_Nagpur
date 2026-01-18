const images = [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg", title: "Kyoto", strip: "one" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg", title: "Halstatt", strip: "one" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg", title: "Peru", strip: "one" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg", title: "Rio", strip: "one" },

      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg", title: "Italy", strip: "two" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg", title: "Osaka", strip: "two" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg", title: "Bali", strip: "two" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg", title: "Paris", strip: "two" },

      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg", title: "Cusco", strip: "three" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg", title: "Rome", strip: "three" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg", title: "Paris", strip: "three" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg", title: "Bali", strip: "three" },

      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg", title: "Milan", strip: "four" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg", title: "Budapest", strip: "four" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg", title: "Vienna", strip: "four" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg", title: "Mexico", strip: "four" }
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