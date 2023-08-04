setInterval(setrelogio, 1000);
const hour=document.querySelector('[data-hora]')
const minute=document.querySelector('[data-minuto]')
const second=document.querySelector('[data-segundo]')
function setrelogio(){
	const nowDate=new Date;
	const sR=nowDate.getSeconds()/60;
	const mR=(sR+nowDate.getMinutes())/60;
	const hR=(mR+nowDate.getHours())/12;
	setRotation(hour,hR)
	setRotation(minute,mR)
	setRotation(second,sR)
}
function setRotation(element,rR){
	element.style.setProperty('--r',(rR*360));
}
setrelogio();