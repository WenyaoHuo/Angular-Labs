var express = require('express'); //Used for routing 
var app = express();
var http = require('http').Server(app); //Used to provide http functionality 
var cors = require('cors');
var path = require('path');
app.use(cors());

app.use(express.json()); // Parse JSON request bodies

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on port: " + port);
});

app.post('/api/auth', require('./routes/login'));

//app.use(express.static(path.resolve(__dirname,'./src')));

// //Route the form
// app.get('/login', function(req, res){
//     res.sendFile(__dirname + '/src/app/login/login.html')
// });
// //Route the account page
// app.get('/account', function(req, res){
//     res.sendFile(__dirname + '/src/app/account/account.html')
// });

// class User {
//     constructor(username, birthdate, age, email, password, valid) {
//         this.username = username;
//         this.birthdate = birthdate;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//         this.valid = valid;
//     }
// }

// const users = [
//     new User('user1', '2000-01-01', 23, 'user1@abc.com', '111', false),
//     new User('user2', '1995-02-15', 28, 'user2@abc.com', '222', false),
//     new User('user3', '1998-07-30', 25, 'user3@abc.com', '333', false),
// ];

// app.post('/api/auth', function(req,res){
//     const { email, password } = req.body;
//     const validUser = users.find(user => user.email === req.body.email && user.password === req.body.password);
//     if (validUser) {
//         validUser.valid = true;
//         // const { password, ...userData } = validUser;
//         // res.json(userData);
//     }else {
//         res.status(401).json({ message: 'Invalid email or password' });
//     }
// });

// app.listen(3000, function(){
//     console.log("Server is running on http://localhost:3000");
// });