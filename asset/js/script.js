
const img_pokemon=document.querySelector(".img");
const selects1=document.querySelector(".tipo_de_pokemon");
const selects2=document.querySelector(".Peso_de_pokemon");
const selects3=document.querySelector(".fuerza_de_pokemon");
let datos_de_busquedad=document.querySelector("#search");
const nombre_pokemon=document.querySelector(".nombre_pokemon")
const descripcion=document.querySelector(".descripcion_de_pokemon")
const descrin=document.querySelector(".descripcion_pokemon")
const txt=document.querySelector(".texto")
const btn_info=document.querySelector(".pie_button")
const sear=document.querySelector(".buscar");
const fil=document.querySelector(".filtrar")
selects1.addEventListener('change', updateValue1);
selects2.addEventListener('change', updateValue2);
selects3.addEventListener('change', updateValue3);

fetch("pokemon.json")
.then(response => response.json())
.then(pokemones =>iteracion(pokemones));

const iteracion= (pokemones)=>{
console.log(pokemones)
pokemones.forEach(element => {
    console.log(element.name)
    let element_name=element.name;
    let element_categoria=element.categoria;
    let element_peso=element.peso;
    let element_altuara=element.altura;
    let element_photo=element.photo;
    pokemon_name1.push(element_name)
    pokemon_photo1.push(element_photo)
    pokemon_peso1.push(element_peso)
    pokemon_altura1.push(element_altuara)
    pokemon_categoria1.push(element_categoria)
    pokemon_descripicion.push(element.descripcion)

});
}
let pokemon_descripicion=[]
let pokemon_name1=[]
let pokemon_photo1=[]
let pokemon_peso1=[]
let pokemon_altura1=[]
let pokemon_categoria1=[]
console.log(pokemon_name1)
console.log(pokemon_photo1)
console.log(pokemon_peso1)
console.log(pokemon_altura1)
console.log(pokemon_categoria1)
console.log(pokemon_descripicion)



 function updateValue1() {
 console.log(selects1.value)
 let Selecion_de_categoria= selects1.value;
 let Selecion_de_peso= selects1.value;
 let Selecion_de_fuerza= selects1.value;

    
 pokemon_categoria1.forEach(categotia =>{
     
    let cate=categotia;
    console.log( cate)
    pokemon_name1.forEach(name=>{
        
        let name_poke=name;
        pokemon_photo1.forEach(photo=>{
           let p= photo 
         
           if (cate.toUpperCase()==Selecion_de_categoria.toUpperCase()) {
             limpiar_fil()    
        let table = document.createElement('table');
     let thead = document.createElement('thead');
     let tbody = document.createElement('tbody');
     
     table.appendChild(thead);
     table.appendChild(tbody);       
         
     img_pokemon.appendChild(table)
     let row_1 = document.createElement('tr');
     let heading_1 = document.createElement('th');
     heading_1.innerHTML = "Name";
     let heading_2 = document.createElement('th');
     heading_2.innerHTML = "Categotia";
     let heading_3 = document.createElement('th');
     heading_3.innerHTML = "imagen";
     
     row_1.appendChild(heading_1);
     row_1.appendChild(heading_2);
     row_1.appendChild(heading_3);
     thead.appendChild(row_1);
     let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML =name_poke;
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = cate;
let row_3_data_3 = document.createElement('td');
let img=document.createElement("img")
img.appendChild(row_3_data_3)
img.setAttribute("src",p)
img.style.width="100%"
row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
   
  
   }
   
        })
       
        
       
    })
  
  
  
    
 
});

 
}
function updateValue2(e) {
    alert(e.target.value) 
   }
   function updateValue3(e) {
    alert(e.target.value) 
   }

   
