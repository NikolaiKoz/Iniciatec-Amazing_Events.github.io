const data = {
    "fechaActual": "2022-01-01",
    "eventos": [
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
        "name":"Korean style",
        "date":"2021-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
       },
       {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
          "name":"Halloween Night",
          "date":"2022-02-12",
          "description":"Come with your scariest costume and win incredible prizes.",
          "category":"Costume Party",
          "place":"Room C",
          "capacity":12000,
          "estimate":9000,
          "price":12
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
          "name":"Metallica in concert",
          "date":"2022-01-22",
          "description":"The only concert of the most emblematic band in the world.",
          "category":"Music Concert",
          "place":"Room A"
          ,"capacity":138000,
          "estimate":138000,
          "price":150
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
          "name":"10K for life",
          "date":"2021-03-01",
          "description":"Come and exercise, improve your health and lifestyle.",
          "category":"Race",
          "place":"Campo de FutbÃ³l",
          "capacity":30000,
          "assistance":25698,
          "price":3
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
        "name":"15K NY",
        "date":"2021-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
          "name":"School's book fair",
          "date":"2022-10-15",
          "description":"Bring your unused school book and take the one you need.",
          "category":"Book Exchange",
          "place":"Room D1",
          "capacity":150000,
          "estimate":123286,
          "price":1
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
          "name":"Avengers",
          "date":"2022-10-15",
          "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
          "category":"Cinema",
          "place":"Room D1",
          "capacity":9000,
          "estimate":9000,
          "price":250
      }
    ]
  }


const cardsContainer = document.getElementById('cardsContainer');
const upcomingEvents = document.getElementById('upcomingEvents');
const pastEvents = document.getElementById('pastEvents');
const actualDate = Date.parse(data.fechaActual);
const arrUpcoming = [];
const arrPastEvents = [];
const arrHome = [];

const dataBase = data.eventos.map(evets => evets);

const site = () =>{
const URL = window.location.pathname.split('/').pop();
  switch (URL) {
    case 'index.html': printCard(URL, arrHome, cardsContainer);
      break;
    case 'upcomingEvents.html': printCard(URL, arrUpcoming, upcomingEvents);
      break;
    case 'pastEvents.html': printCard(URL, arrPastEvents, pastEvents);
      break;
  }
}

const cardGenerator = (events) => {

  let date = '';


  for (const event of events) {

    const card = `
    <div class="card m-2" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <h5 class="card-title d-none category">${event.category}</h5>
      <p class="card-text">${event.description}</p>
      <a href="#" class="btn color">More info</a>
    </div>
    </div>
    `;

    arrHome.push(card);

    date = Date.parse(event.date);

    if(date > actualDate){
      arrUpcoming.push(card);
    }
    if(date < actualDate){
      arrPastEvents.push(card);
    }
  }
};

const printCard = (URL, array, container) =>{
  const URLORDER = window.location.pathname.split('/').pop();
  if( URL === URLORDER){
    array.map( e => { container.insertAdjacentHTML("beforeend", e) });
  }
}



const categoriesGenerator = () =>{

  const categoriesBar = document.getElementById('checkBox');
  //First i need to have an Array with the categories.
  const allCategories = dataBase.map( category => category.category ); //All categories.

  const category = allCategories.filter( ( value, index ) => allCategories.indexOf(value) === index ); //Delete the duplicates.

  //Later than i will created every category and added in the HTML.
  const categoryCheckbox = category.map( category => `<div class="form-check me-2 ms-2">
                                                        <input class="form-check-input" type="radio" id="info" name="category" value="${category}">
                                                          ${category}
                                                      </div>`
  );

  categoryCheckbox.map( e => { categoriesBar.insertAdjacentHTML("beforeend", e) });

  //This algorithm it should be on each page with the cards.

}

//Obtener el valor del imput

const searchAndFilterCards = () => {

  const categoriesBar = document.getElementById('checkBox');

  const elemntsCategory = document.getElementsByClassName('category');

  categoriesBar.addEventListener("click", (selecCategory) => {
    let findCategori = selecCategory.path[0].value

    for (let i = 0; i < elemntsCategory.length; i++) {
      if (elemntsCategory[i].textContent !== findCategori) {
        elemntsCategory[i].parentElement.parentElement.classList.add('d-none');
      } else {
        elemntsCategory[i].parentElement.parentElement.classList.remove('d-none');
      }

      if(findCategori === 'All'){
        elemntsCategory[i].parentElement.parentElement.classList.remove('d-none');
      }

    }

  });

  const search = document.getElementById('search');


  search.addEventListener("keyup", (event) => {

    const allCategory = document.getElementById('info');
    allCategory.checked = true;

    let inputText = event.target.value;

    for (let i = 0; i < elemntsCategory.length; i++) {
      if (elemntsCategory[i].parentElement.children[0].textContent.toLowerCase().indexOf(inputText) === -1) {
        elemntsCategory[i].parentElement.parentElement.classList.add('d-none');
      } else {
        elemntsCategory[i].parentElement.parentElement.classList.remove('d-none');
      }
    }
  });

  

}

cardGenerator(dataBase);
site();
categoriesGenerator();
searchAndFilterCards();