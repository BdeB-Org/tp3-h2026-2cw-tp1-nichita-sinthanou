const params = new URLSearchParams(window.location.search);
const pays = params.get("pays");
console.log(pays);

document.getElementById("Title").textContent = "Vol de YUL(Montréal) au " + pays;

const descriptionPays = document.getElementById("Description");
const ImageDestination1 = document.getElementById("ImageDestination");
const ImageDestination2 = document.getElementById("ImageDestination2");
const volsDisponibles = document.getElementById("VolsDisponibles");



if(pays === "France"){
    ImageDestination1.src = "Images/ImageFrance.jpg";
    ImageDestination2.src = "Images/ImageFrance2.jpg";
    descriptionPays.textContent = "Visiter le pays d'amour!";
    chargerVolDisponible();
}else if(pays === "Australie"){
    ImageDestination1.src = "Images/Australie1.avif";
    ImageDestination2.src = "Images/Australie2.jpg";
    descriptionPays.textContent = "Voulez vous voir les kengourou?"
    chargerVolDisponible();
}else if(pays === "Mexique"){
    ImageDestination1.src = "Images/mexique1.jpg"
    ImageDestination2.src = "Images/mexique2.jpg"
    descriptionPays.textContent = "Ah!Un mer formidable!"
    chargerVolDisponible();
}else if(pays === "États-Unis"){
    ImageDestination1.src = "Images/losangeles.jpg"
    ImageDestination2.src = "Images/losangeles2.webp"
    descriptionPays.textContent = "Visiter les États-Unis!"
    chargerVolDisponible();
}








