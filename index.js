let sub = document.getElementById('sub');
sub.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = document.getElementById('book');
    let author = document.getElementById('Author');
    let type;

    let Programming = document.getElementById('Programming');
    let Social = document.getElementById('Social');
    let Engish = document.getElementById('Engish');
    if (Programming.checked) {
        type = Programming;
    }
    else if (Social.checked) {
        type = Social;
    }
    else {
        type = Engish;
    }
    if (book.value < 2 || author < 2) {
        mess('danger', 'Could not submit');
        setTimeout(function () {
            msg.style.display = "none";
        }, 2000);
    }
    else {
        let library = localStorage.getItem("library");
        if (library == null) {
            libObj = [];
        }
        else {
            libObj = JSON.parse(library);
        }
        let myObj = {
            books: book.value,
            authors: author.value,
            types: type.value
        }
        libObj.push(myObj);
        mess('Success', 'SuccessFully Added');
        setTimeout(function () {
            msg.style.display = "none";
        }, 2000);
    
    localStorage.setItem("library", JSON.stringify(libObj));
    book.value = "";
    author.value = "";
    type.value = "";
    }



});


function mess(etype, message) {
    let msg = document.getElementById('msg');
    
    msg.style.display = "block";
    let html = "";
    html += `
    <div class="alert alert-${etype} alert-dismissible fade show" role="alert">
    <strong>${etype}!</strong> ${message}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `;
    msg.innerHTML = html;
}