// template_dfltemailtemp
//service_mygmail
//cePFoU8dvsaDAlAyz

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_mygmail",
      "template_dfltemailtemp",
      event.target,
      "cePFoU8dvsaDAlAyz"
    )
    .then(() => {
      setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Apologies, please contact me directly at mainnella@gmail.com."
        );
      });
      loading.classList += " modal__overlay--visible";
      console.log("it worked");
    }, 1000);
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
