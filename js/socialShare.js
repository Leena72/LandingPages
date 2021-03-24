var p5_content=document.getElementById('p5-content').innerText
var p14_content=document.getElementById('p14-content-1').innerText + document.getElementById('p14-content-2').innerText +' '+document.getElementById('p14-content-3').innerText;
var p15_content=document.getElementById('p15-content-1').innerText + document.getElementById('p15-content-2').innerText
var p16_content=document.getElementById('p16-content').innerText
var p16B_content=document.getElementById('p16B-content').innerText
var p18_content="https://leena72.github.io/LandingPages/Files/Infosys_Race%20Track_Mob%20Version.pdf"
   // js for share on twitter and linkedin
		
   document.addEventListener("DOMContentLoaded", function (event) {
    var buttons = document.querySelectorAll(".sharer");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if($(this).hasClass('dataShare')){
                return JSShare.go(this , {'title': p5_content});
            }
            else if($(this).hasClass('dataShare-14')){
                return JSShare.go(this , {'title': p14_content});
            }
            else if($(this).hasClass('dataShare-15')){
                return JSShare.go(this , {'title': p15_content});
            }
            else if($(this).hasClass('dataShare-16')){
                return JSShare.go(this , {'title': p16_content});
            }
            else if($(this).hasClass('dataShare-16B')){
                return JSShare.go(this , {'title': p16B_content});
            }
            else if($(this).hasClass('dataShare-18')){
                return JSShare.go(this , {'title': p18_content});
            }
            else{   return JSShare.go(this )}
         
        }, false);
    }
});