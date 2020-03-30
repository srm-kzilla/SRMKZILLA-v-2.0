$(function myshuffle() {

    var container = $("#shuffled");
    container.shuffleLetters();
    setTimeout(function () {
        container.shuffleLetters({
            "text": "SRMKZILLA"
        });

    }, 6000);

});
$(document).ready(function () {
    $(window).scroll(function (e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', (scrolled * 0.0315) + 'rem');
    };
});

$(document).ready(function(){
    $('.kz-banners, .kz-banners2, .kz-banners3').hover(
        function(){
            $('.kz-virtues').addClass('kz-opaq');
        },
        function(){
            $('.kz-virtues').removeClass('kz-opaq');
        }
    )
})

$(document).ready(function(){
    $('#kz-banners').hover(
        function(){
            $('#kz-ban1').addClass('kz-opaq');
        },
        function(){
            $('#kz-ban1').removeClass('kz-opaq');
        }
    )
})

$(document).ready(function(){
    $('.kz-banners2').hover(
        function(){
            $('#kz-ban2').addClass('kz-opaq');
        },
        function(){
            $('#kz-ban2').removeClass('kz-opaq');
        }
    )
})

$(document).ready(function(){
    $('#kz-banners3').hover(
        function(){
            $('#kz-ban3').addClass('kz-opaq');
        },
        function(){
            $('#kz-ban3').removeClass('kz-opaq');
        }
    )
})
//MozBar Animation
var text = 'FEST';
var text2 = 'HACK';
var speed = 80;
var chars = text.split('');
var chars2 = text2.split('');
var container = document.getElementById("Fest");

var i = chars.length;
var x = 1;

function setDeceleratingTimeout(callback, factor, times)
{
    var internalCallback = function(tick, counter) {
        return function() {
            if (++tick >= 0) {
                window.setTimeout(internalCallback, speed);
                callback();
            }
        }
    }(times, 0);

    window.setTimeout(internalCallback, factor);
};

// console.log() requires firebug    
setDeceleratingTimeout(function(){ 
	if (i < chars.length) {
        speed = 200;
        if( x == 1 ){
            container.innerHTML += chars[i++];
        }
        else{
            container.innerHTML += chars2[i++];
        }
        if( i == chars.length - 1){
        	speed = 2000;
        }
        
    } else {
          i = 0;
          if( x == 1 ){
              x = 2;
          }
          else{
              x = 1;
          }
        container.innerHTML = "";
    }
}, 10, speed);

setInterval(function(){
    $('.kz-mozbar').toggleClass('mozbar-alt');
}, 2810)


$("#openScratch").click(function(){
    $('#overlay').css('display','block');
    let txt = $('#Fest').text();
    if(txt[0]=='H'){     
        $('#scratchImg').attr("src","./assets/img/scratch_image1.jpeg"); 
        $('#routeTo').attr("href","https://mozohack.srmkzilla.net");
    }
    else{
        $('#scratchImg').attr("src","./assets/img/scratch_image2.jpeg");  
        $('#routeTo').attr("href","https://mozofest.srmkzilla.net");
    }
});



$(document).ready(function(){
    var isDrawing, lastPoint;
    var container    = document.getElementById('js-container'),
        canvas       = document.getElementById('js-canvas'),
        canvasWidth  = canvas.width,
        canvasHeight = canvas.height,
        ctx          = canvas.getContext('2d'),
        brush        = new Image();
        

    ctx.beginPath();
    ctx.rect(0, 0, canvasHeight, canvasWidth);
    ctx.fillStyle = "#f47621";
    ctx.fill();
    
    brush.src ='./assets/img/brush.png'
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('touchstart', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);

    function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    function angleBetween(point1, point2) {
    return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }

    function getFilledInPixels(stride) {
    if (!stride || stride < 1) { stride = 1; }
    
    var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
        pdata    = pixels.data,
        l        = pdata.length,
        total    = (l / stride),
        count    = 0;
    
    // Iterate over all pixels
    for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
        count++;
        }
    }
    
    return Math.round((count / total) * 100);
    }

    function getMouse(e, canvas) {
    var offsetX = 0, offsetY = 0, mx, my;

    if (canvas.offsetParent !== undefined) {
        do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
    }

    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;

    return {x: mx, y: my};
    }

    function handlePercentage(filledInPixels) {
        filledInPixels = filledInPixels || 0;
        if (filledInPixels > 40) {
            canvas.parentNode.removeChild(canvas);
            $('#scratch-card-title').html(`Click the image to go to the Portal`);
        }
    }

    function handleMouseDown(e) {
    isDrawing = true;
    lastPoint = getMouse(e, canvas);
    }

    function handleMouseMove(e) {
    if (!isDrawing) { return; }
    
    e.preventDefault();

    var currentPoint = getMouse(e, canvas),
        dist = distanceBetween(lastPoint, currentPoint),
        angle = angleBetween(lastPoint, currentPoint),
        x, y;
    
    for (var i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.globalCompositeOperation = 'destination-out';
        if(window.screen.width >= 756)
        y=y-window.scrollY;
        ctx.drawImage(brush, x, y);
    }
    
    lastPoint = currentPoint;
    handlePercentage(getFilledInPixels(32));
    }

    function handleMouseUp(e) {
    isDrawing = false;
    }
});