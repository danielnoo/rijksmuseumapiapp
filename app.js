const artApp = {};

artApp.apiKey = 'K8gsyEQB';

// make api call to get artist
artApp.getPieces = function (query) {
  const url = new URL('https://www.rijksmuseum.nl/api/en/collection');
  url.search = new URLSearchParams({
    key: artApp.apiKey,
    imgonly: true,
    q: query

  });
  fetch(url)
    .then((results) => {
      return results.json();
    }).then((jsonData) => {
      document.querySelector('#artwork').innerHTML = '';
      artApp.displayPieces(jsonData.artObjects);
    });
};

// display arts on the page

artApp.displayPieces = function(artPieces) {
  
  artPieces.forEach(artObject => {
    const title = document.createElement('h2');
    title.innerText = artObject.title;
    
    const artist = document.createElement('p');
    artist.innerText = artObject.principalOrFirstMaker;
    
    const image = document.createElement('img');
    image.src = artObject.webImage.url;
    image.alt = artObject.title;

    const artPiece = document.createElement('div');
    artPiece.classList.add('piece');
    artPiece.append(title, artist, image);

    document.querySelector('#artwork').append(artPiece);
  })
};



artApp.setUpEventListener = function() {
  document.querySelector('#animal').addEventListener('change', function() {
    artApp.getPieces(this.value);
  })
}


artApp.init = function () {
  
  
  artApp.setUpEventListener();
};




artApp.init();