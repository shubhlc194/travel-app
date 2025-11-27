const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});
app.listen(3007,()=>{
    console.log('Server is running on port 3000');
});
app.get('/contact',(req,res)=>{
    res.send('Contact me at:7555555555');
});
app.get('/about',(req,res)=>{
const students=[
    {id:1,name:'Alice',class:"10A"},
    {id:2,name:'Bob',class:"10B"},
    {id:3,name:'Charlie',class:"10C"},
    {id:4,name:'David',class:"10D" },
    {id:5,name:'Eve',class:"10E"}
];
res.json(students);
});
