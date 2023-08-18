
// $(document).ready(function() {
//     var prevSingerId = '';

//     $('.singers h3').click(function(e) {
//       var singerId = $(e.target).parent().attr('id');

//       if (prevSingerId !== '') {
//         $(`#${prevSingerId} .singerContent`).slideUp();
//       }

//       $(`#${singerId}.singerContent`).slideDown();

//       prevSingerId = singerId;
//     });
//   });

// $(document).ready(function() {
//     var totalSingers = 4;
//     var prevSingerId = '';

//     for (var i = 1; i <= totalSingers; i++) {
//       $(`#singer${i} h3`).click(function(e) {
//         var singerId = $(e.target).parent().attr('id');

//         if (prevSingerId != '') {
//           $(`#${prevSingerId} .singerContent`).slideUp();
//         }

//         $(`#${singerId} .singerContent`).slideDown();

//         prevSingerId = singerId;
//       });
//     }
//   });

$(document).ready(function () {
    var totalSingers = 4;
    var singers = [];

    for (var i = 1; i <= totalSingers; i++) {
        (function (i) {
            var singerId = `#singer${i}`;  // IDs
            var singerContent = $(`${singerId} .singerContent`);  // contents

            $(`${singerId} h3`).on('click', function () {

                if ($(singerContent).is(':visible')) {
                    $(singerContent).slideUp(600);
                }
                else {
                    for (var j = 0; j < singers.length; j++) {
                        $(singers[j]).slideUp(600);
                    }
                    $(singerContent).slideDown(600);
                }
            });

            singers.push(singerContent);
        })(i);
    }
});

let count = 0;

function getClock() {
    count++;
    let myDate = new Date();

    document.getElementById('hours').innerHTML = myDate.getHours();
    document.getElementById('minutes').innerHTML = myDate.getMinutes();
    document.getElementById('seconds').innerHTML = myDate.getSeconds();
}

let myInterval = setInterval(() => {
    getClock()
}, 0);

if (count == 100) {
    clearInterval(myInterval);
}

function closeTab() {
    let widthColors = $('#leftMenu').innerWidth();

    if ($('#leftMenu').css('display') == 'none') {
        // $('#leftMenu').css('display', `block`, function () {
        //     $('#leftMenu').animate({ left: `-${widthColors}px` }, 500)
        // })
        $('#leftMenu').fadeIn(500);
        $('span h5').animate({ left: `${widthColors}px` }, 500)
        $('span h5').text('☰ close');
    }
    else {
        // $('#leftMenu').css('display', `none`, function () {
        //     $('#leftMenu').animate({ left: `0px` }, 500)
        // })
        $('#leftMenu').fadeOut(500);
        $('span h5').animate({ left: `20px` }, 500)
        $('span h5').text('☰ open');
    }
}

$('span h5').on('click', function () {
    closeTab()
})

$('.closeBtn').on('click', function () {
    closeTab()
})



let emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

let myEmail = document.querySelector('input[type="email"]');

myEmail.addEventListener('input', function () {
    if (emailRegex.test(myEmail.value)) {
        myEmail.classList.remove('is-invalid');
        myEmail.classList.add('is-valid');
    }
    else {
        myEmail.classList.add('is-invalid');
        myEmail.classList.remove('is-valid');
    }
})