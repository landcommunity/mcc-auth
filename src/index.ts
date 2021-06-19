import Express from 'express';
import Helmet from 'helmet';
import path from 'path';
import fetch from 'node-fetch';

const app = Express();
app.use(Helmet.hidePoweredBy());
app.set("view engine", "ejs");

app.use("/static", Express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=836524877271269406&redirect_uri=https%3A%2F%2Fmcc.invite.land%2Fauthenticated&response_type=token&scope=identify")
});

app.get("/authenticated", (req, res) => {
    res.render("auth");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});