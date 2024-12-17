document.addEventListener("DOMContentLoaded", () => {
  const carData = [
    {
      name: "Porsche 911 GT3 RS",
      img: "../assets/gt3rs.png",
      description:
        "Az ikonikus sportautó, amely lenyűgöző teljesítményt és páratlan vezetési élményt nyújt. A tökéletes választás autórajongóknak.",
      popupImg: "../assets/gtr3rspop.png",
      popupDescription:
        "A Porsche 911 GT3 RS a motorsport technológiáját hozza el az utakra. Lenyűgöző aerodinamikával, könnyített vázzal és versenypályára optimalizált teljesítménnyel. Ez az autó a sebesség szerelmeseinek készült.",
    },
    {
      name: "Taycan 4S Sport Turismo",
      img: "../assets/taycan.png",
      description:
        "Korszerű elektromos autó, amely ötvözi a gyorsaságot, a fenntarthatóságot és a Porsche által nyújtott luxust.",
      popupImg: "../assets/taycanpop.png",
      popupDescription:
        "A Porsche Taycan az első tisztán elektromos Porsche, amely teljesítményével és luxusával új mércét állít a sportos elektromos autók számára.",
    },
    {
      name: "Porsche Macan",
      img: "../assets/macan.png",
      description:
        "Kompakt SUV, amely erőteljes motorjával és elegáns megjelenésével tökéletes a városi és vidéki utazásokhoz.",
      popupImg: "../assets/macanpop.png",
      popupDescription:
        "A Porsche Macan dinamikus, sportos és praktikus. Az ideális választás azoknak, akik szeretnék élvezni a Porsche vezetési élményét egy SUV formájában.",
    },
    {
      name: "Porsche Cayenne",
      img: "../assets/cayenne.png",
      description:
        "Kiváló teljesítményű SUV, amely ötvözi a luxust és a dinamikus vezetési élményt. A Porsche Cayenne ideális választás családok számára.",
      popupImg: "../assets/cayennepop.png",
      popupDescription:
        "A Porsche Cayenne minden terepen megállja a helyét, miközben a legmagasabb szintű luxust és kényelmet biztosít vezetőinek és utasainak.",
    },
    {
      name: "Porsche 718 Cayman",
      img: "../assets/cayman.png",
      description:
        "A Porsche 718 Cayman a sportos vezetési élmény szimbóluma. Kiváló kezelhetőség, dinamikus motor és lenyűgöző dizájn jellemzi.",
      popupImg: "../assets/caymanpop.png",
      popupDescription:
        "A Porsche 718 Cayman a tökéletes autó azok számára, akik a sebességet és a precíz irányítást keresik, miközben élvezhetik a Porsche egyedülálló stílusát.",
    },
    {
      name: "Porsche Panamera",
      img: "../assets/panamera.png",
      description:
        "A luxus és a teljesítmény tökéletes ötvözete, amely hosszú utazásokhoz és városi eleganciához egyaránt ideális.",
      popupImg: "../assets/panamerapop.png",
      popupDescription:
        "A Porsche Panamera kényelmes és elegáns autó, amely a sportosságot és a technológiát ötvözi a mindennapi vezetési élményhez.",
    },
    {
      name: "Porsche 911 Turbo S",
      img: "../assets/turbo.png",
      description:
        "A technológiai csoda, amely úttörő fejlesztéseivel és egyedi stílusával a jövőbe mutatott.",
      popupImg: "../assets/turbopop.png",
      popupDescription:
        "A Porsche 911 Turbo S kiemelkedő sebességgel és technológiai újításokkal kínál lenyűgöző vezetési élményt.",
    },
    {
      name: "Porsche 911 Dakar",
      img: "../assets/dakar.png",
      description:
        "Az első Porsche modell, amely megalapozta a márka hírnevét és örökségét.",
      popupImg: "../assets/dakarpop.png",
      popupDescription:
        "A Porsche 911 Dakar egy sokoldalú, terepen is kiemelkedő autó, amely a Porsche történetének alapját adja.",
    },
    {
      name: "Porsche Carrera GTS Cabriolet",
      img: "../assets/cabriolet.png",
      description:
        "Legendás szupersportautó, amely elképesztő teljesítményt és exkluzív megjelenést kínál.",
      popupImg: "../assets/cabrioletpop.png",
      popupDescription:
        "A Porsche Carrera GTS Cabriolet szabad ég alatt kínál egyedülálló vezetési élményt és dizájnot.",
    },
    {
      name: "Porsche 911 S/T",
      img: "../assets/st.png",
      description:
        "Versenypályára tervezett mestermű, amely a motorsport világában írta be magát a történelembe.",
      popupImg: "../assets/911stpop.png",
      popupDescription:
        "A Porsche 911 S/T a versenypályákhoz készült precíz technológiai megoldásokkal és lenyűgöző sebességgel rendelkezik.",
    },
    {
      name: "Porsche 718 Spyder RS",
      img: "../assets/718.png",
      description:
        "Hibrid szuperautó, amely egyesíti a modern technológiát a Porsche ikonikus stílusával.",
      popupImg: "../assets/718spyderpop.png",
      popupDescription:
        "A Porsche 718 Spyder RS a technológia és a sebesség tökéletes kombinációját kínálja a sportautók világában.",
    },
    {
      name: "Porsche Boxster",
      img: "../assets/boxster.png",
      description:
        "Stílusos roadster, amely szabad ég alatti vezetési élményt és élénk motorhangot kínál.",
      popupImg: "../assets/boxsterpop.png",
      popupDescription:
        "A Porsche Boxster egy ikonikusan elegáns roadster, amely sportos dizájnjával és vezetési élményével mindenkit lenyűgöz.",
    },
  ];

  const footerLinks = {
    Termékeink: ["Karrier", "Szállodák", "Autók", "Csomagok", "Jellemzők", "Árvonal"],
    "A PorscheX-ről": ["Miért a PorscheX?", "A mi történetünk", "Befektetők", "Sajtóközpontok", "Hirdetés"],
    Erőforrás: ["Súgóközpontok", "Útmutatók", "Partnerhálózat", "Mechanics", "Fejlesztő"],
    Extrák: ["Bérleti ajánlat", "Javítóműhely", "Foglalás megtekintése", "Bérbeadó cégek", "Új ajánlatok"],
  };

  const cardGrid = document.getElementById("card-grid");
  const footerContainer = document.getElementById("footer-container");

  // Kártyák generálása
  carData.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.description}</p>
      <button class="btn" onclick="openPopup(${index})">Bérlés</button>
    `;
    setTimeout(() => {
      card.style.animationDelay = `${index * 0.05}s`; // Sorozatos késleltetés
      cardGrid.appendChild(card);
    }, index * 50); // Szinkron késleltetés
  });

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "scale(1.1)";
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = "scale(1)";
    });
  });

  // Lábléc generálása
  Object.keys(footerLinks).forEach((category) => {
    const col = document.createElement("div");
    col.className = "footer__col";
    col.innerHTML = `<h4>${category}</h4>`;
    const ul = document.createElement("ul");
    ul.className = "footer__links";
    footerLinks[category].forEach((link) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#">${link}</a>`;
      ul.appendChild(li);
    });
    col.appendChild(ul);
    footerContainer.appendChild(col);
  });

  // Popup funkciók
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";
  document.body.appendChild(popup);

  window.openPopup = (index) => {
    const car = carData[index];
    popup.innerHTML = `
      <div class="popup-content">
        <span class="close" onclick="closePopup()">&times;</span>
        <div class="popup-body section__container">
          <div class="image-container">
            <img class="image-front" src="${car.popupImg || car.img}" alt="${car.name}">
          </div>
          <div class="popup-text">
            <h2>${car.name}</h2>
            <p>${car.popupDescription || car.description}</p>
            <form id="reservation-form" onsubmit="handleReservation(event)">
              <div class="form-group">
                <label for="first-name">Keresztnév:</label>
                <input type="text" id="first-name" name="first-name" required>
              </div>
              <div class="form-group">
                <label for="last-name">Vezetéknév:</label>
                <input type="text" id="last-name" name="last-name" required>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="date">Foglalási dátum:</label>
                <input type="date" id="date" name="date" required>
              </div>
              <button class="btn" type="submit">Foglalás</button>
            </form>
          </div>
        </div>
      </div>
    `;
    popup.style.display = "flex";
  };

  window.closePopup = () => {
    popup.classList.add("hide");
    setTimeout(() => {
      popup.style.display = "none";
      popup.classList.remove("hide");
    }, 50);
  };

  window.handleReservation = (event) => {
    event.preventDefault();

    popup.innerHTML = `
      <div id="success-message" style="text-align: center;">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="green" viewBox="0 0 24 24">
            <path d="M20.285 6.707L10 17.019l-6.285-6.304 1.415-1.414 4.87 4.888L18.87 5.293z" />
          </svg>
        </div>
        <h2>Sikeres foglalás!</h2>
        <p>Köszönjük, hogy lefoglalta autóját. Hamarosan felvesszük Önnel a kapcsolatot.</p>
        <button class="btn" onclick="closePopup()">X</button>
      </div>
    `;
  };
});