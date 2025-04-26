const t=document.querySelector("#form"),e=document.querySelector("#list");let a=JSON.parse(localStorage.getItem("contacts"))||[];function u(){e.innerHTML="",a.forEach((t,a)=>{e.innerHTML+=`
      <li>
        \u{406}\u{43C}'\u{44F}: ${t.firstName} - \u{41F}\u{440}\u{456}\u{437}\u{432}\u{438}\u{449}\u{435}: ${t.lastName} - \u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: ${t.phone} - \u{415}\u{43C}\u{435}\u{456}\u{43B}: ${t.email}
        <button id="delete-button" data-action="delete" data-index="${a}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        <button id="edit-button" data-action="edit" data-index="${a}">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
      </li>
    `})}t.addEventListener("submit",e=>{e.preventDefault();let i={firstName:t.firstName.value.trim(),lastName:t.lastName.value.trim(),phone:t.phone.value.trim(),email:t.email.value.trim()};a.push(i),localStorage.setItem("contacts",JSON.stringify(a)),t.reset(),u()}),e.addEventListener("click",t=>{if("delete"===t.target.dataset.action){let e=t.target.dataset.index;a.splice(e),localStorage.setItem("contacts",JSON.stringify(a)),u()}}),e.addEventListener("click",e=>{if("edit"===e.target.dataset.action){let i=e.target.dataset.index;t.firstName.value=a[i].firstName,t.lastName.value=a[i].lastName,t.phone.value=a[i].phone,t.email.value=a[i].email,a.splice(i),localStorage.setItem("contacts",JSON.stringify(a)),u()}}),u();
//# sourceMappingURL=homework-9.bd140928.js.map
