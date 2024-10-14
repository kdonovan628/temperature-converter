// prompt user to input a Fahrenheit temp, let them know we will convert that number to Celcius
// create a "convertToCelsius" function that takes user input (F temp) then convert user's input number into a Celsius temp via a return function
// use calculation: celsiusTemp - (fahrenheitTemp - 32 * (5/9))
//create function caleld describeTemperature which takes F temp and returns description
//send alert to user including: F temp, C temp, and description message

const convertToCelsius=(fahrenheitTemp) => {
  return fahrenheitTemp -32*(5/9)
}

const createMessage=(fahrenheit, celsius) => {
  let message = '';
  const numFahrenheit = fahrenheit * 1;

  if(numFahrenheit <=32) {
    alert(`You put ${inputFahrenheit} degrees Fahrenheit, that is equal to ${convertedTemp} degrees Celcius. Brr...very cold!`)
    } else if(numFahrenheit <=64 && numFahrenheit >32) {
    alert(`You put ${inputFahrenheit} degrees Fahrenheit, that is equal to ${convertedTemp} degrees Celcius. Pretty darned cold.`)
    } else if(numFahrenheit <=86 && numFahrenheit >64) {
    alert(`You put ${inputFahrenheit} degrees Fahrenheit, that is equal to ${convertedTemp} degrees Celcius. Not too hot, not too cold.`)
    } else if(numFahrenheit <=100 && numFahrenheit >86) {
    alert(`You put ${inputFahrenheit} degrees Fahrenheit, that is equal to ${convertedTemp} degrees Celcius. Getting hot out there!`)
    } else if(numFahrenheit >=100) {
    alert(`You put ${inputFahrenheit} degrees Fahrenheit, that is equal to ${convertedTemp} degrees Celcius. Ridiculously hot.`)
    }

    return `${fahrenheit} Fahrenheit is ${celsius} in Celcius. ${alert}`;
}

let inputFahrenheit = prompt(`Enter current temperature in Fahrenheit. We will convert that number to Celsius.`);
let convertedTemp = convertToCelsius(inputFahrenheit);
let output = createMessage(inputFahrenheit, convertedTemp);
console.log(output);



