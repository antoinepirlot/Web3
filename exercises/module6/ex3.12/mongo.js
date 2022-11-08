const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log(
      "Please provide the password as an argument: node mongo.js <password> <name> <number>");
  process.exit(1);
}

const password = process.argv[2];
const contact = {
  name: String,
  number: String
};

const url = `mongodb+srv://antoine:${password}@module6.pi7rnp3.mongodb.net/?retryWrites=true&w=majority`;

const contactSchema = new mongoose.Schema(contact);

const Contact = mongoose.model("Contact", contactSchema);

if (process.argv.length < 4) {
    Contact.find({}).then((contacts) => {
      console.log("Phonebook:");
      contacts.forEach(contact => {
        console.log(`${contact.name} ${contact.number}`);
      });
      mongoose.connection.close();
    }).catch((err) => {
      console.error(err);
    });
  process.exit(0);
}

mongoose.connect(url).then(() => {
  console.log("connected");
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4]
  });
  return contact.save();
}).then(() => {
  console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
  return mongoose.connection.close()
}).catch((err) => {
  console.error(err);
});