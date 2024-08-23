document.getElementById('recibo').value = Math.floor(Math.random() * 1000000);

var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
document.getElementById('fecha').value = date;