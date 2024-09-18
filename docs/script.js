/*function for slider menu*/
const slide = document.getElementById('slider');
const navigation = document.getElementById('links');

function buttonSlide(){
   navigation.style.display = navigation.style.display === 'none' ? 'block' : 'none';
}

slide.addEventListener('click', buttonSlide);
