var nameCounter = 1;

function addNameInput() {
  var nameList = document.getElementById('nameList');

  var nameListItem = document.createElement('div');
  nameListItem.classList.add('name-list-item');

  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.classList.add('nameInput');

  var removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    removeNameInput(removeButton);
  };

  nameListItem.appendChild(nameInput);
  nameListItem.appendChild(removeButton);

  nameList.appendChild(nameListItem);
}

function removeNameInput(button) {
  var nameListItem = button.parentNode;
  var nameList = nameListItem.parentNode;
  nameList.removeChild(nameListItem);
}

function shuffleAndSelectWinner() {
  var nameInputs = document.getElementsByClassName('nameInput');
  var names = [];

  for (var i = 0; i < nameInputs.length; i++) {
    var name = nameInputs[i].value.trim();
    if (name !== '') {
      names.push(name);
    }
  }

  if (names.length === 0) {
    alert('Please enter at least one name.');
    return;
  }

  var shuffledNames = shuffle(names);
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  var winnerIndex = (diceRoll - 1) % shuffledNames.length;
  var winner = shuffledNames[winnerIndex];

  var winnerDisplay = document.getElementById('winnerDisplay');
  winnerDisplay.textContent = 'Winner: ' + winner;
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Add initial name input
addNameInput();