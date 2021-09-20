const artApp = {};

artApp.apiKey = 'K8gsyEQB';

// make api call to get artist
artApp.getPieces = function () {
  const url = new URL('https://www.rijksmuseum.nl/api/en/collection');
  url.search = new URLSearchParams({
    key: artApp.apiKey,
    imgonly: true,
    q: 'monkeys'

  });
  fetch(url)
    .then((results) => {
      return results.json();
    }).then((jsonData) => {
      artApp.displayPieces(jsonData.artObjects);
    });
};

// display arts on the page

artApp.displayPieces = function(artPieces) {
  console.log(artPieces)
};




artApp.init = function () {
  console.log('lets get arting')
  artApp.getPieces();
};

artApp.init();