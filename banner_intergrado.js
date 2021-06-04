// intergrado para portal
$(document).ready(function(){
<!-- area para os banners/java -->
  $( "div[name*='wrap-ad-header'] ").html('<div id="billboard_destaque"></div>');
<!-- area de banner dentro da noticia  -->	
var divbanner0= $('<div id="mrec_destaque"> </div>');	
var divbanner1= $('<div id="intext1"> </div>');
var divbanner2= $('<div id="intext2"> </div>');
var divbanner9= $('<div id="intext3"> </div>');
$('.ol-article-body').find('p:nth-child(1)').before(divbanner0);
$('.ol-article-body').find('p:nth-child(3)').after(divbanner1);
$('.ol-article-body').find('p:nth-child(7)').after(divbanner2);
$('.ol-article-body').find('p:nth-child(10)').after(divbanner9);
	
	<!-- area de banner dentro da lista de noticias  -->	

var divultimas = $('.ContainerWithImage_titulo').text();  // controle de modelo de publidade
if(divultimas!=''){	
$('.ContainerWithImage_listaint').find('.teaser-featured')[4].insertAdjacentHTML('beforeBegin', '<div id="middle1"></div>');
$('.ContainerWithImage_listaint').find('.teaser-featured')[8].insertAdjacentHTML('beforeBegin', '<div id="middle2"></div>');	
//$('.ContainerWithImage_listaint').find('div:nth-child(9)').after(divmiddlelista2);
$('.ContainerWithImage_listaint').find('.teaser-featured')[12].insertAdjacentHTML('beforeBegin', '<div id="middle3"></div>');
//$('.ContainerWithImage_listaint').find('div:nth-child(13)').after(divmiddlelista3);
}
});

// criação da meta tags
$(document).ready(function(){

var url_v = $('meta[property="og:url"]').attr('content'); // pega meta
var autor=$('.author').text();
var area=url_v.split('/');
var area_v = area.filter(e => e !== 'https:' && e !== 'http:' && e !== '' && e ); // filtra os vetores
var qtd_v=area_v.length; // total de vetores

var editoria;
var subeditoria;
var id_v;	
	

switch(qtd_v){
 case 1:
editoria="HOME";
subeditoria="HOME";
break;
case 2:
editoria=area[area.length-1];
subeditoria="HOME";
break;
case 3:
editoria=area[area.length-2];
subeditoria='erro';		
id_v=area[area.length-1];
break;
case 4:
editoria=area[area.length-3];
subeditoria=area[area.length-2];
id_v=area[area.length-1];
break;
}


$('<meta>',{ content:editoria, name:'sectionname' }).appendTo('head');
$('<meta>',{ content:subeditoria,name:'sectionclass' }).appendTo('head');
$('<meta>',{ content:autor,name:'author'} ).appendTo('head');
$('<meta>',{ content:id_v,name:'articleid'}).appendTo('head');

});
