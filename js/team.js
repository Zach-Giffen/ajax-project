const storedPokemonInfo = JSON.parse(localStorage.getItem('selectedPokemon'));

function renderTeam(pokemonInfo) {
  const pokeContainer = document.createElement('div');
  pokeContainer.classList.add('poke-container');

  const half1 = document.createElement('div');
  half1.classList.add('half');

  const row1 = document.createElement('div');
  row1.classList.add('row');

  const inputElement = document.createElement('input');
  inputElement.classList.add('name');
  inputElement.type = 'text';
  inputElement.id = 'name';
  inputElement.value = pokemonInfo.name;
  row1.appendChild(inputElement);

  const gender = document.createElement('p');
  gender.classList.add('gender');
  gender.textContent = '♂';
  row1.appendChild(gender);

  const id = document.createElement('p');
  id.classList.add('id');
  id.textContent = '#' + pokemonInfo.id;
  row1.appendChild(id);

  half1.appendChild(row1);

  const row2 = document.createElement('div');
  row2.classList.add('row');

  const imgHalf = document.createElement('div');
  imgHalf.classList.add('half');

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = pokemonInfo.sprite;

  imgHalf.appendChild(img);
  row2.appendChild(imgHalf);

  const movesHalf = document.createElement('div');
  movesHalf.classList.add('half');

  for (let i = 0; i < 4; i++) {
    const select = document.createElement('select');
    select.name = 'attack ' + (i + 1);
    select.id = 'attack' + (i + 1);

    for (let j = 0; j < pokemonInfo.moves.length; j++) {
      const moveName = pokemonInfo.moves[j].move.name;
      const option = document.createElement('option');
      option.value = moveName;
      option.text = moveName;
      select.appendChild(option);
    }

    movesHalf.appendChild(select);
  }

  row2.appendChild(movesHalf);
  half1.appendChild(row2);

  const row3 = document.createElement('div');
  row3.classList.add('row');

  const typebox1 = document.createElement('div');
  typebox1.classList.add('type-box-1');

  const typeBox1 = document.createElement('div');
  typeBox1.classList.add('type-box1');
  typeBox1.classList.add(pokemonInfo.types[0].type.name);
  typeBox1.textContent = pokemonInfo.types[0].type.name;
  typebox1.appendChild(typeBox1);

  const typebox2 = document.createElement('div');
  typebox2.classList.add('type-box-2');

  const typeBox2 = document.createElement('div');
  typeBox2.classList.add('type-box2');
  if (pokemonInfo.types[1]) {
    typeBox2.textContent = pokemonInfo.types[1].type.name;
    typeBox2.classList.add(pokemonInfo.types[1].type.name);
  } else {
    typeBox2.textContent = pokemonInfo.types[0].type.name;
    typeBox2.classList.add(pokemonInfo.types[0].type.name);
  }
  typebox2.appendChild(typeBox2);

  row3.appendChild(typebox1);
  row3.appendChild(typebox2);
  half1.appendChild(row3);

  const row4 = document.createElement('div');
  row4.classList.add('row');

  const abilityLabel = document.createElement('label');
  abilityLabel.classList.add('ability');
  abilityLabel.setAttribute('for', 'ability');
  abilityLabel.textContent = 'Ability:';

  const abilitySelect = document.createElement('select');
  abilitySelect.name = 'ability';
  abilitySelect.id = 'ability';

  for (let k = 0; k < pokemonInfo.abilities.length; k++) {
    const abilityName = pokemonInfo.abilities[k].ability.name;
    const abilityOption = document.createElement('option');
    abilityOption.value = abilityName;
    abilityOption.text = abilityName;
    abilitySelect.appendChild(abilityOption);
  }
  row4.appendChild(abilityLabel);
  row4.appendChild(abilitySelect);
  half1.appendChild(row4);

  const row5 = document.createElement('div');
  row5.classList.add('row');

  const natureLabel = document.createElement('label');
  natureLabel.classList.add('nature');
  natureLabel.setAttribute('for', 'nature');
  natureLabel.textContent = 'Nature:';

  const natureSelect = document.createElement('select');
  natureSelect.id = 'nature';
  natureSelect.name = 'nature';

  const natureOptions = [
    'Adamant',
    'Bashful',
    'Bold',
    'Brave',
    'Calm',
    'Careful',
    'Docile',
    'Gentle',
    'Hardy',
    'Hasty',
    'Impish',
    'Jolly',
    'Lax',
    'Lonely',
    'Mild',
    'Modest',
    'Naive',
    'Naughty',
    'Quiet',
    'Quirky',
    'Rash',
    'Relaxed',
    'Sassy',
    'Serious',
    'Timid',
  ];

  natureOptions.forEach(function (nature) {
    const natureOption = document.createElement('option');
    natureOption.value = nature.toLowerCase();
    natureOption.text = nature;
    natureSelect.appendChild(natureOption);
  });

  row5.appendChild(natureLabel);
  row5.appendChild(natureSelect);
  half1.appendChild(row5);

  const half2 = document.createElement('div');
  half2.classList.add('half');

  const row6 = document.createElement('div');
  row6.classList.add('row');

  const hpName = document.createElement('p');
  hpName.classList.add('stat');
  hpName.textContent = 'HP';

  const hpNumber = document.createElement('p');
  hpNumber.classList.add('hp-number');
  hpNumber.textContent = pokemonInfo.stats[0].base_stat;

  const hpBar = document.createElement('div');
  hpBar.classList.add('bar');

  const hpPercent = document.createElement('div');
  hpPercent.classList.add('hp-percent');
  hpBar.appendChild(hpPercent);

  row6.appendChild(hpName);
  row6.appendChild(hpNumber);
  row6.appendChild(hpBar);
  half2.appendChild(row6);

  const row7 = document.createElement('div');
  row7.classList.add('row');

  const attName = document.createElement('p');
  attName.classList.add('stat');
  attName.textContent = 'Attack';

  const attNumber = document.createElement('p');
  attNumber.classList.add('att-number');
  attNumber.textContent = pokemonInfo.stats[1].base_stat;

  const attBar = document.createElement('div');
  attBar.classList.add('bar');

  const attPercent = document.createElement('div');
  attPercent.classList.add('att-percent');
  attBar.appendChild(attPercent);

  row7.appendChild(attName);
  row7.appendChild(attNumber);
  row7.appendChild(attBar);
  half2.appendChild(row7);

  const row8 = document.createElement('div');
  row8.classList.add('row');

  const defName = document.createElement('p');
  defName.classList.add('stat');
  defName.textContent = 'Defense';

  const defNumber = document.createElement('p');
  defNumber.classList.add('def-number');
  defNumber.textContent = pokemonInfo.stats[2].base_stat;

  const defBar = document.createElement('div');
  defBar.classList.add('bar');

  const defPercent = document.createElement('div');
  defPercent.classList.add('def-percent');
  defBar.appendChild(defPercent);

  row8.appendChild(defName);
  row8.appendChild(defNumber);
  row8.appendChild(defBar);
  half2.appendChild(row8);

  const row9 = document.createElement('div');
  row9.classList.add('row');

  const spaName = document.createElement('p');
  spaName.classList.add('stat');
  spaName.textContent = 'Sp. Attack';

  const spaNumber = document.createElement('p');
  spaNumber.classList.add('spa-number');
  spaNumber.textContent = pokemonInfo.stats[3].base_stat;

  const spaBar = document.createElement('div');
  spaBar.classList.add('bar');

  const spaPercent = document.createElement('div');
  spaPercent.classList.add('spa-percent');
  spaBar.appendChild(spaPercent);

  row9.appendChild(spaName);
  row9.appendChild(spaNumber);
  row9.appendChild(spaBar);
  half2.appendChild(row9);

  const row10 = document.createElement('div');
  row10.classList.add('row');

  const spdName = document.createElement('p');
  spdName.classList.add('stat');
  spdName.textContent = 'Sp. Defense';

  const spdNumber = document.createElement('p');
  spdNumber.classList.add('spd-number');
  spdNumber.textContent = pokemonInfo.stats[4].base_stat;

  const spdBar = document.createElement('div');
  spdBar.classList.add('bar');

  const spdPercent = document.createElement('div');
  spdPercent.classList.add('spd-percent');
  spdBar.appendChild(spdPercent);

  row10.appendChild(spdName);
  row10.appendChild(spdNumber);
  row10.appendChild(spdBar);
  half2.appendChild(row10);

  const row11 = document.createElement('div');
  row11.classList.add('row');

  const speName = document.createElement('p');
  speName.classList.add('stat');
  speName.textContent = 'Speed';

  const speNumber = document.createElement('p');
  speNumber.classList.add('spe-number');
  speNumber.textContent = pokemonInfo.stats[5].base_stat;

  const speBar = document.createElement('div');
  speBar.classList.add('bar');

  const spePercent = document.createElement('div');
  spePercent.classList.add('spe-percent');
  speBar.appendChild(spePercent);

  row11.appendChild(speName);
  row11.appendChild(speNumber);
  row11.appendChild(speBar);
  half2.appendChild(row11);

  const row12 = document.createElement('div');
  row12.classList.add('row');

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('delete');

  const underlinedText = document.createElement('u');
  const boldText = document.createElement('b');
  boldText.textContent = 'Release';
  underlinedText.appendChild(boldText);
  deleteButton.appendChild(underlinedText);
  row12.appendChild(deleteButton);

  pokeContainer.appendChild(half1);
  pokeContainer.appendChild(half2);
  pokeContainer.appendChild(row12);

  return pokeContainer;
}

