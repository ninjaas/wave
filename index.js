var express = require('express')
  , cons = require('consolidate')
  , app = express();

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));

var users = [];
users.push({ username: 'tobi', position: "CEO", followers : "127", picture : "latest1.png" });
users.push({ username: 'loki', position: "CFO", followers : "115", picture : "latest2.png"  });
users.push({ username: 'jane', position: "CTO", followers : "153", picture : "latest3.png"  });

var waves = [];
waves.push({
  title : "Startup to Successful Business",
  user : "tobi",
  ideas : ["This is my creation","This is amazing","Simple way to share ideas on a topic", "Brain storming on ideas"]
});
waves.push({
  title : "Education in India",
  user : "loki",
  ideas : ["Political influence on india","First things we need to do","How can we bring a cahnge"]
});
waves.push({
  title : "Public Relations",
  user : "tobi",
  ideas : ["Word of mount","Attend as many conferences as you can", "Brain storming on ideas"]
});

app.get('/', function(req, res){
  res.render('index.html', {
    title: "Wave",
    body: "Hello world"
  });
});

app.get('/users', function(req, res){
  res.render('users.html', {
    title: 'Users',
    users: users
  });
});

app.get('/waves',function(req, res){
  res.render('wave.html',{
    title: 'Waves',
    waves: waves
  })
})

app.listen(3000);
console.log('Express server listening on port 3000');