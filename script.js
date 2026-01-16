let bgHue = 60; // Snapchat yellow default
function draw() {
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");

  const viewW = 3840;
  const viewH = 2160;

  const scale = Math.min(canvas.width / viewW, canvas.height / viewH);
  const offsetX = (canvas.width - viewW * scale) / 2;
  const offsetY = (canvas.height - viewH * scale) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);

  // Yellow background
  const bgColor = `hsl(${bgHue}, 100%, 50%)`;

  ctx.fillStyle = bgColor;
  ctx.strokeStyle = bgColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(874, 1824);
  ctx.bezierCurveTo(874, 335, 872, 335, 882, 273);
  ctx.bezierCurveTo(885, 273, 880, 264, 952, 129);
  ctx.bezierCurveTo(961, 135, 956, 131, 1067, 48);
  ctx.bezierCurveTo(1075, 54, 1083, 44, 1196, 23);
  ctx.bezierCurveTo(1193, 27, 1193, 27, 2661, 28);
  ctx.bezierCurveTo(2692, 26, 2789, 58, 2797, 67);
  ctx.bezierCurveTo(2807, 68, 2874, 117, 2896, 149);
  ctx.bezierCurveTo(2908, 153, 2957, 244, 2961, 277);
  ctx.bezierCurveTo(2964, 276, 2974, 346, 2972, 347);
  ctx.bezierCurveTo(2972, 1818, 2972, 1818, 2976, 1841);
  ctx.bezierCurveTo(2930, 1975, 2914, 1980, 2918, 1987);
  ctx.bezierCurveTo(2800, 2099, 2792, 2088, 2795, 2096);
  ctx.bezierCurveTo(2707, 2124, 2666, 2125, 2666, 2125);
  ctx.bezierCurveTo(1183, 2125, 1183, 2125, 1152, 2126);
  ctx.bezierCurveTo(1071, 2102, 1074, 2099, 1057, 2093);
  ctx.bezierCurveTo(979, 2044, 986, 2043, 976, 2040);
  ctx.bezierCurveTo(911, 1957, 915, 1954, 913, 1955);
  ctx.bezierCurveTo(888, 1900, 890, 1898, 886, 1898);
  ctx.bezierCurveTo(872, 1824, 874, 1824, 874, 1824);
  ctx.fill();
  ctx.stroke();

  // White ghost
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 40;
  ctx.beginPath();
  ctx.moveTo(1478, 829);
  ctx.bezierCurveTo(1438, 163, 2410, 173, 2368, 831);
  ctx.bezierCurveTo(2431, 810, 2532, 832, 2547, 939);
  ctx.bezierCurveTo(2550, 1045, 2482, 1073, 2393, 1137);
  ctx.bezierCurveTo(2389, 1247, 2647, 1369, 2673, 1425);
  ctx.bezierCurveTo(2700, 1506, 2610, 1563, 2493, 1596);
  ctx.bezierCurveTo(2469, 1639, 2475, 1670, 2378, 1694);
  ctx.bezierCurveTo(2291, 1694, 2201, 1711, 2180, 1737);
  ctx.bezierCurveTo(2009, 1846, 1864, 1847, 1686, 1750);
  ctx.bezierCurveTo(1701, 1737, 1552, 1688, 1544, 1697);
  ctx.bezierCurveTo(1417, 1698, 1373, 1655, 1352, 1594);
  ctx.bezierCurveTo(1256, 1572, 1167, 1516, 1170, 1440);
  ctx.bezierCurveTo(1174, 1384, 1213, 1379, 1301, 1323);
  ctx.bezierCurveTo(1367, 1293, 1478, 1149, 1455, 1132);
  ctx.bezierCurveTo(1146, 969, 1365, 771, 1486, 840);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function resizeCanvas() {
  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");
  const container = canvas.parentElement;
  const rect = container.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.width * (2160 / 3840) + "px";

  canvas.width = rect.width * dpr;
  canvas.height = rect.width * (2160 / 3840) * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("hueSlider");

  slider.addEventListener("input", e => {
    bgHue = e.target.value;
    draw();
  });
});

function showLogo(id) {
  document.querySelectorAll('.logo').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'canvas') resizeCanvas();
}

// Default

 showLogo('png');
