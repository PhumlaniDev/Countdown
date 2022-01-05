const countdown = () => {
	const countDate = new Date("December 31, 2022 23:59:59").getTime();
	const now = new Date().getTime();
	const yearFooter = new Date().getFullYear();

	const gap = countDate - now;
	console.log(gap);

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.querySelector(".day").textContent = textDay;
	document.querySelector(".hour").textContent = textHour;
	document.querySelector(".minute").textContent = textMinute;
	document.querySelector(".second").textContent = textSecond;
	document.querySelector(
		".footer"
	).textContent = `Created by PhumlaniDev ©️ ${yearFooter}`;

	if (gap < 5000) {
	}
};

setInterval(countdown, 1000);
