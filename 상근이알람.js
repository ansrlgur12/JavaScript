let hour;
let min;
let tmp;
let alarmTime;
let alarmHour;
let alarmMin;

tmp = prompt("설정할 시간을 입력하세요(24시간제) : ", "");
hour = Number(tmp);
tmp = prompt("설정할 시간을 입력하세요(분) : ", "");
min = Number(tmp);
let time = hour*60 + min;

if(time < 45) {
    time += (24 * 60) - 45;
}else {
    time -= 45;
}
alarmHour = parseInt(time / 60);
alarmMin = time % 60;

document.write(alarmHour + "시 ")
document.write(alarmMin + "분에 알람이 설정되었습니다.")
document.write("<h2>" + `${alarmHour}시 ${alarmMin}분 ` + "</h2>");
//document.write(alarmHour + "시 ");
//document.write(alarmMin + "분에 알람이 설정되었습니다.");