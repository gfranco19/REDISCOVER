import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


//our globals//
import postRoutes from './routes/posts.js'

// initialize the app //
const app = express(); 

// all routes within the postsRoutes will start with posts example not localhost 5000 but localhost:5000/posts // 


// sets up body parser to properly send requests // 
app.use(bodyParser.json({limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes)
// connect server to real database (mongo) to host our database on their cloud not local //


const CONNECTION_URL = 'mongodb+srv://Rediscover:Rediscover1234@cluster0.6ihq7.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true })
.then(() => app.listen(PORT, () => console.log(`Server is Alive on port: ${PORT}`)))
// if fails catch the error // 
.catch((error) => console.log(`${error} did not connect`));

// avoid warnings in the console //

mongoose.set('useFindAndModify', false );
