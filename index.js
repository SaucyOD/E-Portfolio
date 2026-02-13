const templateId = "template_4ud63sl";
const serviceId = "service_zwm3y3n";
const publicKey = "QflkTU9XC-th6Tl4U";
let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
	event.preventDefault();
	const loading = document.querySelector(".modal__overlay--loading");
	const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
	emailjs
        .sendForm(
            serviceId,
            templateId,
            event.target,
            publicKey
    ).then(() => {
		loading.classList.remove("modal__overlay--visible");
		success.classList += " modal__overlay--visible";
	}).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at email@email.com"
        )
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}