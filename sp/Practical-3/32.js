const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  const num1 = parseInt(query.num1);
  const num2 = parseInt(query.num2);

  // Check if the parsed values are valid integers
  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.end('Invalid numbers provided.');
    return;
  }

  // Find the smallest number
  const smallestNumber = Math.min(num1, num2);

  // Send the result to the client
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end(`The smallest number between ${num1} and ${num2} is ${smallestNumber}.`);
});

const PORT = 8080;  // You can choose any available port you prefer
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
