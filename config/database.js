const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://useradmin:oi@fiaptecnico.zg8lq.mongodb.net/waluigio')
}

module.exports = conn