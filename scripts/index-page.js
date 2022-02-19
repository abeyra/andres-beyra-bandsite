const url = "https://project-1-api.herokuapp.com/";

const apiKey = "dcf59c38-5d4a-45bd-b58e-d40ff03ce8f8"; 

const commentsContainer = document.querySelector(".comments__container"); 

const form = document.querySelector(".comments__form"); 

function createComment(comment){

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
    author.innerText = comment.name; 

    let date = document.createElement("p");
    date.classList.add("comments__post-date");
    date.innerText = new Date(comment.timestamp).toLocaleDateString();

    let message = document.createElement("p"); 
    message.classList.add("comments__post-message"); 
    message.innerText = comment.comment; 

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

function displayComments(){

    axios.get(url + 'comments?api_key=' + apiKey)
        .then(response => {

            let commentsData = response.data.sort((a,b) => {
                let timeA = a.timestamp; 
                let timeB = b.timestamp;
                return timeB - timeA; 
            });

            commentsData.forEach(comment => {
                createComment(comment);
            }); 

        })
        .catch(error => {
            console.log(error);
        });
}

function postComment(comment){

    axios.post(url + 'comments?api_key=' + apiKey, comment)
        .then(response => {
            form.reset();
            displayComments();
        })
        .catch(error => {
            console.log(error);
        });
}

displayComments();

form.addEventListener("submit", function(event){
    event.preventDefault();

    let nameValue = event.target.name.value; 
    let commentValue = event.target.comment.value; 

    let comment = {
        name: nameValue,
        comment: commentValue
    };

    if(nameValue && commentValue){
        commentsContainer.innerText = '';
        postComment(comment);
    }

    });
