
let player1 = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana', 'Knife', 'Daggers'],
    attack: function attack() {
        console.log ('${this.name} fight');
    }
};

let player2 = {
    name: 'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana', 'Knife', 'Daggers'],
    attack: function attack() {
        console.log ('${this.name} fight');
    }
};
let arenas = document.querySelector('.arenas');
    

function createPlayer (playerClass ,playerName) {
    let $player = document.createElement ('div');
    let $progressbar = document.createElement ('div');
    let $character = document.createElement ('div');
    let $life = document.createElement ('div');
    let $name = document.createElement ('div');
    let $img = document.createElement ('img');
    $img.src = playerName.img;
    $player.classList.add(playerClass);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');
    document.body.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $life.style.width = '${playerName.hp}%';
    $name.innerText = playerName.name;
    arenas.appendChild($player)
    health = playerName.hp;
}


createPlayer('player1',player1);
createPlayer('player2',player2);




