const { nanoid } = require('nanoid');
const urlModel = require('../models/urlModel');

const generateShortURL = async (req, res) => {
    const actualUrl = String(req.body);
    if(!actualUrl){
        return res.status(400).json({error: "URL is required"});
    }
    const shortUrl = nanoid(7);

    await urlModel.create({shortUrl,actualUrl});
    return res.status(200).json({success: true, shortUrl});
}

module.exports = { generateShortURL };