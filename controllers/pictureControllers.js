const Picture =  require("../models/picture");
const fs = require("fs");

exports.create = async(req, res) => {
    
    try{

        const {name} = req.body; 

        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,

        });

        await picture.save();

        res.json({picture, msg: "Imagem salva com sucesso"});

    }catch(err){
        res.status(500).json({message: "Erro ao salvar imagem"})
    }

};

exports.finAll = async(req, res) => {

    try {

        const pictures = await Picture.find();

        res.json(pictures);
    } catch (error) {
        res.status(500).json({message: "Erro ao listar imagens"})
    }
};

exports.remove = async(req, res) => {

    try {

        const picture = await Picture.findById(req.params.id);

        if(!picture){
            return res.status(404).json({message: "imagem não foi encontrada"});
        }

        fs.unlinkSync(picture.src);

        await Picture.findByIdAndDelete(req.params.id);

        res.json({message: "imagem deletada com sucesso"});
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar imagem"})
    }

}

