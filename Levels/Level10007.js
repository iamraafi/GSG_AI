function Level10007(ListofLevels,floor,player,wall,enemy,endgoal,light) {var lvllayout10007=[
[3,0,0,0,0,3,0,0,0,0,0,0,0,3,3,3,3,3,3,3],
[3,3,0,3,0,3,0,3,3,0,3,3,0,3,0,0,0,0,0,3],
[0,0,0,3,0,0,0,3,0,0,0,3,0,3,0,3,3,3,0,3],
[0,3,3,3,3,3,3,3,3,3,0,3,3,3,3,0,0,0,0,3],
[0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,3,3,3,3],
[3,3,0,3,0,3,0,3,3,3,3,0,3,0,0,3,3,0,0,0],
[0,0,0,3,0,0,0,0,0,0,3,0,3,3,0,3,0,0,3,3],
[0,3,3,3,0,3,0,3,0,0,3,0,0,3,0,0,0,3,3,3],
[0,3,0,0,0,0,3,3,3,0,3,3,3,0,0,3,0,0,0,0],
[0,3,0,3,0,0,0,3,0,0,0,0,3,0,0,3,3,3,3,0],
[0,3,0,3,3,3,0,0,0,0,0,0,3,0,0,0,0,0,3,0],
[0,3,0,0,3,0,0,0,3,3,0,0,3,3,0,3,3,0,3,0],
[0,3,3,3,3,0,0,3,0,0,3,0,0,0,0,3,3,0,3,0],
[0,3,0,0,0,0,3,0,0,0,0,3,3,0,0,0,0,0,3,3],
[0,3,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3],
[0,3,0,0,0,0,3,0,3,3,3,3,0,3,3,3,0,0,0,3],
[0,3,3,3,0,3,3,0,3,0,0,3,0,3,0,3,0,3,0,3],
[0,0,3,0,0,3,0,0,3,0,3,3,0,3,0,3,0,3,0,3],
[3,5,3,0,0,3,0,0,3,0,0,0,0,3,0,3,0,0,1,3],
[3,3,3,3,0,0,0,0,3,3,3,3,3,3,0,3,3,3,3,3],

];
var map10007 = new map(lvllayout10007,floor,player,wall,enemy,endgoal,light);
ListofLevels.push(map10007);
}