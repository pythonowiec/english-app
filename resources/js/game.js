const { valHooks } = require("jquery");

$(function() {
    $('#play').click( () => {
        $('#play').remove();
        let dictionary =  $('.nav-link.active').text();
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
        $.ajax({
            method: "POST",
            url: '/play',
            data: { dictionary: dictionary }
        })
        .done(function(response) {
            $('.table').remove();
            $('#myTab').remove();
            $('#add').remove();

            let index = Math.floor(Math.random() * response['words'].length);
            let polish =  response['words'][index]["polish"];
            let english =  response['words'][index]["english"];


            // Swal.fire({
            //     title: `Enter a translation from Polish ${ polish }`,
            //     input: 'text',
            //     inputLabel: 'English:',
            //     inputValidator: (value) => {
            //         if (!value) {
            //             return 'You need to write something!'
            //         }
            //         if(value.toUpperCase() == english.toUpperCase()){
            //             Swal.fire({
            //                 icon: 'success',
            //                 title: 'Correct !!!'
            //             })
            //         }
            



            // })
            $('#myTabContent').append(`
            <div class="alert alert-dark alert-dismissible fade show" role="alert">
                Enter a translation from Polish <strong id="polish">${ polish }</strong>
                <div class="input-group input-group-sm mt-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">English</span>
                    </div>
                    <input type="text" id="english" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <br><button type="submit" id="check" class="btn btn-primary mt-4">Check</button>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `)
            const audio = new Audio('sounds/success.wav');
            const audio1 = new Audio('sounds/wrong.wav');

            const points = response['words'].length;
            let mistakes = 0;

            $('#check').bind("click", () => {
                let value = $('#english').val();
                    if(value.toUpperCase() === english.toUpperCase()){
                        response['words'].splice(index, 1);
                        audio.play();
                        if(response['words'].length != 0){
                            index = Math.floor(Math.random() * response['words'].length);
                            polish =  response['words'][index]["polish"] ?? "";
                            english =  response['words'][index]["english"] ?? "";
                            Swal.fire({
                                icon: 'success',
                                title: 'Correct !!!',
                                showConfirmButton: false,
                                timer: 600
                            })
                        }else{
                            Swal.fire({
                                title: 'Well done !!!',
                                text: `You score ${points - mistakes} points of ${points}`,
                                imageUrl: 'images/cup.jpg',
                                imageWidth: 200,
                                imageHeight: 200,
                                allowOutsideClick: false
                            
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.reload(true);
                                }
                            });
                        }

                        $('#english').val("");
                        $('#polish').text(polish);

                    }else{
                        console.log(response['words'])
    
                        index = Math.floor(Math.random() * response['words'].length);
                        polish =  response['words'][index]["polish"];
                        english =  response['words'][index]["english"];
                        mistakes ++;
                        audio1.play();
    
                        Swal.fire({
                            icon: 'error',
                            title: 'Incorrect !!!',
                            showConfirmButton: false,
                            timer: 600
                        })
    
                        $('#english').val("");
                        $('#polish').text(polish);
                    }
                    
            });
        })
        .fail(function (response) {
            alert("ERROR");
        });
    });
});