/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

let teamList=[
    newMember={
        name: 'Wayne Barnett',
        role: 'founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },

    newMember={
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },

    newMember={
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    
    newMember={
        name: 'Angela Lopez',
        role: 'Social Media',
        photo: 'Manager  angela-lopez-social-media-manager.jpg',
    },

    newMember={
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },

    newMember={
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
]




/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

for(let key in teamList){
    console.log(teamList);
}



/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

let divContainer= document.getElementById('container');
for (let i of teamList) {
    let divSubElement = document.createElement("div"); 
    divSubElement.innerHTML = teamList;
    divContainer.appendChild(divSubElement); 
}


/*lista
Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
Scott Estrada     Developer         scott-estrada-developer.jpg
Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg*/