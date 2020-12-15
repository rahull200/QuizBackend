const express = require('express');
const app = express();
const prettier = require("prettier");

const port = 5000;

const placesqts = [
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
	{id:'13',question:'What is the capital of Telangana ?',answer:'Hyderabad',op1:'Hyderabad',op2:'Shillong',op3:'Delhi',op4:'Ranchi'},
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


const multiplayerqts = [
    {id:'1',question:'Headquarters of United Nation is located in?',answer:'New York city',op1:'Paris',op2:'New York city',op3:'London',op4:'Geneva'},
    {id:'2',question:'Symbol Red Cross signifies..',answer:'Sign of Danger',op1:'Civilization',op2:'Faith',op3:'Protection',op4:'Sign of Danger'},
    {id:'3',question:'Who was the first person to step on the moon?',answer:'Neil Armstrong',op1:'William Lundigan',op2:'Yuri Gagarin',op3:'Neil Armstrong',op4:'Edward McCauley'},
	{id:'4',question:'Which planet among these is the Earths Twin?',answer:'Venus',op1:'Venus',op2:'Mercury',op3:'Jupiter',op4:'Mars'},
	{id:'5',question:'The classical dance Nautanki belongs to?',answer:'Uttar pradesh',op1:'Jaipur',op2:'MP',op3:'Uttar pradesh',op4:'Goa'},
	{id:'6',question:'Atacama Desert is located in ?',answer:'South America',op1:'Australia',op2:'North America',op3:'South America',op4:'Africa'},
	{id:'7',question:'Which is the National game of China?',answer:'Table Tennis',op1:'Hockey',op2:'Baseball',op3:'Table Tennis',op4:'Football'},
	{id:'8',question:'Which planet is known as the blue planet?',answer:'Earth',op1:'Mars',op2:'Earth',op3:'Saturn',op4:'Venus'},
	{id:'9',question:'Who is the first Indian woman to win an Asian Games gold in 400m run?',answer:'P.T usha',op1:'P.T usha',op2:'K.Malleshwari',op3:'M.L. Valsamma',op4:'Kamaljit Sandhu'},
	{id:'10',question:'With which game does Davis Cup is associated?',answer:'Lawn Tennis',op1:'Hockey',op2:'Lawn Tennis',op3:'Polo',op4:'Table Tennis'},
]


const sportsqts = [
    {id:'1',question:'Who is the first Indian woman to win an Asian Games gold in 400m run?',answer:'P.T usha',op1:'P.T usha',op2:'K.Malleshwari',op3:'Kamaljit Sandhu',op4:'M.L. Valsamma'},
    {id:'2',question:'Wellington Trophy is related to which game ?',answer:'Rowing',op1:'Polo',op2:'Rowing',op3:'Hockey',op4:'Cricket'},
    {id:'3',question:'With which game does Santosh Trophy is associated?',answer:'National Football',op1:'Cricket',op2:'Golf',op3:'National Football',op4:'Polo'},
    {id:'4',question:'The name Kunjarani Devi is associated with?',answer:'Weight Lifting',op1:'Target Shooting',op2:'Weight Lifting',op3:'Swimming',op4:'Archery'},
	{id:'5',question:'The 2017 Indian Premier League (IPL 2017) first match on 5 April, 2017 was held in ?',answer:'Hyderabad',op1:'Hyderabad',op2:'Bangalore',op3:'Kolkata',op4:'Delhi'},
	{id:'6',question:'Against which team did Virender Sehwag make his one day international debut',answer:'Pakistan',op1:'Pakistan',op2:'New Zealand',op3:'Sri Lanka',op4:'South Africa'},
	{id:'7',question:'The National Game of Japan is',answer:'Sumo wrestling',op1:'Tennis',op2:'Ice Hockey',op3:'Sumo wrestling',op4:'Karate'},
	{id:'8',question:'Which was the 1st non test playing country to beat India in an international match?',answer:'Sri Lanka',op1:'Zimbabwe',op2:'East Africa',op3:'Canada',op4:'Sri Lanka'},
	{id:'9',question:'The term Gambit is associated with?',answer:'Chess',op1:'Carrom',op2:'Chess',op3:'Tennis',op4:'Baseball'},
	{id:'10',question:'The Indian football team made its first appearance at Olympics in?',answer:'1948',op1:'1936',op2:'1948',op3:'1937',op4:'1954'},
	{id:'11',question:'Nehru Trophy is related to which game?',answer:'Football',op1:'Baseball',op2:'Hockey',op3:'Badminton',op4:'Football'},
	{id:'12',question:'How many times did Geet Sethi win the IBSF World Billiards title?',answer:'3',op1:'1',op2:'3',op3:'4',op4:'2'},
	{id:'13',question:'Pravin Amre and Vinod Kambli played for which province in south Africa',answer:'Boland',op1:'Border',op2:'Boland',op3:'Griqualand West',op4:'Gauteng'},
	{id:'14',question:'Which batsman started his international cricketing career at the age of 16?',answer:'Sachin Tendulkar',op1:'Rahul Dravid',op2:'Sachin Tendulkar',op3:'Suresh Raina',op4:'Piyush Chawla'},
	{id:'15',question:'Where did MS Dhoni make his ODI debut ?',answer:'Chiittagong',op1:'Chiittagong',op2:'Dhaka',op3:'Vishakhapatnam',op4:'Hyderabad'},
	{id:'16',question:'Who was first president of BCCI?',answer:'R.E. Grant Govan',op1:'R.E. Grant Govan',op2:'Dr. Maharajkumar Sir Vijaya Ananda',op3:' Anthony S.D Mello',op4:'Sikandar Hyat Khan'},
	{id:'17',question:'The 9th South Asian Federation Games were held in which of the following cities?',answer:'Islamabad',op1:'Islamabad',op2:'Colombo',op3:'Hyderabad',op4:'None of the above'},
	{id:'18',question:'How many seconds are professional Golf Tour Players allotted per shot?',answer:'45',op1:'22',op2:'38',op3:'45',op4:'48'},
	{id:'19',question:'Which Indian cricketer has bagged a deal with ESPN?',answer:'Sachin Tendulkar',op1:'Md Kaif',op2:'Yuvraj',op3:'Anil Kumble',op4:'Sachin Tendulkar'},
	{id:'20',question:'Who is appointed as ambassador for ICC Womens world cup 2017 by the ICC ?',answer:'Sachin Tendulkar',op1:'Yuvraj',op2:'Virat Kohli',op3:'Sachin Tendulkar',op4:'Raina'},
	{id:'21',question:'Which of the following International Tennis Tournaments is held on grass court?',answer:'Wimbledon',op1:'Wimbledon',op2:'US Open',op3:'Australian Open',op4:'French Open'},
	{id:'22',question:'Ezra cup is associated with which sports?',answer:'Polo',op1:'Swimming',op2:'Basketball',op3:'Rowing',op4:'Polo'},
	{id:'23',question:'Where did Yuvaraj Singh make his ODI debut?',answer:'Nairobi, Kenya',op1:'Mumbai, India',op2:'Nairobi, Kenya',op3:'Lahore, Pakistan',op4:' London, England'},
	{id:'24',question:' Hopman cup  is related to which sports  ? ',answer:'Lawn Tennis',op1:'Lawn Tennis',op2:'Table Tennis',op3:'Hockey',op4:'Cricket'},
	{id:'25',question:'Oval stadium in England is associated with?',answer:'Cricket',op1:'Hockey',op2:'Cricket',op3:'Basketball',op4:'Football'},
]


const gkqts = [
    {id:'1',question:'The purest form of iron is?',answer:'Wrought iron',op1:'Wrought iron',op2:'Steel',op3:'Pig iron',op4:'Nickel steel'},
    {id:'2',question:'Fathometer is used to measure?',answer:'Ocean Depth',op1:'Earthquake',op2:'Rainfall',op3:'Ocean Depth',op4:'Tsunami'},
    {id:'3',question:'Which of the following is not written by Munshi Premchand?',answer:'Guide',op1:'Godan',op2:'Guide',op3:'Gaban',op4:'Manasorovar'},
    {id:'4',question:'Which of the books is written by Kapil Dev?',answer:'Cricket - My Style',op1:'One day Wonders',op2:'Cricket-Favourite Game',op3:'Cricket-Favourite Game',op4:'Cricket - My Style'},
	{id:'5',question:'Which of the following has no Skeleton at all?',answer:'Jelly fish',op1:'Jelly fish',op2:'Star fish',op3:'Sponge',op4:'Silver fish'},
	{id:'6',question:'Which animal has the worst memory?',answer:'Elephant',op1:'Dolphin',op2:'Rat',op3:'Elephant',op4:'Cat'},
	{id:'7',question:'In which of the following kinds of organism is the phenomenon found wherein the female kills the male after copulation?',answer:'Honeybee',op1:' Pit viper',op2:'Honeybee',op3:'Dragonfly',op4:'Spider'},
	{id:'8',question:'Which kind of power accounts for the largest share of power generation in India?',answer:'Thermal',op1:'Solar',op2:'Hydro-electricity',op3:'Thermsl',op4:'Nuclear'},
	{id:'9',question:'Who had estimate National Income in India first?',answer:'Dadabhai Naoroji',op1:'Dadabhai Naoroji',op2:'R.C.Dutt',op3:'D.R.Dutt',op4:'D.R.Gadgil'},
	{id:'10',question:'The minimum forest cover to maintain ecological balance in the plains is?',answer:'33%',op1:'51%',op2:'45%',op3:'33%',op4:'55%'},
	{id:'11',question:'First tuesday of may is observed as?',answer:'World Asthma Day',op1:'World Immunization Day',op2:'Global family Day',op3:'World Asthma Day',op4:'International Human Solidarity Day'},
	{id:'12',question:'Journalists Day was celebrated for the first time all over the country on?',answer:'Oct 28,1984',op1:'Oct 29,1984',op2:'Oct 18,1984',op3:'Oct 28,1984',op4:'Oct 17,1984'},
	{id:'13',question:'World Blood Donar Day is observed on?',answer:'14 - June',op1:'16 - June',op2:'14 - June',op3:'19 - June',op4:'10 - June'},
	{id:'14',question:'The blue colour of the clear sky is due to?',answer:'Dispersion of light',op1:'Refraction of light',op2:'Dispersion of light',op3:'Reflection of light',op4:'Diffraction of light'},
	{id:'15',question:'As you go down into a well, your weight...',answer:'decreases slightly',op1:'decreases rapidly',op2:'remains same',op3:'increases slightly',op4:'decreases slightly'},
	{id:'16',question:'In fireworks, the green flame is produced because of?',answer:'Barium',op1:'Sodium',op2:'Barium',op3:'Potassium',op4:'Calcium'},
	{id:'17',question:'What color does yellow and green make?',answer:'Lime',op1:'Lime',op2:'Blue',op3:'Ocean mist',op4:'Maroon'},
	{id:'18',question:'What does airbag, used for safety of car driver, contain?',answer:'Sodium azide',op1:'India',op2:'Sodium nitrite',op3:'Sodium azide',op4:'None of the above'},
	{id:'19',question:'Which of the following has got more heat capacity?',answer:'Water',op1:'Benzene',op2:'Gold piece',op3:'Iron piece',op4:'Water'},
	{id:'20',question:'Which one of the following types of laser is used in laser printers?',answer:'Semiconductor laser',op1:'Dye laser',op2:'Semiconductor laser',op3:'Excimer laser',op4:'Gas laser'},
	{id:'21',question:'The human heart is..',answer:'Myogenic heart',op1:'Pulsating heart',op2:'Ampullary heart',op3:'Myogenic heart',op4:'Neurogenic heart'},
	{id:'22',question:'Animal without red blood cells is',answer:'Earthworm',op1:'Snake',op2:'Earthworm',op3:'Snail',op4:'Frog'},
	{id:'23',question:'Which of the following is an Autotroph?',answer:'Algae',op1:'Algae',op2:'Fish',op3:'Butterfly',op4:'Worm'},
	{id:'24',question:'Botany is also known as',answer:'Phytology',op1:'Plantophyta',op2:'Phytology',op3:'Pedology',op4:'Phycology'},
	{id:'25',question:'The year 1995 is the golden Jubilee year of which of the following International Organisations',answer:'Lt.Gen H.M.Ershad',op1:'Lt.Gen H.M.Ershad',op2:'Mrs.Indira Gandhi',op3:'King Birendra',op4:'Mr. Zia ur Rehman'},
]



app.get('/',(req,res)=>{
    const data = prettier.format(JSON.stringify(placesqts),{ semi: false, parser: "json" })
    res.send(data);
})

app.get('/multiplayer',(req,res)=>{
    const data = prettier.format(JSON.stringify(multiplayerqts),{ semi: false, parser: "json" })
    res.send(data);
})

app.get('/sports',(req,res)=>{
    const data = prettier.format(JSON.stringify(sportsqts),{ semi: false, parser: "json" })
    res.send(data);
})

app.get('/gk',(req,res)=>{
    const data = prettier.format(JSON.stringify(gkqts),{ semi: false, parser: "json" })
    res.send(data);
})

app.listen(process.env.PORT || port,function(){
	console.log("Server running at port 5000");
});
