// ^ AND Operator
// const password = prompt("enter a password");
// if ((password.length>=6 )&& (password.indexOf(' ')===-1))
// {
//     console.log("Strong Password!!");
// }
// else {
//     console.log("Weak Password");
// }
// * Or Operator
// const age=Number(prompt("enter age"));
// if (((age>0)&&(age<=5)) || age>=65)
// {
//     console.log("Free");
// }
// else if(age>=5 && age<10)
// {
//     console.log("$10");
// }
// else if(age>=10 && age<65)
// {
//     console.log("$20");
// }
// else
// {
//     console.log("not a correct age entered");
// }

// & NOT operator
// const userName=prompt("enter the username");
// if(! userName)
// {
//     userName=prompt("Try Again!!");
// }

// const age=prompt("enter age");

// if (!(((age>0)&&(age<=5)) || age>=65))
// {
//     console.log("you are not a baby!!");
// }

// todo switch statement 
// default behavior of switch and case is as soon as it gets the desired case it continues till it get a break statement.
const dayNumber=Number(prompt("enter a day Number"));
switch(dayNumber)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("you entered the worng number");
    
    // case 6:
    // case 7:
        // console.log("Weekend");
        // break;
    // for both 6 and 7 we will get output-> weekend
}