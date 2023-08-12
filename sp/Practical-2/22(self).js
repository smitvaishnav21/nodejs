const readline = require("readline");
let r1 = readline.createInterface(process.stdin, process.stdout);
const contacts = [];

function addContact() {
  r1.question("enter name", (name) => {
    r1.question("enter number ", (number) => {
      if (number.length !== 10) {
        console.log("enter valid number");
      } else {
        contacts.push({ name, number });
      }
      console.log(contacts);
    });
  });
}

addContact();

// contacts.forEach((contact,index)=>{
//     console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.number}`);
// });