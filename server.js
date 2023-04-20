import express from "express";
import minimist from "minimist";
import { rps, rpsls } from "./lib/rpsls.js";

const app = express();
const args = minimist(process.argv.slice(2));
const port = args["port"] || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

app.get("/app/", (rep, res) => {
    res.status(200).send("200 OK");
});

// rps
app.get("/app/rps/", (req, res) => {
    res.status(200).send(rps());
});

app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(rps(req.query.shot));
});

app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(rps(req.body.shot));
});

app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(rps(req.params.shot));
});

// rpsls
app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(rpsls());
});

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
});

app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
});

app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(rpsls(req.params.shot));
});

// port
app.listen(port, () => {
    console.log(`Server listening on port ` + port);
});