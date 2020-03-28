const mongoose = require('mongoose');

var connectionDB =  process.env.DB_KEY;
   
mongoose.connect(connectionDB, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;   