// index.js
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const formData = require('express-form-data')

const {handleNotFound} = require("./util/error.js")
const userRoutes = require('./Routes/UserRoutes.js')
const superAdminRoutes = require('./Routes/superAdminRoutes.js')
const companyRoutes = require('./Routes/companyRoutes.js')
const employeeRoutes = require('./Routes/employeeRoutes.js')
const insuracesticker = require("./Routes/stickerRoutes.js")
const authenticateToken = require("./middlewares/authenticateToken");
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
    'mongodb://localhost:27016/derash?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, //added for backward compatibility
        useUnifiedTopology: true, //added for backward compatibility
    }
).then(result => {
    console.log('MongoDB Connected Successfully')
})

app.use(express.json())
// app.get("/" , (req , res)=>{
//     res.status(200).json({ msg : "Hello"})
// })

app.use('/api/users', userRoutes)
app.use('/api/superadmins', superAdminRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/employees', employeeRoutes)
app.use("/api/insuracesticker", insuracesticker)

app.get('/api/auth/me', authenticateToken, (req, res) => {
    return res.json({user: req.user})
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
