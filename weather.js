var Bangkok = "api.openweathermap.org/data/2.5/weather?q={Bangkok}";
var Los Angeles = "api.openweathermap.org/data/2.5/weather?q={Los Angeles}";
var San Juan = "api.openweathermap.org/data/2.5/weather?q={San Juan}";
var Miami ="api.openweathermap.org/data/2.5/weather?q={Miami}";
var Tokyo ="api.openweathermap.org/data/2.5/weather?q={Tokyo}";
var Seoul ="api.openweathermap.org/data/2.5/weather?q={Seoul}";
var Rio De Janeiro ="api.openweathermap.org/data/2.5/weather?q={Rio De Janeiro}";
var Santiago ="api.openweathermap.org/data/2.5/weather?q={Santiago}";
var Venice = "api.openweathermap.org/data/2.5/weather?q={Venice}";
var Madrid = "api.openweathermap.org/data/2.5/weather?q={Madrid}";
var Mexico City = "api.openweathermap.org/data/2.5/weather?q={Mexico City}";
var Cairo = "api.openweathermap.org/data/2.5/weather?q={Cairo}";







$("#Bangkok").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Bangkok&appid=b6907d289e10d714a6e88b30761fae22",function(){
		$.getJSON(api, function(data) 
		$.onclick(document.getElementsByID('Bangkok'));
	});

};


$("#LA").click(function(){

	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Bangkok&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) 
		$.onclick(document.getElementsByID('Bangkok'));
	});
	

};


$("#SanJuan").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=San%20Juan&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};



$("#Miami").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Miami&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};



$("#Tokyo").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Tokyo&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};



$("#Seoul").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Seoul&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};



$("#RioDeJaneiro").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Rio%20de%20Janeiro&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};


$("#Santiago").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Santiago&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};


$("#Venice").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Venice&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});
};


$("#Madrid").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Madrid&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};




$("#MexicoCity").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Mexico%20City&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};



$("#Cairo").click(function(){

	
	$.getJSON("https://openweathermap.org/data/2.5/weather?q=Cairo&appid=b6907d289e10d714a6e88b30761fae22",function(result){
		$.getJSON(api, function(data) )
	});

};

