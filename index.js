const express=require('express');
const app=express();
import { MongoClient } from 'mongodb';

const connection_url=`mongodb+srv://<username>:<password>@cluster0.a42g8hw.mongodb.net/?retryWrites=true&w=majority`

app.get('/find-by-name',(req,res)=>{
    var name=req.query.name;
    const agg = [
    {
        '$search': {
        'text': {
            'query': 'Ronaldo', 
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

    MongoClient.connect(
    '',
    { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('').collection('');
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    await client.close();
});

const port=process.env.PORT || 8000;

app.listen(port);