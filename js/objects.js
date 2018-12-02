(function() {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */
    var person = {
        firstName: "Ryan",
        lastName: "Glazer",
        sayHello: function () {
            console.log("Hello "+ this.firstName + " " + this.lastName)
        }
    };
    console.log(person.firstName);
    console.log(person.lastName);
    person.sayHello();
    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */

    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
    if (shopper.amount >= 200) {
        var discount = shopper.amount * .12;
        console.log("Hello " + shopper.name + " your total before discount is " + shopper.amount + " your discount is " + discount + " your total amount is "+ (shopper.amount-discount))
    }
    else {
        console.log("Hello " + shopper.name + " your total of " + shopper.amount + " does not qualify for a discount.")
    }
});




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "Breakfast of Champions", author: {firstName: "Kurt", lastName: "Vonnegut"}},
        {title: "Ghosts/Aliens", author: {firstName: "Robert", lastName: "Hamburger"}},
        {title: "Animal Farm", author: {firstName: "George", lastName: "Orwell"}},
        {title: "House of Leaves", author:{firstName: "Mark", lastName :"Danielwski"}},
        {title: "Penpal", author:{firstName: "Dathan", lastName: "Auerbach"}}
    ];
    console.log(books[0].title);
    // var k = 1;

    books.forEach(function (book) {
        // Numbering books, the hard way
        var testSearch = book.title;
        var testIndex = books.findIndex(books => books.title==testSearch)+1;
        console.log("Book #" + testIndex);
        // Numbering books, the easy way
        // console.log("Book #" + k);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
        //k++
    });
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var newBooks = [];
    function createBook (){
        var book = {title: 'test', author: {firstName: 'test', lastName: "test"}};
        book.title = prompt("Please enter book title");
        book.author.firstName = prompt ("Please enter author first name");
        book.author.lastName = prompt ("Please enter author last name");
        newBooks.push(book);
    }
    for (var i = 0; i<2; i++){
        createBook();
    }
    console.log(newBooks);
    console.log(newBooks[0].title);
    var search = '';
    var index = '';
    function bookSearch (){
          search = prompt("Enter title of book to search for");
          index = newBooks.findIndex(newBooks => newBooks.title==search);
    }
    bookSearch();
    console.log(index);
    function showSearch(){
        if (index > -1) {
            console.log("The book " + newBooks[index].title + " was written by " + newBooks[index].author.firstName + " " + newBooks[index].author.lastName);
        }
        else {
            alert ("Can not find that book in list");
            bookSearch();
            showSearch();
        }
    }
    showSearch();
})();
