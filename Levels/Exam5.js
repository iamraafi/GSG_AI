function Exam5(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout5=[
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,3],
[3,3,3,3,3,3,0,3,3,3,0,3,3,3,3,3,3,3,3,3],
[0,3,0,3,0,3,0,3,0,0,1,0,0,0,0,0,0,3,0,3],
[0,3,3,3,0,3,0,3,0,3,3,3,3,3,3,3,3,3,3,3],
[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3],
[3,3,3,3,0,3,3,3,3,3,0,3,3,3,3,3,0,3,3,3],
[0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,3],
[3,3,0,3,3,3,3,3,0,3,0,3,3,3,3,3,0,3,0,3],
[0,0,0,0,0,3,0,3,0,0,0,0,0,3,0,3,0,0,0,3],
[0,3,3,3,0,3,3,3,3,3,3,3,3,3,0,3,0,3,0,3],
[0,0,0,3,0,3,0,3,0,3,0,3,0,0,0,0,0,3,0,3],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,3],
[0,3,0,3,0,3,0,0,0,3,0,3,0,3,0,0,0,0,0,3],
[0,3,3,3,3,3,0,3,0,3,3,3,3,3,3,3,0,3,0,3],
[0,0,0,0,0,0,0,3,0,0,0,3,0,3,0,0,0,0,0,0],
[0,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,0,3,0,3],
[0,0,0,3,0,3,0,0,0,0,0,3,0,3,0,0,0,0,0,0],
[0,3,3,3,3,3,3,3,3,3,0,3,3,3,0,3,0,3,0,3],
[0,0,0,3,0,3,0,3,0,0,0,3,0,0,0,3,5,0,0,3],

];
var map5 = new map(lvllayout5,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map5);
}