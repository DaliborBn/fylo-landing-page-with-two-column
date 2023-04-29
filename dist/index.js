/* VALIDATE EMAIL */
const emailInput1 = document.getElementById('email1');
const message1 = document.getElementById('message1');
const btn1 = document.getElementById('btn1');

const emailInput2 = document.getElementById('email2');
const message2 = document.getElementById('message2');
const btn2 = document.getElementById('btn2');

//keyup
function validateKeyup(emailInput, message) {
  const email = emailInput.value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    message.textContent = "";
    emailInput.style.border = '2px solid hsl(0, 0%, 75%)';
  } else {
    message.textContent = "Please check your email!";
    emailInput.style.border = '2px solid red';
    message.style.display = 'block';
    message.style.visibility = 'visible'
  }
}

emailInput1.addEventListener('keyup', () => {
  validateKeyup(emailInput1, message1);
});

emailInput2.addEventListener('keyup', () => {
  validateKeyup(emailInput2, message2);
});

//click on button
function validateOnClick(emailInput, message) {
  const email = emailInput.value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    message.textContent = "";
    emailInput.value = ""
    emailInput.style.border = '2px solid hsl(0, 0%, 75%)';
  } else {
    message.textContent = "Please check your email!";
    emailInput.style.border = '2px solid red';
    message.style.display = 'block';
    message.style.visibility = 'visible'
  }
}

btn1.addEventListener('click', () => {
  validateOnClick(emailInput1, message1);
});
btn2.addEventListener('click', () => {
  validateOnClick(emailInput2, message2);
});

/* SCROLL IN ANIMATION - IMAGES */
const boxes = document.querySelectorAll('.section-image');
window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

/* SCROLL IN ANIMATION - CARD */
const card = document.querySelector('.card');
window.addEventListener('scroll', cardAnimation);
window.addEventListener('load', cardAnimation);

function cardAnimation() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const boxTop = card.getBoundingClientRect().top;

  if(boxTop < triggerBottom) {
    card.classList.add('card-animate');
  }
}
