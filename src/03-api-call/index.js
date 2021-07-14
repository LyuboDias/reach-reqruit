const fetch = require('node-fetch');
/**
 * Fetch and return information about LukeSkywalker from this endpoint: https://swapi.dev/api/people/1/

The expected output is:

{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/2/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/6/"
    ], 
    "species": [], 
    "vehicles": [
        "http://swapi.dev/api/vehicles/14/", 
        "http://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "http://swapi.dev/api/starships/12/", 
        "http://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "http://swapi.dev/api/people/1/"
}
 */

module.exports = async function fetchLukeSkywalker() {
  async function fetchLuke() {
    const response = await fetch('https://swapi.dev/api/people/1/');
    // waits until the request completes...
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();

    // let luke = {
    //   birth_year: data['birth_year'],
    //   created: data.created,
    //   edited: data.edited,
    //   eye_color: data['eye_color'],
    //   films: data.films,
    //   gender: data.gender,
    //   hair_color: data['hair_color'],
    //   height: data.height,
    //   homeworld: data.homeworld,
    //   mass: data.mass,
    //   name: data.name,
    //   skin_color: data['skin_color'],
    //   species: data.species,
    //   starships: data.starships,
    //   url: data.url,
    //   vehicles: data.vehicles,
    // };

    // console.log(luke);
    return data;
  }

  return fetchLuke();
};
