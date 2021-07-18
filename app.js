var express = require("express");
var app = express();
const axios = require('axios');


app.get("/sample", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   })


app.get("/bp", (req, res, next) => {

    const deviceinfo = [];
  
    // deviceinfo.push(req);
    deviceinfo.push(req.query.deviceid);
    console.log('BP response' +req.query.deviceid);
    let data = {

        "api_key": "474258B3-18AF-4197-A127-4C3E478B0642-1591996272",
        "device_ids": deviceinfo,
        "reading_type" : ["blood_pressure"]

    }
    //console.log("device deviceinfo " + deviceinfo);
    console.log("device data " + data);
      axios.post('https://api.iglucose.com/readings/', data, {
    }
    ).then((response) => {
        console.log("device testing " + deviceinfo);
        if(response !== undefined){
            if(response.data !== undefined){
                console.log('BP response');
                res.json(response.data);
            }
        }
    });
   })


   app.get("/weight", (req, res, next) => {


    console.log(req.query.deviceid);
    const deviceinfo = [];
  
    deviceinfo.push(req.query.deviceid);
    // deviceinfo.push(req);
    // deviceinfo.push("863859040790045");
   
    let data = {

        "api_key": "474258B3-18AF-4197-A127-4C3E478B0642-1591996272",
        "device_ids": deviceinfo,
        "reading_type" : ["weight"]

    }
    //console.log("device deviceinfo " + deviceinfo);
    console.log("device data " + data);
      axios.post('https://api.iglucose.com/readings/', data, {
    }
    ).then((response) => {
        console.log("device testing " + deviceinfo);
        if(response !== undefined){
            if(response.data !== undefined){
                res.json(response.data);
            }
        }
    });
   })


app.listen(5000, () => {
 console.log("Server running on port 5000");
});