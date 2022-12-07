const getTheTitles = function(books) {
  let bookTitles = []; 
  for(let i = 0; i<books.length;i++){
    bookTitles[i] = books[i].title;
  }
  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
