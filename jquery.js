// ! SELECTING ELEMENT, USING $ ('tag name or class name or id')
// TODO: selection tag name h1:
$('h1'); //* the same but shorter. Get back jQuery object
// S.fn.init [h1#firstHeading.firstHeading, prevObject: S.fn.init(1)]
document.querySelectorAll('h1'); //* Get back NodeList. This DOM ojbect
// TODO: If you want to get back to DOM onbject, using .get():
$('h1').get();
// [h1#firstHeading.firstHeading]
$('h1').get(0); //* fist element of h1 DOM
// TODO: selecting li inside ul tag:
$('ul li');
// TODO: selecting imgages:
$('img');
// TODO: select ODD image:
$('img:odd'); //select middle image
// TODO: select EVEN image:
$('img:even'); //select the others
// TODO: select EVERYTHING
$('*');

// ! jQuery Methods - Common jQuery methods: .val(), .text(), attr(), .html():
//TODO: .text() get combined text inside the selected element:
$('h1').text(); //"Piton de la Fournaise"
//TODO: .text() get combined text inside the selected element and changing to another text:
// $('h1').text('VOCANOES');
// $('li').text('I AM LI');

// TODO: .html() Get the HTML contents of the first element in the set of matched elements.
// $('li').html(); //"<a href="#Geology"><span class="tocnumber">1</span> <span class="toctext">Geology</span></a>"
// $('li').html('<b>BOLD</b>');

//TODO: .attr() Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
// $('a').attr('href'); //"/wiki/French_language"
// $('a').attr('href', "http://google.com"); //* select and change value of the all attributes.
// $('a').attr('title'); //"French language"

//* We can select and change src attribute and alt attribute with an object.
// const newAttrs = { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg/540px-Piton_de_la_Fournaise%2C_R%C3%A9union_Island_%28High_Resolution%29.jpg",
//                     alt: "Lava Flows"}
// $('img').attr(newAttrs);

//TODO: .val() get the current value of the first element in the set of matched elements or set the value of every matched element.
$('input').val();
$('input').val(''); // resetl all input at once
// $('input').val("Your Name"); //* set the value of all matched elements.
//TODO: .eq() - index and .val() if you want to get or set specific input.
// $('input').eq(1).val();
// $('input').eq(1).val("Put your name");

//! CSS() METHODS TO GET COMPUTED STYLE. OR STYLING SELECTED ELEMENTS.
//TODO: css() Get computed value of color of the first achor tag <a>:
// $('a').css('color'); //"rgb(0, 0, 238)"
// $('a').css('font-size'); //"16px"
// $('a').css('font-size', '20px') //* Set font-size as sendcond argument to 20px for all achor tag.
// //* Can pass many properties at once as an object. Every achor tags are applied those CSS style.
// const bigTealsStyles = {color: "teal", 'font-size': '40px'};
// $('a').css(bigTealsStyles);

//! addClass(), removeClass(), toggleClass():
// TODO: addClass() to apply class style on the css file to the selected element
$('h1').addClass('highlight');
// TODO: removeClass() to remove class style on the css file to the selected element
$('h1').removeClass('highlight');
//TODO: toggle() to switch whether apply class or not:
$('h1').toggleClass('highlight');

//! CHAINGING WITH JQUERY: WE CAN ADD MANY METHODS ON ONE LINE 
const $h1 = $('h1').css('background-color','teal').addClass('highlight').text('CHAINING JQUERY');
// HUU LAM NGUYEN
// $('a').css('background-color','teal').addClass('highlight').text('CHAINING JQUERY');

