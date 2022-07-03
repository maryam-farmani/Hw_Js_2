let userAge = null;
const birthDay = prompt("please enter your birthday!");
userAge = 2022- birthDay;
console.log(birthDay);
console.log(userAge);
const age2 = userAge + 56; 
console.log(age2);

switch (userAge) {
    case 18:
        console.log("you can enter the group!");
        break;

    case 19:
        console.log("you can enter the group!");
        break;

    case 20:
        console.log("you can enter the group!");
        break; 

    default:
        console.log("you can not enter the group!");
        break;
}
