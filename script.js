let bg_color = prompt('Вкажіть колір фону для сторінки');
let type_font = prompt('Введіть тип шрифту serif, sans-serif, monospace');
let align_h1 = prompt('Вкажіть вирівнювання для h1');
let bg_color_link = prompt('Вкажіть колір фону для параграфу з посиланнями');
let color_text_link = prompt('Введіть колір тексту для параграфа з посиланнями');
let color_link = prompt('Вкажіть колір посилань');
let color_text_div = prompt('Вкажіть колір тексту у елементі div');
let size_text_div = prompt('Вкажіть розмір тексту у елементі div');
let bold_text_div = prompt('Вкажіть товщину тексту у елементі div');
let type_marker= prompt('Вкажiть тип маркеру у маркованому списку circle, disc, square');


document.body.style.background = bg_color;
document.body.style.fontFamily = type_font;
document.body.firstElementChild.align =align_h1;
document.body.firstElementChild.nextElementSibling.style.background = bg_color_link;

let p_link = document.querySelector('p');
p_link.style.color = color_text_link;

let a_link = document.getElementsByTagName('a');
for (let i=0; i<a_link.length; i++) {
    a_link[i].style.color = color_link;
}
let div_elem = document.querySelector('div');
div_elem.style.color = color_text_div;
div_elem.style.fontSize = size_text_div;
div_elem.style.fontWeight = bold_text_div;

let li_div_elem =document.querySelector('ul');
li_div_elem.style.listStyle = type_marker;


let a1 = prompt('Вкажіть посилання на перший сайт');
let a2 = prompt('Вкажіть посилання на другий сайт');
let a3 = prompt('Вкажіть посилання на третій сайт');
let a_link1 = document.querySelector('a:nth-of-type(1)');
a_link1.textContent=a1;
a_link1.href = `http://www.${a1}`;
a_link1.target= '_blank';
let a_link2 = document.querySelector('a:nth-of-type(2)');
a_link2.textContent=a2;
a_link2.href = `http://www.${a2}`;
a_link2.target= '_blank';
let a_link3 = document.querySelector('a:nth-of-type(3)');
a_link3.textContent=a3;
a_link3.href = `http://www.${a3}`;
a_link3.target= '_blank';