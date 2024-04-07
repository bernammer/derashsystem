// index.js
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const formData = require('express-form-data')
const {checkInsuranceStickers} = require("./util/schedule.js")
const {handleNotFound} = require("./util/error.js")
const userRoutes = require('./Routes/UserRoutes.js')
const superAdminRoutes = require('./Routes/superAdminRoutes.js')
const companyRoutes = require('./Routes/companyRoutes.js')
const employeeRoutes = require('./Routes/employeeRoutes.js')
const insuracesticker = require("./Routes/stickerRoutes.js")
const authenticateToken = require("./middlewares/authenticateToken");
const InsurranceSticker = require('./models/InsuranceSticker.js'); // Adjust the path as necessary
const nodeCron = require('node-cron'); // Import node-cron
require('dotenv').config();

const MONGO_PORT = process.env.MONGO_PORT


const app = express()
app.use(express.static(path.join(__dirname, "./storage")))
app.use(express.static(path.join(__dirname, "./public")))

const options = {
    uploadDir: process.cwd() + '/storage/temp',
    autoClean: true
}

app.use(cors())

app.use(formData.parse(options))
app.use(formData.format())
app.use(formData.union())

app.use(express.json({limit: '25MB'}))
app.use(express.urlencoded({
    limit: '25MB',
    extended: true
}))



mongoose.connect(
    `mongodb://localhost:${MONGO_PORT}/derash?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, //added for backward compatibility
        useUnifiedTopology: true, //added for backward compatibility
    }
).then(result => {
    console.log('MongoDB Connected Successfully')
})


// // Schedule the task to run every day at a specific time 
// const checkInterval = 24 * 60 * 60 * 1000; 
// setInterval(checkInsuranceStickers, checkInterval);


nodeCron.schedule('0 12 * * *', () => {
    console.log("hello")
    // const currentDate = new Date();
    // const thirtyDaysFromNow = new Date();
    // thirtyDaysFromNow.setDate(currentDate.getDate() + 30);

    // InsurranceSticker.find({
    //     policyEndDate: {
    //         $lt: thirtyDaysFromNow
    //     }
    // }).then(stickers => {
    //    // send to firebase
    // }).catch(err => {
    //     console.error('Error checking insurance stickers:', err);
    // });
});


app.use(express.json())
// app.get("/" , (req , res)=>{
//     res.status(200).json({ msg : "Hello"})
// })

app.use('/api/users', userRoutes)
app.use('/api/superadmins', superAdminRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/employees', employeeRoutes)
app.use("/api/insuracesticker", insuracesticker)

app.get('/api/auth/me', (req, res) => {
    return res.json({data: {name: 'Abdisa'}})
})

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "/public/index.html")
    );
},);

app.use(handleNotFound); // 404 error handler
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
