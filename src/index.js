const express = require('express')
require('./db/mongoose')
const Student = require('./models/student')
const Teacher = require('./models/teacher')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/students', async(req, res)=>{
    const std = new Student(req.body)

    try{
        await std.save()
        res.send(std)
        res.send(student)
       
    } catch(e){
        res.send(e)
    }
    // std.save().then(()=>{
    //     res.send(std)
    // }).catch((error)=>{
    //     res.send(error)
    // })
    // console.log(req.body)
    // res.send('testing')
})

app.get('/students', async(req, res)=>{
  
    try{
        const student = await Student.find({})
        res.send(student) 
    } catch(e){
        res.send(e)
    }

//    Student.find({}).then((students)=>{
//        res.send(students)
//    }).catch((e)=>{

//    })
})

app.get('/students/:id', async(req,res)=>{
   const _id = req.params.id
   try{
       const student = await Student.findById(_id)
       if(!student){
           res.status(404).send()
       }
       res.send(student)
   } catch (e){
       res.send(e)
   }
//    Student.findById(_id).then((user)=>{
//        if(!user){
//            return res.status(404).send()
//        }
//        res.send(user)
//    }).catch((error)=>{
       
//    })
})

app.post('/teachers', (req,res)=>{
    const teacher = new Teacher(req.body)
    teacher.save().then(()=>{
        res.send(teacher)
    }).catch((error)=>{
        res.send(error)
    })
})

app.get('/teachers', (req,res)=>{
    Teacher.find({}).then((teachers)=>{
        res.send(teachers)
    }).catch((error)=>{
        res.send(error)
    })
})

app.get('/teachers/:id', (req, res)=>{
    const _id = req.params.id
    Teacher.findById(_id).then((teacher)=>{
        if(!teacher){
            res.status(404).send()
        }
        res.send(teacher)
    }).catch((error)=>{
        res.send(error)
    })
})

app.listen(port, ()=>{
    console.log('server is up on port' + port)
})