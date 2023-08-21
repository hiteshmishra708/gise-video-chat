const express = require('express');
const app = express();

const directory = './dist'; // Replace this with your actual directory path

app.use(express.static(directory));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
