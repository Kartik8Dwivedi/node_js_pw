const fs = require('fs')
const os = require('os')
const http = require('http')
const events = require('events')

// Question 01-02

// creating and writing in the file

/*

fs.writeFile('./node_architecture.txt', "Here we will discuss about NodeJS Architecture in detail", (error) => {
    if(error) console.log("Error : "+error)
    else console.log("File was successfully created")
})

*/

// for appending the file ->


/*

fs.appendFile('./node_architecture.txt', "This data will be appended to the node_architecture.txt file", (error) => {
    if(error) console.log("Error: "+error)
    else console.log("Successfully appended the file")
})

*/


//Question 03


/*

fs.readFile('./node_architecture.txt', (error, response) =>{
    if(error) console.log("Error : "+error)
    else {
        console.log(response.toString())
    }
})

*/

// Question 04

// appending the node_architecture.txt file 

/*

fs.appendFile('./node_architecture.txt', "Compared to other server-side languages, Node js has distict advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of weba pplications built on other frameworks. Node js can easily handle multiple cl.ient requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high preformance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server side languages, Node js has distnct advantages. Its asynchronous model and non blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is hightly scalable and provides high performance. Node js is also flexible with multiple frameworks and make3s the development process easier.", (error) => {
    if(error) console.log("Error in appending : "+error);
    else console.log("Successfully appended the file");
})

*/

// Question 5

// Deleting the node_arch.txt file 

/*

// we are  unlinking a different file "node_arch.txt" not the "node_architecture.txt" file
fs.unlink("./node_arch.txt", (error) => {
    if(error) console.log("Error in unlinking the file : "+error)
    else console.log("Successfully unlinked the file")
})

*/

// Question 06 


// console.log(os.type())
// console.log(os.release())

/*

    output:
            Linux
            6.3.8-zen1-1-zen

 */

 
// Question 07 

/*

const server = http.createServer((request, response) => {
    if(request.url == '/')
        response.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>")
    response.end();
})

server.listen(8080)

console.log("Server started at port 8080")

*/

// Question 08

/*

let eventEmitter =new events.EventEmitter()

eventEmitter.on("subscribe", (data) => {
    console.log(`Thanks for subscribing to ${data}`)
})

eventEmitter.emit("subscribe", "College Wallah")

*/

// Question 09

/*

let eventEmitter =new events.EventEmitter()

let handleSubscribe = (data) => {
    console.log(`Thanks for subscribing to ${data}`)
}

eventEmitter.on("subscribe", handleSubscribe)
let val1 = eventEmitter.emit("subscribe", "College Wallah")
eventEmitter.removeListener("subscribe", handleSubscribe)
let val2 = eventEmitter.emit("subscribe", "Physics Wallah")
console.log(`Val1: ${val1} and Val2: ${val2}`)

*/

// we can observe that when the eventEmitter is removed from a target, we recieve a boolean value of false, otherwise we get a true value if the listener works properly and is able to call the callback function

// Question 10

/*

let eventEmitter =new events.EventEmitter()

eventEmitter.on("subscribe", (data) => {
    console.log(`Thanks for subscribing to ${data}`)
})

// eventEmitter.emit("subscribe", "College Wallah")

console.log(eventEmitter.getMaxListeners()) //10
eventEmitter.setMaxListeners(5);
console.log(eventEmitter.getMaxListeners()) //5

*/