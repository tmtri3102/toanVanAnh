function average() {
	event.preventDefault();
	let toan = +document.getElementById("toan").value;
	let van = +document.getElementById("van").value;
	let anh = +document.getElementById("anh").value;
	let average = (toan + van + anh) / 3;
	let result = document.getElementById("result");

	if (average >= 9) {
		result.innerHTML = "  Xuất sắc";
	} else if (average >= 8) {
		result.innerHTML = " Tốt";
	} else if (average > 7) {
		result.innerHTML = " Khá";
	} else if (average >= 5) {
		result.innerHTML = " Đạt";
	} else {
		result.innerHTML = " Không đạt";
	}
	console.log(average);
}
