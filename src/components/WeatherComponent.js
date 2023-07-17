import React, { useEffect, useState } from 'react';
import axios from 'axios';
const WeatherComponent = () => {
    const [temperature, setTemperature] = useState('');
    const [pressure, setPressure] = useState('');
    const [windspeed, setWindspeed] = useState('');
    const [precipitation, setPrecipitation] = useState('');
  
    useEffect(() => {
      // Fetch weather data from OpenWeatherMap API
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Kazakhstan&appid=4d930e7ce9c520f931bb31d029e22fb7`
          );
          const weatherData = response.data;
          // Extract required weather information
          const {
            main: { temp, pressure },
            wind: { speed },
            rain,
            snow,
          } = weatherData;
          setTemperature(temp);
          setPressure(pressure);
          setWindspeed(speed);
          setPrecipitation(rain?.['1h'] || snow?.['1h'] || 'N/A');
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    return { temperature, pressure, windspeed, precipitation };
    // return (
    //   <div>
    //     <h2>Weather in Kazakhstan</h2>
    //     <p>Temperature: {temperature} K</p>
    //     <p>Pressure: {pressure} hPa</p>
    //     <p>Windspeed: {windspeed} m/s</p>
    //     <p>Precipitation: {precipitation}</p>
    //   </div>
    // );
  };
  export default WeatherComponent;
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import firebase from 'firebase';
// import nodemailer from 'nodemailer';
// const WeatherComponent = () => {
//   useEffect(() => {
//     // Fetch weather data from OpenWeatherMap
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.openweathermap.org/data/2.5/weather?q=Kazakhstan&appid=4d930e7ce9c520f931bb31d029e22fb7'
//         );
//         const { main: { temp }, wind: { speed }, weather, main: { humidity }, rain } = response.data;
//         // Extract temperature, wind speed, air humidity, and precipitation
//         const temperature = Math.round(temp - 273.15); // Convert temperature from Kelvin to Celsius
//         const windSpeed = speed;
//         const airCondition = weather[0].main;
//         const airHumidity = humidity;
//         const precipitation = rain ? rain['1h'] : 0;
//         // Check if temperature exceeds 27 degrees Celsius
//         if (temperature > 27) {
//           sendEmails();
//         }
//       } catch (error) {
//         console.log('Error fetching weather data:', error);
//       }
//     };
//     // Fetch user emails from Firebase
//     const fetchUserEmails = async () => {
//       try {
//         const snapshot = await firebase.database().ref('/users').once('value');
//         const users = snapshot.val();
//         const userEmails = Object.values(users).map(user => user.email);
//         return userEmails;
//       } catch (error) {
//         console.log('Error fetching user emails:', error);
//       }
//     };
//     // Send email to all registered users
//     const sendEmails = async () => {
//       const userEmails = await fetchUserEmails();
//       // Set up nodemailer transporter using your email provider's SMTP settings
//       const transporter = nodemailer.createTransport({
//         service: 'YOUR_EMAIL_PROVIDER',
//         auth: {
//           user: 'YOUR_EMAIL_USERNAME',
//           pass: 'YOUR_EMAIL_PASSWORD',
//         },
//       });
//       const mailOptions = {
//         from: 'YOUR_EMAIL_USERNAME',
//         to: userEmails,
//         subject: 'Temperature Alert',
//         text: 'The temperature in Kazakhstan is above 27 degrees Celsius. Stay cool!',
//       };
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log('Error sending email:', error);
//         } else {
//           console.log('Email sent:', info.response);
//         }
//       });
//     };
//     fetchWeatherData();
//   }, []);
//   return { temperature, pressure, windSpeed, precipitation };
// };
// export default WeatherComponent;