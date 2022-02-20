
const url = "https://project-1-api.herokuapp.com/";

const apiKey = "dcf59c38-5d4a-45bd-b58e-d40ff03ce8f8"; 

const showsWrapper = document.querySelector(".shows__wrapper"); 

function createShowsLabels(){

    let showsSubHeadings = document.querySelector(".shows__sub-headings");

    let dateSubHeading = document.createElement("p");
    dateSubHeading.classList.add("shows__sub-headings-text");
    dateSubHeading.innerText = "DATE";

    let venueSubHeading = document.createElement("p");
    venueSubHeading.classList.add("shows__sub-headings-text");
    venueSubHeading.innerText = "VENUE";

    let locationSubHeading = document.createElement("p");
    locationSubHeading.classList.add("shows__sub-headings-text");
    locationSubHeading.innerText = "LOCATION";

    let emptySubHeading = document.createElement("p");
    emptySubHeading.classList.add("shows__sub-headings-text");

    showsSubHeadings.appendChild(dateSubHeading);
    showsSubHeadings.appendChild(venueSubHeading);
    showsSubHeadings.appendChild(locationSubHeading);
    showsSubHeadings.appendChild(emptySubHeading);
}

function createConcert(concert){

    let showsConcert = document.createElement("li");
    showsConcert.classList.add("shows__concert");

    let dateContainer = document.createElement("div"); 
    dateContainer.classList.add("shows__concert-details-container");

    let dateLabelJs = document.createElement("h3"); 
    dateLabelJs.classList.add("shows__concert-label"); 
    dateLabelJs.innerText = "DATE";

    let dateText = document.createElement("p");
    dateText.classList.add("shows__concert-details", "shows__concert-details--bold");
    let timestamp = parseInt(concert.date);
    let options = {weekday: "short", month: "short", day: "numeric", year: "numeric"};
    dateText.innerText = new Date(timestamp).toLocaleDateString('en-US', options);  

    let venueContainer = document.createElement("div"); 
    venueContainer.classList.add("shows__concert-details-container");

    let venueLabelJs = document.createElement("h3");
    venueLabelJs.classList.add("shows__concert-label"); 
    venueLabelJs.innerText = "VENUE";

    let venueText = document.createElement("p");
    venueText.classList.add("shows__concert-details"); 
    venueText.innerText = concert.place;

    let locationContainer = document.createElement("div");
    locationContainer.classList.add("shows__concert-details-container");

    let locationLabelJs = document.createElement("h3"); 
    locationLabelJs.classList.add("shows__concert-label");
    locationLabelJs.innerText = "LOCATION";

    let locationText = document.createElement("p"); 
    locationText.classList.add("shows__concert-details"); 
    locationText.innerText = concert.location;

    let concertButton = document.createElement("button");
    concertButton.classList.add("shows__concert-button"); 
    concertButton.innerText = "BUY TICKETS"; 

    showsWrapper.appendChild(showsConcert);

    showsConcert.appendChild(dateContainer);
    dateContainer.appendChild(dateLabelJs);
    dateContainer.appendChild(dateText);

    showsConcert.appendChild(venueContainer);
    venueContainer.appendChild(venueLabelJs);
    venueContainer.appendChild(venueText);

    showsConcert.appendChild(locationContainer);
    locationContainer.appendChild(locationLabelJs);
    locationContainer.appendChild(locationText);

    showsConcert.appendChild(concertButton);

}

function getConcerts(){
    axios.get(url + 'showdates?api_key=' + apiKey)
        .then(response => {        
            showsArray = response.data; 
            
            showsArray.forEach(concert => {
                createConcert(concert);
            });
        
            document.querySelectorAll(".shows__concert").forEach(item => {
                item.addEventListener("click", event => {
                    item.classList.add("shows__concert--active"); 
                });  
            }); 
        })
        .catch(error => {
            console.log(error);
        });
}

createShowsLabels();
getConcerts();