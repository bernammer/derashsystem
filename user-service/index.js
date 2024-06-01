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
const User = require("./models/User.js")
const superAdminRoutes = require('./Routes/superAdminRoutes.js')
const employeeRoutes = require('./Routes/employeeRoutes.js')
const insuraceSticker = require("./Routes/stickerRoutes.js")
const boloProcess = require("./Routes/boloProcessRoute")
const companies = require("./Routes/companiesRoute.js")
const bolo = require("./Routes/boloStickerRoute.js")
const mengedFundRoute = require("./Routes/mengedFundRoute.js")
const libre = require("./Routes/libreRoute.js")
const inspectionTest = require("./Routes/inspectionTestRoute.js")
const authenticateToken = require("./middlewares/authenticateToken");
const InsurranceSticker = require('./models/InsuranceSticker.js'); // Adjust the path as necessary
const Employee = require('./models/Employee.js')
const nodeCron = require('node-cron'); // Import node-cron
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken')
const Company = require('./models/Company')
require('dotenv').config();
const notificationRoute = require("./Routes/notificationRoute.js")
const MONGO_PORT = process.env.MONGO_PORT
mongoose.connect(
    `mongodb://localhost:${MONGO_PORT}/derash?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, //added for backward compatibility
        useUnifiedTopology: true, //added for backward compatibility
    }
).then(result => {
    console.log('MongoDB Connected Successfully')
})

const app = express()
app.use(express.static(path.join(__dirname, "./storage")))
app.use(express.static(path.join(__dirname, "./public")))

const options = {
    uploadDir: process.cwd() + '/storage/temp',
    autoClean: false
}



app.use(formData.parse(options))
app.use(formData.format())
// change the file objects to fs.ReadStream 
app.use(formData.stream());
app.use(formData.union())

app.use(express.json({limit: '25MB'}))
app.use(express.urlencoded({
    limit: '25MB',
    extended: true
}))

app.use(cors())







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
app.use("/api/inspection" , inspectionTest)
app.use('/api/users', userRoutes)
app.use('/api/superadmins', superAdminRoutes)
app.use("/api/bolo" , bolo)
app.use('/api/employees', employeeRoutes)
app.use("/api/insuracesticker", insuraceSticker)
app.use("/api/companies", companies)
app.use("/api/libre" , libre)
app.use("/api/boloprocess" , boloProcess)
app.use("/api/notification" , notificationRoute)
app.use("/api/fund" , mengedFundRoute)

app.get('/get-dates/:vehicleId' , async (req , res)=>{
    const {vehicleId} = req.params;
    // get bolo counter 
    // get insurance counter 
            // Find the latest insurance sticker for the given vehicleId
    let sticker = await InsurranceSticker.findOne({ vehicle: vehicleId }).sort({ createdAt: -1 });
    if(sticker){
        res.status(200).send(sticker)
    }

    res.status(400).send({msg : "not found"})
   

})

app.get('/api/auth/me', async (req, res) => {
   
    	//const empid = req.headers.empid;
	const empid =  req.headers.companyid ?? '';
//	console.log(req.headers)
	console.log("the token is " , empid )

    try {
        //onst decodedToken = jwt.verify(token, process.env.USER_TOKEN_SECRET)
        //console.log(decodedToken)
        const user = await Company.findById(empid)
        res.status(200).json({ data : user})
    } catch (error) {
	    console.log(error)
        res.status(403).json({ error: 'Invalid token or unauthorized access.' })
    }
})



app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "/public/index.html")
    );
},);

app.use(handleNotFound); // 404 error handler
const PORT = process.env.PORT || 3001

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`)
})
