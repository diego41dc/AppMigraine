$.index.open();
Ti.App.Properties.setString('ip',$.ip.value);

$.index.addEventListener('android:back',function(){
	// var activity = Titanium.Android.currentActivity;//Puede hacer que la app se detenga
	// activity.finish();
	var timer = setTimeout(function() {
        clearTimeout(timer);
        var activity = Titanium.Android.currentActivity;
        activity.finish();
    },500);
});

$.ip.addEventListener('change', function(){
	Ti.App.Properties.setString('ip',$.ip.value);
});
function registrarUsuario(e) {
    var registrar = Alloy.createController('registrar').getView();
    registrar.open();
}

function crearEpisodio(e) {
   if(Ti.App.Properties.getString('idUsuario') == undefined || Ti.App.Properties.getString('idUsuario') == ''){
   		alert('No existe un usuario creado.');
   } else {
   	 var crearE = Alloy.createController('episodio').getView();
    	crearE.open();
   }
   
   
}


function consultar(){
	/*var url = "http://192.168.43.87:8080/experimento-1-3/diagnostico/getAll";
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
			// this function is called when data is returned from the server and available for use
	        // this.responseText holds the raw text return of the message (used for text/JSON)
	        // this.responseXML holds any returned XML (including SOAP)
	        // this.responseData holds any returned binary data
	        //Ti.API.debug(this.responseText);
	        alert('success');
	        $.label.text=this.responseText;
	    },
	    onerror: function(e) {
			// this function is called when an error occurs, including a timeout
	        //Ti.API.debug(e.error);
	        alert('error');
	    },
	    timeout:5000  
	});
	xhr.open("GET", url);
	xhr.send();  // request is actually sent with this statement
	
	*/
	alert('Consulta');
	var url = "http://192.168.1.70:8080/experimento-1-3/paciente";
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         alert("Received text: " + this.responseText);
         alert('success');
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 client.setRequestHeader('Content-Type','application/json');
	 // Send the request.
	 client.send();
}

