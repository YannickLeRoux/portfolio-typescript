export default function (): void {
	const secondsHand: HTMLElement | null = document.querySelector('.second-hand');
	const minutesHand: HTMLElement | null = document.querySelector('.min-hand');
	const hoursHand: HTMLElement | null = document.querySelector('.hour-hand');

	function setDate (): void {
		const now: Date = new Date();
		const seconds: number = now.getSeconds();
		const secondsDegrees: number = (seconds / 60) * 360 + 90;
		if (secondsHand) {
			secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
		}

		const minutes: number = now.getMinutes();
		const minutesDegrees: number = (minutes / 60) * 360 + 90;
		if (minutesHand) {
			minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
		}

		const hours: number = now.getHours();
		const hoursDegrees: number = (hours / 12) * 360 + 90;
		if (hoursHand) {
			hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
		}


	}

	setInterval(setDate, 1000);

}


