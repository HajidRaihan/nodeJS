const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  getBookByNameHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  // {
  //   method: "GET",
  //   path: "/books/nama/{name?}",
  //   handler: getBookByNameHandler,
  // },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
