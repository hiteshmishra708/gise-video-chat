const express = require('express');
const cors = require('cors')

const app = express();

// enabling CORS for some specific origins only.
let corsOptions = {
  origin : ['http://localhost:3000'],
}
 
app.use(cors(corsOptions))

const directory = './dist'; // Replace this with your actual directory path

app.use(express.static(directory));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
