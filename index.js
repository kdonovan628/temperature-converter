// prompt user to input a Fahrenheit temp, let them know we will convert that number to Celcius
// create a "convertToCelsius" function that takes user input (F temp) 
// convert user's input number into a Celsius temp via a return function
// use calculation: celsiusTemp - (fahrenheitTemp - 32 * (5/9))
// create function called describeTemperature which takes F temp and returns description
// send alert to user including: F temp, C temp, and description message

const inputFahrenheit = prompt (`Enter current temperature in Fahrenheit. We will convert that number to Celsius.`)

const convertToCelsius=(fahrenheitTemp) => {
  const fahrAsNum = Number (fahrenheitTemp);
  const celsiusTemp = (fahrAsNum -32)*(5/9)
  return celsiusTemp;
}

const describeTemperature=(fahrTemp) => {
  if(fahrTemp <=32) {
    return `very cold.`;
    } else if(fahrTemp <=64 && fahrTemp >32) {
    return `cold.`;
    } else if(fahrTemp <=86 && fahrTemp >64) {
    return `warm.`;
    } else if(fahrTemp <=100 && fahrTemp >86) {
    return `hot.`;
    } else {
    return `very hot.`;
}
}

alert(`You entered ${inputFahrenheit} degrees Fahrenheit. That converts to ${convertToCelsius(inputFahrenheit)} degrees Celsius. That feels ${describeTemperature(inputFahrenheit)}`)

