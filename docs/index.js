
/*function to display hidden text and image*/
const reveal = document.getElementById('display');
const paragraph = document.getElementById('welcome');
const pic = document.getElementById('nana');

function buttonClick(){
   paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
   pic.style.display = pic.style.display === 'none' ? 'block' : 'none';
}

reveal.addEventListener('click', buttonClick);


/*function for slider menu*/
const slide = document.getElementById('slider');
const navigation = document.getElementById('links');

function buttonSlide(){
   navigation.style.display = navigation.style.display === 'none' ? 'block' : 'none';
}

slide.addEventListener('click', buttonSlide);
