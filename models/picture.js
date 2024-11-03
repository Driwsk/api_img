const moongose = require("mongoose");

const schema = moongose.Schema;

const pictureSchema = new schema({
    name: {type: String, required: true},
    src: {type: String, required: true},
});

module.exports = moongose.model("picture", pictureSchema);