// index.js
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')

const userRoutes = require('./Routes/UserRoutes.js')
const superAdminRoutes = require('./Routes/superAdminRoutes.js')
const companyRoutes = require('./Routes/companyRoutes.js')
const employeeRoutes = require('./Routes/employeeRoutes.js')

const app = express()

mongoose.connect(
    'mongodb://localhost:27016/derash?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, //added for backward compatibility
        useUnifiedTopology: true, //added for backward compatibility
    }
)

app.use(express.json())

app.use('/users', userRoutes)
app.use('/superadmins', superAdminRoutes)
app.use('/companies', companyRoutes)
app.use('/employees', employeeRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
