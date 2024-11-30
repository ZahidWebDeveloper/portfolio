function openPDF() {
    window.open('ZahidSulemanCV.pdf', '_blank');
}
//
let menuitem = document.querySelector('#menu-item');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};

menuitem.onclick = () => {
    menuitem.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//

function send() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var textarea = document.getElementById("textarea").value.trim();

    if (!name) {
        swal({
            title: "Error!",
            text: "Name is required to send a message.",
            icon: "error",
            button: "OK"
        });
        return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        swal({
            title: "Error!",
            text: "A valid email is required to send a message.",
            icon: "error",
            button: "OK"
        });
        return;
    }
    if (!phone || !/^\d{10,15}$/.test(phone)) {
        swal({
            title: "Error!",
            text: "A valid phone number is required to send a message.",
            icon: "error",
            button: "OK"
        });
        return;
    }
    if (!subject) {
        swal({
            title: "Error!",
            text: "Subject is required to send a message.",
            icon: "error",
            button: "OK"
        });
        return;
    }
    if (!textarea) {
        swal({
            title: "Error!",
            text: "Message cannot be empty.",
            icon: "error",
            button: "OK"
        });
        return;
    }

    var body = `
        <strong>Name:</strong> ${name} <br/>
        <strong>Email:</strong> ${email} <br/>
        <strong>Phone Number:</strong> ${phone} <br/>
        <strong>Subject:</strong> ${subject} <br/>
        <strong>Message:</strong> ${textarea}
    `;

    Email.send({
        SecureToken: "2a4ba0e2-a451-419c-b663-e40f3d1adc26",
        To: "zahidsuleman65@gmail.com",
        From: "zahidsuleman65@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        response => {
            if (response === "OK") {
                swal({
                    title: "Success!",
                    text: "Your message has been sent successfully.",
                    icon: "success",
                    button: "OK"
                }).then(() => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("subject").value = "";
                    document.getElementById("textarea").value = "";
                });
            } else {
                swal({
                    title: "Error!",
                    text: "There was an issue sending your message. Please try again.",
                    icon: "error",
                    button: "OK"
                });
                console.error("Error:", response);
            }
        }
    ).catch(error => {
        swal({
            title: "Error!",
            text: "Unable to send the message. Please check your internet connection and try again.",
            icon: "error",
            button: "OK"
        });
        console.error("Error:", error);
    });
}
