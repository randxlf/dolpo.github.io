// WAYV
// Open popup when clicking on an image
document.querySelectorAll('.imgcontainerwayv .imagewayv img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-imagewayv').style.display = 'block';
        document.body.classList.add('popup-open'); // Add class to body
        const popupImage = document.querySelector('.popup-imagewayv img');
        popupImage.src = image.getAttribute('src');
        popupImage.style.width = "60%";
        popupImage.style.height = "auto";
    };
});

// Close popup when clicking on 'x' button
document.querySelector('.popup-imagewayv span').onclick = () => {
    document.querySelector('.popup-imagewayv').style.display = 'none';
    document.body.classList.remove('popup-open'); // Remove class from body
};

// GCC
// Open popup when clicking on an image
document.querySelectorAll('.imgcontainergcc .image img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.body.classList.add('popup-open'); // Add class to body
        const popupImage = document.querySelector('.popup-image img');
        popupImage.src = image.getAttribute('src');
        popupImage.style.width = "80%";
        popupImage.style.height = "auto";
    };
});

// Close popup when clicking on 'x' button
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
    document.body.classList.remove('popup-open'); // Remove class from body
};

// REGFORM
// Open popup when clicking on an image
document.querySelectorAll('.imgcontainerregform .imagerf img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-imagerf').style.display = 'block';
        document.body.classList.add('popup-open'); // Add class to body
        const popupImage = document.querySelector('.popup-imagerf img');
        popupImage.src = image.getAttribute('src');
        popupImage.style.width = "80%";
        popupImage.style.height = "auto";
    };
});

// Close popup when clicking on 'x' button
document.querySelector('.popup-imagerf span').onclick = () => {
    document.querySelector('.popup-imagerf').style.display = 'none';
    document.body.classList.remove('popup-open'); // Remove class from body
};

// send email
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    var recipientEmail = document.getElementById("email").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var phoneNumber = document.getElementById("phone").value;
    var textareaContent = document.getElementsByName("feedback")[0].value;

    var emailBody = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .section {
                    margin-bottom: 20px;
                }
                .section strong {
                    display: inline-block;
                    width: 120px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h2>Contact Form Submission</h2>
            <div class="section">
                <strong>First Name:</strong> ${firstName}
            </div>
            <div class="section">
                <strong>Last Name:</strong> ${lastName}
            </div>
            <div class="section">
                <strong>Email:</strong> ${recipientEmail}
            </div>
            <div class="section">
                <strong>Phone:</strong> ${phoneNumber}
            </div>
            <div class="section">
                <strong>Message:</strong>
                ${textareaContent}
            </div>
        </body>
        </html>
    `;

    Email.send({
        SecureToken: "f195bfec-c2f9-4b76-a99c-96c506bdf124",
        To: 'ranrivera15@gmail.com',
        From: "ranrivera15@gmail.com",
        Subject: "dolpo.github.io",
        Body: emailBody,
        "Content-Type": "text/html; charset=utf-8"
    }).then(
        function (message) {
            alert(message);
        }
    );
});







