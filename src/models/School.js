const mongoose = require('mongoose')

const Teacher = mongoose.model('Teacher',{
    name:{
      type: String,
      required: true
    },

    department:{
        type: String,
        
    }
})
module.exports = Teacher