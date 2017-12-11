let authors = [{
    name: "JRR Tolkien",
    bio: "John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high-fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion",
    known_for: "The Lord of the Rings",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tolkien_1916.jpg",
    lifespan: {
      birth: 1892,
      death: 1973
    }
  },
  {
    name: "George Martin",
    bio: "George Raymond Richard Martin, often referred to as George R. R. Martin, is an American novelist and short-story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer",
    known_for: "A Song of Ice and Fire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/George_R._R._Martin_by_Gage_Skidmore_2.jpg/220px-George_R._R._Martin_by_Gage_Skidmore_2.jpg",
    lifespan: {
      birth: 1948,
      death: 'N/A'
    }
  },
  {
    name: "Terry Pratchett",
    bio: "Sir Terence David John Pratchett, OBE, better known as Terry Pratchett, was an English author of fantasy novels, especially comical works. He is best known for his Discworld series of 41 novels",
    known_for: "Disk World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/10.12.12TerryPratchettByLuigiNovi1.jpg/220px-10.12.12TerryPratchettByLuigiNovi1.jpg",
    lifespan: {
      birth: 1948,
      death: 2015
    }
  },
  {
    name: "HP Lovecraft",
    bio: "Howard Phillips Lovecraft was an American writer who achieved posthumous fame through his influential works of horror fiction.",
    known_for: "The Call of Cthulhu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/H._P._Lovecraft%2C_June_1934.jpg/220px-H._P._Lovecraft%2C_June_1934.jpg",
    lifespan: {
      birth: 1890,
      death: 1937
    }
  }
];

let container = document.getElementById('author-container');

for (i = 0; i < authors.length; i++) {
  let obj = authors[i];
  let ident = obj.name.split(' ')[1];

  let authorsDiv = document.createElement('div');
  let header = document.createElement("h3");
  let bio = document.createElement('section');
  let bioSect = document.createElement('section');
  let img = document.createElement('img');
  let footer = document.createElement('footer');


  let nameTxt = document.createTextNode(obj.name + ': ');
  let knownTxt = document.createTextNode(obj.known_for);
  let bioTxt = document.createTextNode(obj.bio);
  img.src = obj.image;
  let born = document.createTextNode('Born: ' + obj.lifespan.birth);
  let died = document.createTextNode('   ------------ Died:   ' + obj.lifespan.death);

  header.appendChild(nameTxt);
  header.appendChild(knownTxt);
  bioSect.appendChild(bioTxt);
  bio.appendChild(bioSect);
  bio.appendChild(img);
  footer.appendChild(born);
  footer.appendChild(died);

  authorsDiv.appendChild(header);
  authorsDiv.appendChild(bio);
  authorsDiv.appendChild(footer);
  
  container.appendChild(authorsDiv);

  authorsDiv.classList.add('a-class');
  authorsDiv.id = ident;
  bioSect.id = 'biosect'

}
let input = document.getElementById('txt-input')
let cards = document.querySelectorAll('.a-class');
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    event.currentTarget.classList.toggle('selected')
    input.focus();
  });

  input.addEventListener('keyup', function (e) {
    if (card.classList.contains('selected')) {
      card.childNodes[1].childNodes[0].innerHTML = input.value;
    } 
     if (e.keyCode === 13) {
      e.preventDefault();
      input.value = '';
    }
  });
});