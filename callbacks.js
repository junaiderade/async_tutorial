//this file is to mimic getting blog posts from a server

const posts = [
    {title: 'Post One', body: "this is post one"},
    {title: 'Post Two', body: "this is post two"},
]

function getPosts(){
    //you are writing set timeout here because part of mimicing a server is creating
    //a pretend delay in getting some data
    //set timeout takes a callback function, and a time
    setTimeout(() => {
        let output = '';
        //forEach also takes a callback function
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000); //1000 milliseconds
}

function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();//you want this function to be called as soon as post is done
    },2000);
}

//the reason you don's see this last post on screen is because
//createPost takes longer than get post
createPost({title: 'Post Three', body: "this is post three"},
getPosts);//notice no parentheses when using callback