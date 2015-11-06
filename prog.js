var icfes;
function validarIcfes(){
	icfes = document.getElementById("icfes").value;             
	if (icfes=="" ){
		alert("Debe llenar todos los campos");
	}if(isNaN(icfes)){
		alert("El resultado debe ser una cantidad en números");
                //document.getElementById("cont1").style.display = 'block';
               //document.getElementById("cont2").style.display = 'none';---->debe abrir la otra ventana 
           };if(!(icfes="")){
           	  //document.getElementById("cont1").style.display = 'block';
               //document.getElementById("cont2").style.display = 'none';---->debe abrir la otra ventana 
           }
       }