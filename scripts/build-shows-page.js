
let showsArray = [
    {
        dateLabel: "DATE",
        date: "Mon Sept 06 2021",
        venueLabel: "VENUE",
        venue: "Ronald Lane",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
    {
        dateLabel: "DATE",
        date: "Tue Sept 21 2021",
        venueLabel: "VENUE",
        venue: "Pier 3 East",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
     {
        dateLabel: "DATE",
        date: "Fri Oct 15 2021",
        venueLabel: "VENUE",
        venue: "View Lounge",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
     {
        dateLabel: "DATE",  
        date: "Sat Nov 06 2021",
        venueLabel: "VENUE",
        venue: "Hyatt Agency",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
     {
        dateLabel: "DATE",
        date: "Fri Nov 26 2021",
        venueLabel: "VENUE",
        venue: "Moscow Center",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
     {
        dateLabel: "DATE",
        date: "Wed Dec 15 2021",
        venueLabel: "VENUE",
        venue: "Press Club",
        locationLabel: "LOCATION",
        location: "San Fransisco, CA"
    },
]; 

const showsWrapper = document.querySelector(".shows__wrapper"); 

function shows(arr){

    for(i = 0; i < arr.length; i++){

        let showsConcert = document.createElement("li");
        showsConcert.classList.add("shows__concert");

        let dateContainer = document.createElement("div"); 

        let dateLabelJs = document.createElement("label"); 
        dateLabelJs.classList.add("shows__concert-label"); 
        dateLabelJs.innerText = arr[i].dateLabel;

        let dateText = document.createElement("p");
        dateText.classList.add("shows__concert-details", "shows__concert-details--bold");
        dateText.innerText = arr[i].date;

        let venueContainer = document.createElement("div"); 

        let venueLabelJs = document.createElement("label");
        venueLabelJs.classList.add("shows__concert-label"); 
        venueLabelJs.innerText = arr[i].venueLabel;

        let venueText = document.createElement("p");
        venueText.classList.add("shows__concert-details"); 
        venueText.innerText = arr[i].venue;

        let locationContainer = document.createElement("div");

        let locationLabelJs = document.createElement("label"); 
        locationLabelJs.classList.add("shows__concert-label");
        locationLabelJs.innerText = arr[i].locationLabel;

        let locationText = document.createElement("p"); 
        locationText.classList.add("shows__concert-details"); 
        locationText.innerText = arr[i].location;

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

}

shows(showsArray); 

// code to add event listener to all concert items 

document.querySelectorAll(".shows__concert").forEach(item => {
    item.addEventListener("click", event => {
        item.classList.add("shows__concert--active"); 
    });  
}); 


