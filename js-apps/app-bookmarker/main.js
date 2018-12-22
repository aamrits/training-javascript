document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  let siteName = document.getElementById('siteName').value;
  let siteUrl = document.getElementById('siteUrl').value;

  document.getElementById('bookmarkForm').reset();

  let bookmark = {
    name: siteName,
    url: siteUrl
  }

  // if no bookmarks
  if(localStorage.getItem('bookmarks') === null) {
    // init bookmarks array
    bookmarks = [];
    bookmarks.push(bookmark);
    // set in localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // get data stored in localstorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    // set again in localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  fetchBookmarks();

  e.preventDefault();
}

function fetchBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  let results = document.getElementById('results');

  results.innerHTML = '';
  
  bookmarks.forEach(element => {
    let name = element.name;
    let url = element.url;

    results.innerHTML += `<div class="card mb-3">
                            <div class="card-body">
                              <p>${name}</p> 
                              <a href="${url}" target="_blank" class="btn btn-primary">Visit</a>
                            </div>
                          </div>`
  });
}

function deleteBookmark(url) {
  // let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // bookmarks.forEach(element => {
  //   if(element.url === url) {
  //     bookmarks.splice(element, 1);s
  //   }
  // });
  // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  // console.log(bookmarks);
  console.log(url);
}

