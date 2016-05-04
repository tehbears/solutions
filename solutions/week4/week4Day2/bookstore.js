// Enter your code below here and ABOVE the HELPER FUNCTIONS
//Line 4 more pratice
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

  function isMatch(book, query) {
    var s = (book.title + book.author + book.category).toLowerCase();
    return s.indexOf(query.toLowerCase()) >= 0;
  }

  return {
    display: function(n){
      var newBookArray = arrayOfBooks.slice(0, n);
      return displayBooks(newBookArray);
    },
    search: function(query){
      return filter(arrayOfBooks, function(book, i){
        return isMatch(book, query);
      });
    },
    getBook: function(id){
      return filter(arrayOfBooks, function(book, i){
        return book.id === id;
      });
    },
    removeBook: function(id){
      var removed;
      each(arrayOfBooks, function(book, i){
        if(book.id === id){
          removed = arrayOfBooks.splice(i, 1);
          console.log('removed: ', removed[0].title);
        }
      });
      if(removed === undefined){
        return 'Book not in list,';
      }
      return removed.title + ' removed from list.';
    },
  }
}

function makeCart(){
  var cart = [];
  var counter = 0;
  var total;

  function displayBook (book){
    console.log('book: ', book);
    return counter++ + ': ' + book.title + ', by ' + book.author + ' / PRICE: ' + book.price + ' /  ID: ' + book.id + '\n';
  }
  
  function displayBooks(array){
    return map(array, function(book, i){
      return displayBook(book);
    }).join(' ');
  }    
  
  return{
    addBook: function(book){
      var temp = book[0];
      console.log('addBook: ', temp);
     return cart.push(temp);
    },
    display: function(n){
      var newBookArray = cart.slice(0, n);
      return displayBooks(newBookArray);
    },
    remove: function(id){
      var temp;
      each(cart, function(book, i){
        console.log('book: ', book);
        if(book.id === id){
          temp = cart.splice(i,1);
        }
      });
      return temp[0].title + ' has been removed from the cart.'; 
    },
    total: function(){
      total = reduce(cart, function(total, book){
        return total += book.price;
      }, 0);
      return Math.round(total * 100) / 100;
    },
    checkOut: function(bookStore, bankAccount){
      var finalCheckOut = [];
      console.log('bankAccount.spendMoney: ', bankAccount.spendMoney());
      if(bankAccount.spendMoney() - total > 0){
        for(var i = 0; i < cart.length; i++){
          finalCheckOut.push(cart[i]);
          var ID = cart[i].id;
          bookStore.removeBook(ID);
        }
        bankAccount.withdraw(total);
        return finalCheckOut;
      }
      return 'Your card has been declined!';
    }
  }
}

function makeAccount(initial) {
  var balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return "Here’s your money: $" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return "Your balance is: $" + balance;
    },
    checkBalance: function() {
      return 'Your balance is: $' + balance;
    },
    spendMoney: function(){
      return balance;
    }
  };
}

//1
// )Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:

var account = makeAccount(100);
console.log('checkBalance: ', account.checkBalance()); // => "Your balance is: $100"
console.log('deposit: ', account.deposit(50));
console.log('checkBalance: ', account.checkBalance()); 

var cart = makeCart();
var bookStore = makeStore();


console.log('search: ', bookStore.search('romantic comedy'));
console.log('getBook: ', bookStore.getBook(5));
console.log('removeBook: ', bookStore.removeBook(13));
// console.log('BookStore Display Method: ', bookStore.display(20));


console.log('cart add book: ',cart.addBook(bookStore.getBook(5)));
console.log('cart display books: ', cart.display(5));
console.log('cart remove book: ', cart.remove(5));
console.log('cart add book: ',cart.addBook(bookStore.getBook(1)));
console.log('cart add book: ',cart.addBook(bookStore.getBook(2)));
console.log('cart add book: ',cart.addBook(bookStore.getBook(3)));
console.log('cart add book: ',cart.addBook(bookStore.getBook(4)));
console.log('cart display: ', cart.display(5));
console.log('cart total: ', cart.total());
console.log('cart checkout: ', cart.checkOut(bookStore, account));
console.log('bookStore Display Method: ', bookStore.display(20));
console.log('account checkbalance: ', account.checkBalance());
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

