


//Crée par Nichita Gitlan


const divDestinationEnFeu = document.getElementById("DestinationsContainer")


chargerDestinationFeu();





async function chargerDestinationFeu() {


    try{
        const destinations = await getAll('destination');
        console.log(destinations);
        if(!destinations.length){
            console.log("Aucune destination");
            return;
        }

    const destinationsEnFeu= destinations.filter(d => d.en_feu === true);
    console.log(destinationsEnFeu);

    if(destinationsEnFeu.length > 3){
        console.log("Trois destinations en feu possible!");
        return;
    }else{

        for(let dst of destinationsEnFeu){
            
        const div = document.createElement("div");
        div.classList.add("destination-card");
        console.log(div.className);
        div.id = dst.pays;
        console.log(div.id);


       divDestinationEnFeu.appendChild(div);
            
        const image = document.createElement("img");
        const destinationNom = document.createElement("h2")

        image.style.width = "275px";
        image.style.height = "230px";

        image.src="Images/" + dst.pays.toLowerCase() + ".jpg";
        destinationNom.textContent = dst.pays;
        
        div.appendChild(image);
        div.appendChild(destinationNom);
}


ajouterFonction();

}}catch(error){
        console.log("Message",error)

    }
}


function ajouterFonction(){

    const divs = document.querySelectorAll(".destination-card");
    console.log(divs);
    divs.forEach(div => {
        div.onclick = function(){
            window.location.href = "AchatBillet.html?pays=" + div.id;
        };
        
    });
}



function redirigerDestination(){
    window.open("Destination+.html","_blank");
    }

function redirigerTrouverVotreBillet(){
    window.open("Billet.html","_blanc");
}







