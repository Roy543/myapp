$(document).ready(function () {
    $('#login-form').on('submit', function (e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        $.post('/login', { username: username, password: password })
            .done(function (data) {
                alert('Login successful!');
                window.location.href = '/profile';
            })
            .fail(function (err) {
                // Handle error, e.g., display error message
                alert('Error: ' + err.responseText);
            });
    });
});
