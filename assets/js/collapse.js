$(document).ready(function () {

    $('#airBtn').click(function () {

        $(this).addClass('active');   
        $('#airBody').show()

        $('#roadBody').hide()
        $('#roadBtn').removeClass('active');

        $('#seaBody').hide()
        $('#seaBtn').removeClass('active');

        $('#consBody').hide()
        $('#consBtn').removeClass('active');
    })



    $('#seaBtn').click(function () {
                
        $('#airBody').hide()
        $('#airBtn').removeClass('active');

        $('#roadBody').hide()
        $('#roadBtn').removeClass('active');

        $('#seaBody').show()
        $('#seaBtn').addClass('active');

        $('#consBody').hide()
        $('#consBtn').removeClass('active');
    })


    
    $('#roadBtn').click(function () {
                
        $('#airBody').hide()
        $('#airBtn').removeClass('active');

        $('#roadBody').show()
        $('#roadBtn').addClass('active');

        $('#seaBody').hide()
        $('#seaBtn').removeClass('active');

        $('#consBody').hide()
        $('#consBtn').removeClass('active');
    })


        
    $('#consBtn').click(function () {
                
        $('#airBody').hide()
        $('#airBtn').removeClass('active');

        $('#roadBody').hide()
        $('#roadBtn').removeClass('active');

        $('#seaBody').hide()
        $('#seaBtn').removeClass('active');

        $('#consBody').show()
        $('#consBtn').addClass('active');
    })


});


