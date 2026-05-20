const destinationPossible = document.getElementById("DestinationPossible");
const Logo = document.getElementById("LogoSeulement");

chargerDestination();


//Crée par Nichita Gitlan




async function chargerDestination() {
    try{
        const destinations = await getAll('destination');
        console.log(destinations);

        if(!destinations.length){
            console.log("Aucune destination");
            return;
        }



        for(let dst of destinations){

            if(!document.getElementById(dst.pays)){

                 const div = document.createElement("div");
             div.classList.add("destination-card");
             
             console.log(div.className);

             div.id = dst.pays;

             console.log(div.id);

        destinationPossible.appendChild(div);
            
        const image = document.createElement("img");
        const destinationNom = document.createElement("h2")

        image.style.width = "275px";
        image.style.height = "230px";

        image.src="Images/" + dst.image_de_destination;
        destinationNom.textContent = dst.pays;
        
        div.appendChild(image);
        div.appendChild(destinationNom);

}};




    ajouterFonction();
    
}catch(error){
        console.log("Message",error)

}};


function ajouterFonction(){

    const divs = document.querySelectorAll(".destination-card");
    console.log(divs);
    divs.forEach(div => {
        div.onclick = function(){
            window.location.href = "AchatBillet.html?pays=" + div.id;
        };
        
    });
}


Logo.addEventListener("click", () =>{
        window.location.href = "Accueil.html";
});




