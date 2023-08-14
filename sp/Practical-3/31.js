// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Set the response header
//   res.setHeader('Content-Type', 'text/html');
  
//   // Check the requested URL
//   if (req.url === '/') {
//     // Display "Home Page" for the root URL
//     // res.statusCode = 200;
//     res.end('<h1>Home Page</h1>');
//   } else {
//     // Display a 404 error message for any other URL
//     // res.statusCode = 404;
//     // res.end('<h1>404 - Not Found</h1>');


//   }
// });

// const PORT = 3000;  // You can choose any available port you prefer
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });





const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  
  // Check the requested URL
  if (req.url === '/') {
    // Display "Home Page"
    res.statusCode = 200;
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/exam') {
    // Display a table for "/exam"
    res.statusCode = 200;
    res.end(`
    <!DOCTYPE html>
    <html>
    <style>
    table, th, td {
      border:1px solid black;
    }
    </style>
    <body>
    
    
    
    <table style="width:50%">
      <tr>
        <th>Date</th>
        <th>Code</th>
        <th>Subject</th>
      </tr>
      <tr>
        <td>28/8/23</td>
        <td>2CEIT501</td>
        <td>Computer Architecture and Organization</td>
      </tr>
      <tr>
        <td>30/8/23</td>
        <td>2CEIT502</td>
        <td>Computer Network</td>
      </tr>
      <tr>
        <td>1/9/23</td>
        <td>2CEIT503</td>
        <td>Software Packages</td>
      </tr>
      
    </table>
    
    </body>
    </html>
    
    
    `);
  } else if (req.url === '/exam/semester_end') {
    // Redirect to timetable of "Regular exam"
    res.statusCode = 302;
    res.setHeader('Location', '/regular_exam_timetable');
    res.end();
  } else if (req.url === '/regular_exam_timetable') {
    // Display timetable of "Regular exam"
    res.statusCode = 200;
    res.end(`
      <h1>Regular Exam Timetable</h1>
      <table>
        <tr>
          <th>Subject</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>History</td>
          <td>September 10</td>
        </tr>
        <tr>
          <td>English</td>
          <td>September 15</td>
        </tr>
      </table>
    `);
  } else {
    // Display a 404 error message for any other URL
    res.statusCode = 404;
    res.end('<h1>404 - Not Found</h1>');
  }
});

const PORT = 3000;  // You can choose any available port you prefer
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
