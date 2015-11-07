var icfes;
var apoyoEconomico =0;
var niveleducativodelacutiente = 0;
var ingresosFamiliares=0;

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
  if (document.getElementById('Seleccionesunivel_0').checked) {apoyoEconomico +=1;};
  if (document.getElementById('Seleccionesunivel_1').checked) {apoyoEconomico +=2;};
  if (document.getElementById('Seleccionesunivel_2').checked) {apoyoEconomico +=3;};
  if (document.getElementById('Seleccionesunivel_3').checked) {apoyoEconomico +=5;};
}
function validarNivelE() {
  if (document.getElementById('Niveleducativodelacutiente_0').checked) {niveleducativodelacutiente +=25;};
  if (document.getElementById('Niveleducativodelacutiente_1').checked) {niveleducativodelacutiente +=50;};
  if (document.getElementById('Niveleducativodelacutiente_2').checked) {niveleducativodelacutiente +=75;};
  if (document.getElementById('Niveleducativodelacutiente_3').checked) {niveleducativodelacutiente +=100;};
}

function validarIngresosF() {
  if (document.getElementById('Cuantossalariosminimosganaalmes_0').checked) {ingresosFamiliares +=1;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_1').checked) {ingresosFamiliares +=2;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_2').checked) {ingresosFamiliares +=3;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_3').checked) {ingresosFamiliares +=4;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_4').checked) {ingresosFamiliares +=5;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_5').checked) {ingresosFamiliares +=6;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_6').checked) {ingresosFamiliares +=7;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_7').checked) {ingresosFamiliares +=8;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_8').checked) {ingresosFamiliares +=9;};
  if (document.getElementById('Cuantossalariosminimosganaalmes_9').checked) {ingresosFamiliares +=10;};
  }

function riesgo () {
var icfesdif;
var apoyoEconomicodif;
var niveleducativodelacutientedif;
var ingresosFamiliaresdif;

if (icfes>=10 && icfes<200)  {icfesdif="bajo";};//bajo
if (icfes>=150 && icfes<350) {icfesdif=0;};
if (icfes>=300 && icfes<500) {icfesdif=0;};
  
if (apoyoEconomico>=0 && apoyoEconomico<2)   {apoyoEconomicodif=0;};
if (apoyoEconomico>=1 && apoyoEconomico<8)   {apoyoEconomicodif=0;};
if (apoyoEconomico>=6 && apoyoEconomico<=10) {apoyoEconomicodif=0;};

if (niveleducativodelacutiente>=10 && niveleducativodelacutiente<34) {niveleducativodelacutientedif=0;};
if (niveleducativodelacutiente>=30 && niveleducativodelacutiente<70) {niveleducativodelacutientedif=0;};
if (niveleducativodelacutiente>=67 && niveleducativodelacutiente<90) {niveleducativodelacutientedif=0;};

if (ingresosFamiliares>=2 && ingresosFamiliares<4) {ingresosFamiliaresdif=0;};
if (ingresosFamiliares>=3 && ingresosFamiliares<5) {ingresosFamiliaresdif=0;};
if (ingresosFamiliares>=4 && ingresosFamiliares<12) {ingresosFamiliaresdif=0;};

}