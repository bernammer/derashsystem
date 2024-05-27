const dotenv = require('dotenv')
const {exec} = require('child_process')
const fs = require("fs-extra");

dotenv.config()

console.log('Copying built app to /public folder ...')

fs.copy('../client-web-app/dist/', `./public/`)
    .then(result => {
        console.log('Copied built app to /public folder')
        console.log('Build finished')
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        process.exit()
    })
