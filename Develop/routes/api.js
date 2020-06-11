// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let noteData = require("../db/db");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/notes", function(req, res) {
      noteData.getNotes()
      .then (notes => res.json(notes));
  });


  // API POST Requests

  app.post("/notes", function(req, res) {

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.delete("/notes:id", function(req, res) {
  });
};
