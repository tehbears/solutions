//=============================warm ups

// Discuss the purpose of objects with your partner until you are confident that you could explain what kind of problems are solved by objects, and why objects provide a better solution than other approaches. Put this into writing.
//====Objects reflect real world information. Such as players on a team, objects can take names, stats,and a players position. This would be extremely difficult to with an array. Because arrays on index base, and everyone would have to agree with what index, would represent name, stats and a players position. 

var pet = {
	breed: 'Miniature Australian Shepherd',
	name: 'lady',
	age: 9,
}

var car = {
	model: 'mustang',
	year: 2005,
	color: 'red'
}

function squareNumericValues(obj){
	for(var key in obj){
		if(typeof obj[key] === 'number'){
			obj[key] = obj[key] * obj[key];
		}
	}
	return obj;
}

//==============================================exercise
var counter = 0;

function makeBook(title, name, genre, numberOfPages){
	return {
		title: title,
		author: name,
		genre: genre,
		numberOfPages: numberOfPages,
		id: counter++
	};
}

var sorcerersStone = makeBook('Harry Potter and the Socerer\'s Stone', 'J.K. Rowling', 'Fantasy', 455);
var snowCrash = makeBook('Snow Crash', 'Neal Stephenson', 'Science Fiction', 552);
var structureAndInterpretationOfComputerPrograms = makeBook('Structure and Interpretation of Computer Programs', [ 'Gerald Jay Sussman', 'Hal Abelson'], 'Textbook', 346);

var books = [sorcerersStone, snowCrash, structureAndInterpretationOfComputerPrograms];

function displayBook(book) {
	return book.title + ', by ' + book.author + ' -- ' + book.genre; 
}


function displayAllBooks(arrayOfBooks) {
	var counter = 1;
	var bookResult = ''
	for(var i = 0; i < arrayOfBooks.length; i++){
		bookResult = bookResult + counter + ': ' + arrayOfBooks[i].title + ', by ' + arrayOfBooks[i].author + ' -- ' + arrayOfBooks[i].genre + '.\n'; 
		counter++;
	}
	return bookResult;
}

function searchBook(arrayOfBooks, bookTitle){
	for(var i = 0; i < arrayOfBooks.length; i++){
		if(arrayOfBooks[i].title.toLowerCase() === bookTitle.toLowerCase()){
			return true; 
		}
	}
	return false;
}

function removeBook(arrayOfBooks, bookTitle){
	for(var i = 0; i < arrayOfBooks.length; i++){
		if(arrayOfBooks[i].title.toLowerCase() === bookTitle.toLowerCase()){
			arrayOfBooks.splice(i, 1); 
			return arrayOfBooks;
		}
	}
	return 'This book was already deleted or did not exist in the book list.';
}

function movieMaker (title, director, duration, releaseDate, obj){
	return {
	title: title,
	director: director,
	duration: duration,
	releasedate: releaseDate,
	actorsAndActresses: obj
	};
}

var inception = movieMaker('Inception', 'Chistopher Nolan', '2 hours', 'May 2012', [{ name: 'Leonardo DiCaprio', role: 'Main actor', awards: 'AwesomeStuff'}, {name: 'Joseph Gordon-Levitt',role: 'Supporting Actor', award: 'Something Cool'}]);

var imitationGame = movieMaker('The Imitation Game', 'Morten Tyldum', '2 hours', 'May 2014', [{name: 'Benedict Cumberbatch', role: 'Main Actor', awards: 'Some really amazing cool stuff'}, {name: 'Keira Knightley', role: 'Main Actress', award: 'Something freaking amazing' }]);

var bigHero6 = movieMaker('Big Hero 6', 'Don Hall', '2 hours', 'May 2014', [{name: 'Scott Adsit', role: 'Baymax', award: 'Best stuff ever'}, {name: 'Ryan Potter', role: 'Hiro', award: 'Coolest stuff ever'}]);

var moviesArray = [inception, imitationGame, bigHero6];

function displayAllMoviesAndCasts(arrayOfMovies) {
	var counter = 1;
	var movieResult = '';

	for(var i = 0; i < arrayOfMovies.length; i++){
		movieResult = movieResult + counter + ': ' + arrayOfMovies[i].title + ', directed by ' + arrayOfMovies[i].director;
		counter++;
		for(var j = 0; j < arrayOfMovies[i].actorsAndActresses.length; j++){

				if((j + 1) === arrayOfMovies[i].actorsAndActresses.length){
					movieResult = movieResult + 'starring ' + arrayOfMovies[i].actorsAndActresses[j].name + ' who played the role of ' + arrayOfMovies[i].actorsAndActresses[j].role + '.\n'
				} else{
				 movieResult = movieResult + ' starring ' + arrayOfMovies[i].actorsAndActresses[j].name + ' who played the role of ' + arrayOfMovies[i].actorsAndActresses[j].role + ' and '; 
				}
		}
	}
	return movieResult;
}

//=====for books 
	//multiple genres, have won awards, are on a best-seller list, or have other unique identifying characteristics
	//add ids to books 
		//use counter increments everytime make book is called

function addTag(obj,addNewTag){
	if(!obj['tag']){
		obj['tag'] = [];
	}

	if(obj['genre']){
		delete obj['genre'];
	}

	for(var i = 0; i < obj.tag.length; i++){
		if(obj.tag[i] === addNewTag){
			return 'Tag already exist!';
		} 
	}

	obj['tag'].push(addNewTag);
	
	return 'New Tag Added!';
}

function removeTag(obj, removeTag){
	if(!obj['tag']){
		obj['tag'] = [];
		return 'This book did not have a tag key. New tag key added!'
	}

	for(var i = 0; i < obj.tag.length; i++){
		if(obj.tag[i] === removeTag){
			obj.tag.splice(i, 1);
			return 'Tag Removed!';
		} 
	}	
	return 'That tag did not exist!';
}

function searchBookByTags(bookArray, searchByTag){
	var searchByTagResult = [];
	for(var i = 0; i < bookArray.length - 1; i++){
		for(var j = 0; j < bookArray[i].tag.length; j++){	
			console.log('j ', bookArray);
			if(bookArray[i].tag[j] === searchByTag){
				searchByTagResult.push(bookArray[i].title);
			} 
		}
	}	
	if(searchByTagResult.length === 0){
		return 'No books found with that tag!';
	}

	return searchByTagResult;
}

function removeBookByID(arrayOfBooks, id){
	for(var i = 0; i < arrayOfBooks.length; i++){
		if(arrayOfBooks[i].id === id){
			arrayOfBooks.splice(i, 1); 
			return 'Book removed!';
		}
	}
	return 'This book was already deleted or did not exist in the book list.';
}




