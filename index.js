const templateId = "template_4ud63sl";
const serviceId = "service_zwm3y3n";
const publicKey = "QflkTU9XC-th6Tl4U";

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
