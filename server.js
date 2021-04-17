const express = require('express');

const app = express();


app.get('/', (req, res) => res.send('sserver running'))
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`sserver start ${PORT}`)
})