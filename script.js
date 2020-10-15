// Proxy
var proxyUrl = 'https://corsreverseproxyserver.herokuapp.com/';

// Get element
const grid = document.getElementById('image-grid');

// Heroes API
async function CallHeroAPI(){
    for(var i=0; i < 20; i++) {
        try{
            const response = await fetch(proxyUrl + `https://superheroapi.com/api/774532146722883/${Math.round(Math.random()*600)}`)
            const data = await response.json();
            var Card = document.createElement('img');
            Card.setAttribute('src', data.image.url);
            var imageCard = document.createElement('div');
            imageCard.setAttribute('class', 'image-card');
            imageCard.appendChild(Card);
            grid.appendChild(imageCard)
            console.log(data)
        }catch(error){
            console.log(error)
        }

    }
    
    
}

CallHeroAPI()