const express = require('express')

const app = express()


app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'hey there'
    })
})

app.listen(3000, ()=> {
    console.log('server started on port 3000')
})
