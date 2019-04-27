const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());



const port = process.env.PORT || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})