const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman", "flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


