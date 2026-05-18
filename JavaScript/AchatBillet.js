const params = new URLSearchParams(window.location.search);
const pays = params.get("pays");

document.getElementById("Title").textContent = "Vol de YUL(Montréal) au " + pays;

const descriptionPays = document.getElementById("Description");
const ImageDestination1 = document.getElementById("ImageDestination");
const ImageDestination2 = document.getElementById("ImageDestination2");


if(pays === "France"){
    ImageDestination1.src = "Images/ImageFrance.jpg"
    ImageDestination2.src = "Images/ImageFrance2.jpg"
    descriptionPays.textContent = "Visiter le pays d'amour"
}


