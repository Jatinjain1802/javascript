let obj = {
  name: "jatin",
  class: 12,
  bff: "heer",
  address: {
    city: "ujjain",
    state: "MP",
    coordinates: {
      lan: 74.66,
      lon: 55.98,
    },
  },
};
// console.log(obj);
// console.log(obj.address.coordinates.lan);
for (let key in obj) {
  //   console.log(key, obj[key]);
  console.log(obj[key]);
}
