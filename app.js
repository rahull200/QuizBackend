const express = require('express');
const app = express();
const prettier = require("prettier");

const port = 5000;

const person = [
    {id:'1',question:'What is the capital of India ?',answer:'Delhi',op1:'Maharashtra',op2:'Panjim',op3:'Delhi',op4:'Kerala'},
    {id:'2',question:'What is the capital of Maharashtra ?',answer:'Mumbai',op1:'Goa',op2:'Panjim',op3:'Delhi',op4:'Mumbai'},
    {id:'3',question:'What is the capital of Goa ?',answer:'Panjim',op1:'Maharashtra',op2:'Panjim',op3:'Delhi',op4:'Kerala'},
    {id:'4',question:'What is the capital of Karnataka ?',answer:'Banglore',op1:'Banglore',op2:'Panjim',op3:'Delhi',op4:'Mumbai'},
	{id:'5',question:'What is the capital of Madhya Pradesh ?',answer:'Bhopal',op1:'Kashmir',op2:'Gangtok',op3:'Delhi',op4:'Bhopal'},
	{id:'6',question:'What is the capital of Orissa ?',answer:'Bhubaneshwar',op1:'Kashmir',op2:'Bhubaneshwar',op3:'Bhopal',op4:'Bangalore'},
	{id:'7',question:'What is the capital of Assam ?',answer:'Dispur',op1:'Shimla',op2:'Bhubaneshwar',op3:'Bhopal',op4:'Dispur'},
	{id:'8',question:'What is the capital of Meghalaya ?',answer:'Shillong',op1:'Shimla',op2:'Shillong',op3:'Delhi',op4:'Ranchi'},
	{id:'9',question:'What is the capital of Manipur ?',answer:'Imphal',op1:'Bhopal',op2:'Imphal',op3:'Goa',op4:'Ranchi'},
	{id:'10',question:'What is the capital of Gujarat ?',answer:'Gandhinagar',op1:'Goa',op2:'Shillong',op3:'Gandhinagar',op4:'Ranchi'},
	{id:'11',question:'What is the capital of Rajhasthan ?',answer:'Jaipur',op1:'Manipur',op2:'Udaipur',op3:'Delhi',op4:'Jaipur'},
	{id:'12',question:'What is the capital of Tamil Nadu?',answer:'Chennai',op1:'Shimla',op2:'Chennai',op3:'Goa',op4:'Delhi'},
	{id:'13',question:'What is the capital of Meghalaya ?',answer:'Shillong',op1:'Shimla',op2:'Shillong',op3:'Delhi',op4:'Ranchi'},
	{id:'14',question:'What is the capital of Kerala ?',answer:'Tiruvananthpuram',op1:'Goa',op2:'Tiruvananthpuram',op3:'Mumbai',op4:'Panjim'},
	{id:'15',question:'What is the capital of China ?',answer:'Beijing',op1:'Islamabad',op2:'Beijing',op3:'Delhi',op4:'Tokyo'},
	{id:'16',question:'What is the capital of Japan ?',answer:'Tokyo',op1:'Delhi',op2:'Tokyo',op3:'Iraq',op4:'Beijing'},
	{id:'17',question:'Where is Burj Khalifa located ?',answer:'UAE',op1:'UAE',op2:'China',op3:'India',op4:'Saudi Arabia'},
	{id:'18',question:'Leaning tower is Pisa is located in which country ?',answer:'Italy',op1:'India',op2:'Italy',op3:'Japan',op4:'Singapore'},
	{id:'19',question:'Where is Taj Mahal Located ?',answer:'India',op1:'Pakisthan',op2:'China',op3:'Sri Lanka',op4:'India'},
	{id:'20',question:'Eiffel tower is located in ?',answer:'Paris',op1:'Paris',op2:'New york',op3:'Versailles',op4:'Provins'},
	{id:'21',question:'Where is statue of liberty located ?',answer:'New york',op1:'Paris',op2:'Versailles',op3:'Provins',op4:'New york'},
	{id:'22',question:'Statue of unity is located in which city ?',answer:'Vadodara',op1:'Gandhinagar',op2:'Vadodara',op3:'Badlapur',op4:'Jodhpur'},
	{id:'23',question:'Vasa Museum is located in ?',answer:'Sweden',op1:'Sweden',op2:'Singapore',op3:'Switzerland',op4:'Spain'},
	{id:'24',question:'Where is sansoji temple located ?',answer:'Tokyo',op1:'Islamabad',op2:'Tokyo',op3:'Singapore',op4:'China'},
	{id:'25',question:'Shanghai city is located in ?',answer:'China',op1:'Japan',op2:'China',op3:'Iran',op4:'Iraq'},
]

app.get('/',(req,res)=>{
    const data = prettier.format(JSON.stringify(person),{ semi: false, parser: "json" })
    res.send(data);
})

app.listen(process.env.PORT || port,function(){
	console.log("Server running at port 5000");
});
