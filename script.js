let relogio= document.getElementById("relogio")


function atualizarelogio(){
    
    let dataatual = new Date();
    
    let horas =String( dataatual.getHours()).padStart(2, "0");
    let minutos=String( dataatual.getMinutes()).padStart(2, "0");
    let segundos=String(dataatual.getSeconds()).padStart(2,"0");
    let horario= horas +":" +minutos+ ":"+segundos
    
    relogio.innerText=horario
}


    
    setInterval(atualizarelogio, 1000);

let cronometro=document.getElementById("cronometro")
let iniciar=document.getElementById("iniciar")
let parar=document.getElementById("parar")

console.log(cronometro,iniciar,parar)

let segundo=0
let minuto=0
let hora=0

function atualizarcronometro(){
 segundo++

if(segundo>=60){
    minuto++
    segundo=0
}
if(minuto>=60){
    hora++
    minuto=0

}


    hora =String( hora).padStart(2, "0");
    minuto =String(minuto).padStart(2, "0");
    segundo =String(segundo).padStart(2,"0");

 cronometro.innerText=hora+ ":"+minuto+":"+segundo
}


let id
iniciar.addEventListener("click",() =>{

  id=  setInterval(atualizarcronometro, 1000);

})

parar.addEventListener("click", ()=>{
 clearInterval(id)

})

