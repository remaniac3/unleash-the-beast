// Moving can.
function monsterZero() {
	let elem = document.getElementById("zeroUltra");
	let pos = 20;
	let canOpacity = 0;

	let screenWidth = document.getElementById("anim").offsetWidth;

	let pixels = 100;
	let screenPercentage = ((screenWidth - pixels) / screenWidth).toFixed(2) * 100;
	console.log(screenPercentage);

	let id = setInterval(frame, 40);

	function frame() {
		function addUps() {
			pos++;
			canOpacity++;
			elem.style.left = pos + '%';
			elem.style.opacity = (canOpacity * 4) + '%';
		}

		if (pos >= 50) {
			clearInterval(id);
		} else if (pos > 45 && pos < 50) {
			addUps();
			id = setInterval(frame, 120);
		} else {
			addUps();
		}
	}
}