//! TRAVERSAL METHODS: find(), parent(), next(), previous(), closest()
//TODO: select a specific element li in all (li)s, using eq():
const $specialLi = $('li').eq(3);
//TODO: next() retrieve the NEXT sibling or NEXT li:
$specialLi.next();
$('li').next(); //* We can find multiple items
//TODO: prev() retrieve the PREVIOUS sibling or PREVIOUS li:
$specialLi.prev();
//TODO: parent() get the parent element of the selected element:
$specialLi.parent(); //ul
$('li a').parent(); //* Get all parent of a coressponding achor tag.
//TODO: childer() get the children element of selected element. NOTE: only direct children
$('ul').children(); //* only get 7 direct childrens
$('ul').children('li'); //* We can find specific children by passing the tag.
//TODO: find() get ALL the children we specific tag:
$('ul').find('a');

//! CREATING ELEMENTS BY JQUERY AND APPEDNING THEM
//TODO: append() add new element at the end INSIDE selected element:
//? OPTION ONE: NOT RECOMMEND TO WRITE IN COMPLEX CODE
$('ul').append('<li class="highlight">This is new Li</li>');
$('li').append('<input type="checkbox"/>');
//? OPTION TWO:
$('<h1>GOODBYE</h1>').css('color', 'pink').appendTo('p'); //* add to the end of inside every p elements.

//TODO: prepend() add new element at the beginning INSIDE the selected element:
//? OPTION ONE: NOT RECOMMEND TO WRITE IN COMPLEX CODE
$('li').prepend('<input type="checkbox"/>');
//? OPTION TWO:
$('<h1>HELLO</h1>').css('color', 'pink').prependTo('p'); //* add to the beginning of inside every p elements.

//TODO: after() add sibling after an element.
$('li').after('<b>BOLD TEXT</b>');

//TODO: remove() to remove all selected matched elements.
// $('h1').remove(); //* remove all h1s
// $('img').remove(); //* remove all images

//! EVENTS AND DELEGATION IN JQUERY (DELEGATION IS AN EVENT THAT NOT APPEAR YET ON THE PAGE)
//TODO: click() and on('click', callback) on a selected element
// $('img').eq(0).click(function(){
//   alert ('THIS IS AN IMAGE ONE');
// });
// $('img').eq(1).on("click",function(){
//   alert ('THIS IS AN IMAGE TWO');
// });
// $('img').eq(2).on("mouseleave",function(){
//   alert ('THIS IS AN IMAGE THREE');
// });
//* click() and on("click") will both get the job done. However, there are some different:
      //* .click(callback) is a shorthand for .on("click", callback).
      //* BETTER: on() can accpet optional argument between type of event and callback. It helps to leverage event delegation.

//TODO: add border to the image when enter a mouse.
$('img').eq(0).on("mouseenter", function(){
  $(this).css('border', '2px solid red');
});
//TODO: remove the image when click on it.
// $('img').eq(1).on("click", function(){
//   $(this).remove();
// });

//TODO: click on add-input button, then add text input.
$('#add-input').on("click", function(){
  $('form').append('<input type="text" />');
}); 

//TODO: val() focus on an input, it will fill out the input automatically.
$('input').on("focus", function(){
  $(this).val("PLAPLAPLA");
});

//TODO: EVENT DELEGATION, add input for the append elements.
$('form').on('focus', 'input', function(){
  $(this).val('PLAPLAPLA');
}); 
//* select parent element, when we focus on the input, it will fill out automatically even though with append element.
//* "this" belongs to the the clicked element not the parent element.

//! JQUERY ANIMATION
//TODO: fadeOut() with 2 seconds (2000ms), then remove the image.
// $('img').on('click', function(){
//   $(this).fadeOut(2000, function (){
//     $(this).remove();
//   });
// });

//TODO: fadeOut() and then fadeIn():
// $('img').on('click', function(){
//   $(this).fadeOut(500)
// });
//TODO: fadeIn();
// $('img').on('click', function(){
//   $(this).fadeIn(500);
// });

//TODO: animate():
$('img').on('click', function(){
   $(this).animate({
     opacity: 0.2,
     width: '50px' //! DO NOT ANIMATE WIDTH (POOR PERFORMENCE)
   }, 3000, function(){
     $(this).remove();
   });
}); //* click on images, change opacity and width within 3 seconds and remove it away. 







