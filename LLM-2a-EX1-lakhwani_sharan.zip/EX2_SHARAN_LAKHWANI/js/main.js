// Creamos los campos del formulario
function createForms() {
  var song = document.createElement("input");
  song.type = "text";
  song.name = "song";
  document.body.appendChild(song);
  var artist = document.createElement("input");
  artist.type = "text";
  artist.name = "artist";
  document.body.appendChild(artist);
  var price = document.createElement("input");
  price.type = "number";
  price.name = "price";
  document.body.appendChild(price);
}

function init() {
  createForms();
  // agregamos placeholders a los campos del formulario
  var song = document.getElementsByName("song")[0];
  song.placeholder = "Song";
  var artist = document.getElementsByName("artist")[0];
  artist.placeholder = "Artist";
  var price = document.getElementsByName("price")[0];
  price.placeholder = "Price";
  // creamos un JSON para guardar los datos introducidos en el formulario.
  var json = {
    songs: [
      {
        song: "",
        artist: "",
        price: "",
      },
    ],
  };

  // Creamos el botón add que añade los datos al json y los muestra por pantalla
  var add = document.createElement("button");
  add.innerHTML = "Add";
  document.body.appendChild(add);
  add.onclick = function () {
    json.songs.push({
      song: song.value,
      artist: artist.value,
      price: price.value,
    });
    var songList = document.createElement("div");
    songList.innerHTML =
      json.songs[json.songs.length - 1].song +
      " by " +
      json.songs[json.songs.length - 1].artist +
      " for $" +
      json.songs[json.songs.length - 1].price;
    document.body.appendChild(songList);
  };

  // nos aseguramos de que el precio está entre 1 euro y 35 euros

  add.onclick = function() {
    if (price.value >= 1 && price.value <= 35) {
      json.songs.push({
        "song": song.value,
        "artist": artist.value,
        "price": price.value
      });
      var songList = document.createElement('div');
      songList.innerHTML = json.songs[json.songs.length - 1].song + ' by ' + json.songs[json.songs.length - 1].artist + ' for $' + json.songs[json.songs.length - 1].price;
      document.body.appendChild(songList);
    }
  };
  // nos aseguramos que ninguno de los campos del formulario está vacio.
  add.onclick = function() {
    if (price.value >= 1 && price.value <= 35 && song.value != '' && artist.value != '') {
      json.songs.push({
        "song": song.value,
        "artist": artist.value,
        "price": price.value
      });
      var songList = document.createElement('div');
      songList.innerHTML = json.songs[json.songs.length - 1].song + ' del artista ' + json.songs[json.songs.length - 1].artist + ' por ' + json.songs[json.songs.length - 1].price + ' euros.';
      document.body.appendChild(songList);
    }
  };

  // imprimimos la tabla
  add.onclick = function() {
    if (price.value >= 1 && price.value <= 35 && song.value != '' && artist.value != '') {
      json.songs.push({
        "song": song.value,
        "artist": artist.value,
        "price": price.value
      });
      var songList = document.createElement('table');
      songList.innerHTML = '<tr><th>Song</th><th>Artist</th><th>Price</th></tr>';
      for (var i = 0; i < json.songs.length; i++) {
        songList.innerHTML += '<tr><td>' + json.songs[i].song + '</td><td>' + json.songs[i].artist + '</td><td>' + json.songs[i].price + '</td></tr>';
      }
      document.body.appendChild(songList);
    }
  };
}
init();
