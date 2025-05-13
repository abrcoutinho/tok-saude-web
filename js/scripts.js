

// Account tabs
function accountForms(evt, formName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Instructions
function instructions() {
  const instructionsContainer = document.querySelector(".instructions");
  instructionsContainer.classList.toggle('expanded');
  // event.currentTarget.classList.toggle('expanded');
}



// popup history
const popupHistory = document.querySelector('.popup-history');
const labelChange = document.getElementById('labelChange');
const labelChange2 = document.getElementById('labelChange2');

function historyPopup() {
  popupHistory.classList.add('visible');
  labelChange.textContent="Histórico";
  labelChange2.textContent="Histórico";
}
function closeHistory() {
  popupHistory.classList.remove('visible');
  labelChange.textContent="Consulta";
  labelChange2.textContent="Paciente";
}


// history tabs
function historyTabs(evt, historyStatus) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("history-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("history-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(historyStatus).style.display = "block";
  evt.currentTarget.className += " active";
}


// Patient list
const patientSelected = document.querySelector('.patient-selected');
const patientList = document.querySelector('.patients-list');

function mobPatientList() {
  patientList.classList.add('visible');
}

// User floating menu
const userButton = document.querySelector('.header .user button')
const userFloatingMenu = document.querySelector('.user-floating-menu');

function showUserFloatingMenu() {
  userFloatingMenu.classList.add('visible')
}

// Notification popup
const bellButton = document.querySelector('.header .account .notification button')
const popupNotif = document.querySelector('.popup-notifications');

function showPopupNotifications() {
  popupNotif.classList.add('visible')
}


window.addEventListener('click', function(e){
  if (!userFloatingMenu.contains(e.target) && !userButton.contains(e.target)) {
    userFloatingMenu.classList.remove("visible");
  }

  if (!bellButton.contains(e.target) && !popupNotif.contains(e.target)) {
    popupNotif.classList.remove("visible");
  }

  if (!patientList.contains(e.target) && !patientSelected.contains(e.target)) {
    patientList.classList.remove("visible");
  }
});



// popup specialities
(function () {

  const popupSpecialities = document.querySelector('.popup-specialties');

  document.querySelector('.specialities-link').addEventListener("click", function(event){
    popupSpecialities.classList.add("visible");
  });

  document.querySelector('.popup-specialties .close').addEventListener("click", function(event){
    popupSpecialities.classList.remove("visible");
  });

})();

