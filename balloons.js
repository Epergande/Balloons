document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'

    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // random animation for header
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    window.addEventListener("load", function () {
        let header = this.document.querySelector(".greeting")

        let rnum = getRandomInt(3);

        if (rnum === 1) {
            header.classList.add("animate__pulse")
        } else if (rnum === 2) {
            header.classList.add("animate__swing");
        } else {
            header.classList.add("animate__wobble");
        }
    })

// toast
    const toastTrigger = document.getElementById('submit');
    const toast = document.getElementById('Toast');

    function anyCheckboxChecked() {
        return document.querySelectorAll('.form-check-input:checked').length === 0;
    }

    toastTrigger.addEventListener('click', function () {
        if (anyCheckboxChecked()) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
            toastBootstrap.show();
        }
    });
});


// select/deselect all checkboxes
document.getElementById("select-all").addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const allChecked = Array.from(checkboxes).every(c => c.checked);
    checkboxes.forEach(c => c.checked = !allChecked);
})


// on hover color change for the header
const header = document.querySelector('.greeting');
const redLabel = document.getElementById('red-label');
const greenLabel = document.getElementById('green-label');
const blueLabel = document.getElementById('blue-label');


// add class while hovering, remove when leaving for deterministic behavior
redLabel.addEventListener('mouseenter', () => header.classList.add('red'));
redLabel.addEventListener('mouseleave', () => header.classList.remove('red'));
greenLabel.addEventListener('mouseenter', () => header.classList.add('green'));
greenLabel.addEventListener('mouseleave', () => header.classList.remove('green'));
blueLabel.addEventListener('mouseenter', () => header.classList.add('blue'));
blueLabel.addEventListener('mouseleave', () => header.classList.remove('blue'));