var w = window.innerWidth;
var h = window.innerHeight;
document.querySelector('#header').style.height = h+'px';
var bgf = document.querySelector('#header > div:nth-child(1)').offsetHeight;
document.querySelector('#bg-header-first').style.height = bgf+'px';
var bgs = document.querySelector('#header > div:nth-child(2)').offsetHeight;
document.querySelector('#bg-header-second').style.height = bgs+'px';
document.querySelector('#bg-header-second').style.top = bgf+'px';
document.querySelector('#bg-header-third').style.height = h+'px';
var bgsf = document.querySelector('#content').offsetHeight;
document.querySelector('#bg-content-first').style.top = h+'px';
document.querySelector('#bg-content-first').style.height = bgsf+'px';
//console.log(w);
switch (true) {
	case w < 1024:
		document.getElementById('wrapper').style.width = '760px';
		break;
	case w < 760:
		document.getElementById('wrapper').style.width = '424px';
		break;
	case w < 424:
		document.getElementById('wrapper').style.width = '374px';
		break;
	case w < 374:
		document.getElementById('wrapper').style.width = '319px';
		break;
}