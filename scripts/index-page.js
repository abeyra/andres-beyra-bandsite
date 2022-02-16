const url = "https://project-1-api.herokuapp.com/";

const apiKey = "dcf59c38-5d4a-45bd-b58e-d40ff03ce8f8"; 

axios.get(url + 'comments?api_key=' + apiKey).then(response => {
    console.log(response.data);
    const commentsData = response.data;
    displayComments(commentsData);   
});


// const commentsArray = [
//     {
//         name: "Connor Walton",
//         timestamp: "02/17/2021",
//         commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     },
//     {
//         name: "Emilie Beach",
//         timestamp: "01/09/2021",
//         commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name: "Miles Acosta",
//         timestamp: "12/20/2020",
//         commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     },
// ];

const commentsContainer = document.querySelector(".comments__container"); 

function displayComments(array){
    
    for (i = 0; i < array.length; i++){
      
        let post = document.createElement("ul"); 
        post.classList.add("comments__post"); 

        let circleContainer = document.createElement("li"); 

        let circle = document.createElement("div"); 
        circle.classList.add("comments__post-circle"); 

        let textContainer = document.createElement("li"); 
        let postContent = document.createElement("div"); 

        postContent.classList.add("comments__post-content"); 

        let author = document.createElement("h3"); 
        author.classList.add("comments__post-author"); 
        author.innerText = array[i].name; 

        let date = document.createElement("p");
        date.classList.add("comments__post-date");
        date.innerText = new Date().toLocaleDateString();

        let message = document.createElement("p"); 
        message.classList.add("comments__post-message"); 
        message.innerText = array[i].comment; 

        commentsContainer.appendChild(post); 

        post.appendChild(circleContainer); 
        circleContainer.appendChild(circle); 

        post.appendChild(textContainer); 
        textContainer.appendChild(postContent); 

        postContent.appendChild(author);
        postContent.appendChild(date);
        postContent.appendChild(message);

        let line = document.createElement("hr");
        line.classList.add("comments__hr");
        commentsContainer.appendChild(line); 
    }
}

// displayComments(commentsArray); 

    const form = document.querySelector(".comments__form"); 

form.addEventListener("submit", function(event){
event.preventDefault();

let nameValue = event.target.name.value; 
let commentValue = event.target.comment.value; 

let comment = {
    name: nameValue,
    timestamp: new Date().toLocaleDateString(),
    commentText: commentValue
};

    if (nameValue && commentValue){
        commentsContainer.innerText = ''; 
        commentsArray.unshift(comment);

        displayComments(commentsArray); 
        form.reset(); 
    }

});
