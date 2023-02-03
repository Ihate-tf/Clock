const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

setInterval( clock = () => {

	const d = new Date();
	const rs = d.getSeconds() / 60;
	const rm = (rs + d.getMinutes()) / 60;
	const rh = (rm + d.getHours()) / 12;

	rotationFun(hours, rh);
	rotationFun(minutes, rm);
	rotationFun(seconds, rs);

}, 1000);

function rotationFun(element,rotation) {
element.style.setProperty('--rotation', rotation * 360);
}

clock();