function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Object {
  let car: { [key: string]: any } = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"] as [string, any], ["year", 2020] as [string, any]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"] as [string, any], ["sunroof", true] as [string, any]));
