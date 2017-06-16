// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// function resetPTags() {
//   var ptags = document.getElementByTagName('p');

//   for (var i = 0; i < ptags.length; i++){
//     var ptag = ptags[i];
//     ptag.style.border = "";
//     ptag.style.fontFamily = "";
//     ptag.style.textShadow = "";
//     ptag.style.letterSpacing = "";
//   }
// }


// function changeColors() {
//   setInterval(function() {    
//   setTimeout(function() {
//     document.getElementById('first').style.border = "solid red 2px";   
//     setTimeout(function() {
//       document.getElementById('second').style.border = "solid green 2px";
//       setTimeout(function() {
//         document.getElementById('third').style.border = "solid blue 2px";
//         setTimeout(function() {
//           document.getElementById('fourth').style.border = "solid orange 2px";
//           setTimeout(resetPTags, 500);
//           }, 500);
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 3000);
// }


// console.log(response.resposeJSON);
//     console.log(data);

function getData() {
  var employeesDiv = document.getElementById('employees');
  
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
    console.log(employees);

    var htmlString = "";

    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      htmlString += '<div class="employee" onclick="changeEmployee(this)">'
        htmlString += '<h2>' + employee.name + '</h2>';
        htmlString += '<p>Department:' + employee.department + '</p2>';
        htmlString += '<p>Job Title:' + employee.job_titles + '</p2>';
        htmlString += '<p>Salary:' + employee.annual_salary + '</p2>';
        htmlString += '<br/>';
      htmlString += '</div>'
    }

    employeesDiv.innerHTML = htmlString;
  });
}





// function getData() {
//   var employeesDiv = document.getElementById('employees');
  
//   $.get('https://data.cityofchicago.org/resource/rjgc-4h37.json', function(employees) {
//     console.log(employees);

//     var htmlString = "";

//     for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       htmlString += '<div class="employee" onclick="changeEmployee(this)">'
//         htmlString += '<h2>' + employee.vendor_name + '</h2>';
//         htmlString += '<p>Check Date:' + employee.check_date + '</p2>';
//         htmlString += '<p>Amount:' + employee.amount + '</p2>';
//       htmlString += '<br/>';
//       htmlString += '</div>'
//     }

//     employeesDiv.innerHTML = htmlString;
//   });
// }

function changeEmployee(employeeDiv) {
  if (employeeDiv.style.color === 'lightgray') {
    employeeDiv.style.color = '';
  } else {
    employeeDiv.style.color = 'lightgray';
  }
}

function showAll() {
  var employees = document.getElementsByClassName('employee');

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    employee.classList.remove('hidden');
  }
}

function showPolice() {
  var employees = document.getElementsByClassName('employee');

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.innerHTML.indexOf('POLICE') !== -1 ) {
      employee.classList.remove('hidden');
    } else {
      employee.classList.add('hidden');
    }
  }
}
