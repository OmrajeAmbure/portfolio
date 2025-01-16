$(document).ready(function () {
    $('.progress-bar').each(function () {
        var max = $(this).data('max');
        $(this).animate({
            width: (max / 6) * 100 + '%'
        }, {
            duration: 2000,
            step: function (now) {
                $(this);
            }
        });
    });
});

$(document).ready(function () {
    $('.toggle-button').click(function () {
        $('.nav_item').toggleClass('expanded');
    });
});

$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name && email && message) {
            $('#contactForm').fadeOut(500, function () {
                $(this).html('<div class="alert alert-success">Thank you for contacting us, ' + name + '!</div>').fadeIn(500);
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
});


$(document).ready(function () {
    $(".navbar").hide().fadeOut({
        duration: 2000,
    }).fadeIn(2000)
    $(".my-name").hide().slideDown(2000);
    $(".my-intro").hide().slideDown(2000);
    $(".my-headline").hide().slideDown(2000);
    $(".img-edit").animate({
        width: "300px"
    }, 2000)
});

$(document).ready(function () {
    $('.footer a').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
});

$(document).ready(function () {
    $('.nav_item a').hover(
        function () {
            $(this).addClass('hovereds');
        },
        function () {
            $(this).removeClass('hovereds');
        }
    );
});

$(document).ready(function () {
    $(".skills_page").hide().slideDown(2000);
});

$(document).ready(function () {
    $(".tolls").hide().slideDown(2000);
});
