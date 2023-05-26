//db connection
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://thanvirmuhd:haseena@cluster0.axkidth.mongodb.net/shool')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log(err)
    })
