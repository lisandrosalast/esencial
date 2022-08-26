function objetoAjax(){
var xmlhttp = false;
try {xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {xmlhttp = false; }}
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
xmlhttp = new XMLHttpRequest();}
return xmlhttp;}
function anadir(p){
producto_id = document.getElementById(p).value;
ajax = objetoAjax();
ajax.open("POST", "./modulo/pedido-anadir.php", true);
// event.preventDefault();
ajax.onreadystatechange = function() {
if (ajax.readyState == 4){
resultado = (ajax.responseText);
document.getElementById("pedido").innerHTML = resultado;}}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("&producto_id="+producto_id);}