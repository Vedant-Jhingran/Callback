let books = [
    {
        title: "Jumanji",
        author: "Om",
        year: "2020"
    },
    {
        title: "Uumanji 2",
        author: "Jai",
        year: "2021"
    },
    {
        title: "Tumanji 3",
        author: "Jagdish",
        year: "2022"
    },
    {
        title: "Lumanji 4",
        author: "Hari",
        year: "2023"
    }
];

let books2 = [];

function titles(arr, callback) {
    books2 = arr.map((book) => book.title);
    callback(books2);
}

function alphabetically(arr) {
    arr.sort();
    console.log(arr);
}

titles(books, alphabetically);