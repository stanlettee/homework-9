




const form = document.querySelector('form').addEventListener(('submit'), (e) => {
    e.preventDefault()

    // const bookmarkInput = document.querySelector('#bookmarkInput')
    // if (bookmarkInput.value === ''){
    //     document.querySelector('#checkBookmark').innerHTML = "Ви нічого не ввели"
    // } else {
    //     document.querySelector('#checkBookmark').innerHTML = "";
    //     localStorage.setItem("bookmark", JSON.stringify(bookmarkInput.value));
    //     const bookmarkList = document.querySelector('#bookmarkList')
    //     let item = document.createElement("li");
    //     item.innerHTML = `
    //         <a target="_blank">${bookmarkInput.value}</a>
    //         <div class="actions">
    //             <button id="editBookmark">Змінити закладку</button>
    //             <button id="deleteBookmark">Видалити закладку</button>
    //         </div>
    //     `;
    //     bookmarkList.insertAdjacentElement("beforebegin", item);
    // }
})




// let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// function saveBookmarks() {
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
// }

// function renderBookmarks() {
//   const list = document.getElementById("bookmarkList");
//   list.innerHTML = "";

//   bookmarks.forEach((bookmark, index) => {
//     const li = document.createElement("li");

//     li.innerHTML = `
//       <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
//       <div class="actions">
//         <button onclick="editBookmark(${index})">✏️</button>
//         <button onclick="deleteBookmark(${index})">🗑️</button>
//       </div>
//     `;

//     list.appendChild(li);
//   });
// }