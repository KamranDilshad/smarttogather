const asyncHandler = require("express-async-handler");
//import contact model
const Contact = require("../models/contactModel");
//@des Get all Contacts
//@routes Get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  //use to find contact in contact model
  const contacts = await Contact.find();
  res.status(200).json(contacts);
  //res.status(200).json({ message: "Get contacts" });
});

//@des create Contacts
//@routes post /api/contacts
//@access public
const creatContacts = asyncHandler(async (req, res) => {
  console.log("the body of request", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  //creat contacts through conact model
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);

  //res.status(201).json({ message: "Creat contacts" });
});

//@des Updates Contacts
//@routes put /api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});
//@des Delete Contacts
//@routes delete /api/contacts/:id
//@access public
// const deleteContacts = asyncHandler(async (req, res) => {
//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("contact not found");
//   }
//   await Contact.remove();
//   res.status(200).json(contact);
//   //res.status(200).json({ message: `Delete contacts ${req.params.id} ` });
// });
const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  console.log(req.params.id);
  // console.log(req.body.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

//@des findBy ID Contacts
//@routes Get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
    
  }
  res.status(200).json(contact);
  //res.status(200).json({ message: `Get contacts ${req.params.id}` });
});
module.exports = {
  getContacts,
  creatContacts,
  updateContacts,
  deleteContacts,
  getContact,
};
