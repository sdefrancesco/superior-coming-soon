const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index2.hbs', {
        title: 'hey there'
    })
})

app.listen(PORT, ()=> {
    console.log('server started on port 3000')
})
