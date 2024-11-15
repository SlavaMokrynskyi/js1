// DZ 1
// let name = prompt("Введіть ваше ім'я: ");
// console.log("Привіт, ", name);

// let age = +prompt("Введіть в якому році ви народились: ");
// console.log("Your age: ", 2024-age);

// let length = +prompt("Enter length of square: ");
// console.log("P = ", length*4);

// let radius = + prompt("Enter circle`s radius: ");
// console.log("S = ", radius*radius*3.14);

// let way = +prompt("Enter length in km: ");
// let time = +prompt("Enter how fast you wanna get there in hours: ");
// console.log("You need to move with  speed ",way/time," km/hr");

// const currency_course = 0.919;

// let dollars = +prompt("Enter how much dollars invert to euros: ");
// console.log("You will have: ", dollars*currency_course);

// let size = +prompt("Enter size of flash drive: ");
// console.log("You can put " ,(size*1024) / 820, " programs in this flashdrive")

// let money = +prompt("Enter how much money you have in a wallet: ");
// let price = +prompt("Enter a price of one chocolate: ");
// console.log("You can buy ", money/price, "chocolates");

// let three_diigit_num = +prompt("Enter three-digit number: ");

// let first_num = (num - num%100) / 100;
// let second_num = ((num - first_num * 100) - num%10)/10;
// let third_num = (num - (first_num*100 + second_num*10))/

// console.log(third_num,second_num,first_num);


// let num = +prompt("Enter your num -> ");

// let result = (num % 2 === 0 && "Even") || "Odd";

// console.log(result);

// DZ 2

// let age = + prompt("Enter your age -> ");

// if(age => 0 && age <= 12)
// {
//  console.log("You are a child ");
// }

// else if(age > 12 && age <= 18)
// {
//     console.log("You are a teenager");
// }

// else if(age > 18 && age <= 60)
// {
//     console.log("You are an adult");
// }

// else if(age > 60)
// {
//     console.log("You are a pensioner");
// }

// else
// {
//     console.log("Invalid entered num!");
// }

// let number = + prompt("Enter your num from 0 to 9 -> ");

// switch(number)
// {
//     case 1:
//         console.log("!");
//         break;
//     case 2:
//         console.log("@");
//         break;
//     case 3:
//         console.log("#");
//         break;
//     case 4:
//         console.log("$");
//         break;
//     case 5:
//         console.log("%");
//         break;
//     case 6:
//         console.log("^");
//         break;
//     case 7:
//         console.log("&");
//         break;
//     case 8:
//         console.log("*");
//         break;
//     case 9:
//         console.log("(");
//         break;
//     case 0:
//         console.log(")");
//         break;
// }

// let three_digit_num = +prompt("Enter three-digit number: ");

// let first_num = (num - num%100) / 100;
// let second_num = ((num - first_num * 100) - num%10)/10;
// let third_num = (num - (first_num*100 + second_num*10));

// if (first_num == second_num || second_num == third_num || first_num == third_num)
// {
//     console.log("In this number are equal numbers!");
// }

// let year = +prompt("Enter year -> ");

// if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
// {
//     console.log("This year is intercalary");
// }
// else{
//     console.log("This year isn`t intercalary");
// }

// let num = +prompt("Enter five-digit number -> ")

// let first_num = (num - num%10000) / 10000;
// let second_num = ((num - first_num * 10000) - num % 1000) / 1000;
// let third_num = ((num - (first_num * 10000 + second_num * 1000)) - num % 100) / 100;
// let fourth_num = ((num - (first_num * 10000 + second_num * 1000 + third_num * 100)) - num % 10) / 10;
// let fifth_num = num -(first_num * 10000 + second_num * 1000 + third_num * 100 + fourth_num* 10);

// if(first_num == fifth_num && second_num == fourth_num)
// {
//     console.log(num,"is palindrome");
// }
// else{
//     console.log(num,"isn`t palindrome");
// }

// let dollars = +prompt("Enter hoe much dollars need to convert: ");
// const EUR = 0.919;
// const UAH = 41.47;
// const AZN = 1.7; 
// let choice = + prompt("Chose to what currency convert:\n1)EUR\n2)UAH\n3)AZN\n");
// switch(choice)
// {
//     case 1:
//         console.log(dollars * EUR);
//         break;
//     case 2:
//         console.log(dollars * UAH);
//         break;
//     case 3:
//         console.log(dollars * AZN);
//         break;
// }

// let sum = +prompt("Enter sum of your purchases: ");

// if(sum >= 200 && sum <= 300)
// {
//     console.log("You need to pay",sum - sum*0.03,"UAH");
// }
// else if(sum > 300 && sum <= 500)
// {        
//     console.log("You need to pay",sum - sum*0.05,"UAH");
// }
// else if(sum > 500)
// {
//     console.log("You need to pay",sum - sum*0.07,"UAH");
// }

// let radius = +prompt("Enter radius of circle: ");
// let P = +prompt("Enter P of square: ");

