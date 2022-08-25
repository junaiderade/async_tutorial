//uncomment certain things in this code to see how things work


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

//compared to callback, here you will return a promise
function createPost(post) {

    //a promise is given a callback function which takes 2 parameters
    //resolve and reject
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);
            const error = false;
            
            if(!error) {
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}
//since create post returns a promsie, you can use .then syntax
// createPost({title: 'Post Three', body: "this is post three"})
// .then(getPosts)
// .catch(err => console.log(err));//incase your promise rejects

//mostly you deal with responses, you don't have to create the promise yourself

//Promise.all take an array of promises

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye')
// );

// //fetch is weird because you need to use 2 .thens when you fech because 
// //you need to format the response to json  and then get the data
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json());//turn to jason from http request

//async/await
//await waits for an asynchronout process to complete
//its just a more elegant way to handle promises
// async function init() {
//     await createPost({title: 'Post Three', body: "this is post three"});

//     //you wait for whatever is in await to be done before calling getposts
//     getPosts();
// }

// init();


//async await with fetch
//fetch returns a promise which can either resolve or reject
//when it resolves it resolves with a response object, which 
//is a representation of the http response
//you have to use the json method which returns a SECOND
//promise that reolves with the result as json

async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    console.log(data);
}
fetchUsers();
// Promise.all([promise1,promise2,promise3,promise4]).then((
//     (values) => console.log(values)
// ))

//async await is a way to handle responses
