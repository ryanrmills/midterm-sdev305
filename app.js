import express from 'express';
const app = express();
app.set("view engine", "ejs");

const PORT = 3005;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/confirm", (req, res) => {
    res.render("confirm")
})

app.post("/submit-order", (req, res) => {
    res.render("confirm")
})

app.listen(PORT, () => {
    console.log(`Vacation Form running on http://localhost:${PORT}`);
})