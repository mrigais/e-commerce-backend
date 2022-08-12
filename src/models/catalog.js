const mongoose = require('mongoose')
const validator = require('validator')


const Catalog = mongoose.model('Catalog', {
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail (value)){
                throw new Error('Invalid Email')
            }
        }

    },
    seller:{
        type: { type: mongoose.Types.ObjectId, ref: 'User' },
   },
    products:
        [{type: mongoose.Types.ObjectId, ref: 'Product'}]
})

module.exports = Catalog