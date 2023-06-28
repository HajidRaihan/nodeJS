const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNotesByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNotesByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
