import $ from 'jquery';

var menu = false;
var tempoOut = 0;
var tempoIn = 0;

export function mouseEnter(e) {
    if (!menu) {
        menu = true;
        if ($(window).width() > 670) {
            $("#wrapper").removeClass("toggled");
        }
        expandeMenu();
    }
}

export function mouseLeaves(e) {
    if (menu) {
        menu = false;
        if ($(window).width() > 670) {
            $("#wrapper").addClass("toggled");
            recolheMenu();
        }

        //$('.panel-collapse').removeClass('in');
    }

};

export function expandeMenu() {
    $('.nome').removeClass('hidden');
    $('.cargo').removeClass('hidden');
    $('.ultimo-acesso').removeClass('hidden');

    $('.profile').css({'padding-top': '5px'});
    $('.sidebar').css('width', '270px');
    $('#sidebar-wrapper').css('margin', '0px 20px');
    $('.dropdown-submenu span').css('display', 'inline');
    /*$('.dropdown-submenu .collapse').css('display','block');*/
    menuHover();

}

export function recolheMenu() {
    $('.nome').addClass('hidden');
    $('.cargo').addClass('hidden');
    $('.ultimo-acesso').addClass('hidden');

    $('.sidebar').css('width', '70px');
    $('.profile').css({'padding-top': '30px'});
    $('#sidebar-wrapper').css('margin', '0px');
    $('.dropdown-submenu span').css('display', 'none');
    /* $('.panel-collapse').css('border', '1px solid red'); */
    /*$('.dropdown-submenu .panel-collapse').css('display','none');*/
    menuOut();
}

export function menuHover() {
    $('.menu hr').css({
        'margin-top': '13px',
        'margin-bottom': '14px',
        'margin-right': '35px',
        'margin-left': '0px'
    });
}

export function menuOut() {
    $('.menu hr').css({
        'margin-top': '-5px',
        'margin-bottom': '15px',
        'margin-right': '0px',
        'margin-left': '10px'
    });

    $('.dropdown-submenu .collapse').removeClass('in');
}