// let S_circle = radius*radius * 3.14;
// let S_square = P/4 * P/4;

// if(S_circle <= S_square)
// {
//     console.log("You can put this circle into square");
// }
// else{
//     console.log("You can`t put this circle into square");
// }

// let score = 0;
// let first_question = +prompt("Chose correct\n 2 + 2 = ?\n1)3\n2)4\n3)5");
// if(first_question == 2)
// {
//     score += 2;
// }
// let second_question = +prompt("Chose correct\n 5*10 = ?\n1)100\n2)50\n3)25");
// if(second_question == 2)
//     {
//         score += 2;
//     }
// let thisrd_question = +prompt("Chose correct\n 6/3 = ?\n1)3\n2)4\n3)2");
// if(third_question == 3)
// {
//     score += 2;
// }

// console.log("Your score is",score);

// console.log("Enter date");

// let day = +prompt("Day");
// let month = +prompt("Month");
// let year = + prompt("Year");

// let day_passed = +prompt("Enter how many days have passed since your date");

// for(i = 0;i < day_passed; i++)
// {
//     day++;
//     switch(month)
//     {
//         case 1: case 3:case 5:case 7:case 8:case 10:case 12:
//             if(day > 31)
//             {
//                 month++;
//                 day = 1;
//             }
//             break;
//         case 4:case 6:case 9:case 11:
//             if(day > 30)
//             {
//                 month++;
//                 day = 1;
//             }
//             break;
//         case 2:
//             if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
//             {
//                 if(day > 29)
//                 {
//                     month++;
//                     day = 1;  
//                 }
//             }
//             else{
//                 if(day > 28)
//                 {
//                     month++;
//                     day = 1;
//                 }
//             }
//             break;
//     }
//     if(month > 12)
//     {
//         year++;
//         month=1;
//     }
// }
// console.log("Date: ",day,":",month,":",year);

// DZ 3

// let d1 = +prompt("Enter Diapazon 1: ");
// let d2 = +prompt("Enter Diapazon 2: ");
// let sum = 0;
// for(i = d1; i < d2; i++)
// {
//     sum += i;
// }
// console.log("Sum: ", sum);

// let num1 = +prompt("Enter 1 num: ");
// let num2 = +prompt("Enter 2 num: ");
// let dilnuk = 0;

// for(i = 0; i < num2;i++)
// {
//     if(num2 % i == 0 && num1 % i == 0)
//     {
//         dilnuk = i;
//     }
// }
// console.log("The higher dilnuk: ", dilnuk);

// let num = +prompt("Enter num: ");
// for(i = 0; i < num; i++)
// {
//     if(num % i ==0)
//     {
//         console.log(i);
//     }
// }

// let number = +prompt("Enter num: ");
// let count = 0;
// do{
//     number /= 10;
//     count++;
// }while(number > 1);
// console.log("Count of digits in this number -> ",count);
// let count_minus = 0;
// let count_zero = 0;
// let count_plus = 0;
// let count_even = 0;
// let count_odd = 0;

// for(i = 0; i < 10; i++)
// {
//     let num = +prompt("Enter num -> ");
//     switch(num)
//     {
//         case num < 0:
//             count_minus++;
//             break;
//         case num == 0:
//             count_zero++;
//             break;
//         case num > 0:
//             count_plus++;
//             break;
//     } 
//     if(num%2==0)
//     {
//         count_even++;
//     }
//     else
//     {
//         count_odd++;
//     }
// }


// do{
//     let num1 = +prompt("Enter first num: ");
//     let num2 = +prompt("Enter second num: ");
//     let choice_math_symbol = +prompt("Choice what to do:\n1)+\n2)-\n3)*\n4)/\n");
//     switch(choice_math_symbol)
//     {
//         case 1:
//             console.log(num1 + num2);
//             break;
//         case 2:
//             console.log(num1 - num2);
//             break;
//         case 3:
//             console.log(num1 * num2);
//             break;
//         case 4:
//             console.log(num1 / num2);
//             break;
//     }
//     let choice = +prompt("Do you want exit?\n1)Yes, i do\n2)No, i don`t");
// }while(choice != 1);

// let Num = prompt("Enter your six-digit num: ");
// let times = +prompt("Enter how many times move your num: ");
// let arr = (Num).split("").map(Number);
// for(i = 0; i < 6; i++)
// {
//     console.log(arr[i]);
// }
// let temp_arr = [1,2,3,4,5,6]
// for(t = 0; t < times; t++)
// {
//     for(i = 0; i < 6; i++)
//     {
//         if(i == 5)
//         {
//             temp_arr[i] = arr[0];
//         }
//         else
//         {
//             temp_arr[i] = arr[i+1];
//         }
//     }
//     for(i = 0;i < 6;i++)
//     {
//         arr[i] = temp_arr[i];
//     }
// }

// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],);

