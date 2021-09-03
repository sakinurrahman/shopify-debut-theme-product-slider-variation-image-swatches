//Add this code into the _onSelectChange function
     //alert(variant['featured_media']['id']);
     // document.querySelector('[href=".Media' + variant['featured_media']['id'] + '"]').click();
     if ($(".Media" + variant.featured_media.id).hasClass("slick-current")) {
        
    } else {
       
       $(".Media" + variant.featured_media.id).click(); }
  }