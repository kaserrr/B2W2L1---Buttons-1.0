var button1 = 1;
var button2 = 1;
var button3 = 1;

function change(id) {
	switch(id) {
		case 1 :
		document.getElementById("img1").src = "images/1.jpg";
		document.getElementById("img2").src = "images/bg1.jpg";
		document.getElementById("1").innerHTML = button1++;
		break;

		case 2:
		document.getElementById("img1").src = "images/2.jpg";
		document.getElementById("img2").src = "images/bg2.jpg";
		document.getElementById("2").innerHTML = button2++;
		break;

		case 3:
		document.getElementById("img1").src = "images/3.jpg";
		document.getElementById("img2").src = "images/bg3.jpg";
		document.getElementById("3").innerHTML = button3++;
		break;
	}
}