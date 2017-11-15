const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// default options
app.use(fileUpload());

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const sampleFile = req.files[0];

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('../../csvInputFile/input.xlsx', (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
    return res.status(200).send('File uploaded!');
  });
  return res.status(200).send('File uploaded!');
});
