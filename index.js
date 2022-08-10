const express = require('express');
const path = require('path');
const port = 1000;
const app = express();
var addCatalogue = require('./api/addCatalogue.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/api', addCatalogue);



var playList = [
    {
    Title : "Dhagoon se bhandhaa",
    Album : "Raksha Bhandhan"
    },
    {
    Title : "Ranjha",
    Album : "Sheershah"
    },
    {
    Title : "Shiddat Title Track",
    Album : "Shiddat"
    }
]

app.get('/', function(req, res){

    return res.render('home', { 
        title:"Playlist",
        music_list : playList
    });
    // res.send('<h1>Cool, it is running or is it</h1>');
});

app.get('/practice', function(req, res){

    return res.render('practice', { title:"Let us play with ejs" });
    // res.send('<h1>Cool, it is running or is it</h1>');
});

app.post('/add-song', function(req,res){
//   return res.redirect('/practice');
// console.log(req.body);
//   playList.push({
//     Title : req.body.Title,
//     Album: req.body.Album
//   });
    
playList.push(req.body);
    
//   return res.redirect('/');
  return res.redirect('back');
});

app.get('/delete-music/', function(req,res){
    console.log(req.query);
    let Title = req.query.Title;

    let musicIndex = playList.findIndex(songs => songs.Title == Title);

    if(musicIndex != -1){
        playList.splice(musicIndex, 1);
    }

    return res.redirect('back');
});

app.listen(port, function(err){
    if(err){console.log('Error in running the server', err);}

    console.log('Yup! My express is running on port:', port);
});