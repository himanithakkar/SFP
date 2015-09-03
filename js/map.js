var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/deodorant/Revo-Deodorant-spray-Violet-500x500.min-400x400.png',
            w: 400,
            h: 400
        },
        {
            src: 'mg/deodorant/Revo-Deodorant-spray-Violet-500x500.min-400x400.png',
            w: 400,
            h: 400
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;