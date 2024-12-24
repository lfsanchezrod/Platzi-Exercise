const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const players = []

class Player {
    constructor(id) {
        this.id = id;
    }

    assignMokepon(mokepon) {
        this.mokepon = mokepon;
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }

    assignAttacks(attacks) {
        this.attacks = attacks;
    }
}

class Mokepon {
    constructor(name) {
        this.name = name;
    }
}

app.get('/join', (req, res) => {
    const id = `${Math.random()}`

    const player = new Player(id);

    players.push(player);
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send(id);
})

app.post("/mokepon/:playerId", (req, res) => {
    const playerID = req.params.playerId || '';
    const mokeponName = req.body.mokepon || '';
    const mokepon = new Mokepon(mokeponName);

    const playerIndex = players.findIndex((player) => playerID === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].assignMokepon(mokepon);
    }

    //console.log(players);
    //console.log(playerID);
    res.end();
})

app.post("/mokepon/:playerId/position", (req, res) => {
    const playerID = req.params.playerId || '';

    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const playerIndex = players.findIndex((player) => playerID === player.id)

    //console.log(playerIndex);

    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x, y);
    }

    const enemies = players.filter((player) => player.id !== playerID);

    res.send({
        enemies
    });
})

app.post("/mokepon/:playerId/attacks", (req, res) => {
    const playerID = req.params.playerId || '';
    const attacks = req.body.attacks || [];

    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const playerIndex = players.findIndex((player) => playerID === player.id)

    //console.log(playerIndex);

    if (playerIndex >= 0) {
        players[playerIndex].assignAttacks(attacks);
    }

    res.end();

/*     const enemies = players.filter((player) => player.id !== playerID);

    res.send({
        enemies
    }); */
})

app.get("/mokepon/:playerId/attacks", (req, res) => {
    const playerID = req.params.playerId || '';
    const player = players.find((player) => player.id === playerID);

    res.send({
        attacks: player.attacks || []
    });
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})