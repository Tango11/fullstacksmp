const $actionContainer = document.querySelector('#action');
let HTMLString="";
var keyVar;
//var data='https://pokeapi.co/api/v2/pokemon/';
//data2="https://pokeapi.co/api/v2/pokemon/1/";
for (let i=1;i<=80;i++){
  data2 = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
$.ajax(data2,{
	//https://pokeapi.co/api/v2/pokedex/1/
	//https://swapi.co/api/people/1
   	method: 'GET',
   	success: function(data){//si todo esta bien se va por succe
   		
   		
	        //alert(data[keyVar]);
	      //if (data.hasOwnProperty(keyVar)){
	   		console.log(data);
	   		console.log(data.forms[0].name);
	   		console.log(data.sprites.back_default);
	   		console.log(HTMLString);
	   		 HTMLString=mostrar(data.forms[0].name,data.sprites.front_shiny,data.weight);
	   		const html = document.implementation.createHTMLDocument();

	    	html.body.innerHTML=HTMLString;
	    	$actionContainer.append(html.body.children[0]);
    	//}
    	
   	},
   	error: function(error){//si sale algo mal eviamos un error
   		console.log(error);
   	}
   })
}
function mostrar(nombre,pokemon,peso)
{
	return (`<div class="box">
		<img src="${pokemon}" with="250" height="250">
		<h1>Nombre:${nombre}</h1>
		<h2>Peso: ${peso}</h2>
		</div>`	)
}