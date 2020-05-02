const request=require('request');

const forecast=(a,b,callback)=>{
    const wurl='http://api.weatherstack.com/current?access_key=d364e186ed87bef2a6f35f0ddfa63994&query='+a+','+b+'&units=f';
    request({url:wurl,json:true},(error,{body})=>{
        if(error){
            callback("net off hey shyd",undefined);
        }
        else if(body.error){
            callback("cant find for this location",undefined);
        }
        else{   
            data={
               // brief:response.body.current.weather_descriptions[0],
                like:body.current.feelslike,
                temp:body.current.temperature

            }
            callback(undefined,data);

        }
    })
}

module.exports=forecast;