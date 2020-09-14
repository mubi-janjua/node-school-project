const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/school-db',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: true,
    useCreateIndex:true
    
})

// const student =  new Student({
//     name: 'abdullah1',
//     class: -1,   
// })

// student.save().then(()=>{
//     console.log(student)
// }).catch((error)=>{
//     console.log(error)
// })

// console.log('error')