const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
const greetingMessage: string = "Hello, ";

// Loop through the array and print a personalized message to each person
for (const name of names) {
  console.log(`${greetingMessage}${name}!`);
}
