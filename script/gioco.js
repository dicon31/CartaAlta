const messaggio=document.getElementById("messaggio"); //messaggio
const gioca=document.getElementById("gioca"); //button
const you=document.getElementById("you"); //io
const cpu=document.getElementById("cpu"); //Avversario

gioca.onclick=function(){ //al click start dell'evento
    let  LamiaCarta=Math.floor(Math.random() * 10) + 1; //la mia carta
    let Avversario=Math.floor(Math.random() *10)*1; // avversario carta
    console.log(LamiaCarta);
    console.log(Avversario);
    you.innerHTML="<span>"+LamiaCarta+"</span>"; // numero estratto da te
    cpu.innerHTML="<span>"+Avversario+"</span>"; // numero estratto dal avversario
    if(LamiaCarta==Avversario){ 
        messaggio.innerHTML="HAI PAREGGIATO";
        messaggio.style.color="white";
        console.log("HAI PAREGGIATO");
        document.querySelector("#you span").style.backgroundColor="white";
        document.querySelector("#cpu span").style.backgroundColor="white";
        

    }
    else if(LamiaCarta>Avversario){
        messaggio.innerHTML="HAI VINTO";
        messaggio.style.color="green";
        console.log("HAI VINTO");
        document.querySelector("#you span").style.backgroundColor="green";
        document.querySelector("#cpu span").style.backgroundColor="red";
        
    }
    else if(LamiaCarta<Avversario){
        messaggio.innerHTML="HAI PERSO";
        messaggio.style.color="red";
        console.log("HAI PERSO");
        document.querySelector("#you span").style.backgroundColor="red";
        document.querySelector("#cpu span").style.backgroundColor="green";
    }

}

/*const messaggio=document.getElementById("messaggio"); //messaggio
const gioca=document.getElementById("gioca"); //button


gioca.onclick=function(){ //al click start dell'evento
    let  you=Math.floor(Math.random() * 10) + 1; //la mia carta
    let cpu=Math.floor(Math.random() *10)*1; // avversario carta
    console.log(you);
    console.log(cpu);
    you.innerHTML="<span>"+ +"</span>"; // numero estratto da te
    cpu.innerHTML="<span>"+ +"</span>"; // numero estratto dal avversario
    if(you==cpu){ 
        messaggio.innerHTML="HAI PAREGGIATO";
        messaggio.style.color="white";
        console.log("HAI PAREGGIATO");
    }
    else if(you>cpu){
        messaggio.innerHTML="HAI VINTO";
        messaggio.style.color="green";
        console.log("HAI VINTO");
        
    }
    else if(you<cpu){
        messaggio.innerHTML="HAI PERSO";
        messaggio.style.color="red";
        console.log("HAI PERSO");
    }

}*/


