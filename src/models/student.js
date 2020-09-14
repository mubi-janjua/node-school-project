const mongoose = require('mongoose')

const Student = mongoose.model('Student', {

    name: {
        type: String,
        required: true
    },

    class:{
        type: Number,
        required: true,
        validate(value){
        if(value< 0){
          throw new Error('positive no add please')
        }}

    },

    present:{
        type: Boolean,
        default: false
    }
})

module.exports = Student