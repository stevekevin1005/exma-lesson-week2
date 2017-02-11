const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = 3000;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("assets"));

app.get('/', function(req, res) {
  res.render('johnny.ejs', {
    title: 'Ejs',
    fruits: ['Mango', 'Banana'],
    person: {
      name: 'Johnny',
      hobby: 'Play Computer Games'
    },
    html: "<h2>This is html code</h2>"
  });
});

app.get('/jade', function(req, res) {
  res.render('johnny.jade', {
    title: 'Jdae',
    fruits: ['Mango', 'Banana'],
    person: {
      name: 'Johnny',
      hobby: 'Play Computer Games'
    },
    html: "<h2>This is html code</h2>"
  });
});

app.get('/html', function(req, res) {
  const options = {
    root: './views'
  }
  res.sendFile('johnny.html', options);
});

http.createServer(app)
.listen(port, () => {
  console.log("app is listening on " + port);
});