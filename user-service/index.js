// index.js
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const passport = require('./config/passport');
const userRoutes = require('./routes/UserRoutes');

const app = express();

mongoose.connect('mongodb+srv://derash:12341234@cluster0.jyg1b.mongodb.net/derash?retryWrites=true&w=majority', {
    useNewUrlParser: true, //added for backward compatibility
    useUnifiedTopology: true, //added for backward compatibility 
});

app.use(express.json());
app.use(passport.initialize());



app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
