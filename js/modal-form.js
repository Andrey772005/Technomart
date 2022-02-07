const modalButton = document.querySelector(".modal-button");
const modalForm = document.querySelector(".modal-form");
const modalClose = modalForm.querySelector(".modal-close");
const submitButton = modalForm.querySelector(".submit-button");
const userForm = modalForm.querySelector(".user-form");
const userName = modalForm.querySelector(".user-name");
const userEmail = modalForm.querySelector(".email")

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-form-open");

    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }
});

modalClose.addEventListener('click', function () {
    modalForm.classList.add("modal-form-close")
    modalForm.classList.remove("modal-form-open")
    modalForm.classList.remove("modal-form-error")
});

userForm.addEventListener('submit', function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        modalForm.classList.remove("modal-form-error");
        modalForm.offsetWidth = modalForm.offsetWidth;
        modalForm.classList.add("modal-form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", userName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalForm.classList.contains("modal-form-open")) {
        evt.preventDefault();
        modalForm.classList.remove("modal-form-open");
        modalForm.classList.remove("modal-form-error")
      }
    }
  });

