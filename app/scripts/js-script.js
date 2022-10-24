var pict = false

function changeDisplay() {
	const header3 = document.getElementById("1");
	header3.style.display = pict ?'block' : 'none';
	pict = !pict
}

