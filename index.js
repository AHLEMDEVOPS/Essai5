const express = require('express')
const app = express()

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.listen(8080, () => {
    console.log('Serveur à lécoute')     
  })