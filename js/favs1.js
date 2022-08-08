function objetoAjax(){
var xmlhttp = false;
try {xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {xmlhttp = false; }}
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
xmlhttp = new XMLHttpRequest();}
return xmlhttp;}
function favorito(i,p,u,f){
producto_id = document.getElementById(p).value;
user_id = document.getElementById(u).value;
veces_fav = document.getElementById(f).value;
imagen = document.getElementById(i);
imagen.src="./imagen/spinner-gris.png";
ajax = objetoAjax();
ajax.open("POST", "./modulo/producto-favorito.php", true);
// event.preventDefault();
ajax.onreadystatechange = function() {
if (ajax.readyState == 4){
resultado = (ajax.responseText);
corazon = resultado.substr(0,1);
if (resultado!=''){
if(corazon==1){imagen.src="./imagen/corazon-lleno.png";}
else if (corazon==0){imagen.src="./imagen/corazon-vacio.png";}}
document.getElementById(f).value = resultado.substr(1);}}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("&producto_id="+producto_id+"&user_id="+user_id+"&veces_fav="+veces_fav);}