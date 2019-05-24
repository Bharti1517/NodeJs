const express = require('express');
const app = express.Router(); 

const courses = [
    {id:1 , name : 'JS'},
    {id:2 , name : 'Node'},
    {id:3 , name : 'C'},
    {id:4 , name : 'Python'},
    {id:5 , name : 'Agular'},
    {id:6 , name : 'JAVA'}
]


app.get('/',(req,res)=>{
    //res.send(['Api Courses ','Java',342,{'name':'Bharti'}]);
    res.send(courses);
})
app.post('/',(req,res)=>{
    if(!req.body.name || req.body.name.length < 3 ){
        // 400 Bad request 
        res.status(400).send('Name is Required with min 3 chars ');
        return ;
    }
    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})
app.put('/:id',(req,res)=>{
    // look for course
    const course  = courses.find((c)=>c.id===
    parseInt(req.params.id));
    if(!course )    res.status(400).send(`Course ${req.params.id} is not found from put API  `);
        
    course.name = req.body.name ;
    res.send(course);
    
})
app.get('/:id',(req,res)=>{         // INPUT IN URL => http://localhost:3000/api/courses/1
    const course  = courses.find((c)=>c.id===
    parseInt(req.params.id));
    if(!course) res.status(404).send(`Course ${req.params.id} not Found `);
    res.send(course);
    //res.send(req.params.id); // access parameters only // OUTPUT is 1 
    
})
app.get('/:year/:month',(req,res)=>{  //INPUT IN URL => http://localhost:3000/api/courses/2019/June
    res.send(req.params); //OUTPUT is {"year":"2019","month":"June"} 
})
app.delete('/:id',(req,res)=>{
    const course  = courses.find((c)=>c.id===
    parseInt(req.params.id));
    if(!course )    res.status(400).send(`Course ${req.params.id} is not found from delete API  `);
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
})

module.exports = app;