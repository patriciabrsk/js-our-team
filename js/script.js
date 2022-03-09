/*
Array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare: Nome, Ruolo e Foto.

    MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto

    MILESTONE 2:
    stampare le stesse informazioni su DOM sottoforma di stringhe

    BONUS 1:
    trasformare la stringa foto in una immagine effettiva

    BONUS 2:
    organizzare i singoli membri in card/schede

 */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (let i = 0; i < team.length; i++) {
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
}

const cardsWrapper = document.getElementById('cards-wrapper');

for (let i = 0; i < team.length; i++) {
    let card = document.createElement('div');
    card.classList.add('col');
    cardsWrapper.appendChild(card);
    card.innerHTML = `
    <div class="card shadow border-0">
        <img src="./img/${team[i].image}" class="card-img-top" alt="Team member portrait">
        <div class="card-body">
            <h5 class="card-title">${team[i].name}</h5>
            <p class="card-text">${team[i].role}</p>
        </div>
    </div>`;
    // console.log(team[i].name);
    // console.log(team[i].role);
    // console.log(team[i].image);
}