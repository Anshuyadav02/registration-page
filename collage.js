let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let age = document.getElementById('age');
let email = document.getElementById('email');
let gender = document.getElementById('gender');
let btn = document.getElementById('btn');

let msg1 = document.getElementById('msg1');
let msg2 = document.getElementById('msg2');
let msg3 = document.getElementById('msg3');
let msg4 = document.getElementById('msg4');
let msg5 = document.getElementById('msg5');
let btn_msg = document.getElementById('btn_msg');

let data = JSON.parse(localStorage.getItem('mydata')) || [];
let Edit = null;

fname.addEventListener('change', function () {
    if (fname.value.length > 0) {
        msg1.innerText = "";
        fname.style = "outline-color:green;";
    };
})

lname.addEventListener('change', function () {
    if (lname.value.length > 0) {
        msg2.innerText = "";
        lname.style = "outline-color:green;";
    };
})

age.addEventListener('change', function () {
    if (age.value.length > 0) {
        msg3.innerText = "";
        age.style = "outline-color: green;";
    };
})

email.addEventListener('change', function () {
    if (email.value.length > 0) {
        msg4.innerText = "";
        email.style = "outline-color: green;";
    };
})



gender.addEventListener('change', function () {
    if (gender.value.length > 0) {
        msg5.innerText = "";
        gender.style = "outline-color: green;";
    };

})

btn.addEventListener('click', function () {

    let obj = {
        fname: fname.value.trim(),
        lname: lname.value.trim(),
        age: age.value.trim(),
        email: email.value.trim(),
        gender: gender.value,
    }

    if (!obj.fname) {
        msg1.innerText = "Please fill First Name"
        fname.style = "outline-color: red;";
        msg1.style = "color:red;"
        fname.focus();
        return;
    }
    if (!obj.lname) {
        msg2.innerText = "Please fill Last Name"
        lname.style = "outline-color: red;";
        msg2.style = "color:red;"
        lname.focus();
        return;
    }
    if (!obj.age) {
        msg3.innerText = "Please fill Age "
        age.style = "outline-color: red;";
        msg3.style = "color:red;"
        age.focus();
        return;
    }
    if (obj.age < 18) {
        msg3.innerText = "you are under 18 years old"
        msg3.style = "color:red;"
        age.focus();
        return;
    }
    if (!obj.email) {
        msg4.innerText = "Please fill Email"
        email.style = "outline-color: red;";
        msg4.style = "color:red;"
        email.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(obj.email.toLowerCase())) {
        msg4.innerText = "Please enter a valid email"
        email.style = "outline-color: red;";
        msg4.style = "color:red;"
        email.focus();
        return
    }

    if (Edit === null && data.some(user => user.email.toLowerCase() === obj.email.toLowerCase())) {
        msg4.innerText = "This email is already registered";
        email.style = "outline-color: red;";
        msg4.style = "color:red;";
        email.focus();
        return;
    }

    if (!obj.gender) {
        msg5.innerText = "Please fill gender"
        gender.style = "outline-color: red;";
        msg5.style = "color:red;"
        gender.focus();
        return;
    }

    if (Edit === null) {
        data.push(obj);
        alert("Successfully Registered 🙂");
    } else {
        data[Edit] = obj;
        Edit = null;
        btn.innerText = "Register";
    }
    // btn_msg.innerHTML = `
    //     <a href="./collagedata.html" target="_blank" style="color: blue; font-weight: bold; text-decoration: underline;">
    //         Click to view your data
    //     </a>`;

    localStorage.setItem('mydata', JSON.stringify(data))
    fname.value = lname.value = age.value = email.value = gender.value = "";

    window.location.href = "collagedata.html";
});

