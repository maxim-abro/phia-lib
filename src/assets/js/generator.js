const cities = [
  // Первые 10 городов для примера
  "Moscow", "London", "Paris", "Berlin", "Tokyo",
  "Beijing", "Istanbul", "Dubai", "New York", "Sydney",
  // Остальные 90
  "Madrid", "Rome", "Toronto", "Chicago", "Los Angeles",
  "Singapore", "Hong Kong", "Bangkok", "Seoul", "Mumbai",
  "Cairo", "Cape Town", "Rio de Janeiro", "Mexico City", "Buenos Aires",
  "Amsterdam", "Vienna", "Prague", "Warsaw", "Stockholm",
  "Oslo", "Copenhagen", "Helsinki", "Dublin", "Brussels",
  "Athens", "Lisbon", "Budapest", "Bucharest", "Sofia",
  "Zagreb", "Belgrade", "Bratislava", "Luxembourg", "Monaco",
  "San Marino", "Vatican", "Andorra", "Ljubljana", "Valletta",
  "Reykjavik", "Manila", "Jakarta", "Kuala Lumpur", "Hanoi",
  "Ho Chi Minh City", "Taipei", "Osaka", "Kyoto", "Nagoya",
  "Yokohama", "Sapporo", "Shanghai", "Guangzhou", "Shenzhen",
  "Delhi", "Bangalore", "Jakarta", "Bogota", "Lima",
  "Santiago", "Caracas", "Havana", "Kingston", "Nassau",
  "Bridgetown", "Port-au-Prince", "San Juan", "Santo Domingo", "Georgetown",
  "Paramaribo", "Cayenne", "Brasilia", "Sao Paulo", "Lima",
  "Quito", "La Paz", "Montevideo", "Asuncion", "Panama City",
  "San Jose", "Tegucigalpa", "Managua", "San Salvador", "Guatemala City"
];

// Генерация массива (100 элементов)
const result = cities.slice(0, 100).map((city, index) => ({
  title: city,
  value: city.toLowerCase().replace(/\s+/g, '_') + '_' + index
}));

console.log(result);