async function chargerVolDisponible(){

    let vols = await chargerVols();

   if(pays === "France"){

    const volsFrance = vols.filter(d => d.code_iata_destination === "ORY" || d.code_iata_destination === "CDG");
    console.log(volsFrance);

    if(!volsFrance.length){
        volsDisponibles.textContent = "Aucune vol pour le moment!";
    };


    for(let vol of volsFrance){
        
        let div = document.createElement("div");
        let divPrix = document.createElement("div");
        div.classList.add("Vol");
        divPrix.classList.add("Achat");
        let transfer = "Nonstop"
        let divCompagnie = document.createElement("div")
        divCompagnie.classList.add("AllignementCompagnie")

        if(vol.transfer > 0){
            transfer = vol.transfer + " stop"
        };

    
        
        const avion = await chargerAvion(vol.id_avion);
        
        div.innerHTML = `<h4> Montéal(${vol.code_iata_départ}) &#8596; Mexique(${vol.code_iata_destination})<h4>`

         divCompagnie.innerHTML = ` 
        <img src = "Images/${avion.compagnie.toLowerCase().trim().replaceAll(" ","")}.jpg">
        <span>${avion.compagnie} &bull; ${transfer}`
        
        divPrix.innerHTML = 
        `<p> ${vol.prix}$</p>
        <button style="width: 6rem; height: 4rem;" > Acheter</button>`


        div.appendChild(divCompagnie);
        div.appendChild(divPrix);
        volsDisponibles.appendChild(div);
    }};

if(pays === "Australie"){

    const volsAustralie = vols.filter(d => d.code_iata_destination === "SYD");
    console.log(volsAustralie);

    if(!volsAustralie.length){
        volsDisponibles.textContent = "Aucune vol pour le moment!";
    };


    for(let vol of volsAustralie){
        
        let div = document.createElement("div");
        let divPrix = document.createElement("div");
        let divCompagnie = document.createElement("div")
        divCompagnie.classList("AllignementCompagnie")
        div.classList.add("Vol");
        divPrix.classList.add("Achat");
        let transfer = "Nonstop"

        if(vol.transfer > 0){
            transfer = vol.transfer + " stop"
        };

    
        
        const avion = await chargerAvion(vol.id_avion);
        
        div.innerHTML = `<h4> Montéal(${vol.code_iata_départ}) &#8596; Australie(${vol.code_iata_destination})<h4>`


        divCompagnie.innerHTML = ` 
        <img src = "Images/${avion.compagnie.toLowerCase().trim().replaceAll(" ","")}.jpg">
        <span>${avion.compagnie} &bull; ${transfer}`

        
       
        
        divPrix.innerHTML = 
        `<p> ${vol.prix}$</p>
        <button style="width: 6rem; height: 4rem;" > Acheter</button>`


        div.appendChild(divCompagnie);
        div.appendChild(divPrix);
        volsDisponibles.appendChild(div);



    }};
    if(pays === "Mexique"){

    const volsMexique = vols.filter(d => d.code_iata_destination === "CUN" || d.code_iata_destination === "TLC");
    console.log(volsMexique);

    if(!volsMexique.length){
        volsDisponibles.textContent = "Aucune vol pour le moment!";
    };


    for(let vol of volsMexique){
        
        let div = document.createElement("div");
        let divPrix = document.createElement("div");
        div.classList.add("Vol");
        divPrix.classList.add("Achat");
        let transfer = "Nonstop"
        let divCompagnie = document.createElement("div")
        divCompagnie.classList.add("AllignementCompagnie")

        if(vol.transfer > 0){
            transfer = vol.transfer + " stop"
        };

    
        
        const avion = await chargerAvion(vol.id_avion);
        
        div.innerHTML = `<h4> Montéal(${vol.code_iata_départ}) &#8596; Mexique(${vol.code_iata_destination})<h4>`

         divCompagnie.innerHTML = ` 
        <img src = "Images/${avion.compagnie.toLowerCase().trim().replaceAll(" ","")}.jpg">
        <span>${avion.compagnie} &bull; ${transfer}`
        
        divPrix.innerHTML = 
        `<p> ${vol.prix}$</p>
        <button style="width: 6rem; height: 4rem;" > Acheter</button>`


        div.appendChild(divCompagnie);
        div.appendChild(divPrix);
        volsDisponibles.appendChild(div);
    


}}
if(pays === "États-Unis"){

    const volsÉtatsUnis = vols.filter(d => d.code_iata_destination === "LAX" || d.code_iata_destination === "SEA");
    console.log(volsÉtatsUnis);

    if(!volsÉtatsUnis.length){
        volsDisponibles.textContent = "Aucune vol pour le moment!";
    };


    for(let vol of volsÉtatsUnis){
        
        let div = document.createElement("div");
        let divPrix = document.createElement("div");
        div.classList.add("Vol");
        divPrix.classList.add("Achat");
        let transfer = "Nonstop"
        let divCompagnie = document.createElement("div")
        divCompagnie.classList.add("AllignementCompagnie")

        if(vol.transfer > 0){
            transfer = vol.transfer + " stop"
        };

    
        
        const avion = await chargerAvion(vol.id_avion);
        
        div.innerHTML = `<h4> Montéal(${vol.code_iata_départ}) &#8596; Los Angeles(${vol.code_iata_destination})<h4>`

         divCompagnie.innerHTML = ` 
        <img src = "Images/${avion.compagnie.toLowerCase().trim().replaceAll(" ","")}.jpg">
        <span>${avion.compagnie} &bull; ${transfer}`
        
        divPrix.innerHTML = 
        `<p> ${vol.prix}$</p>
        <button style="width: 6rem; height: 4rem;" > Acheter</button>`


        div.appendChild(divCompagnie);
        div.appendChild(divPrix);
        volsDisponibles.appendChild(div);
    


}}};




  async function chargerVols() {
    try{
        const vol = await getAll('vol');
        
    if(!vol.length){
        console.log("Aucune vols");
        return;

        }else{
            return vol;
        }

}catch(error){
        console.log("Message",error);
    }}


async function chargerAvion(id_avion) {

try{
        const avion = await getById("avion",id_avion);

        if(avion === null){
            console.log("Aucune avion avec ce id!");
        }

        return avion;

    }catch(error){
        console.log("Message",error);

    }}



    