sear.addEventListener("click",buscar)
function buscar(){
    limpiar_1()
   
    let valor=  datos_de_busquedad.value
    let valor_mayuscula=valor.toUpperCase()
for (let index = 0; index < pokemon_name1.length; index++) {
   let names=  pokemon_name1[index];
   let names_mayuscuala=names.toUpperCase()
   for (let i = 0; i < pokemon_photo1.length; i++) {
    
   let p=pokemon_photo1[i];
 
        if (index==i && valor_mayuscula==names_mayuscuala  ) {
            descri()        
   crear_elemento(p,names)

   
 
       }/* else  {
            limpiar_1()
         let no_hay_resultado=document.createElement("img")
              img_pokemon.appendChild(no_hay_resultado)
              no_hay_resultado.setAttribute("src","https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-no-result-search-icon-png-image_3563805.jpg")
              no_hay_resultado.style.width="100%"
              no_hay_resultado.style.height="100%"
              console.log("#")
   }   */
   
   
 
}

}
   
}
function crear_elemento(p,names) {
    nombre_pokemon.innerHTML=names
    const ol = document.createElement('ol');
     const li = document.createElement('li');
     const poke = document.createElement('img');
     img_pokemon.appendChild(ol);
     ol.appendChild(li)
     li.appendChild(poke)
     poke.setAttribute('src',p);
     poke.style.width="100%"
    li.style.listStyle="none"
    
}


function limpiar_fil() {
    img_pokemon.innerHTML=""
} 

const limpiar=()=> {
    descrin.innerHTML=""
     if (datos_de_busquedad.value==="" ) {
          img_pokemon.innerHTML="Ingresa para buscar tus pokemones favoritos" 
          nombre_pokemon.innerHTML="nombre del pokemon"
          descripcion.innerHTML="No hay resultado" 
          img_pokemon.classList.add("texto_1")
          descrin.innerHTML=""
         
     }
   
   
  
 }
     const limpiar_1=()=> {
           descrin.innerHTML=""
        if (datos_de_busquedad.value!==" " ) {
            img_pokemon.innerHTML="" 
            nombre_pokemon.innerHTML=""
            descripcion.innerHTML="" 
     }
    }
    btn_info.addEventListener("click",info)
    function info() {
   limpiar()
    
 
  
           for (let iterador = 0; iterador < pokemon_descripicion.length; iterador++) {
               const element_descripcion = pokemon_descripicion[iterador];
               for (let index = 0; index < pokemon_name1.length; index++) {
                   const name = pokemon_name1[index];
                    if (name===datos_de_busquedad.value && index===iterador ) {
                   descrin.classList.toggle("ocultar"); 
                  let p=document.createElement("p")
                  descrin.appendChild(p)
                  p.innerHTML=element_descripcion
                  p.style.color="white"
                  
               }
               }
              
           }
           
       
    
       }


   datos_de_busquedad.addEventListener("keyup",limpiar_pantalla)
   function limpiar_pantalla() {
       if (datos_de_busquedad.value==="") {
           limpiar()
       }else if (datos_de_busquedad.value!=="" ){
        img_pokemon.innerHTML="" 
        descripcion.innerHTML="" 
       }
   }

   fil.addEventListener("click",filtar)
     
    function filtar() {
        
       
        updateValue1()
 
    }
 

 const descri= ()=> {
     
    for (let index = 0; index < pokemon_name1.length; index++) {
        let element_name = pokemon_name1[index];
        
        for (let i = 0; i < pokemon_altura1.length; i++) {
            let element_altuara = pokemon_altura1[i];
            
            if (element_name.toUpperCase()===datos_de_busquedad.value.toUpperCase() && i===index) {

                const ol = document.createElement('ol');
                descripcion.appendChild(ol)
                 const li = document.createElement('li');
               const alt="Altura : "
                 ol.appendChild(li)
                li.innerHTML=alt+element_altuara
                li.style.listStyle="none"
                  for (let peso = 0; peso < pokemon_peso1.length; peso++) {
                    let element_peso = pokemon_peso1[peso];
                   
                    if (element_name.toUpperCase()===datos_de_busquedad.value.toUpperCase() && peso===index) {
                        const ol = document.createElement('ol');
                        descripcion.appendChild(ol)
                         const li = document.createElement('li');
                       const pes="Peso : "
                         ol.appendChild(li)
                        li.innerHTML=pes+element_peso 
                         li.style.listStyle="none"
                     } 
                }  

                for (let categoria = 0; categoria < pokemon_categoria1.length; categoria++) {
                    let element_categoria = pokemon_categoria1[categoria];
                    if (element_name.toUpperCase()===datos_de_busquedad.value.toUpperCase() && categoria===index) {
                      
                        const ol = document.createElement('ol');
                        descripcion.appendChild(ol)
                         const li = document.createElement('li');
                       const cat="Categoria : "
                         ol.appendChild(li)
                        li.innerHTML=cat+element_categoria 
                        li.style.listStyle="none"
                    } 
                }  
              
                
            }
        
        }

        
    }

} 


   
   


