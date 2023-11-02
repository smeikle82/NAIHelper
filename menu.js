for(character in characters){
  let x = document.createElement("p");
  x.innerHTML = `<b>${character}</b> </br>`;
  for(innerCharacter in characters[character]){    
    x.innerHTML += `${innerCharacter} : ${characters[character][innerCharacter]}</br>`;
    document.getElementById('Characters').appendChild(x);
  }
  
}

