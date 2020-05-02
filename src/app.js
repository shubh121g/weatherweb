const path=require('path');
const express=require('express');
const hbs=require('hbs');
const geocode=require('./utils/geocode.js');
const forecast=require('./utils/weacode.js');

console.log(__filename);
const partialpath=path.join(__dirname,'../template/partials');
const publicdirpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../template/views');


const app=express();
const port=process.env.PORT||3000;
app.set('view engine','hbs')
app.use(express.static(publicdirpath));
app.set('views',viewpath);
hbs.registerPartials(partialpath);
console.log(__filename);



app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'shubha'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'shubham',
        title:'ABOUT'

    });
})

app.get('/help',(req,res)=>{
    res.render("help",{
        msg:"make it go away",
        title:"need help",
        name:"shubham"
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
            error:"cannot locate given address"
        })
    }
    else{
        const location=req.query.address;
        geocode(location,(error,{lati,longi}={})=>{
            if(error){
                return res.send(error);
            }
            console.log(lati,longi);
            console.log(error);
        
            forecast(lati, longi, (error, fordata) => {
                if(error){
                    return console.log(error);
                }

                res.send(fordata);
                console.log('Error', error)
                console.log('Data', fordata)
              })
        
        })

    }
    
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        msg:"wala help nahi hoga "
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        msg:"Cannot find in here"
    })
})


app.listen(port,()=>{
    console.log("server running wwe"+port);
    console.log(__dirname);
})