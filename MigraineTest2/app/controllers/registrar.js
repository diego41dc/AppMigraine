$.registrar.addEventListener('android:back',function(){
	$.registrar.close();
});



function doClickRegistrar() {
	var url = Ti.App.Properties.getString('ip')+"/experimento-1-3/paciente";
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         Ti.App.Properties.setString('idUsuario',JSON.parse(this.responseText).paciente_id);
         $.registrar.close();
         alert('Se ha creado el usuario, ingrese con sus datos.');
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         //alert(e.error);
         alert('Ocurrio un error en la creación del usuario, intenta mas tarde.');
     },
     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("POST", url);
	 client.setRequestHeader('Content-Type','application/json');
	 // Send the request.
	 client.send(JSON.stringify({
       "identificacion": $.identificacion.value,
       "primerNombre": $.primerNombre.value,
       "segundoNombre":$.segundoNombre.value,
       "primerApellido": $.primerApellido.value,
       "segundoApellido": $.segundoApellido.value,
       "password": $.password.value,
       "correoElectronico": $.correoElectronico.value,
       "usuario": $.usuario.value,
       "rol": "paciente"
    }));
}
