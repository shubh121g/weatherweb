const request=require('request');

const geocode=(address,callback)=>{
    var gurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamF5MTIxIiwiYSI6ImNrOWhiMW1kcTA2bmYzZ3Fma2k2aGw3cHgifQ.v38CKSDRFl6eSgGVFJCKhQ&limit=1';
request({url:gurl,json:true},(error,{body})=>{
    if(error){
        callback("shyd net off hey ",undefined);

    }
    else if(body.features.length===0){
        callback("unable to find , try different search",undefined);
    }
    else{
        const data={
            lati:body.features[0].center[1],
            longi:body.features[0].center[0],
            place:body.features[0].place_name,


        }
        callback(undefined,data);
    }
})
}

module.exports=geocode;