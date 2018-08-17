const searchRestaurant = document.getElementById('restaurant-search');
const restaurantSection = document.getElementById('restaurant-section');

const filterBySearch = (search) => restaurants.filter(({ name, tags }) => {
  return name.toLowerCase().includes(search.toLowerCase()) || tags.toString().includes(search.toLowerCase())
});

const restaurantTemplate = restaurantList => restaurantList.map(({ id, name, picture, description }) => {
  return `<div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src=${picture}>
          <span class="card-title bold-text"></span>
          <button class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" data-target="restaurant-modal">
            <i id=${id} class="material-icons tea-rose">add</i>
          </button>
        </div>
        <div class="card-content">
          <p class="grey-text bold-text">${name}</p>
          <p class="grey-text darken-5">${description}</p>
        </div>
      </div>
    </div>`
}).join('');

const renderRestaurants = restaurantList => restaurantSection.innerHTML = restaurantTemplate(restaurantList);

searchRestaurant.addEventListener('input', event => renderRestaurants(filterBySearch(event.target.value)));
searchRestaurant.addEventListener('submit', (event) => event.preventDefault());

restaurantSection.addEventListener('click', (event) => {
  const { 
    name, description, local
  } = restaurants.find(restaurant => restaurant.id === event.target.id)
  console.log(name, description)
  document.getElementById('restaurant-modal').innerHTML = `<div class="modal-content"> 
      <div class="row no-bottom-margin">
        <a href="#" class="modal-close right">X</a>
        <img class="col s10 m7 offset-s1" src="${local.map}">
        <div class="col s12 m5">
          <p class="card-title bold-text middle-blue-green-text hide-on-med-and-up">${name}</p>
          <span class="hide-on-med-and-up grey-text">${local.address}</span>
          <h5 class="hide-on-small-only bold-text middle-blue-green-text">${name}</h5>
          <h6 class="hide-on-small-only tea-rose-text">${description}</h6>
          <p class="hide-on-small-only grey-text">${local.address}</p>
        </div>
      </div>
    </div>`
})

renderRestaurants(restaurants);