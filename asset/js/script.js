'use strict'
const D=document



const img_pokemon = document.querySelector(".img");
const cabeza=document.querySelector("header")
const selects1 = document.querySelector(".tipo_de_pokemon");
const selects2 = document.querySelector(".Peso_de_pokemon");
const selects3 = document.querySelector(".fuerza_de_pokemon");
let datos_de_busquedad = D.querySelector("#search");
const nombre_pokemon = document.querySelector(".nombre_pokemon");
const descripcion = document.querySelector(".descripcion_de_pokemon");
const descrin = document.querySelector(".descripcion_pokemon");
const txt = D.querySelector(".texto");
const btn_info = document.querySelector(".pie_button");
const sear = document.querySelector(".buscar");
const fil = document.querySelector(".filtrar");






const Peticion1=()=>{
fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then((data)=>data.json())
  .then((pokemones) => iteracionName(pokemones));
  
}

sear.addEventListener("click",filtrar)
function filtrar() {
  Peticion1()
  Peticion2()
 

}
function iteracionName  (pokemones)  {
  let Poke=pokemones.results
  console.log(Poke);
const filtrado=Poke.filter(pokemones=> pokemones.name===datos_de_busquedad.value  )
console.log(filtrado);
nombre_pokemon.innerHTML=filtrado[0].name

NotFont(filtrado)

}
const iteracion=(pokemones)=>{
  console.log(pokemones);
  let pokemonesX=pokemones
  imgPoke(pokemonesX)
  Habil(pokemonesX)
  move(pokemonesX)
}
const imgPoke=(pokemonesX)=>{
  let poke=pokemonesX.sprites.back_default
console.log(poke);
let pokes=document.createElement("img")
  img_pokemon.appendChild(pokes)
  pokes.setAttribute("src",poke)
  pokes.style.width="100%"
  pokes.style.height="100%"
}
 const Habil= (pokemonesX) =>{
  let habilidad=pokemonesX.abilities
   habilidad.forEach(element => {
    console.log(element.ability.name);
    let Habilidad=element.ability.name
    let li= document.createElement("li")
    txt.appendChild(li)
    li.innerHTML=`Habilidad:${Habilidad} `
  });
 }
const move= (pokemonesX)=>{
   let li= document.createElement("li")
  txt.appendChild(li)
  let move=pokemonesX.moves
  move.forEach(element=>{
    console.log(element.move.name);
    let move=element.move.name
    let li= document.createElement("li")
    txt.appendChild(li)
    li.innerHTML=`Movimiento: ${move} `
  })
  console.log(move);
}
const Peticion2=(C)=>{
  fetch(`https://pokeapi.co/api/v2/pokemon/${datos_de_busquedad.value }`)
  .then((data)=>data.json())
    .then((pokemones) => iteracion(pokemones));
   
  }
  fil.addEventListener('click',Filtracion)
   function Filtracion(){
    
    console.log(selects1.value);
    fetch(`https://pokeapi.co/api/v2/pokemon-color/${selects1.value}`)
    .then(res=>res.json() )
    .then(data=>SelectColor(data))

  }
const  SelectColor=(data)=>{
  console.log(data);
  const ArrayColor=data.pokemon_species
  ArrayColor.forEach(color=>{
    let C=color.name
   const ol=D.createElement('ol')
  const li=D.createElement('li')
  const olApechil=txt.appendChild(ol)
  const liApechil=ol.appendChild(li)
  li.innerHTML=C 
  PeticionColor(C)
  })
  

}
   const PeticionColor =(C)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${datos_de_busquedad.value ||C}`)
    .then((data)=>data.json())
      .then((pokemones) => imgPoke(pokemones));
     
    }
  const NotFont = (names)=>{
        if (names.length===-0) {
      const NotFond= document.createElement("img")
img_pokemon.appendChild(NotFond)
NotFond.setAttribute("src","./asset/img/Not.gif")
NotFond.style.width="100%"
  NotFond.style.height="100%"
  

  }
}
 

 