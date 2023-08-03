class Book {
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability()
  }

   getAvailability() {
    if (count <= 0) return "Out of stock";
    if (count < 10) return "Low stock";
    return "In stock"
  }

  sell(numSold) {
    return totalCount -= numSold
  }

  restock(numCopies = 5){
    return totalCount += numCopies
  }
}

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if (this.numCopies <= 0) return "out of stock";
//   if (this.numCopies < 10) return "low stock";
//   return "in stock"
// }

// Book.prototype.sell = function(numSold = 1) {
//   return this.numCopies -= numSold
// }

// Book.prototype.restock = function(numCopies = 5) {
//   return this.numCopies += numCopies
// }

const ClassicBook = new Book('Persuasion', 'JaneAusten', 1234565, 5)
console.log(ClassicBook.getAvailability())

ClassicBook.restock(12)
console.log(ClassicBook.getAvailability())

ClassicBook.sell(18)
console.log(ClassicBook.getAvailability())