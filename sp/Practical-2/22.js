const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store contact details
const contacts = [];

// Function to add a new contact
function addContact() {
  rl.question('Enter name: ', (name) => {
    rl.question('Enter phone number (Length should be 10): ', (phoneNumber) => {
      if (phoneNumber.length !== 10) {
        console.log('Phone number must be 10 digits long. Try again.');
        addContact();
        return;
      }

      contacts.push({ name, phoneNumber });
      console.log('Contact added successfully!\n');
      showContacts();
    });
  });
}

// Function to display all contacts
function showContacts() {
  if (contacts.length === 0) {
    console.log('No contacts found.\n');
  } else {
    console.log('Contacts List:');
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
    });
    console.log();
  }
  showMenu();
}

// Function to display the menu
function showMenu() {
  console.log('Menu:');
  console.log('1. Add a new contact');
  console.log('2. Display contacts');
  console.log('3. Exit');

  rl.question('Enter your choice (1/2/3): ', (choice) => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        showContacts();
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Try again.\n');
        showMenu();
        break;
    }
  });
}

// Start the application
console.log('Welcome to the Contact Manager!');
showMenu();
