// import React,{ useState,useEffect }from 'react';
// import axios from 'axios';
// import Flood from './Flood';
// const FarmerComponent = ()=> {
//     const[FarmerData,setFarmerData]= useState();
//     const [city,setCity] = useState('');

//     useEffect(() =>{
//         const fetchData = async () =>{
//           try{
//             const apikey = 'https://WWW.WeatherStack.com';
//             const apiurl = 'https:WWW.Weather-forecast.com';

//             const response = await axios.get(apiurl);
//             setFarmerData(response.data);
//           } catch(error){
//             console.error('Error fetching weather data:',error);
//           }
//         };
//     if (city){
//       fetchData();
//     }
//     },[city]);
      
//        return(
//         <div>
//           <input 
//            type ="text"
//            value={city}
//            onChange={(e) => setCity(e.target.value)}
//                placeholder='Enter city name'/>
           
//            {FarmerData &&(
//              <div>
//               <h2>{FarmerData.name},
//                     {FarmerData.sys.country}</h2>
//               <p>Temperature:
//                     {FarmerData.main.temp}ce</p>
//               <p>weather:
//                    {FarmerData.weather[0].description}</p>
//                     </div>
//            )}
//         </div>
//        );    
// };


// export default FarmerComponent;
















