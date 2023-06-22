
let container = document.getElementById("wrapper");

//object of the games

//IMPORTANT!!
//the arrays of the imgs have an specific order depending on ther indeces:
//index 0 = the image used in the principal page
//and the rest of the indeces will be used for the bootstrap carrousel

let card = [

];



games.forEach(e => container.innerHTML += `
<div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="text" style="margin-top: 85%;">
                        <p class="title">${e.game_name}</p>
                    <p>CABAL</p>
                    </div>
                </div>
                <div class="flip-card-back">
                    
                    
                    <button onclick="">
                        VER MÁS
                    </button>
                </div>
            </div>
        </div>
   </div>`);

