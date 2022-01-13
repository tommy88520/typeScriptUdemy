const add = (a: number, b: number) : number =>{
  return a + b 
}

// const subtract = (a: number, b: number) : number =>{
//   a - b 
// } function 也要定義的原因

function divide(a: number, b: number): number{
  return a / b
}

const logger = (message: string): void => {
  console.log('123');
}

const throwError = (message: string): void => {
  if(!message){
    throw new Error(message)
  }
}

// object
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
}

logWeather(todaysWeather)