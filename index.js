const express = require('express');
const app = express(); 

const courses = [
    {id:1 , name : 'JS'},
    {id:2 , name : 'Node'},
    {id:3 , name : 'C'},
    {id:4 , name : 'Python'},
    {id:5 , name : 'Agular'},
    {id:6 , name : 'JAVA'}
]

//---------- FIRST SYNTAX FOR WRITING FUNCTION --------------------
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/api/courses',(req,res)=>{
    //res.send(['Api Courses ','Java',342,{'name':'Bharti'}]);
    res.send(courses);
})
app.get('/api/courses/:id',(req,res)=>{         // INPUT IN URL => http://localhost:3000/api/courses/1
    const course  = courses.find((c)=>c.id===
    parseInt(req.params.id));
    if(!course) res.status(404).send(`Course ${req.params.id} not Found `);
    res.send(course);
    //res.send(req.params.id); // access parameters only // OUTPUT is 1 
    
})
app.get('/api/courses/:year/:month',(req,res)=>{  //INPUT IN URL => http://localhost:3000/api/courses/2019/June
    res.send(req.params); //OUTPUT is {"year":"2019","month":"June"} 
})
//PORT 
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on ${port} \n http://localhost:3000  OR \n http://localhost:3000/api/courses`));

//---------- ANOTHER SYNTAX FOR WRITING FUNCTION ------------------
//app.get('/',function(req,res){
//})