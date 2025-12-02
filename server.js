require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
   
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.post('/verify', async (req, res) => {
    const captchaValue = req.body.token

    data = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`
    )
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    });

    res.send(data);
})
