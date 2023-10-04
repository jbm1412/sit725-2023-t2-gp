


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (username.value == 'johncena' && password.value == 'ucantseeme') {
        window.location.href = 'profile.html';
    } else {
        window.location.href = 'loginfailed.html';
    }
});

const submitForm = function () {
    let FeedbackData = {}
    FeedbackData.fullname = $('#fullname').val()
    FeedbackData.email = $('#email').val()
    FeedbackData.description = $('#provideFeedback').val()
    console.log("Feedback Submitted Successfully: ", FeedbackData);
    postFeedback(FeedbackData);
}

function postFeedback(feedback) {
    $.ajax({
        url: '/api/feedback',
        type: 'POST',
        data: feedback,
        success: (result) => {
            if (result.statusCode === 200) {
                alert('Feedback Submitted Successfully');
                $('#fullname').val('');
                $('#email').val('');
                $('#provideFeedback').val('');
                $('.modal').modal('close');
            }
        }
    });
}

$(document).ready(function () {
    $('.modal').modal();
    $('#SubmitFeedback').click(function () {
        submitForm();
    })
});









