/*
Note: There is a harder version (Sports League Table Ranking (with Head-to-head)) of this.

Description
You organize a sports league in a round-robin-system. Each team meets all other teams. 
In your league a win gives a team 2 points, a draw gives both teams 1 point. 
After some games you have to compute the order of the teams in your league. 
You use the following criteria to arrange the teams:

Points
Scoring differential (the difference between goals scored and those conceded)
Goals scored
First you sort the teams by their points. If two or more teams reached the same number of points, 
the second criteria comes into play and so on. Finally, if all criteria are the same, the teams share a place.

Input
number: Number of teams in your league.
games: An array of arrays. Each item represents a played game with an array of four elements 
[TeamA,TeamB,GoalA,GoalB] (TeamA played against TeamB and scored GoalA goals and conceded GoalB goals ).
Output
positions: An array of positions. The i-th item should be the position of the i-th team in your league.
Example
number = 6
games = [[0, 5, 2, 2],   // Team 0 - Team 5 => 2:2
         [1, 4, 0, 2],   // Team 1 - Team 4 => 0:2
         [2, 3, 1, 2],   // Team 2 - Team 3 => 1:2
         [1, 5, 2, 2],   // Team 1 - Team 5 => 2:2
         [2, 0, 1, 1],   // Team 2 - Team 0 => 1:1
         [3, 4, 1, 1],   // Team 3 - Team 4 => 1:1
         [2, 5, 0, 2],   // Team 2 - Team 5 => 0:2
         [3, 1, 1, 1],   // Team 3 - Team 1 => 1:1
         [4, 0, 2, 0]]   // Team 4 - Team 0 => 2:0
You may compute the following table:

Rank	Team	For : Against	GD	Points
1.	Team 4	5 : 1	+4	5
2.	Team 5	6 : 4	+2	4
3.	Team 3	4 : 3	+1	4
4.	Team 0	3 : 5	-2	2
4.	Team 1	3 : 5	-2	2
6.	Team 2	2 : 5	-3	1
Team 5 and Team 3 reached the same number of points. 
But since Team 5 got a better scoring differential, it ranks better than Team 3. 
All values of Team 0 and Team 1 are the same, so these teams share the fourth place.

In this example you have to return the array [4, 4, 6, 3, 1, 2].
*/


// const table = [
//     { team: 0, score: 0, diff: 0, goals: 0 },
//     { team: 1, score: 0, diff: 0, goals: 0 },
//     { team: 2, score: 0, diff: 0, goals: 0 },
// ]

function computeRanks(number, games) {
    //const table = {};
    const table = [];
    const resultOfTeam = {};
    for (const [team, score, diff, goals] of number) {
        resultOfTeam[team] = number;
        resultOfTeam[score] = 0;
        resultOfTeam[diff] = 0;
        resultOfTeam[goals] = 0;
        table.push(resultOfTeam);
    }

    for (const [teamA, teamB, goalsA, goalsB] of games) {

        if (goalsA > goalsB) {
            table[teamA].score += 2;
        }

        if(goalsA > goalsB){ // если в игре первая команда забила больше второй
            table[teamA][0] += 2 //то 1 команде прибавляется 2 очка
        }
        else if(goalsA < goalsB){ 
            table[teamB][0] += 2 
        }else{
            table[teamA][0] += 1
            table[teamB][0] += 1 
        }
        table[teamA][1] = table[teamA][1] + goalsA - goalsB // считаем разницу забитых и пропущенных по 1 команде
        table[teamB][1] = table[teamB][1] + goalsB - goalsA // аналогично считаем для 2 команды

        table[teamA][2] += goalsA //считаем количество забитых голов за игру первой командой
        table[teamB][2] += goalsB //количество забитых голов за игру второй командой
    }
    const tripleSorting = function(arr1, arr2){
        if(arr1[1][0] > arr2[1][0]){
            return -1
        }
        if(arr1[1][0] < arr2[1][0]){
            return 1
        }
        if(arr1[1][0] === arr2[1][0]){
                if(arr1[1][1] > arr2[1][1]){
                    return -1;
                }
                if(arr1[1][1] < arr2[1][1]){
                    return 1;
                }
                if(arr1[1][1] === arr2[1][1]){
                    if(arr1[1][2] > arr2[1][2]){
                        return -1;
                    }
                    if(arr1[1][2] < arr2[1][2]){
                        return 1;   
                    }
                    if(arr1[1][2] === arr2[1][2]){
                        return 0;
                    }
                }
        }
    }    
    return Object.entries(table).sort(tripleSorting);
}
console.log(computeRanks(6, 
    [[0, 5, 2, 2], // 0 team vs 5 team played 2:2
     [1, 4, 0, 2],
     [2, 3, 1, 2],
     [1, 5, 2, 2],
     [2, 0, 1, 1],
     [3, 4, 1, 1],
     [2, 5, 0, 2],
     [3, 1, 1, 1],
     [4, 0, 2, 0]])) // [4,4,6,3,1,2])