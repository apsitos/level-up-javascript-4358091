class Movie{
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director
    this.genre = genre
    this.releaseYear = releaseYear
    this.rating = rating
  }

  getOverview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`
  }
}

// function Movie(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director
//     this.genre = genre
//     this.releaseYear = releaseYear
//     this.rating = rating

//   Movie.prototype.getOverview(){
//     return `${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`
//   }
// }

const FrenchKiss = new Movie('French Kiss', 'Lawrence Kasdan', 'Romantic Comedy', '1995', '6.6')
console.log(FrenchKiss.getOverview())
