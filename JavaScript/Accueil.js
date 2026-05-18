

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
        const destinationPrice = document.createElement("h2")

        image.style.width = "275px";
        image.style.height = "230px";

        switch(dst.pays){
            case "France":
                image.src = "Images/france.jpg";
                destinationPrice.innerHTML= '<span class = "Ligne1"> France </span><br><span class = "Ligne2"> 1395$</span>';
                

                break;
            case "Australie":
                image.src = "Images/australie.jpg";
                destinationPrice.innerHTML= '<span class = "Ligne1"> Australie </span><br><span class = "Ligne2"> 2100$</span>';
                
                break;
            case "Mexique":
                image.src = "Images/mexique.jpg";
                destinationPrice.innerHTML= '<span class = "Ligne1"> Mexique </span><br><span class = "Ligne2"> 900$</span>';
                break;
        }


        if(numeroDeDestinatios === 1){
            destination1.appendChild(image);
            destination1.appendChild(destinationPrice);
        }

        if(numeroDeDestinatios === 2){
            destination2.appendChild(image);
            destination2.appendChild(destinationPrice);
        }

        if(numeroDeDestinatios === 3){
            destination3.appendChild(image);
            destination3.appendChild(destinationPrice);
        }

        

        numeroDeDestinatios++;
    }
}
    
}catch(error){
        console.log("Message",error)

    }
}

destination1.addEventListener("click", function(){
   window.location.href = "AchatBillet.html?pays=France";
});


chargerDestinationFeu();






