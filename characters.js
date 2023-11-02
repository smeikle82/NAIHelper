let names = [];
if (localStorage.getItem('names')) {
  names = JSON.parse(localStorage.getItem('names'));
}

//Saves the individual character. No validation provided (YET)
function newCharacter(name, strength, perception, endurance, charisma, intelligence, agility){
  let newCharacter = {
    name:name,
    strength:strength,
    perception:perception,
    endurance:endurance,
    charisma:charisma,
    intelligence:intelligence,
    agility:agility,
  };
  if(!names.includes(newCharacter.name)){
    names.push(newCharacter.name);    
    localStorage.setItem(newCharacter.name.toLowerCase(), JSON.stringify(newCharacter));
    localStorage.setItem('names', JSON.stringify(names));
  }else { console.log(`CHARACTER ALREADY EXISTS`)};
  
}

//Retrieves a single character instance
function retrieveCharacter(name){
  let retrieved = JSON.parse(localStorage.getItem(name));
  //retrieved = JSON.parse(retrieved);
  return retrieved;
}

//Retrieves names of all characters
function getCharacterNames(){
  let storedNames = JSON.parse(localStorage.getItem('names'));
  return storedNames;
}

//Retrieves all character information
function getAllCharacters(){
  let getAllNames = getCharacterNames();
  individualObjects = {};
  
  //Loops through all names in the getAllNames array and then assigns the object associated to an object container
  if(getAllNames){
    getAllNames.forEach((name) => {
      let thisCharacter = retrieveCharacter(name.toLowerCase());
      individualObjects[`${name}`] = thisCharacter; // Dynamically saves the object name using the value in the array
    });
  }
  return individualObjects;

}

//AUTOLOAD ALL CHARACTERS
//let characters = getAllCharacters();
// let shane = newCharacter('Shane', 22,33,44,55,66,77);
// let amanda = newCharacter('Amanda', 44,33,22,11,66,77);
// let steve = newCharacter('Steve',5,4,3,6,7,6);
let characters = getAllCharacters();