// Enter your code below here and ABOVE the HELPER FUNCTIONS
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

function makeStore(){
  var newObj = {};
  var arrayOfBooks = generateBooks();
  var counter = 1;
  
  function displayBook (book){
    return counter++ + ': ' + book.title + ', by ' + book.author + ' / CATEGORY: ' + book.category + ' / PRICE: ' + book.price + ' /  ID: ' + book.id + '\n';
  }
  
  function displayBooks(array){
    return map(array, function(book, i){
      return displayBook(book);
    }).join(' ');
  }

  return {
    display: function(n){
      var newBookArray = arrayOfBooks.slice(0, n);
      return displayBooks(newBookArray);
    }
  }
}
var arrayOfBooks = generateBooks(5);
var singleBook = generateBooks(1);
var bookStore = makeStore();

console.log('BookStore Display Method: ', bookStore.display(20));





// ==============================================================================
// HELPER FUNCTIONS

function generateBooks(n) {
  // __rawBooks is defined in books.js
  var booksArray = __rawBooks.split(',');
  var numBooks = n || booksArray.length - 1;
  var categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical'];

  function makeBook(bookName, id) {
    var tuple = bookName.split('by');

    return {
      id: id,
      title: tuple[0].trim(),
      author: tuple[1].trim(),
      price: parseFloat(randN(10, 35).toFixed(2)),
      category: randElt(categories)
    };
  }

  return reduce(take(booksArray, numBooks), function(books, s, i) {
    return conj(books, makeBook(s, i));
  }, []);
}

