import express from "express";
import minimist from "minimist";
import { rps, rpsls } from "./lib/rpsls.js";

const app = express();
const args = minimist(process.argv.slice(2));
const port = args["port"] || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/app/", (rep, res) => {
    res.status(200).send("200 OK");
});

app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
});


app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
});


app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

app.get("/app/rps/play/:shot/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});


app.get("/app/rpsls/play/:shot/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

// port
app.listen(port, () => {
    console.log(`Server listening on port ` + port);
});