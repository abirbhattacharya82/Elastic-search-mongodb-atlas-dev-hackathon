const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const connection_url = `mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.a42g8hw.mongodb.net/?retryWrites=true&w=majority`
console.log(connection_url);

app.get('/find-by-name', (req, res) => {
    var name = req.query.name;
    const agg = [
        {
            '$search': {
                'text': {
                    'query': name,
                    'path': 'short_name'
                }
            }
        }, {
            '$sort': {
                'overall': -1
            }
        }, {
            '$limit': 5
        }
    ];

    MongoClient.connect(connection_url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('hackathon-dbs');
        dbo.collection('fifa_20_players').aggregate(agg).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });

});

const port = process.env.PORT || 8000;

app.listen(port);