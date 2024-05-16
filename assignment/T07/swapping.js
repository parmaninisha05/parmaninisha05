let num = prompt("Please enter a number of at least 3 digits: "); 
console.log(num);
arr = String(num).split(''); //Here we are first converting a number into a string and then the split() splits a string into an array of substring.
for (let i = 0; i < arr.length; i++) {
     if(i == 1){
        let temp = arr[i];
        arr[i] = arr[arr.length-1];
        arr[arr.length-1] = temp;
        break;
     }
 }
let after = Number(arr.toString().replaceAll(',','')); //Here again we are coverting an array of string to a number.
console.log("Number before", num); //printing original number
console.log("Number after", after); //printing swapped number