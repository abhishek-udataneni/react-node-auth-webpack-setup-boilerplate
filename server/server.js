import config from '../config/config';
import app from './express';
import mongoose from 'mongoose';
import template from '../template';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.status(200).send(template())
})

app.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }
    console.info("server started on port " + config.port);
})