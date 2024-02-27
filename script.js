//your JS code here. If required.


let para=document.createElement('p'); 
para.setAttribute('id','timer'); 
let body = document.querySelector('body');
body.append(para);

setInterval(showTime,1000);

function showTime() {
	const date = new Date();
	let sec = date.getSeconds();
	let min= date.getMinutes();
	let hour = date.getHours();
	
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear(); 
	
	let str='1';
	if(min<10){
		min='0'+min;
	}
	if(sec<10){
		sec='0'+sec;
	}
	if(day<10){
		day='0'+day;
	}
	if(hour>12){
		hour = hour-12; 
		str=`${month}/${day}/${year}, ${hour}:${min}:${sec} PM`;
	}
	else {
		str=`${month}/${day}/${year}, ${hour}:${min}:${sec} AM`;
	}
	para.innerHTML=`${str}`;
}









