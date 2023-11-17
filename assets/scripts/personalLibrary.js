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
            <td>${book.image}</td>
            <td>
                <button id="removeBtn" data-book-id="${book.id}">Remove</button>
            </td>
        </tr>`;

        booksTableBody.append(newRowHtml);

    });
}

populate();

$("#removeBtn").click(function(){
    let BooksToAdd = JSON.parse(localStorage.getItem('addedBooks')) || [];
   
    const bookId = $(this).data('book-id');
    const book = BooksToAdd.find(n => n.id === bookId);
    console.log('Found Book:', book);

    if (book && book.title) {
    $("#remove-book").text(`${book.title}`);
    $("#removeModal").show();
    }else {
        console.log(`Book not found for ID: ${bookId}`);
    }

})

$("#closeEditModalSpn").click(function(){
    $("#editModal").hide();
});

$("#cancelRemoveBtn").click(function(){
    $("#removeModal").hide();
});

$("#ConfirmBtn").click(function(){
    var theRowId = $('#bookTbl tr').attr('data-book-id');
    $('#booksTbl tr#'+theRowId).remove();
    $("#removeModal").hide();
});



 // Check if the clicked element is a "Remove" button
 /*if (target.classList.contains("removeBtn")) {
    // Add functionality to remove the book
    // For example, you can remove the entire row
    target.closest('tr').remove();
}*/

/*
// Function to add a new row to the table
function addBookRow() {
    var table = document.getElementById("ordersTbl").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    var bookName = prompt("Enter the book name:");
    var author = prompt("Enter the author:");
    var description = prompt("Enter the description:");

    cell1.innerHTML = bookName || "New Book";
    cell2.innerHTML = author || "New Author";
    cell3.innerHTML = description || "New Description";

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("editBtn");
    cell4.appendChild(editBtn);

    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("removeBtn");
    cell4.appendChild(removeBtn);
}

// Event listener for the "Add Book" button
document.getElementById("addBtn").addEventListener("click", addBookRow);

// Event delegation for dynamically added buttons
document.getElementById("ordersTbl").addEventListener("click", function (event) {
    var target = event.target;

    // Check if the clicked element is an "Edit" button
   if (target.classList.contains("editBtn")) {
        // Get the index of the clicked button's cell
        var columnIndex = target.parentElement.cellIndex;

        // Ask the user which information to change
        var changeType = prompt("Enter 'book' to change the book name, 'author' to change the author, or 'description' to change the description:");

        if (changeType !== null) {
            var newContent = prompt("Enter the new content:");

            if (newContent !== null) {
                switch (changeType.toLowerCase()) {
                    case 'book':
                        target.closest('tr').cells[0].innerHTML = newContent;
                        break;
                    case 'author':
                        target.closest('tr').cells[1].innerHTML = newContent;
                        break;
                    case 'description':
                        target.closest('tr').cells[2].innerHTML = newContent;
                        break;
                    default:
                        alert("Invalid input. Please enter 'book', 'author', or 'description'.");
                }
            }
        }
    }

    // Check if the clicked element is a "Remove" button
    if (target.classList.contains("removeBtn")) {
        // Add functionality to remove the book
        // For example, you can remove the entire row
        target.closest('tr').remove();
    }
    */