const config = {
  keysObj : [
    {
       "0": "Q",
       "1": "W",
       "2": "E",
       "3": "R",
       "4": "T",
       "5": "Y",
       "6": "U",
       "7": "I",
       "8": "O",
       "9": "P"
    },
    {
       "0": "A",
       "1": "S",
       "2": "D",
       "3": "F",
       "4": "G",
       "5": "H",
       "6": "J",
       "7": "K",
       "8": "L"
    },
    {
       "0": "Z",
       "1": "X",
       "2": "C",
       "3": "V",
       "4": "B",
       "5": "N",
       "6": "M",
       "7": ",",
       "8": ".",
       "9": "/"
    }
 ],
 roma: (num = 1) => {
   if(num == 1){
     return "I"
   }else{
     if(num >= 1000){
       let num1 = Math.floor(num / 1000)
       let num2 = Math.floor((num % 1000) / 100)
       let num3 = Math.floor(((num % 1000) % 100) / 10)
       let num4 = num % 1000 % 100 % 10
       let re = ''
       for(let i = 0; i<num1 ; i++){
         re = re + "M"
       }
       if(num2 == 0){
         re = re
       }else if(num2 == 5){
         re = re + "D"
       }else if(num2 == 4){
         re = re + "CD"
       }else if(num2 == 9){
         re = re + "DM"
       }else if((num2 > 0 && num2 < 4)){
         for(let j = 0 ; j<num2 ; j++){
           re = re + "C"
         }
       }else if(num2 > 5 && num2 < 9){
         let a= ""
         for(let k = 0; k<num2%5; k++){
           a = a + "C"
         }
         re = re + "D" + a
       }

       if(num3 == 0){
         re = re
       }else if(num3 == 5){
         re = re + "L"
       }else if(num3 == 4){
         re = re + "XL"
       }else if(num3 == 9){
         re = re + "LC"
       }else if((num3 > 0 && num3 < 4)){
         for(let j = 0 ; j<num3 ; j++){
           re = re + "X"
         }
       }else if(num3 > 5 && num3 < 9){
         let a= ""
         for(let k = 0; k<num3%5; k++){
           a = a +  "X"
         }
         re = re + "L" + a
       }
       if(num4 == 0){
         re = re
       }else if(num4 == 5){
         re = re + "V"
       }else if(num4 == 4){
         re = re + "IV"
       }else if(num4 == 9){
         re = re + "IX"
       }else if((num4 > 0 && num4 < 4)){
         for(let j = 0 ; j<num4 ; j++){
           re = re + "I"
         }
       }else if(num4 > 5 && num4< 9){
         let a= ""
         for(let k = 0; k<num4%5; k++){
           a = a + "I"
         }
         re = re + "V" + a
       }

       return re
     }else if(num >= 100 && num < 1000){
       let num2 = Math.floor(num / 100)
       let num3 = Math.floor((num % 100) / 10)
       let num4 = num % 100 % 10
       let re = ''
       if(num2 == 5){
         re = re + "D"
       }else if(num2 == 4){
         re = re + "CD"
       }else if(num2 == 9){
         re = re + "DM"
       }else if((num2 > 0 && num2 < 4)){
         for(let j = 0 ; j<num2 ; j++){
           re = re + "C"
         }
       }else if(num2 > 5 && num2 < 9){
         let a= ""
         for(let k = 0; k<num2%5; k++){
           a = a + "C"
         }
         re = re + "D" + a
       }

       if(num3 == 0){
         re = re
       }else if(num3 == 5){
         re = re + "L"
       }else if(num3 == 4){
         re = re + "XL"
       }else if(num3 == 9){
         re = re + "LC"
       }else if((num3 > 0 && num3 < 4)){
         for(let j = 0 ; j<num3 ; j++){
           re = re + "X"
         }
       }else if(num3 > 5 && num3 < 9){
         let a= ""
         for(let k = 0; k<num3%5; k++){
           a = a +  "X"
         }
         re = re + "L" + a
       }
       if(num4 == 0){
         re = re
       }else if(num4 == 5){
         re = re + "V"
       }else if(num4 == 4){
         re = re + "IV"
       }else if(num4 == 9){
         re = re + "IX"
       }else if((num4 > 0 && num4 < 4)){
         for(let j = 0 ; j<num4 ; j++){
           re = re + "I"
         }
       }else if(num4 > 5 && num4< 9){
         let a= ""
         for(let k = 0; k<num4%5; k++){
           a = a + "I"
         }
         re = re + "V" + a
       }

       return re
     }else if(num >= 10 && num < 100){
       let num3 = Math.floor(num / 10)
       let num4 = num % 10
       let re = ''
       if(num3 == 5){
         re = re + "L"
       }else if(num3 == 4){
         re = re + "XL"
       }else if(num3 == 9){
         re = re + "LC"
       }else if((num3 > 0 && num3 < 4)){
         for(let j = 0 ; j<num3 ; j++){
           re = re + "X"
         }
       }else if(num3 > 5 && num3 < 9){
         let a= ""
         for(let k = 0; k<num3%5; k++){
           a = a +  "X"
         }
         re = re + "L" + a
       }
       if(num4 == 0){
         re = re
       }else if(num4 == 5){
         re = re + "V"
       }else if(num4 == 4){
         re = re + "IV"
       }else if(num4 == 9){
         re = re + "IX"
       }else if((num4 > 0 && num4 < 4)){
         for(let j = 0 ; j<num4 ; j++){
           re = re + "I"
         }
       }else if(num4 > 5 && num4< 9){
         let a= ""
         for(let k = 0; k<num4%5; k++){
           a = a + "I"
         }
         re = re + "V" + a
       }

       return re
     }else if(num >= 1 && num < 10){
       let re = ''
       if(num == 5){
         re = re + "V"
       }else if(num == 4){
         re = re + "IV"
       }else if(num == 9){
         re = re + "IX"
       }else if((num > 0 && num < 4)){
         for(let j = 0 ; j<num ; j++){
           re = re + "I"
         }
       }else if(num > 5 && num< 9){
         let a= ""
         for(let k = 0; k<num % 5; k++){
           a = a + "I"
         }
         re = re + "V" + a
       }

       return re
     }
   }
 }
}

export default config