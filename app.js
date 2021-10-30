const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './public/views');

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));


app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    fs.readFile('./unique.json', 'utf8', (err, data) => {
        if(err) throw err;
        let jsonData = JSON.parse(data);
        let email = jsonData.user[0].email;
        console.log(email);
        let ps = jsonData.user[0];
        console.log(ps);
        console.log(jsonData);
        if(req.body.email == email) {
            console.log('너는 지니어스야~');
            if(req.body.password == ps) {
                res.render('index');
            }
        }
    })

})

app.listen(3000, () => {
    console.log('서버 3000번 대기중');
})