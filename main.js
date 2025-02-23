
function usersInfo(){
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType="json"
    request.send()
    request.onload = function (){

    if(request.status >= 200 && request.status < 300){
        let users = request.response

    for (user of users){
        document.getElementById('users').innerHTML+=
        `<div class="userId" onclick="getPostsWithUserIdFilter(${user.id})">
                        <h2>${user.id} - ${user.name}</h2>
                        <p>${user.email}</p>
                    </div>`
    }
    }else{
        alert('error')
    }

}

}


function getPostsWithUserIdFilter(userId){
    let request = new XMLHttpRequest()
    request.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request.responseType="json"
    request.send()
    request.onload = function (){

    if(request.status >= 200 && request.status < 300){
        let posts = request.response

        let postsContainer = document.getElementById('posts');
        if(typeof userId == "undefined"){
            postsContainer.innerHTML = `<h3>Posts by User ID: </h3><hr>`;
        }else {
        postsContainer.innerHTML = `<h3>Posts by User ID: ${userId}</h3><hr>`;
            }

    for (post of posts){
        document.getElementById('posts').innerHTML+=
        `<div>
            <h3>${post.title}<h3>
            <hr>
            <p>${post.body}</p>
        </div>`

    }
    }else{
        alert('error')
    }
}

}

getPostsWithUserIdFilter()

usersInfo()