const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const form = document.getElementById("reservation-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const submitButton = document.getElementById("gt3rsBTN");
const inputs = form.querySelectorAll("input");
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Nyitás
function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Zárás
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function checkFormValidity() {
  if (
    firstNameInput.value.trim() &&
    lastNameInput.value.trim() &&
    emailInput.value.trim() &&
    dateInput.value
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

[firstNameInput, lastNameInput, emailInput, dateInput].forEach(input => {
  input.addEventListener("input", checkFormValidity);
});


form.addEventListener("submit", function (e) {
  if (submitButton.disabled) {
    e.preventDefault();
  }
});

function checkFormValidity() {
  let allValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allValid = false;
    }
  });

  submitButton.disabled = !allValid;
}

// Mezők változásának figyelése
inputs.forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
    checkFormValidity();
  });
});

// Foglalás gomb kattintáskor: üres mezők kiemelése
form.addEventListener("submit", function (e) {
  let formValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      formValid = false;
      input.classList.add("error");
    }
  });

  if (!formValid) {
    e.preventDefault();
  }
});

function submitForm() {
  const inputs = document.querySelectorAll('#reservation-form input');
  let allValid = true;
  
  // Ellenőrizzük, hogy minden mező ki van-e töltve
  inputs.forEach((input) => {
      if (!input.value) {
          input.style.border = '2px solid red';  // Ha nincs kitöltve, piros keretet kap
          allValid = false;
      } else {
          input.style.border = '';  // Ha kitöltötték, eltávolítjuk a piros keretet
      }
  });

  if (!allValid) return;  // Ha bármelyik mező üres, nem folytatjuk

  // Az animáció eltüntetése és a sikerüzenet megjelenítése
  document.getElementById('form-content').style.display = 'none';
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';

  // Animáció hozzáadása a siker ikonhoz
  const successIcon = document.querySelector('.success-icon');
  successIcon.classList.add('pop-up-animation');
}
