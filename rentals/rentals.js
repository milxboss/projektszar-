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
      name: "Porsche Taycan",
      img: "../assets/taycan.png",
      description:
        "Korszerű elektromos autó, amely ötvözi a gyorsaságot, a fenntarthatóságot és a Porsche által nyújtott luxust.",
    },
    {
      name: "Porsche Macan",
      img: "../assets/macan.png",
      description:
        "Kompakt SUV, amely erőteljes motorjával és elegáns megjelenésével tökéletes a városi és vidéki utazásokhoz.",
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
    cardGrid.appendChild(card);
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
    popup.style.display = "block";
  };

  window.closePopup = () => {
    popup.style.display = "none";
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
        <button class="btn" onclick="closePopup()">Bezárás</button>
      </div>
    `;
  };
});