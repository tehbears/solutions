//================================warm ups
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

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

function filter(coll, test){
  var acc = [];
  each(coll, function(element, i){
    if(test(element, i)){
      acc.push(element);
    }
  });
  return acc;
}

//1
// Using the above version of map, write a function (you can call it anything, e.g. g) that takes an array as a parameter and squares all the numbers with even indices and cubes all of the numbers with odd indices.

function g(array) {
 return map(array, function(num, i){
  if(i % 2 === 0){
    return num * num;
  } else {
    return num * num * num;
  }
 });
}
console.log('g ', g([2, 7, 10, 5, 3, 22])); // => [4, 343, 100, 125, 9, 10648]

// Using the version of each shown above, write a function called tupleize that accepts an object as a parameter and converts it to an array of arrays, where each array element is a tuple of key/value pairs, e.g.

function tupleize(object) {
  var newArray = [];
  each(object, function(value, key){
    newArray.push([key, value]);
  });
  return newArray;
}

var tuple = tupleize({a: 1, b: "hello", c: true, d: 34});
console.log('tuple: ', tuple);
// => [["a", 1], ["b", "hello"], ["c", true], ["d", 34]]

// Write a function called detupleize that converts the output of the tupleize function back into an object.

function detubleize (array){
  var newObj = {};
  each(array, function(value){
    newObj[value[0]] = value[1];
  });
  return newObj;
}

console.log('detubleize: ', detubleize(tuple));
//===============================================Make To Do List

// In your starter code, there is a global variable called todos that is currently set to an empty array. Decide how to model a single todo item, and then add a few todos into the todos array (you may want to consider writing a factory function).

// Your todo objects should have at least the following properties:

// id: a unique id for the todo (use the generateID function to create a unique id)
// completed: indicates whether or not the todo is completed
// task: a string describing what is to be done


// Make a todo list

// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.
var generateID = makeCounter();

// EXERCISE 1
var todos = [

];

function createToDos (task, completed, priority){
  todos.push({
    id: counter(),
    task: task,
    completed: completed,
    priority: priority
  });
}

var counter = makeCounter()
var task1 = createToDos('walk the dog', false, 3);
var task2 = createToDos('do the dishes', false, 4);
var task3 = createToDos('water the graden', false, 1);

console.log('todos: ', todos);

function makeList(initial) {
  var todos = initial;
  var archiveArray = [];
  function displayTodo(todo, i, priority) {
    // EXERCISE 2
    if(todo.priority === priority){
      return 'ID: ' + todo.id + ' Task: ' + todo.task + ' Completed: ' + todo.completed + ' ' + 'index: ' + i + ' Priority: ' + todo.priority + '\n ';
    }
    if(priority === undefined){
      return 'ID: ' + todo.id + ' Task: ' + todo.task + ' Completed: ' + todo.completed + ' ' + 'index: ' + i + ' Priority: ' + todo.priority + '\n ';
    }
  }

  return {
    display: function(priority) {
      // EXERCISE 3
    return map(todos, function(todo, i){
      return displayTodo(todo, i, priority);
    })
    },
    makeToDo: function(task, completed, priority){
      todos.push({
        id: counter(),
        task: task,
        completed: completed,
        priority: priority
      });
    },
    complete: function(id){
      each(todos, function(todo){
        if(todo.id === id){
          if(todo.completed === false){
          todo.completed = true;
          } else {
          todo.completed = false;
          }
        }
      })
    },
    archive: function(){
      each(todos, function(element, i){
        if(element.completed === true){
          archiveArray.push(element);
          todos.splice(i, 1);
        }
      });
      return archiveArray;
    },
    unArchive: function(id){
      each(archiveArray, function(element, i){
        if(element.id === id){
          element.completed = false;
          todos.push(element);
          archiveArray.splice(i, 1);
        }
      });
      return archiveArray;
    },
    clearArchive: function(){
      archiveArray = [];
      return archiveArray;
    },
    move: function(to, from){
      var temp = todos[to];
      todos[to] = todos[from];
      todos[from] = temp;
      return todos;
    },
    priority: function(){
      for(var i = 0; i < todos.length; i++){
        for(var j = 0; j < todos.length; j++){
          if(todos[i].priority > todos[j].priority){
            var temp = todos[i];
            todos[i] = todos[j];
            todos[j] = temp;
          }
        }
      }
      return todos;
    }
  };
}

var todoList = makeList(todos);
todoList.makeToDo('make dinner', false, 5);
todoList.complete(1);
console.log('archive: ', todoList.archive());
console.log('todoList: ', todoList.display().join(' '));
todoList.complete(0);
console.log('archive: ', todoList.archive());
console.log('todoList: ', todoList.display().join(' '));
console.log('unArchive: ', todoList.unArchive(1));
console.log('todoList: ', todoList.display().join(' '));
console.log('clearArchive: ', todoList.clearArchive());
console.log('move: ', todoList.move(0,2));
console.log('priority: ', todoList.priority());
console.log('todoList Priority 1: ', todoList.display().join(' '));

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
