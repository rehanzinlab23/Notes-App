// const notesContainer = document.querySelector('.notes-container');

// const createBtn = document.querySelector('.btn');

// let notes = document.querySelectorAll('.input-box');

// function showNotes() {
//      notesContainer.innerHTML = localStorage.getItem('notes');
// };

// showNotes();

// function updateStorage() {
//      localStorage.setItem('notes', notesContainer.innerHTML);
// };

// createBtn.addEventListener('click', () => {
// let inputBox = document.createElement('p');

// let img = document.createElement('img');

// inputBox.className = 'input-box';

// inputBox.setAttribute('contenteditable', 'true');

// img.src = 'images/delete.png';

// notesContainer.appendChild(inputBox).appendChild(img);
// });

// notesContainer.addEventListener('click', function(e) {
//      if (e.target.tagName === 'IMG') {
//           e.target.parentElement.remove();
//           updateStorage();
//      } else if (e.target.tagName === 'P') {
//           notes = document.querySelectorAll('.input-box');
//           notes.forEach(nt => {
//                nt.onkeyup = function () {
//                       updateStorage();
//                };
//           });
//      };
// });

// document.addEventListener('keydown', event => {
// if (event.key === 'Enter') {
//      document.execCommand('insertLineBreak');
//      event.preventDefault();
// };
// });

const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes') || '';
}
showNotes();

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

function getRandomColor() {
  const colors = [
    '#ffadad',
    '#ffd6a5',
    '#fdffb6',
    '#caffbf',
    '#9bf6ff',
    '#a0c4ff',
    '#bdb2ff',
    '#ffc6ff',
    '#fffffc',
    '#ACDDDE',
    '#F7D8BA',
    '#58B1C1',
    '#62A6E0',
    '#E1F8DC',
    '#ACDDDE',
    '#DC9AA1',
    '#FABB76',
    '#8F9C40',
    '#66495B',
    '#E18961'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');

  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');

  inputBox.style.backgroundColor = getRandomColor();

  img.src = 'images/delete.png';

  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage(); 
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
});