i5="./imagen/Familia_Frigova_Banner.jpg"
i4="./imagen/Familia_Kaiser_II_Banner.jpg"
i3="./imagen/Chuleta_Ahumada_Frigova_Banner.jpg"
i2="./imagen/Mejilla_Cerdo_Banner.jpg"
i1="./imagen/Cortes_Embutidos_Banner.jpg"
t5="Productos Frigova"
t4="Productos Kaiser"
t3="Chuleta Ahumada"
t2="Mejilla de Cerdo"
t1="Embutidos"
d5="..."
d4="..."
d3="..."
d2="..."
d1="..."
h5="./"
h4="./"
h3="./"
h2="./"
h1="./"
var i=Math.round(Math.random() * 4) + 1;
var b=document.getElementById("banner");
var e=document.getElementById("enlace");
var t=document.getElementById("titulo");
var d=document.getElementById("descripcion");
function siguiente() {   
if (i == 1) {b.src=i2; e.href=h2; b.alt=t2; t.innerHTML=t2; d.innerHTML=d2; i=2;}
else if (i == 2) {b.src=i3; e.href=h3; b.alt=t3; t.innerHTML=t3; d.innerHTML=d3; i=3;}
else if (i == 3) {b.src=i4; e.href=h4; b.alt=t4; t.innerHTML=t4; d.innerHTML=d4; i=4;}
else if (i == 4) {b.src=i5; e.href=h5; b.alt=t5; t.innerHTML=t5; d.innerHTML=d5; i=5;}
else if (i == 5) {b.src=i1; e.href=h1; b.alt=t1; t.innerHTML=t1; d.innerHTML=d1; i=1;}}
function anterior() {
if (i == 5) {b.src=i4; e.href=h4; b.alt=t4; t.innerHTML=t4; d.innerHTML=d4; i=4;}
else if (i == 4) {b.src=i3; e.href=h3; b.alt=t3; t.innerHTML=t3; d.innerHTML=d3; i=3;}
else if (i == 3) {b.src=i2; e.href=h2; b.alt=t2; t.innerHTML=t2; d.innerHTML=d2; i=2;}
else if (i == 2) {b.src=i1; e.href=h1; b.alt=t1; t.innerHTML=t1; d.innerHTML=d1; i=1;}
else if (i == 1) {b.src=i5; e.href=h5; b.alt=t5; t.innerHTML=t5; d.innerHTML=d5; i=5;}}
setInterval('siguiente()',8000);
function ocultarflechas() {document.getElementById('flecha1').style.display="none"; document.getElementById('flecha2').style.display="none";}
function mostrarflechas() {document.getElementById('flecha1').style.display="block"; document.getElementById('flecha2').style.display="block";}