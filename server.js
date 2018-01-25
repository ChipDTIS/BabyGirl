
//const config = require('./config');
//var express = require('express')
//var path = require('path');
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';
import mongoose from 'mongoose';
const compiler = webpack(config);
const app = express();
import ToDo from './mongooes/todo';

var Schema = mongoose.Schema
var SinhVien = new Schema({ 
    name    : String
  , year    : String 
});

var MyUserModel = mongoose.model('SinhVien', SinhVien); //create and access the model User


app.post('/qoutes', (red,res)=>{
    var todoItem = new ToDo({
        itemId: 1,
        item: red.body.item,
        completed: false
    });
    todoItem.save((err,result)=>{
        if (err) {
            console.log("---TodoItem save failed "+ err)
        }
        console.log("+++TodoItem saved successfully "+ todoItem.item);
        res.redirect('/');
    });
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.listen(3000, function (error) {
    if(error) {
        console.log(error);
    }
    var connection = mongoose.connect('mongodb://localhost:27017/Baby');
    console.log('heeloo');
});
// const server = restify.createServer({
//     title: 'Apollo Server'
//   });
//   var myGraphQLSchema = new GraphQLSchema({
//     query: GraphQLRoot
//   });
//   const graphQLOptions = { schema: myGraphQLSchema };
//    ø

//   server.use(restify.plugins.bodyParser());
//   server.use(restify.plugins.queryParser());
   
//   server.post('/graphql', graphqlRestify(graphQLOptions));
//   server.get('/graphql', graphqlRestify(graphQLOptions));
   
//   server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));
   
//   server.listen(config.PORT, () => console.log(`Listening on ${config.PORT}`));

// var Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId;

// var connection = mongoose.connect('mongodb://localhost:27017/Baby2');
// var Schema = mongoose.Schema
// var SinhVien = new Schema({
//     name    : String
//   , year      : String
// });

// var MyUserModel = mongoose.model('SinhVien', SinhVien); //create and access the model User

// var u = new MyUserModel();
// u.name = 'authorname';
// u.year = '19900';
// u.save(function(err){
//     if (err) console.log(err);
//     MyUserModel.find({}, function (err,docs) {
//       console.log(docs);
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   var dbo = db.db("Baby");
//   dbo.collection("SinhVien").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
// mongoose.connect('mongodb://localhost:27017/Baby');
// var db = mongoose.connection;
// db.on('error',
// console.error.bind(console,'connection error:'));
// db.once('open', function (params) {
//     console.log('we are connected');
// })

// mongoose.connect('mongodb://localhost:27017/Baby').then(
//   () => { 
//     console.log("READY");
//     SinhVien.findOne({}, function (err, docs) {
//       // docs.forEach
//       console.log(docs);
//     });
    
//   },
//   err => { console.log("failsfsdfds"); }
// );
// var SinhVien =  mongoose.model('SinhVien', new Schema({ name: String, year: Number }));

// function respond(red, res, next){
//     res.send('hello ' + red.params.name);
//     next();
// }


// const server = restify.createServer({
//   name: config.name,
//   version: config.version
// });
// server.pre(restify.plugins.pre.userAgentConnection());

//   errs.makeConstructor('HeheError');
// server.use(function(req, res, next) {
//     return next(new InternalServerError('boom'));
// });
// server.on('InternalServer', function(req, res, err, callback) {
//     // this will get fired first, as it's the most relevant listener
//     return callback();
//   });
  
//   server.on('restifyError', function(req, res, err, callback) {
//     // this is fired second.
//     return callback();
//   });
  
// server.get('/hello/:name', function(req, res, next) {
//     res.send('hello ' + req.params.name);
//     next();
//   }
// );
// server.head('/hello/:name', function(req, res, next) {
//     res.send('hello ' + req.params.name);
//     next();
//   }
// );
// server.get('/', function(red,res, next){
//     res.send('home');
//     return next();
// });
// server.post('/foo',
//   function(req, res, next) {
//     req.someData = 'foo';
//     return next();
//   },
//   function(req, res, next) {
//     res.send(req.someData);
//     return next();
  
//   }
// );
// server.listen(config.port, function(){
//     console.log(`${server.name} listening at ${server.url}`);
// });


// Will just hang until mongoose successfully connects


// var sinhvienSchema = new mongoose.Schema({
//     name: String,
//     year: Number
// });
// var SinhVien = mongoose.model('SinhVien',sinhvienSchema);

// var query = SinhVien.findOne({'name': 'Toan'});
// query.select('name year');
// query.exec(function (err, person) {
//   console.log(person);
// });


