window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"J7LM8UHF9J6HJPF8VZH3HD9MS&contentType=json", //Sign up for your personal key
       location:"DHAKA, BANGLADESH", //Enter an address
       unitGroup:"us", //"us = Fahrenheit" or "metric = Degrees "
       forecastDays:5, //how many days forecast to show
       title:"Dhaka,BD", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();
