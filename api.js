const express = require('express');
const cors = require('cors');
const api = express();
const uploadUser = require('./middlewares/upload');
const db = require('./models/db');
const Image = require('./models/Images');

api.use(cors());

api.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    next();
});

api.post("/upload", uploadUser.single('image'), async (req, res) => {
    if (req.file) {
        
        try {
            await Image.create({ image: req.file.filename });
            return res.json({
                erro: false,
                mensagem: "Upload realizado com sucesso"
            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: não foi possível fazer o upload"
            });
        }
    }
    res.status(400).json({
        erro: true,
        mensagem: "Erro: não foi possível fazer o upload, tente novamente"
    });
});

api.listen(8080, () => {
    console.log("Conexão realizada");
});
