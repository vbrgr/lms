$(document).on('click','.star-ir-side',function(){
    $(this).find('i').toggleClass('fa-star-o fa-star');
    if($(this).find('i').hasClass('fa-star-o')){
      $(this).find('i').attr('data-original-title','Add to Favorites');
    }else{
      $(this).find('i').attr('data-original-title','Remove from Favorites');
    }
});

$(document).on('click','.close-icon',function(e){
  e.stopPropagation();
  if (confirm("Are you sure you want to remove?")) {
    $(this).parent('li').remove();
  }
});
