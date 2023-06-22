const express = require("express");
const router = express.Router();
//import contactcontrollers
const {
  getContacts,
  creatContacts,
  updateContacts,
  deleteContacts,
  getContact,
} = require("../controllers/contactControllers");
//get
router.route("/").get(getContacts).post(creatContacts);
router.route("/:id").put(updateContacts).delete(deleteContacts).get(getContact);
//post
//router.route("/").post(creatContacts);
//update
//Delete
// router.route("/:id").post(deleteContacts);
//find by id contact
//router.route("/:id").get(getContact);

module.exports = router;
