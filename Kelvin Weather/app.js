// The value of today's forecast in Kelvin
const kelvin = 0;
// Covert from Kelvin to Celsius
let celsius= kelvin-273;
//Convert from Celsius to Fahrenheit
let fahrenheit=celsius*(9/5)+32;
// Round down the converted fahrenheit value
fahrenheit=Math.floor(fahrenheit);
//Display the result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Convert from Celsius to Newton
let newton = celsius*(33/100);
//Round down the converted newton value
newton=Math.floor(newton);
//Display the result
console.log(`The temperature is ${newton} degree Newton.`)




