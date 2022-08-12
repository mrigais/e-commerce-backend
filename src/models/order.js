const mongoose = require('mongoose')
const validator = require('validator')

const Order = mongoose.model('Order', {
    seller:{
        type: mongoose.Schema.ObjectId,
    },
    buyer:{
        type: { type: mongoose.Types.ObjectId, ref: 'User' },
    },
    products:
        [{type: mongoose.Types.ObjectId, ref: 'Product'}]
})

module.exports = Order