/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job,
 you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. 
You're in trouble. You quickly have to gauge the feeling in the room to decide whether or 
not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as 
the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'.
 Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value 
(but they are still just one person!).
*/
const meet = {
    colleague1:2,
    colleague2:7,
    colleague3:5,
    colleague4:3,
    colleague5:9,
    boss:4
}
function getHappiness(){
    let score = 0;
    let count = 0;
    for (let key in meet){        
        score += meet[key]; //почему то если писать meet.key, а не с квадратными скобками, то получается Nan (уточниить)
        count+=1;
        if (key == "boss"){
            count +=1;
            score += meet[key];
        }
    }
    let happinessRating = score / count;
    //console.log(score); //раскомитить для проверки
    //console.log(count); //раскомитить для проверки
    //console.log(happinessRating); //раскомитить для проверки
    if(happinessRating <=5){
        return console.log ("Get Out Now!")
    }
    else{
        return console.log ("Nice Work Champ!")
    }
    
}

getHappiness();

