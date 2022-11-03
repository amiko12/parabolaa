var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var abcisa = document.getElementById("afcisa");
var fesvi = document.getElementById("fesvi");
var ordinati = document.getElementById("ordinati");
var gantoleba = document.getElementById("gantoleba");
var pirveli = document.getElementById("pirveliwevri");
var meorewevri = document.getElementById("meorewevri");
var image = document.getElementById("x");

function parabola(a, b, c) {
  a = first.value;
  b = second.value;
  c = third.value;
  if (a == 1) {
    pirveli.innerText = "";
  } else {
    pirveli.innerText = a;
  }

  meorewevri.innerText = "+" + b + "x+" + c;
  image.style.display = "block";
  d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    x1 = ((-b + Math.sqrt(d)) / 2) * a;
    x2 = ((-b - Math.sqrt(d)) / 2) * a;

    fesvi.innerText = "x1 =" + x1 + "     " + ("x2=" + x2);
  } else if (d == 0) {
    x = (-b / 2) * a;
    fesvi.innerText = "პარაბოლას აქვს ერთი ამონახსნი: " + x;
  } else if (d < 0) {
    fesvi.innerText = "პარაბოლას არ აქვს ამონახსნი";
  }

  x0 = (-d / 4) * a;
  abcisa.innerText = "პარაბოლის წვეროს აბცისაა: " + x0;

  y0 = (-b / 2) * a;

  ordinati.innerText = "პარაბოლის წვეროს ორდინატია: " + y0;
}
