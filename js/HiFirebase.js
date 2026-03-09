
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD2CDR64btRBRadbaD-uqviGEBt_BJEBw",
  authDomain: "weather-app-a520d.firebaseapp.com",
  databaseURL: "https://weather-app-a520d-default-rtdb.firebaseio.com",
  projectId: "weather-app-a520d",
  storageBucket: "weather-app-a520d.firebasestorage.app",
  messagingSenderId: "287298323709",
  appId: "1:287298323709:web:0e579f0124ee3244ce6a94"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var WeatherApp = document.getElementById('WeatherApp')
var dbRef = firebase.database()

  
var Temperatura=0;
var Presion=0;
var grados =1;

//let dbTemp = firebase.database().ref("Monitor/Temperatura/");
let dbTemp = dbRef.ref("Monitor/Temperatura/");

dbTemp.on('value', function(snapshot) {
  console.log("la temperatura es", snapshot.val());
   Temperatura=snapshot.val();
 document.getElementById("TemperaturaId").innerHTML  = Temperatura.toFixed(2) + " " + "°C";
});


//let dbPres = firebase.database().ref("Monitor/Presion/");
let dbPres = dbRef.ref("Monitor/Presion/");

dbPres.on('value', function(snapshot) {
  console.log("la presion es", snapshot.val());
   Presion=snapshot.val();
 document.getElementById("PresionId").innerHTML  = Presion.toFixed(0) + " " + "mmHG";
});



let dbAlt = dbRef.ref("Monitor/Altitud/");

dbAlt.on('value', function(snapshot) {

console.log("la altitud es", snapshot.val());

document.getElementById("AltitudId").innerHTML =
snapshot.val().toFixed(1) + " m";

});


let dbHum = dbRef.ref("Monitor/Humedad/");

dbHum.on('value', function(snapshot) {

console.log("la humedad es", snapshot.val());

document.getElementById("HumedadId").innerHTML =
snapshot.val().toFixed(1) + " %";

});


let dbTempAHT = dbRef.ref("Monitor/Temperatura_AHT20/");

dbTempAHT.on('value', function(snapshot) {

console.log("temperatura AHT20", snapshot.val());

document.getElementById("TempAHTId").innerHTML =
snapshot.val().toFixed(2) + " °C";

});

///
setInterval(function(){

dbTemp.once('value').then(function(snapshot){

Temperatura = snapshot.val();
document.getElementById("TemperaturaId").innerHTML =
Temperatura.toFixed(2) + " °C";

});

dbPres.once('value').then(function(snapshot){

Presion = snapshot.val();
document.getElementById("PresionId").innerHTML =
Presion.toFixed(0) + " mmHG";

});

dbAlt.once('value').then(function(snapshot){

document.getElementById("AltitudId").innerHTML =
snapshot.val().toFixed(1) + " m";

});

dbHum.once('value').then(function(snapshot){

document.getElementById("HumedadId").innerHTML =
snapshot.val().toFixed(1) + " %";

});

dbTempAHT.once('value').then(function(snapshot){

document.getElementById("TempAHTId").innerHTML =
snapshot.val().toFixed(2) + " °C";

});

},1000);









 