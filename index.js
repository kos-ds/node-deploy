const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.end('' +
        '<div>' +
            '<nav>' +
                '<ul>' +
                    '<li>' +
                        '<a href="/"> Home</a> ' +
                    '</li>' +
                    '<li>' +
                     '<a href="/about"> About</a> ' +
                    '</li>' +
                '</ul>' +
            '</nav>' +
            '<h1> Home Page</h1>' +
        '</div>'
    )
})

app.get('/about', (req,res)=> {
    res.end('' +
        '<div>' +
            '<nav>' +
                '<ul>' +
                    '<li>' +
                        '<a href="/"> Home</a> ' +
                    '</li>' +
                    '<li>' +
                        '<a href="/about"> About</a> ' +
                    '</li>' +
                '</ul>' +
            '</nav>' +
        '<h1> About Page</h1>' +
        '</div>'
    )
})

const PORT = process.env.PORT || 80
app.listen(PORT, ()=>{
    console.log('Server has been started ')
})
