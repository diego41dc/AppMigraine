$.crearEpisodio.addEventListener('android:back',function(){
	$.crearEpisodio.close();
});

function doClickCrear() {
	var cosa = JSON.stringify({
       "fecha": "2015-04-05",
       "medicamentos": $.medicamentos.value,
       "nivelDolor":$.nivelDolor.value,
       "patronesSueno": $.patronesSueno.value,
       "actividades": $.actividades.value,
       "paciente": {"id":Ti.App.Properties.getString('idUsuario')},
       "audios": [{"campo":1}]
       });
	var url = Ti.App.Properties.getString('ip')+"/experimento-1-3/episodioPaciente";
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         //alert("Received text: " + this.responseText);
         $.crearEpisodio.close();
         alert('Se ha creado el episodio.');
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         //alert(e.error);
         alert('Ocurrio un error en la creación del episodio, intenta mas tarde.');
     },
     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("POST", url);
	 client.setRequestHeader('Content-Type','application/json');
	 // Send the request.
	 client.send(cosa);
}
