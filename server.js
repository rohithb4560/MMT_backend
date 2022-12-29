const PORT = process.env.PORT || 8080;
const express = require("express")
const cors = require('cors')
const app = express();
const show = require('./data/shows.js');

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/MakeMyTripClone"))

app.get('/airports', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Successfully get data for All Airports",
            method: req.method,
            url: req.url,
            data: {
                airports: show,
            },
        });
    })
});

app.get('/flights', (req, res) => {
    console.log(show);
    setTimeout(() => {
        const { depart_city_name, depart_IATA_code, depart_airport_name, date, arrive_city_name, arrive_IATA_code, arrive_airport_name} = req.query;
        res.json({
            message: "Successfully get data for current data",
            method: req.method,
            url: req.url,
            data: {
                flights: [
                    {
                      
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4750
                        
                        
                    },
                    
                    {
                          
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "10:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "11:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4850
                        
                        
                    },
                    
                    {
                          
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "16:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "17:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5200
                    },
                    {
                          
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "19:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "20:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5500
                        
                    },
                    {
                          
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "21:30",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "23:00",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 6000
                        
                    },
                    
                    
                    
                    {
                          
                        "flight": "indigo",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VABB",
                        arrive_airport_name,
                        arrive_city_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "9:10",
                        
                        
                        "total_duration": "1hr10min",
                        "price": 4510
                        
                        
                    },
                    {
                      
                        "flight": "vistara",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "09:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "10:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4805
                        
                        
                    },
                    {
                      
                        "flight": "vistara",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "10:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "11:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 7720
                        
                        
                    },
                    {
                      
                        "flight": "vistara",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "10:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "11:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 6500
                        
                        
                    },
                    {
                      
                        "flight": "vistara",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "10:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "11:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5400
                        
                        
                    },
                    {
                      
                        "flight": "vistara",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "12:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "13:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 8200
                        
                        
                    },
                    {
                      
                        "flight": "emirates",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:40",
                        
                        
                        "total_duration": "1hr40min",
                        "price": 4785
                        
                        
                    },
                    {
                      
                        "flight": "emirates",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "12:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "13:40",
                        
                        
                        "total_duration": "1hr40min",
                        "price": 3500
                        
                        
                    },
                    {
                      
                        "flight": "emirates",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "16:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "17:40",
                        
                        
                        "total_duration": "1hr40min",
                        "price": 5400
                        
                        
                    },
                    {
                      
                        "flight": "spice jet",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5500
                        
                        
                    },
                    {
                      
                        "flight": "spice jet",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4875
                        
                        
                    },
                    {
                      
                        "flight": "spice jet",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4955
                        
                        
                    },
                    {
                      
                        "flight": "air india",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4775
                        
                        
                    },
                    {
                      
                        "flight": "air india",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 6550
                        
                        
                    },
                    {
                      
                        "flight": "air india",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4740
                        
                        
                    },
                    {
                      
                        "flight": "akasa",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 6520
                        
                        
                    },
                    {
                      
                        "flight": "akasa",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 4470
                        
                        
                    },
                    {
                      
                        "flight": "akasa",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5500
                        
                        
                    },
                    {
                      
                        "flight": "akasa",
                    
                        depart_city_name,
                        depart_IATA_code,
                         "depart_ICAO_code": "VAAH",
                         depart_airport_name,
                        
                         
                        "dept_date": date,
                        "dept_time": "08:00",
                        
                        
                        arrive_city_name,
                        arrive_IATA_code,
                        "arrive_ICAO_code": "VOBG",
                        arrive_airport_name,
                       
                        
                        "arrive_date": date,
                        "arrive_time": "09:30",
                        
                        
                        "total_duration": "1hr30min",
                        "price": 5300
                        
                        
                    }
                ]
            },
        });
    })
});

app.listen(PORT, () => {
    console.log("running on Port 8080")
})
