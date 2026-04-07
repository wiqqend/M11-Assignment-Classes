// Define the Movie class
const movieInfo = document.getElementById('movie-info');
class Movie {
   // make the title, cast, description, rating private properties of the class
    #title;
    #cast;
    #description;
    #rating;
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }
  get title() {
    return this.#title;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;

  }

  // Method to display the movie's information
  displayInfo() {
    movieInfo.innerHTML += "<h3>" + this.#title + "</h3><p><strong>Cast:</strong> " + this.#cast + "</p><p><strong>Description:</strong> " + this.#description + "</p><p><strong>Rating:</strong> " + this.#rating + "</p><br>";

  }}


moviecollection = [];

function updateMovieRating(title, newRating) {
  for (let movie of moviecollection) {
    if (movie.title === title) {
      movie.updateRating(newRating);
      break;
    } 

}
}
const interstellar = new Movie('Interstellar', 'Matthew McConaughey & Anne Hathaway', 'Explorers go into a wormhole', 9.9);
moviecollection.push(interstellar);


// Test your implementation

// Display the initial information of the movie
interstellar.displayInfo();

// Update the rating of the movie

// interstellar.updateRating(9.0);

updateMovieRating('Interstellar', 10.0);
// Display the updated information of the movie
interstellar.displayInfo();
