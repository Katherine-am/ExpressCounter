const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get("/", (req, res) => {
    console.log("Value of name in session: ", req.session.name);
    res.render("index", {title: "Index"});
});

app.post('/users', (req, res) => {
    req.session.name = req.body.name; 
    res.redirect('/')
});

app.get("/counter", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
    } else {
        req.session.page_views = 1;
    }
    res.render("counter", {title: "Counter", count: req.session.page_views});
});

app.get("/addTwo", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views+=1;
    } else {
        req.session.page_views = 1;
    }
    res.redirect("/counter");
});

app.get("/destroy", (req, res) => {
    req.session.destroy();
    res.redirect("/counter");
});