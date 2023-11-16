


class Book{
    constructor(id, image, title, author, category){

        this.id = id;
        this.image = image;
        this.title = title;
        this.author = author;
        this.category = category;
    }

}

const books = [
    new Book(1, "/assets/images/book1.jpg",  "Harry Potter and the Goblet of Fire", "J.K.Rowling", "Fantasy"),
    new Book(2, "/assets/images/book2.jpg", "The Hunchback of Notre Dame", "Viktor Hugo", "Historical"),
    new Book(3, "/assets/images/book3.jpg", "The Outsider", "Stephen King", "Horror"),
    new Book(4, "/assets/images/book4.jpg", "A Little Life", "Hanya Yanagihara", "Tragedy"),
    new Book(5, "/assets/images/book5.jpg", "A Thousands Splendid Suns", "Khaled Hosseini", "Historical"),
    new Book(6, "/assets/images/book6.jpg", "When Breath Becomes Air", "Paul Kalanithi", "Biography")
];


const booksDiv = $("#booksdiv");

function populateBooks(){
    $.each(books, function(index, book){

        console.log(`Index = ${index}. Book = ${book}`);
        
        const newDivHtml = `<div class="parent">
        <img id="image" class="child" src=${book.image}>
        <div id="description" class="child">
        <p id="title">${book.title}</p>
        <p id="author">${book.author}</p>
        <p id="category">${book.category}</p>
        <button id="AddBtn" data-book-id="${book.id}">Add</button>
        </div>
    </div>`;

        booksDiv.append(newDivHtml);
    });
}

populateBooks();


$("#booksdiv").on('click', "#AddBtn", function(){
    const bookId = $(this).data('book-id');
    const book = books.find(n => n.id === bookId);
    // editOrder(order);

    console.log(`Selected book = ${book.title}`);

    $("#add-book").text(book.title);

    $("#addModal").show();
})

$("#cancelAddBtn").click(function(){
    $("#addModal").hide();
});



