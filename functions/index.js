const functions = require('firebase-functions');

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().collection("movies");

const app = require("express")();

api.get("/movies", function(req, res){

    db.get()
    .then(function(docs){
        let movies = [];

        docs.forEach(function(doc){
            movies.push({id: doc.id, name: doc.data().name, acceptableNames: doc.data().acceptableNames, emoji: doc.data().emoji, type: doc.data().type });
        })
        res.json(movies);
    })
});
api.exports("/movies", function(req, res){
    const newMovie ={
        name: req.body.name,
        acceptableNames: req.body.acceptableNames,
        emoji: req.body.emoji,
        type: req.body.type

    }
db.add(newMovie)
.then(function(){
    res.status(200);
})
});

exports.api = functions.https.onRequest(app);
