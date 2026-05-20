

//Crée par Nichita Gitlan


const params = new URLSearchParams(window.location.search);
const pays = params.get("pays");
console.log(pays);

document.getElementById("Title").textContent = "Vol de YUL(Montréal) au " + pays;

const descriptionPays = document.getElementById("Description");
const ImageDestination1 = document.getElementById("ImageDestination");
const ImageDestination2 = document.getElementById("ImageDestination2");
const volsDisponibles = document.getElementById("VolsDisponibles");
const Logo = document.getElementById("LogoSeulement");
const button = document.getElementById("Achat")



ImageDestination1.src ="Images/" + pays + "1.jpg"
ImageDestination2.src = "Images/" + pays + "2.jpg";


switch(pays){
    case "France":
        descriptionPays.textContent = "Visiter le pays d'amour!";
        break;
    case "Australie":
        descriptionPays.textContent = "Voulez vous voir les kengourou?";
        break;
    case "Mexique":
        descriptionPays.textContent = "Ah!Un mer formidable!";
        break;
    case "États-Unis":
        descriptionPays.textContent = "Visiter les États-Unis!";
        break;
    default:
        descriptionPays.textContent = "Visitez la " + pays + "!";
        break;

}


chargerVolDisponible(pays);









async function chargerVolDisponible(pays){

    let vols = await chargerVols(pays);
    console.log(vols)

    if(!vols.length){
        const texte = document.createElement("h1");
        texte.textContent = "Aucunes vols pour le moment!";
        volsDisponibles.appendChild(texte);
        return;
}else{
    for(let vol of vols){
        
        let div = document.createElement("div");
        let divPrix = document.createElement("div");
        div.classList.add("Vol");
        divPrix.classList.add("Achat");

        let transfer = "Nonstop"
        let divCompagnie = document.createElement("div")
        divCompagnie.classList.add("AllignementCompagnie")

        if(vol.transfer > 0){
            transfer = vol.transfer + " stop"
        }


        const avion = await chargerAvion(vol.id_avion);
        
        div.innerHTML = `<h4> Montéal(${vol.code_iata_départ}) &#8596; ${vol.ville}(${vol.code_iata_destination})<h4>`

        divCompagnie.innerHTML = `
    <img src="Images/${avion.compagnie.toLowerCase().trim().replaceAll(" ", "")}.jpg"> <span>${avion.compagnie} &bull; ${transfer}</span>
`;
        
        divPrix.innerHTML = 
        `<p> ${vol.prix}$</p>
        <button class="btn-acheter" data-id = ${vol.id_vol}> Acheter</button>`


        div.appendChild(divCompagnie);
        div.appendChild(divPrix);
        volsDisponibles.appendChild(div);

    
        
        
    }}};




  async function chargerVols(pays) {

    

    try{
        const vol = await getAll('vol');
        const destination = await getAll('destination');
        let volDisponibles = []

        for(let v of vol){
            for(let dst of destination){
                if(v.code_iata_destination === dst.code_iata && dst.pays === pays ){
                        volDisponibles.push({...v,ville: dst.ville});
                    }
                }
            }


            
            
    if(!vol.length){
        console.log("Aucune vols");
        return;

        }else{
            return volDisponibles;
        }

}catch(error){
        console.log("Message",error);
    }};



    


async function chargerAvion(id_avion) {

try{
        const avion = await getById("avion",id_avion);

        if(avion === null){
            console.log("Aucune avion avec ce id!");
        }

        return avion;

    }catch(error){
        console.log("Message",error);

    }};


    function redirigerDestination(){
    window.open("Destination+.html","_blank");
    };

function redirigerTrouverVotreBillet(){
    window.open("Billet.html","_blanc");
};



Logo.addEventListener("click", () =>{
        window.location.href = "Accueil.html";
});



// Remplace uniquement le bloc du bas de ton fichier AchatBillet.js par celui-ci :
volsDisponibles.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-acheter")) {
        const idVol = event.target.getAttribute("data-id");
        // CORRECTION : Plus aucun espace autour du "="
        window.location.href = `PortailAchat.html?id=${idVol}`;
    }
});











    