document.addEventListener('DOMContentLoaded', function () {
  const $pokeContainer = document.querySelector('.pokeTeam');

  const storedPokemonInfo =
    JSON.parse(localStorage.getItem('selectedPokemon')) || [];

  if (storedPokemonInfo) {
    storedPokemonInfo.forEach(function (pokemonInfo, index) {
      const pokeId = `poke${index + 1}`;
      const $pokeElement = renderTeam(pokemonInfo);
      const $pokeDiv = document.getElementById(pokeId);
      const emptyID = `empty${index + 1}`;
      const $empty = document.getElementById(emptyID);

      if ($pokeDiv) {
        $pokeDiv.appendChild($pokeElement);
        $empty.classList.add('hidden');
      }
    });
  }

  function setStatWidth(statValues, percentClass) {
    const maxStat = 255;

    statValues.forEach(function (statValue, index) {
      const value = parseInt(statValue.textContent);
      const percent = (value / maxStat) * 100;
      document.querySelectorAll(`.${percentClass}`)[index].style.width =
        percent + '%';
    });
  }

  const hpValues = document.querySelectorAll('.hp-number');
  const attValues = document.querySelectorAll('.att-number');
  const defValues = document.querySelectorAll('.def-number');
  const spaValues = document.querySelectorAll('.spa-number');
  const spdValues = document.querySelectorAll('.spd-number');
  const speValues = document.querySelectorAll('.spe-number');

  setStatWidth(hpValues, 'hp-percent');
  setStatWidth(attValues, 'att-percent');
  setStatWidth(defValues, 'def-percent');
  setStatWidth(spaValues, 'spa-percent');
  setStatWidth(spdValues, 'spd-percent');
  setStatWidth(speValues, 'spe-percent');

  const $genderSwitches = document.querySelectorAll('.gender');
  $genderSwitches.forEach(function ($genderSwitch) {
    $genderSwitch.addEventListener('click', function () {
      $genderSwitch.textContent =
        $genderSwitch.textContent === '♂' ? '♀' : '♂';
    });
  });

  const $typebox1Array = document.querySelectorAll('.type-box-1');
  const $typebox2Array = document.querySelectorAll('.type-box-2');

  $typebox1Array.forEach(function ($typebox1, index) {
    const $typebox2 = $typebox2Array[index];

    if ($typebox1.textContent === $typebox2.textContent) {
      $typebox2.classList.add('hidden');
      $typebox1.style.width = '100%';
      $typebox1.style.letterSpacing = '2px';
    }
  });

  const $deleteButtons = document.querySelectorAll('.delete');

  $deleteButtons.forEach(function ($deleteButton, index) {
    $deleteButton.addEventListener('click', function () {
      const indexToRemove = index;

      if (indexToRemove >= 0 && indexToRemove < storedPokemonInfo.length) {
        storedPokemonInfo.splice(indexToRemove, 1);
        localStorage.setItem(
          'selectedPokemon',
          JSON.stringify(storedPokemonInfo),
        );

        location.reload();
      }
    });
  });
});
