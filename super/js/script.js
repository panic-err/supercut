$( document ).ready(function() {
  $('.content').style.cssText = 'background-color: SlateGray;';
  $('.content').style.cssText = 'margin: 0 auto;';
    baguetteBox.run('.gallery');
}); //this is a callback! A self contained system of,
//when the document is ready, execute this anonymous
//function! Which happens to be all of the javascript
//required when the page is ready and done loading!