// List --> Ordered Sequence of Data
// element of list can be of any data type
// the number of elements in the list is stored in listSize variable
const path =
  "H:/Udemy React Course/Data Structure & Algorthims/Data-Structure/List/films.txt"; // Fixed path with forward slashes
/* const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); */
class List {
  constructor() {
    this.listSize = 0;
    this.Pos = 0;
    this.dataStore = [];
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    this.dataStore = [];
    this.listSize = this.Pos = 0;
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  front() {
    this.Pos = 0;
  }

  end() {
    this.Pos = this.listSize - 1;
  }

  prev() {
    if (this.Pos > 0) {
      --this.Pos;
    }
  }

  next() {
    if (this.Pos < this.listSize - 1) {
      ++this.Pos;
    }
  }

  currPos() {
    return this.Pos;
  }

  moveTo(position) {
    this.Pos = position;
  }

  getElement() {
    return this.dataStore[this.Pos];
  }
  addIfLarger(element) {
    if (this.listSize === 0) {
      this.append(element);
      return true;
    }

    // Check if element is larger than all existing elements
    let isLarger = true;
    for (let i = 0; i < this.dataStore.length; i++) {
      if (element <= this.dataStore[i]) {
        isLarger = false;
        break;
      }
    }

    if (isLarger) {
      this.append(element);
      return true;
    }

    return false;
  }
  addIfSmaller(element) {
    if (this.listSize === 0) {
      this.append(element);
      return true;
    }

    // Check if element is larger than all existing elements
    let isSmaller = true;
    for (let i = 0; i < this.dataStore.length; i++) {
      if (element >= this.dataStore[i]) {
        isSmaller = false;
        break;
      }
    }

    if (isSmaller) {
      this.append(element);
      return true;
    }

    return false;
  }
}

function createArr() {
  var arr = fs.readFileSync(path, "utf8").split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}
function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    const element = list.getElement();
    if (element instanceof Customer) {
      console.log(`${element.name}`);
    } else {
      console.log(element);
    }
    // Break if we've reached the end (next() might not advance position)
    if (list.currPos() >= list.length() - 1) break;
  }
}

/* async function main() {
  var movies = createArr();
  var movieList = new List();
  var customers = new List();

  // Load movies
  for (let movie of movies) {
    movieList.append(movie);
  }

  console.log("Available Movies:\n");
  displayList(movieList);

  // Get customer info
  const name = await question("\nEnter your name: ");
  const movie = await question("What movie would you like: ");

  // Check if movie exists
  if (!movieList.contains(movie)) {
    console.log("Sorry, we don't have that movie available.");
    return;
  }

  // Add customer
  customers.append(new Customer(name, movie));
  console.log(`\nThank you ${name}, you've rented ${movie}`);

  // Remove movie from available list
  movieList.remove(movie);

  console.log("\nUpdated Movie List:");
  displayList(movieList);

  readline.close();
}

// Helper function for async/await with readline
function question(prompt) {
  return new Promise((resolve) => {
    readline.question(prompt, resolve);
  });
}

main().catch(console.error); */

const myList = new List();
console.log(myList.addIfSmaller(5)); // true - inserted (list was empty)
console.log(myList.addIfSmaller(10)); // false - not larger than 10
console.log(myList.addIfSmaller("a")); // true - larger than 10
console.log(myList.toString());

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  toString() {
    return `Name is:${this.name} and Gender is:${this.gender} `;
  }
}

const peopleList = new List();

peopleList.append(new Person("Ahmed", "Male"));
peopleList.append(new Person("Khalid", "Male"));
peopleList.append(new Person("Omar", "Male"));
peopleList.append(new Person("Assam", "Female"));
peopleList.append(new Person("Ola", "Female"));
peopleList.append(new Person("Rama", "Female"));
peopleList.append(new Person("Zoze", "Male"));
peopleList.append(new Person("Abdo", "Male"));
peopleList.append(new Person("Kimo", "Male"));
peopleList.append(new Person("Reham", "Female"));

function displayByGender(list, gender) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    const person = list.getElement();
    if (person.gender.toLowerCase() === gender.toLowerCase()) {
      console.log(person.toString());
    }
    if (list.currPos() >= list.length() - 1) break;
  }
}

console.log("List of People:");
displayByGender(peopleList, "Male");
