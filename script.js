let count = 0;

// Initial setup
document.getElementById("three").style.display = "none";
document.getElementById("datacard").style.display = "block";
document.getElementById("datacardteacher1").style.display = "none";

// Loader
function loader() {
  document.getElementById("loader").style.display = "block";
}

function cut() {
  document.getElementById("slide").style.display = "none";
  document.getElementById("three").style.display = "block";
}
// Get elements
const sidebar = document.getElementById('slide');
const hamburger = document.getElementById('three');
const closeBtn = document.getElementById('cut');

// Show sidebar on hamburger click
hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
  hamburger.style.display = 'none'; // hide hamburger when sidebar open
});

// Hide sidebar on close button click
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  hamburger.style.display = 'block'; // show hamburger when sidebar closed
});

function three() {
  document.getElementById("slide").style.display = "block";
  document.getElementById("three").style.display = "block";
}

// Card switches
function card() {
  document.getElementById("datacard").style.display = "block";
  document.getElementById("datacardteacher1").style.display = "none";
}

function card1() {
  document.getElementById("datacard").style.display = "none";
  document.getElementById("datacardteacher1").style.display = "block";
}

function card2() {
  document.getElementById("datacard").style.display = "none";
  document.getElementById("datacardteacher1").style.display = "none";
}

// Student form toggles
function addstudent1() {
  document.getElementById("form2").style.display = "block";
  document.getElementById("table1").style.display = "none";
}

function liststudent() {
  document.getElementById("form2").style.display = "none";
  document.getElementById("table1").style.display = "block";
}

// Teacher section
function addteacher1() {
  document.getElementById("formteacher").style.display = "block";
  document.getElementById("meetingForm").style.display = "none";
  document.getElementById("meetingTable").style.display = "none";
  document.getElementById("teacherlist").style.display = "none";
}

function meetingss() {
  document.getElementById("formteacher").style.display = "none";
  document.getElementById("meetingForm").style.display = "block";
  document.getElementById("meetingTable").style.display = "block";
  document.getElementById("teacherlist").style.display = "none";
}

function listteacher() {
  document.getElementById("formteacher").style.display = "none";
  document.getElementById("meetingForm").style.display = "none";
  document.getElementById("meetingTable").style.display = "none";
  document.getElementById("teacherlist").style.display = "block";
}

// Dashboard controls
function showDashboard() {
  document.getElementById("all1").style.display = "none";
}

function home() {
  document.getElementById("all1").style.display = "block";
}

// Student form submit
document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();

  count++;

  const name = document.getElementById("name").value;
  const course = document.getElementById("COURCE").value;
  const batch = document.getElementById("BATCH").value;
  const admissionDate = document.getElementById("admission_date").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${course}</td>
    <td>${batch}</td>
    <td>${admissionDate}</td>
  `;

  document.getElementById("table1").appendChild(newRow);

  this.reset();
});

// Meeting form submit
document.getElementById("meetingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("meetingName").value;
  const date = document.getElementById("meetingDate").value;
  const time = document.getElementById("meetingTime").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>-</td>
    <td>${name}</td>
    <td>${date}</td>
    <td>${time}</td>
  `;

  document.getElementById("meetingTable").appendChild(newRow);
  this.reset();
});

// Live clock
setInterval(() => {
  const now = new Date();
  document.getElementById("timer").textContent = now.toLocaleTimeString();
}, 1000);
function showDashboard(){
  
    document.getElementById("all1").style.display = "none";
    document.getElementById("dashbb").style.display = "block"
}
function home(){
    document.getElementById("all1").style.display = "block";
    document.getElementById("dashbb").style.display = "none";
}
