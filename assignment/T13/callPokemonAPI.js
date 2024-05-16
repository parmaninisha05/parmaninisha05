//Creating fetch method and calling pokemonAPI.
const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/kakuna/"); //using kakuna as a pokemon character

fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((characterData) => {
    //Printing Name,Weight and abilities
    console.log("Name:");
    console.log(characterData["name"]);
    console.log("\n");
    console.log("Weight:");
    console.log(characterData["weight"]);
    console.log("\n");
    console.log("Abilities:");
    console.log(characterData["abilities"]);
  });
