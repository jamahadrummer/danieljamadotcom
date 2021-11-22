console.log('Start Script');
const headerLeftBtn = document.getElementById('headerLeftBtn');
const iconBtn1 = document.getElementById('iconBtn1');
const iconBtn2 = document.getElementById('iconBtn2');
const iconBtn3 = document.getElementById('iconBtn3');
const iconBtn4 = document.getElementById('iconBtn4');

const pageTurn = (pageName) => {
	location.href = pageName;
};

const extLink = (pageURL) => {
	window.open(pageURL, '_blank');
};

headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

iconBtn1.addEventListener('click', () => {
	extLink('https://www.flickr.com/jamahadrummer');
});

iconBtn2.addEventListener('click', () => {
	extLink('https://www.instagram.com/jamahadrummer');
});

iconBtn3.addEventListener('click', () => {
	extLink('https://jamadaniel.wixsite.com/sound-designer');
});

iconBtn4.addEventListener('click', () => {
	extLink('https://www.github.com/jamahadrummer');
});

console.log('End Script');
