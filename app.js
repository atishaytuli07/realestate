// ASYNC JS - kahanni suno, jubani suno - callback queue, event loop

// settimeout - ka code kuch interval ke baad chla hai.
setTimeout(function() {
    console.log("this code takes 2sec to run.");
}, 2000)

// setinterval ka code kuchh der baad bar bar chlta hai ek particular interval ke time pai.
setInterval(function () {
    console.log("this code will keep running after 1sec of interval");
}, 1000)

let stop = setInterval(function () {
    console.log("SetInterval code");
}, 2000)

clearInterval(stop)

// to stop code after running 4 times.
let count = 0;
let clear = setnterval(function(){
    ++count;
    console.log(count);
    if(count === 3) clearInterval(clear);
    
}, 1000)

// fetchAPI - ye kisi url pai jake data layega ja humse data leke wahha leke jaye ga.

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(redable => console.log(redable))

// axios - yeh bi fetchAPI  jaise work karta hai bs developer friendly hai.
// to use axios we need to write its CDN first in html file 

axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result))

// promise - koi bi async code jiska answer pata nhi aye ga ja nahi,  uske basis pai kaam krna 

const parchi = new Promise( function(resolve, reject){
fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    if(result.results[0].gender ===  "male") resolve();
    else reject();
});

});

parchi .then(function (){
    console.log("Male aya hoga")
})
.catch(function (){
    console.log("female aya hoga");
    
})