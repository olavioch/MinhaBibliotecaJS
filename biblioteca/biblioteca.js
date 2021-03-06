//adiciona texto html no parametro id
function printId(id, texto){
	document.getElementById(id).innerHTML = texto;	
}
//mostra valor de input pela id
function inputValor(inputId){
	 return document.getElementById(inputId).value;
}

//troca css de elemento pela id ou classe
//id: trocarEstilo("id", "estilocss")
//class: trocarEstilo("[class key], estilocss")
function trocarEstilo(id, estilo)
{
	if((id.indexOf('[') > -1) && (id.indexOf(']') > -1)){
		id = id.replace("[","");
		id = id.replace("]","");				
		id = id.split(" ");
		document.getElementsByClassName(id[0])[parseInt(id[1])].setAttribute("style", estilo);
	}else{
	document.querySelector("#"+id).setAttribute("style", estilo);
}}

//gerador de cubo
function cubeGenerator(id){
	face = "position: absolute; width: 100vw; height: 200px; box-shadow: inset 0 0 12px 0px #585858;";
	console.log(face);
	//html
	printId(id,
	`<div id="cube">
			<div id="${cubeConfig[0].nome}">${cubeConfig[0].conteudo}</div>
			<div id="${cubeConfig[1].nome}">${cubeConfig[1].nome}</div>
			<div id="${cubeConfig[2].nome}">${cubeConfig[2].nome}</div>
			<div id="${cubeConfig[3].nome}">${cubeConfig[3].nome}</div>
			<div id="${cubeConfig[4].nome}">${cubeConfig[4].nome}</div>
			<div id="${cubeConfig[5].nome}">${cubeConfig[5].nome}</div>
	</div>`
	);
	//css
	trocarEstilo("scene", 
	 "width: 100%; height: 200px; border: 1px solid black;"
	);
	trocarEstilo("cube",
	  `display:inline-block;
	  width: inherit;
	  height: inherit;
	  position: relative;
	  transform-style: preserve-3d;
	  transition: all ease 1s;`
	);
	trocarEstilo("face-front",
	"transform: rotateY(  0deg) translateZ(50vw); background-color:red;" + face
	);
	trocarEstilo("face-back",
	" transform: rotateY(180deg) translateZ(50vw); background-color: green;" + face
	);
	trocarEstilo("face-right",
	" transform: rotateY(90deg) translateZ(50vw); background-color: yellow;" + face
	);
	trocarEstilo("face-left",
	" transform: rotateY(-90deg) translateZ(50vw); background-color: blue;" + face
	);
	trocarEstilo("face-top",
	" transform: rotateX(90deg) translateZ(50vw); background-color: pink;" + face
	);
	trocarEstilo("face-bottom",
	" transform: rotateX(-90deg) translateZ(50vw); background-color: orange;" + face
	);
	}