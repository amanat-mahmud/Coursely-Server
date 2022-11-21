const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json')
//middle-ware
app.use(cors());
app.get('/', (req, res) => {
    res.send('Running');
});
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(c=>c.id==id);
    res.send(selectedCourse);
})

app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourses = courses.filter(c=>c.category_id==id);
    res.send(selectedCourses);
})




app.listen(port,()=>{
    console.log("Server running on",port);
})