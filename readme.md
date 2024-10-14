const describeTemperature=(fahrenheit, celsius) => {
  let message = '';
  const numFahrenheit = fahrenheit * 1;

  if(numFahrenheit <=32) {
    alert(`Brr...very cold!`)
    } else if(numFahrenheit <=64 && numFahrenheit >32) {
    alert(`Pretty darned cold.`)
    } else if(numFahrenheit <=86 && numFahrenheit >64) {
    alert(`Not too hot, not too cold.`)
    } else if(numFahrenheit <=100 && numFahrenheit >86) {
    alert(`Getting hot out there!`)
    } else if(numFahrenheit >=100) {
    alert(`Ridiculously hot.`)
    }

    alert `${fahrenheitTemp} Fahrenheit is ${celsiusTemp} in Celcius. ${alert}`;
  }

let output = describeTemperature(inputFahrenheit, celsiusTemp);
console.log(output);