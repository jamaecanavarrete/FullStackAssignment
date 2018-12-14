const   express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        mongoose = require('mongoose'),
        config = require('./config/DB'),
        customerRoute = require('./routes/customerRoute'),
        movieRoute=require('./routes/movieRoute'),
        app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is now connected') },
    err => { console.log('Can not connect to the database '+ err)}
  );

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;
app.use('/customers', customerRoute);
app.use('/movies', movieRoute);
app.listen(port, function(){
   console.log('Express server running on port ' + port);
 });