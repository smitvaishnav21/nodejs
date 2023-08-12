var book= {
    booktitle : ' Harry Potter and the Sorcerer\'s Stone',
    author : 'J.K. Rowling',
    publish_year : 1997
};
console.log(book);

// function getInfo(){
//     for(book;book)
// }

function getInfo(){
    for(let bookProperties in book){
        console.log(bookProperties+':'+book[bookProperties]);
    }
}

getInfo(book);
















// // Define the book object using object literal syntax
// const book = {
//     book_title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publish_year: 1925
//   };
  
//   // Define the print_info function to display book information
//   function print_info() {
//     console.log('Book Title:', book.book_title);
//     console.log('Author:', book.author);
//     console.log('Publish Year:', book.publish_year);
//   }
  
//   // Call the print_info function to display the book information
//   print_info();
  