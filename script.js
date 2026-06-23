function addSchool(){
 const name=document.getElementById('schoolName').value;
 const level=document.getElementById('schoolLevel').value;
 if(!name) return alert('Enter a school name');
 const li=document.createElement('li');
 li.textContent=name+' - '+level;
 document.getElementById('schools').appendChild(li);
}