// let WeekDays  = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday","Sunday"]
// let i = 0;
// do
// {
//     console.log("Today is",WeekDays[i]);
//     if( i == 6)
//     {
//         i = 0;
//     }
//     i++;
// }while(confirm("Do you want to see next day?") == true);

// for(i = 1; i < 10; i++)
// {
//     for(j = 1; j < 10;j++)
//     {
//         console.log(i,"*",j,"=",i*j)
//     }
// }

// let num = +prompt("Enter ur num (0-100)-> ");
// let isFind = false;
// let d1 = 0;
// let d2 = 100;
// let N = d2/2;
// while(isFind == false)
// {
//     console.log("Chose:\n1)Your num >",N,"\n2)Your num ==",N,"\n3)Your num <",N);
//     let choice = +prompt("Enter your choice ->")
//     if(choice == 1)
//     {
//         d1 = N+1;
//         N = Math.floor(d2+d1)/2;
//     }
//     else if(choice == 2)
//     {
//         isFind = true;
//     }
//     else if(choice == 3)
//     {
//         d2 = N;
//         N = Math.floor(d2+d1)/2;
//     }
// }

// DZ 4

// function findHighestNum(num1,num2)
// {
//     if(num1 < num2)
//     {
//         return -1;
//     }
//     else if(num1 > num2)
//     {
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }

// function FindFactorial(num)
// {
//     let factorial = 1;
//     for(i = 1; i <= num; i++)
//     {
//         factorial *= i;
//     }
//     console.log(factorial)
// }

// function TransformIntoThreeDigitNum(num1,num2,num3)
// {
//     let threedigit_num = num1*100 + num2*10+num3;
//     return threedigit_num;
// }

// function isNumDoskonale(num)
// {
//     let sum = 0;
//     for(i = 0; i < num; i)
//     {
//         if(num%i==0)
//         {
//             sum += i;
//         }
//     }
//     if(sum == num){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function ShowTime(hours = "00",minutes ="00", second ="00")
// {
//     console.log("Time: ",hours,":",minutes,":",second)
// }

// function TransformTimeIntoSec(hours,minutes,second)
// {
//     second += hours * 3600;
//     second += minutes*60;
//     return second;
// }

// function TransformTimeFromSec(second)
// {
//     let hours = 0;
//     let minutes = 0;
//     if(second > 3600)
//     {
//         while(second > 3600)
//         {
//             hours++;
//             second -= 3600;
//         }
//     }
//     if(second > 60)
//     {
//         while(second > 60)
//         {
//             minutes++;
//             second-=60;
//         }
//     }
//     console.log("Time: ",hours,":",minutes,":",second);
// }

// function isLeap(year)
// {
//     if(year % 400 == 0 || year % 100 != 0 && year % 4 == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// function FindDifferenceBetween2Dates(year1,month1,day1,year2,month2,day2)
// {
//     let seconds = 0;
//     for(i = 1; i <= year1; i++)
//     {
//         if(isLeap(i) == true)
//         {
//             seconds +=31622400;
//         }
//         else
//         {
//             seconds +=31536000;
//         }
//     }
//     for(i = 1; i < month1; i++)
//     {
//         switch(i)
//         {
//             case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//                 seconds += 86400*31;
//                 break;
//             case 2:
//                 if(isLeap(year1) == true)
//                 {
//                     seconds += 86400 * 29;
//                 }
//                 else
//                 {
//                     seconds += 86400 * 28;
//                 }
//                 break;
//             case 4: case 6: case 9: case 11:
//                 seconds += 86400 * 30;
//                 break;
//         }
//     }
//     for(i = 1; i <= year2; i++)
//         {
//             if(isLeap(i) == true)
//             {
//                 seconds +=31622400;
//             }
//             else
//             {
//                 seconds +=31536000;
//             }
//         }
//         for(i = 1; i < month2; i++)
//         {
//             switch(i)
//             {
//                 case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//                     seconds += 86400*31;
//                     break;
//                 case 2:
//                     if(isLeap(year2) == true)
//                     {
//                         seconds += 86400 * 29;
//                     }
//                     else
//                     {
//                         seconds += 86400 * 28;
//                     }
//                     break;
//                 case 4: case 6: case 9: case 11:
//                     seconds += 86400 * 30;
//                     break;
//             }
//         }
//     seconds += 86400 * day1;
//     seconds += 86400 * day2;

//     TransformTimeFromSec(seconds);
// }

// DZ 5

function FindNumberPower(num,power,transformed_num)
{
    let Num = num*transformed_num;
    if(power == 1)
    {
        return num;
    }
    else
    {
        return(FindNumberPower(Num,power-1,transformed_num));
    }
}


let num = FindNumberPower(3,4,3);

console.log(num)

function FindDilnuk(num,dilnuk = 1,i = 0)
{
    if(num % dilnuk == 0 && num-1 != i)
    {
        return dilnuk
    }
    else if(num - 1 === i)
    {
        return dilnuk;
    }
    else
    {
        return FindDilnuk(num, dilnuk++, i++);
    }
}

