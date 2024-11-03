const moongose = require("mongoose");

require("dotenv").config();

moongose.set("strictQuery", true);

async function main() {
    await moongose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fhjkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Banco conectado com sucesso");
}

main().catch(err => console.log(err));

module.exports = main;