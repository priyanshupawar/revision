const FS = require("fs");

//reading files

//sync--------------------------------------
// let data = FS.readFileSync("./ex.txt");
// console.log(data.toString());

// let data1 = FS.readFileSync("./ex.txt","utf-8")
// console.log(data1)

//Async--------------------------------------------

// FS.readFile("./ex.tx", "utf-8", (error, data) => {
//   if (error) {
//     console.log("ERROR ----There is an unexpected error occured in path---");
//   } else {
//     console.log(data);
//   }
// });

//Creating or writing filles -----------------------------------------------------

//Sync=-----------------------------------------------
// FS.writeFileSync("./demo.txt", "This is created by NodeJS");
// FS.writeFileSync("./demo.html", "<h1>Hello Node JS</h1>", "utf-8");

//Async--------------------------------------------------------------------

// FS.writeFileSync("./demo1.txt", "Practice Node JS", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//Updating filles   or append file-----------------------------------------------------
// SYNC----------------------------------------------------
// FS.appendFileSync("./demo1.txt", "\n Practice React JS  ");

// Async------------------------------------------------------
// FS.appendFile("./demo1.html", "\n <h1>Masai</h1>  ", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

//Delete filles   or remove file-----------------------------------------------------
// Sync----------------------------------------------------
// FS.unlinkSync("./demo1.html");

// Async------------------------------------------------------
// FS.unlink("./demo1.txt", (error) => {
//     if (error) {
//       console.log(error);
//     }else{
//         console.log("File deleted succefully")
//       }
//   });

//Rename fille name   or Rename file-----------------------------------------------------

// Sync--------------------------------------------
// FS.renameSync("./demo.html", "./index.html");

// Async---------------------------------------------
// FS.rename("./ex.txt", "./msg.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File name changed");
//   }
// });

//Copy fille -----------------------------------------------------

// 1}hallow copy--------------------------------------------
// Sync--------------------------------------------
// FS.linkSync("./msg.txt","./print.txt")

// Async---------------------------------------------
// FS.link("./msg.txt", "./demo2.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Linking Succesfull");
//   }
// });

// 2}Deep copy--------------------------------------------
// Sync--------------------------------------------
// FS.copyFileSync("./msg.txt", "./print1.txt");

// Async---------------------------------------------
// FS.copyFile("./msg.txt", "./demo3.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File copied");
//   }
// });

// folder

// Create Folder--------------------------------------------
FS.mkdir("./Virat", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Folder created");
  }
});
