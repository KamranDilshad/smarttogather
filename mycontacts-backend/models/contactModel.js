const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add the Contact Name"] },
    email: { type: String, required: [true, "Please add the Email"] },
    phone: { type: String, required: [true, "Please add the Phone Noumber"] },
  },
  { timestamp:true }
);
module.exports = mongoose.model("contact",contactSchema);
