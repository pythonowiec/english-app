$(function() {
    function delete_words(url, data) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajaxSetup({
                    headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
               $.ajax({
                    method: "POST",
                    url: url,
                    data: { id: data }
                })
                .done(function(response) {
                    window.location.reload();
                })
                .fail(function (response) {
                    alert(response);
                });
          }

        });
    }
    $('.delete-btn').click(function() {
        delete_words("/dictionaries/delete", $(this).data("id"));
    });
    $('.delete-all').click(function() {
        delete_words("/dictionaries/delete", "all");
    });
});