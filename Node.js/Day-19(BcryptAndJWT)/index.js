// const bcrypt = require("bcrypt");
// const password = "MENAHIBATAUNGAA";

// const salt = 10;
// // bcrypt.hash(password, salt, (err, harsh) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(harsh);
// //   }
// // });

// const hashedPass = bcrypt.hashSync(password, salt);

// console.log(hashedPass);

// // bcrypt.compare("MENAHIBATAUNGAA", hashedPass, (err, result) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(result);
// //   }
// // });

// const isMatched = bcrypt.compareSync("MENAHIBATAUNGAA", hashedPass);
// console.log(isMatched);

const jwt = require("jsonwebtoken");
const secretKey = "HeavyRider";
const userData = { name: "Mr MODI", age: NaN, address: "INDIA" };
const token = jwt.sign(userData, secretKey);
console.log(token);

const result = jwt.verify(token, secretKey);
console.log(result);



// Interview  Questions

// What is ODM?
// how to connect mongoDB with node server ?
// what is mongooes
// Explain  about schema and module
// what is bcrypt library adn UKS


// how  to genareate authoriztion token ,
// express json webtoken