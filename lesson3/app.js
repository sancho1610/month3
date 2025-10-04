
function renderStar(isChecked, index){
    const div = document.createElement("div");
    div.classList.add("fa", "fa-star");
    if (isChecked){
        div.classList.add("checked")
    }
    div.id = "star-" + index;
    return div;
}

function renderRating(rating){

    const ratingContainer = document.querySelector(".stars");
    ratingContainer.innerHTML = "";

    for(let i = 0; i < 5; i++) {
        let isChecked = rating > i;
        const star = renderStar(isChecked, i + 1);
        ratingContainer.appendChild(star);
    }
}

renderRating();
const ratingContainer = document.querySelector(".stars");
const container = document.querySelector(".star-container")

// event propagation 

ratingContainer.onclick = function(event) {
    const elementId = String(event.target.id);
    if(!elementId.startsWith("star-")){
        return;
    } 
    const selectedRating = Number(elementId.slice(-1));
    renderRating(selectedRating);
}


container.onmousemove = function(event) {
    const elementId = String(event.target.id);
    const selectedRating = Number(elementId.slice(-1));
    let ratingText = "";
    switch (selectedRating) {
        case 1:
            ratingText = "Shit";
            break;
        case 2:
            ratingText = "Not bad";
            break;
        case 3:
            ratingText = "normal";
            break;
        case 4:
            ratingText = "better";
            break;
        case 5: 
            ratingText = "holy shit";
            break;
    }
    ratingLabel.dataset.content = ratingText;
    const ratingLabel = document.querySelector("#rating-text");
};