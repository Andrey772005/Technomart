const modalMap = document.querySelector(".modal-map");
const modalClose = modalMap.querySelector(".modal-close");
const minMap = document.querySelector(".min-map");

minMap.addEventListener('click', function (evt) {
  evt.preventDefault();
	modalMap.classList.remove("modal-map-close");
	modalMap.classList.add("modal-map-open");
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
	modalMap.classList.remove('modal-map-open');
	modalMap.classList.add('modal-map-close');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains("modal-map-open")) {
			evt.preventDefault();
			modalMap.classList.add('modal-map-close');
			modalMap.classList.remove('modal-map-open');
		}
	}
});