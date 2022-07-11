const { MongoCliente } = require('mongodb')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/PersonasBDjs'

mongoose.connect(uri, {

    })
    .then(() => console.log('conectado'))

const PersonasSc = mongoose.Schema({
    _id: Number,
    Nombre: String
}, { versionKey: false })

const PersonaModelo = mongoose.model('Personas', PersonasSc)

const Mostar = async() => {
    const persona = await PersonaModelo.find()
    console.log(persona)
}

const insertar = async() => {
    const persona = new PersonaModelo({
        _id: 209188830,
        Nombre: 'Nicolas'
    })
    const resultado = await persona.save()

}

insertar()
Mostar()