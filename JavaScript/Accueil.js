

function redirigerDestination(){
    window.open("Destination+.html","_blank");
    }

function redirigerTrouverVotreBillet(){
    window.open("Billet.html","_blanc");
}



const destination1 = document.getElementById("destinationEnFeu#1");
const destination2 = document.getElementById("destinationEnFeu#2");
const destination3 = document.getElementById("destinationEnFeu#3")



async function chargerDestinationFeu() {


    try{
        const destinations = await getAll('destination');
        console.log(destinations);
        if(!destinations.length){
            console.log("Aucune destination");
            return;
        }

    const destinationsEnFeu= destinations.filter(d => d.en_feu === true);

    if(destinationsEnFeu.length > 3){
        console.log("Trois destinations en feu possible!");
        return;
    }else{
        let numeroDeDestinatios = 1;
        
        for(let dst of destinationsEnFeu){
            
        const image = document.createElement("img");
        image.style.width = "200px";
        image.style.height = "150px";

        switch(dst.pays){
            case "France":
                image.src = "Images/france.jpg";
                break;
            case "Australie":
                image.src = "Images/australie.jpg";
                break;
            case "Mexique":
                image.src = "Images/mexique.jpg";
                break;
        }


        if(numeroDeDestinatios === 1){
            destination1.appendChild(image);
        }

        if(numeroDeDestinatios === 2){
            destination2.appendChild(image);
        }

        if(numeroDeDestinatios === 3){
            destination3.appendChild(image);
        }

        

        numeroDeDestinatios++;
    }
}
    
}catch(error){
        console.log("Message",error)

    }
}

console.log('Salut');


chargerDestinationFeu();






