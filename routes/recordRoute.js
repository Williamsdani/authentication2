// const {
//     createRecord,
//     getRecords,
//     getRecord,
//     updateRecord,
//     deleteRecord
// } = require('../controllers/recordController')
// const {userAuth} = require('../middlewares/authMiddleware')

// const express = require('express');
// const routere = express.Router();

// routere.post('/records', userAuth, createRecord);
// routere.get('/records', userAuth, getRecords);
// routere.get('/records/:id', userAuth, getRecord);
// routere.put('/records/:id', userAuth, updateRecord);
// routere.delete('/records/:id', userAuth, deleteRecord);


// module.exports = routere;
const express = require("express");
const {
  createRecord,
  getRecords,
  getRecord,
  getAllLoggedInRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");
const { userAuth, isAdmin } = require("../middlewares/authmiddleware");
const router = express.Router();

router.post("/records", userAuth, createRecord);
router.get("/records", userAuth, getRecords);
router.get("/loggedin-records", getAllLoggedInRecords);

router
  .route("/records/:id", userAuth)
  .get(getRecord)
  .put(updateRecord)
  .delete(deleteRecord);

module.exports = router;