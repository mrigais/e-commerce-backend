const mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27018/hybriddb'


//CONNECTING MONGOOSE TO MONGODB
mongoose.connect(connectionUrl, 
    {'useNewUrlParser': true,
})

// DEFINING THE MODEL
// const Task = mongoose.model('Task', {
//     description:{
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

//CREATING MODEL INSTANCE or a neww task
// const task = new Task({
//     description: '   Introduction to mongoose',
//     completed: false
// })


// SAVING THE INSTANCE
// task.save().then((task)=> {
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)

// })