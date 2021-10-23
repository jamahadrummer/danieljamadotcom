console.log('Start Script');
const headerLeftBtn = document.getElementById('headerLeftBtn');
const content2btn1 = document.getElementById('content2btn1');
const content2btn2 = document.getElementById('content2btn2');
const content2btn3 = document.getElementById('content2btn3');
const content2btn4 = document.getElementById('content2btn4');

const pageTurn = (pageName) => {
	location.href = pageName;
};

headerLeftBtn.addEventListener('click', () => {
	pageTurn('index.html');
});

content2btn1.addEventListener('click', () => {
	pageTurn('https://www.flickr.com/jamahadrummer');
});

content2btn2.addEventListener('click', () => {
	pageTurn('https://wwww.instagram.com/jamahadrummer');
});

content2btn3.addEventListener('click', () => {
	pageTurn('https://jamadaniel.wixsite.com/sound-designer');
});

content2btn4.addEventListener('click', () => {
	pageTurn('https://github.com/jamahadrummer');
});

console.log('End Script');
