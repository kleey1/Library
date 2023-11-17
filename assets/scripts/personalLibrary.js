const booksTableBody = $("#booksTbl tbody");
booksTableBody.empty();
var BooksToAdd = JSON.parse(localStorage.getItem('addedBooks')) || [];


function populate(){

    //console.log(typeof BooksToAdd);
    //console.log(BooksToAdd);

    $.each(BooksToAdd, function(index, book){

        console.log(`Index = ${index}. Book = ${book}`);

        const newRowHtml = `<tr data-book-id="${book.id}">
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <button id="removeBtn" data-book-id="${book.id}">Remove</button>
            </td>
        </tr>`;

        booksTableBody.append(newRowHtml);

    });
}

populate();




$(booksTableBody).on('click', "#removeBtn", function(){
    const bookId = $(this).data('book-id');
    const book = BooksToAdd.find(n => n.id === bookId);
    // editOrder(order);

    localStorage.setItem('bookToBeRemovedId', bookId);


    $("#remove-title").text(book.title);

    $("#removeModal").show();
})

$("#closeEditModalSpn").click(function(){
    $("#editModal").hide();
});

$("#cancelRemoveBtn").click(function(){
    $("#removeModal").hide();
});

$("#confirmBtn").click(function(){

    //1. Get order id of the item to be removed
    var bookId = localStorage.getItem('bookToBeRemovedId');

    console.log('bookId from localstorage = ', bookId);

    //2. Get from localstorage 
    const index = BooksToAdd.findIndex(book => book.id == bookId);

    console.log('all books = ', BooksToAdd);
    console.log('index == ', index);


    if(index !== -1){
        BooksToAdd.splice(index,1);

        localStorage.setItem('addedBooks', JSON.stringify(BooksToAdd))
    } else {
        console.log('Book not found')
    }
 
    $("#removeModal").hide();
    location.reload();

})