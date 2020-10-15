// Proxy
var proxyUrl = 'https://corsreverseproxyserver.herokuapp.com/'; 

// Heroes API
async function CallHeroAPI(){
    const response = await fetch(proxyUrl + 'https://superheroapi.com/api/774532146722883/1')
    const data = await response.json();
    console.log(data)
}

CallHeroAPI()