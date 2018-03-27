function general() {
    $('#cars-sliders').on('scrollSpy:enter', function() {
        $('#header').removeClass('header-bg-color');

    });

    $('#cars-sliders').on('scrollSpy:exit', function() {

        $('#header').addClass('header-bg-color');


    });

    $('#cars-sliders').scrollSpy();
}