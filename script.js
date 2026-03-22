function login(){
  window.location.href="dashboard.html";
}

// LOAD TEACHERS
async function loadTeachers(){
  let res = await fetch("http://localhost:5000/api/teachers");
  let data = await res.json();

  let list = document.getElementById("teacherList");
  list.innerHTML="";

  data.forEach(t=>{
    let li = document.createElement("li");
    li.innerText = t.name+" - "+t.subject;
    list.appendChild(li);
  });
}

// ADD STUDENT
async function addStudent(){
  let name = document.getElementById("studentName").value;

  await fetch("http://localhost:5000/api/student",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({name})
  });

  alert("Student Added");
}

// ASSIGNMENT
async function submitAssignment(){
  let title = document.getElementById("title").value;

  await fetch("http://localhost:5000/api/assignment",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({title})
  });

  alert("Submitted");
}