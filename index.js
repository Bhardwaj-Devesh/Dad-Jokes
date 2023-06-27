const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apikey="TAT70i0bPlOYEUGp+0/bSQ==eJjCYyqHkEFgeu8K";

const options={
    method: "GET",
    headers:{
        'X-Api-Key':apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText="Updating..";
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        const response=await fetch(apiURL,options)
        const data= await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        jokeEl.innerText=data[0].joke;
    } catch (error) {
        jokeEl.innerText="Error Happens Try again later";
        jokeEl.style.color="red";
    }
    
}
// wee need to add event listener
btnEl.addEventListener("click",getJoke)