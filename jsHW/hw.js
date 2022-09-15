////////////////////////////////
// Easy Going
for(let i = 0; i <=20; i++) {
    console.log(i);
}
////////////////////////////////


////////////////////////////////
// Get Even
for(let i = 0; i <= 200; i++) {
    if(i % 2 === 0 ) {
        console.log(i);
    }
}
////////////////////////////////


////////////////////////////////
// Fizz Buzz
for(let i = 1; i <= 100; i++) {
     if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');

    } else if (i % 5 === 0) {
        console.log('Buzz');
        continue
        
    } else if(i % 3 === 0) {
        console.log('Fizz');
        continue

    } else {
        console.log(i);
    }       
}
////////////////////////////////


////////////////////////////////
// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1.
plantee[2] = 5001
console.log(plantee[2]);

// 2.
wolfy[3] = 'Gotham City'
console.log(wolfy[3]);

// 3.
dart[3] = 'Upside Down and Hawkins'
console.log(dart[3]);

// 4.
wolfy[0] ="Gameboy"
console.log(wolfy[0]);
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for (const ninjaT of ninjaTurtles) {
    console.log(ninjaT.toUpperCase());
}
////////////////////////////////


////////////////////////////////
// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));

// 1.
console.log(favMovies.sort());

// 2.
console.log(favMovies.pop());

// 3.
console.log(favMovies.push("Guardians of the Galaxy"));

// 4. 
console.log(favMovies.reverse());

// 5. 
console.log(favMovies.shift());

// 6.
// the unshift method adds element(s) to the beginning of an array and returns the new length of the array.

// 7.
console.log(favMovies.indexOf("Django Unchained"));
console.log(favMovies.splice(14, 1, "Avatar"));
console.log(favMovies.indexOf("Avatar"));

// 8.
console.log(favMovies.length);
console.log(favMovies[9]);
console.log(favMovies.slice(9));

// 9. 
const valSlice = favMovies.slice(9)
console.log(valSlice);

// 10.
console.log(favMovies);

// 11.
console.log(favMovies.indexOf('Fast and Furious'));
//Fast and furious was not removed from the array because of the sort() array method. It arranged F and F to another index.

// 12.
// We can use the cost method. We can not change the variable itself, but we can alter and change what was declared in the variable array and object.
////////////////////////////////


////////////////////////////////
// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo[2][2] = "No One"
console.log(whereIsWaldo.indexOf('Waldo'));
console.log(whereIsWaldo[3][1][1]);
console.log(whereIsWaldo);                    
////////////////////////////////
////////////////////////////////
//  Excited Kitten
for(let i = 1; i <= 20; i++) {
    console.log( `Love me, pet me! HSSSSSS! ${i}`);
    if(i % 2 === 0) {
       console.log(`...human...why you taking pictures of me?... ${i}`);
   }       
}
////////////////////////////////


////////////////////////////////
//  Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
console.log(nums);

const median = Math.floor(nums.length / 2)
console.log(nums[median]);
////////////////////////////////
