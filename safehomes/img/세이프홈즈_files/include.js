// window.addEventListener('load',()=>{
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status == 200) {
//                     el.outerHTML = this.responseText;
//                 }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });
// });
window.addEventListener('load',()=>{
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            fetch(`./${includePath}`).then(response => {
                return response.text()
            }).then(data => {
                if (includePath == 'header.html') {
                    document.querySelector('header').innerHTML = data
                    header_ready()
                } else {
                    document.querySelector('footer').innerHTML = data
                }
            })
        }
    })
})

function header_ready() {
    $(function(){
        var rollHeader = 100;
        $(window).scroll(function() {
        var scroll = getCurrentScroll();
            if ( scroll >= rollHeader ) {
                $('#header').addClass('roll');
            }
            else {
                $('#header').removeClass('roll');
            }
        });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    $(document).ready(function() {
        $('.m_menu_btn').bind('click', function(){
            $(this).toggleClass('on');
            $('.total').toggleClass('on');
            $('body').toggleClass('split');
            if($('.total').hasClass('on')) {
                $('#m_gnb').animate({top:'60px'}, 200);
                $('#m_gnb').css('display', 'block');
                $('.m_mask').css('display', 'block');
            }else {
                $('body').removeClass('split');
                $('#m_gnb').animate({top:'-100%'});
                $('#m_gnb').css('display', 'none');
                $('.m_mask').css('display', 'none');
            }
            return false;
        });
    });
}

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});