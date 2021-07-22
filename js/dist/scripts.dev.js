"use strict";

function validateInput(form) {
  if (form.value === '') {
    form.parentNode.firstElementChild.classList.add('show');
    document.getElementById('submitForm').disabled = true;
  } else {
    form.parentNode.firstElementChild.classList.remove('show');
    document.getElementById('submitForm').disabled = false;

    if (!form.value.match(form.pattern)) {
      form.parentNode.firstElementChild.classList.add('show');
      document.getElementById('submitForm').disabled = true;
    } else {
      form.parentNode.firstElementChild.classList.remove('show');
      document.getElementById('submitForm').disabled = false;
    }
  }
} // document.querySelector('.euResident-container').addEventListener('click', function () {
//     this.querySelector('.euResident-select').classList.toggle('open');
//     for (const option of document.querySelectorAll(".euResident-option")) {
//         option.addEventListener('click', function () {
//             if (!this.classList.contains('selected')) {
//                 this.parentNode.querySelector('.euResident-option.selected').classList.remove('selected');
//                 this.classList.add('selected');
//                 this.closest('.euResident-select').querySelector('.euResident-select-opt span').textContent = this.textContent;
//             }
//         })
//     }
// })
// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.euResident-select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });
// function validateSelect() {
//     alert('test');
//     var span_Text = document.getElementById("validateSelect").innerText;
//     if (span_Text === 'yes' || span_Text === 'no') {
//         document.getElementById('submitForm').disabled = false;
//     } else {
//         document.getElementById('euError').classList.add('show');
//         document.getElementById("success").innerHTML = "block";
//         document.getElementById("success").style.display = "block";
//         document.getElementById('submitForm').disabled = true;
//         //return false;
//     }
// }


function checkforblank() {
  var resident = document.getElementById('euResident');
  var invalid = resident.value == "Please Select";

  if (invalid) {
    document.getElementById('euError').classList.add('show');
  } else {
    document.getElementById('euError').classList.remove('show');
  }

  return !invalid;
}

function validateForm() {
  //validate inputs
  var name = document.forms["digitalForm"]["firstName"].value;
  var lastname = document.forms["digitalForm"]["lastName"].value;
  var email = document.forms["digitalForm"]["email"].value;

  if (name === '' || lastname === '' || email === '') {
    document.getElementById("success").innerHTML = "Please complete all required fields";
    document.getElementById("success").style.display = "block";
    return false;
  }

  checkforblank(); //check At least one option needs to be selected

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkedOne = Array.prototype.slice.call(checkboxes).some(function (x) {
    return x.checked;
  });

  if (checkedOne) {
    document.getElementById('myCheckboxGroup').parentNode.classList.remove('show');
  } else {
    document.getElementById('myCheckboxGroup').parentNode.classList.add('show');
    return false;
  }

  alert('Thank you. You are now subscribed');
  return;
}

;

function reset() {
  document.getElementById("digitalForm").reset();
}