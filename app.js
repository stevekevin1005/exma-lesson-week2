var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('asset'));



app.get('/', function(req, res) {  
  res.render('about', {  
    title: 'About me in jade',  
    hobby: ['唱歌', '彈吉他', '聊天'],
    person: {
      name: 'wanting',
      sex: 'female'
    },
    school: '彰師大',
    dream: '前端工程師',
    wantlearn:'不知道接下來是否有Angular,希望講師講新的東西時，能簡單解釋一下每行程式碼的作用，譬如這次講師有講述一下用法跟方式，所以很清楚明白何時該使用',
   
  });   
}); 

app.get('/ejs', function(req, res) {
    res.render('about.ejs', {  
    title: 'About me in ejs',  
    hobby: ['唱歌', '彈吉他', '聊天'],
    person: {
      name: 'wanting',
      sex: 'female'
    },
    school: '彰師大',
    dream: '前端工程師',
    wantlearn:'不知道接下來是否有Angular,希望講師講新的東西時，能簡單解釋一下每行程式碼的作用，譬如這次講師有講述一下用法跟方式，所以很清楚明白何時該使用',
   
  });   
}); 


//靜態檔案方式
app.get('/html', function(req, res) {
   var options = {
     root: './views'
   }
   res.sendFile('about.html', options);
 });

    
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
