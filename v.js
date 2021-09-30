document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    // Dashboard
//     const dashboard=(dashId)=>{
//     const dash=document.getElementById(dashId) 
//     if(dash){
//     dash.addEventListener("click",()=>{
//          var el=document.querySelectorAll(dashId)
         
    

//     })
//     }




    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });

    var properties = [
        'name',
        'wins',
        'draws',
        'losses',
        'total',
    ];
    
    $.each( properties, function( i, val ) {
        
        var orderClass = '';
    
        $("#" + val).click(function(e){
            e.preventDefault();
            $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
              $(this).toggleClass('filter__link--active');
               $('.filter__link').removeClass('asc desc');
    
               if(orderClass == 'desc' || orderClass == '') {
                    $(this).addClass('asc');
                    orderClass = 'asc';
               } else {
                   $(this).addClass('desc');
                   orderClass = 'desc';
               }
    
            var parent = $(this).closest('.header__item');
                var index = $(".header__item").index(parent);
            var $table = $('.table-content');
            var rows = $table.find('.table-row').get();
            var isSelected = $(this).hasClass('filter__link--active');
            var isNumber = $(this).hasClass('filter__link--number');
                
            rows.sort(function(a, b){
    
                var x = $(a).find('.table-data').eq(index).text();
                    var y = $(b).find('.table-data').eq(index).text();
                    
                if(isNumber == true) {
                            
                    if(isSelected) {
                        return x - y;
                    } else {
                        return y - x;
                    }
    
                } else {
                
                    if(isSelected) {		
                        if(x < y) return -1;
                        if(x > y) return 1;
                        return 0;
                    } else {
                        if(x > y) return -1;
                        if(x < y) return 1;
                        return 0;
                    }
                }
                });
    
            $.each(rows, function(index,row) {
                $table.append(row);
            });
    
            return false;
        });
    
    });