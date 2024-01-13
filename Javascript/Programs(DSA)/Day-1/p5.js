//5)Write a program to give last 3 even number in given range


 //5th
    let count = 0;
    for (let i = 100; i > 0; i--) {
      if (i % 2 === 0 ) {
        count++;
        console.log(i);
        if(count===3){
          break;
        }
      }
    }