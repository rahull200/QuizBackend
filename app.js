const express = require('express');
const app = express();
const prettier = require("prettier");

const port = 5000;

const person = [
    {id:'1',question:'What is the capital of India ?',answer:'Delhi',op1:'Maharashtra',op2:'Panjim',op3:'Delhi',op4:'Kerala'},
    {id:'2',question:'What is the capital of Maharashtra ?',answer:'Mumbai',op1:'Goa',op2:'Panjim',op3:'Delhi',op4:'Mumbai'},
    {id:'3',question:'What is the capital of Goa ?',answer:'Panjim',op1:'Maharashtra',op2:'Panjim',op3:'Delhi',op4:'Kerala'},
    {id:'4',question:'What is the capital of Karnataka ?',answer:'Banglore',op1:'Banglore',op2:'Panjim',op3:'Delhi',op4:'Mumbai'},
]

app.get('/',(req,res)=>{
    const data = prettier.format(JSON.stringify(person),{ semi: false, parser: "json" })
    res.send(data);
})

app.listen(process.env.PORT || port,function(){
	console.log("Server running at port 5000");
});
