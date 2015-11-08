var icfes;
var apoyoE =0;
var nivelE = 0;
var ingresosF=0;

function validarIcfes(){
icfes = document.getElementById("icfes").value;  
if (icfes==""){alert("Debe llenar todos los campos");};
if(isNaN(icfes)){alert("El resultado debe ser una cantidad en números");
            //document.getElementById("cont1").style.display = 'block';
           //document.getElementById("cont2").style.display = 'none';---->debe abrir la otra ventana 
  };
if(!(icfes="")){
       	  //document.getElementById("cont1").style.display = 'block';
           //document.getElementById("cont2").style.display = 'none';---->debe abrir la otra ventana 
  }
}

function validarApoyoE () {
  if (document.getElementById('Seleccionesunivel_0').checked) {apoyoE +=1;};
  if (document.getElementById('Seleccionesunivel_1').checked) {apoyoE +=2;};
  if (document.getElementById('Seleccionesunivel_2').checked) {apoyoE +=3;};
  if (document.getElementById('Seleccionesunivel_3').checked) {apoyoE +=5;};
}
function validarNivelE() {
  if (document.getElementById('Niveleducativodelacutiente_0').checked) {nivelE +=25;};
  if (document.getElementById('Niveleducativodelacutiente_1').checked) {nivelE +=50;};
  if (document.getElementById('Niveleducativodelacutiente_2').checked) {nivelE +=75;};
  if (document.getElementById('Niveleducativodelacutiente_3').checked) {nivelE +=100;};
}

function validarIngresosF() {
  if (document.getElementById('Cuantossalariosminimosganaalmes_0').checked) {ingresosF +=1;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_1').checked) {ingresosF +=2;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_2').checked) {ingresosF +=3;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_3').checked) {ingresosF +=4;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_4').checked) {ingresosF +=5;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_5').checked) {ingresosF +=6;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_6').checked) {ingresosF +=7;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_7').checked) {ingresosF +=8;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_8').checked) {ingresosF +=9;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_9').checked) {ingresosF +=10;};
  }

function riesgo () {

var nivelEdif;
var ingresosFdif;
var icfesdif;
var apoyoEdif;

var salida = {etiqueta:"",rango:0};


if (nivelE>=10 && nivelE<34) {nivelEdif="bajo"; };
if (nivelE>=30 && nivelE<70) {nivelEdif="medio";};
if (nivelE>=67 && nivelE<90) {nivelEdif="alto"; };

if (ingresosF>=2 && ingresosF<4) {ingresosFdif="bajo";};
if (ingresosF>=3 && ingresosF<5) {ingresosFdif="medio";};
if (ingresosF>=4 && ingresosF<12) {ingresosFdif="alto";};

if (icfes>=10 && icfes<200)  {icfesdif="bajo"; };
if (icfes>=150 && icfes<350) {icfesdif="medio";};
if (icfes>=300 && icfes<500) {icfesdif="alto"; };
  
if (apoyoE>=0 && apoyoE<2)   {apoyoEdif="bajo"; };
if (apoyoE>=1 && apoyoE<8)   {apoyoEdif="medio";};
if (apoyoE>=6 && apoyoE<=10) {apoyoEdif="alto"; };











if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:67.7};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"ALTO" salida.rango:44.8};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:83.7};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"ALTO" salida.rango:60.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"ALTO" salida.rango:50};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"ALTO" salida.rango:50};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"ALTO" salida.rango:50};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MEDIO" salida.rango:33.2};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="bajo"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="medio" || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="bajo"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="medio" || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="bajo") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="medio"){salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="bajo"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="medio" || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};
if(nivelEdif="alto"  || ingresosFdif="alto"  || icfesdif="alto"  || apoyoEdif="alto") {salida.etiqueta:"MUY ALTO" salida.rango:68.6};


}