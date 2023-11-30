function getAllPokemonData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      const responseData = xhr.response;
      callback(responseData.results);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  });

  xhr.addEventListener('error', function () {
    console.error('Request failed');
  });

  xhr.send();
}

function getAllPokemonNames(pokemonName, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemonName);
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      const responseData = xhr.response;
      callback(responseData);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  });

  xhr.addEventListener('error', function () {
    console.error('Request failed');
  });

  xhr.send();
}

function renderTable(pokemon) {
  const $tableRow = document.createElement('tr');

  const $tableDataAdd = document.createElement('td');
  const $pokeballDex = document.createElement('img');
  $pokeballDex.src = './images/pokeball.png';
  $pokeballDex.className = 'pokeball-dex';
  $tableDataAdd.appendChild($pokeballDex);
  $tableRow.appendChild($tableDataAdd);

  const $tableDataSprite = document.createElement('td');
  const spriteUrl = pokemon.sprites.front_default;
  const $spriteImg = document.createElement('img');
  $spriteImg.src = spriteUrl;
  $tableDataSprite.appendChild($spriteImg);
  $tableRow.appendChild($tableDataSprite);

  const $tableDataName = document.createElement('td');
  $tableDataName.textContent = pokemon.name;
  $tableDataName.className = 'table-name';
  $tableRow.appendChild($tableDataName);

  const $tableDataDexNo = document.createElement('td');
  $tableDataDexNo.textContent = pokemon.id;
  $tableRow.appendChild($tableDataDexNo);

  const $tableDataType1 = document.createElement('td');
  const $typeBox1 = document.createElement('div');
  $typeBox1.className = 'type-box1';
  $typeBox1.textContent = pokemon.types[0].type.name;
  if ($typeBox1.textContent === 'grass') {
    $typeBox1.classList.add('grass');
  } else if ($typeBox1.textContent === 'normal') {
    $typeBox1.classList.add('normal');
  } else if ($typeBox1.textContent === 'fire') {
    $typeBox1.classList.add('fire');
  } else if ($typeBox1.textContent === 'fighting') {
    $typeBox1.classList.add('fighting');
  } else if ($typeBox1.textContent === 'water') {
    $typeBox1.classList.add('water');
  } else if ($typeBox1.textContent === 'flying') {
    $typeBox1.classList.add('flying');
  } else if ($typeBox1.textContent === 'poison') {
    $typeBox1.classList.add('poison');
  } else if ($typeBox1.textContent === 'electric') {
    $typeBox1.classList.add('electric');
  } else if ($typeBox1.textContent === 'ground') {
    $typeBox1.classList.add('ground');
  } else if ($typeBox1.textContent === 'psychic') {
    $typeBox1.classList.add('psychic');
  } else if ($typeBox1.textContent === 'rock') {
    $typeBox1.classList.add('rock');
  } else if ($typeBox1.textContent === 'ice') {
    $typeBox1.classList.add('ice');
  } else if ($typeBox1.textContent === 'bug') {
    $typeBox1.classList.add('bug');
  } else if ($typeBox1.textContent === 'dragon') {
    $typeBox1.classList.add('dragon');
  } else if ($typeBox1.textContent === 'ghost') {
    $typeBox1.classList.add('ghost');
  } else if ($typeBox1.textContent === 'dark') {
    $typeBox1.classList.add('dark');
  } else if ($typeBox1.textContent === 'steel') {
    $typeBox1.classList.add('steel');
  }
  $tableDataType1.appendChild($typeBox1);
  $tableRow.appendChild($tableDataType1);

  const $tableDataType2 = document.createElement('td');
  const $typeBox2 = document.createElement('div');
  $typeBox2.className = 'type-box2';
  if (pokemon.types[1]) {
    $typeBox2.textContent = pokemon.types[1].type.name;
  } else {
    $typeBox2.textContent = pokemon.types[0].type.name;
  }
  if ($typeBox2.textContent === 'grass') {
    $typeBox2.classList.add('grass');
  } else if ($typeBox2.textContent === 'normal') {
    $typeBox2.classList.add('normal');
  } else if ($typeBox2.textContent === 'fire') {
    $typeBox2.classList.add('fire');
  } else if ($typeBox2.textContent === 'fighting') {
    $typeBox2.classList.add('fighting');
  } else if ($typeBox2.textContent === 'water') {
    $typeBox2.classList.add('water');
  } else if ($typeBox2.textContent === 'flying') {
    $typeBox2.classList.add('flying');
  } else if ($typeBox2.textContent === 'poison') {
    $typeBox2.classList.add('poison');
  } else if ($typeBox2.textContent === 'electric') {
    $typeBox2.classList.add('electric');
  } else if ($typeBox2.textContent === 'ground') {
    $typeBox2.classList.add('ground');
  } else if ($typeBox2.textContent === 'psychic') {
    $typeBox2.classList.add('psychic');
  } else if ($typeBox2.textContent === 'rock') {
    $typeBox2.classList.add('rock');
  } else if ($typeBox2.textContent === 'ice') {
    $typeBox2.classList.add('ice');
  } else if ($typeBox2.textContent === 'bug') {
    $typeBox2.classList.add('bug');
  } else if ($typeBox2.textContent === 'dragon') {
    $typeBox2.classList.add('dragon');
  } else if ($typeBox2.textContent === 'ghost') {
    $typeBox2.classList.add('ghost');
  } else if ($typeBox2.textContent === 'dark') {
    $typeBox2.classList.add('dark');
  } else if ($typeBox2.textContent === 'steel') {
    $typeBox2.classList.add('steel');
  }
  $tableDataType2.appendChild($typeBox2);
  $tableRow.appendChild($tableDataType2);

  if (
    pokemon.name === 'clefairy' ||
    pokemon.name === 'clefable' ||
    pokemon.name === 'cleffa' ||
    pokemon.name === 'togepi' ||
    pokemon.name === 'snubbull' ||
    pokemon.name === 'granbull' ||
    pokemon.name === 'jigglypuff' ||
    pokemon.name === 'wigglytuff' ||
    pokemon.name === 'igglybuff' ||
    pokemon.name === 'azurill'
  ) {
    $typeBox1.textContent = 'normal';
    $typeBox1.classList.add('normal');
    $typeBox2.textContent = 'normal';
    $typeBox2.classList.add('normal');
  }
  if (pokemon.name === 'togetic' || pokemon.name === 'togekiss') {
    $typeBox1.textContent = 'normal';
    $typeBox1.classList.add('normal');
    $typeBox2.textContent = 'flying';
  }
  if (
    pokemon.name === 'mr-mime' ||
    pokemon.name === 'ralts' ||
    pokemon.name === 'kirlia' ||
    pokemon.name === 'gardevoir' ||
    pokemon.name === 'mime-jr'
  ) {
    $typeBox1.textContent = 'psychic';
    $typeBox1.classList.add('psychic');
    $typeBox2.textContent = 'psychic';
    $typeBox2.classList.add('psychic');
  }
  if (pokemon.name === 'marill' || pokemon.name === 'azumarill') {
    $typeBox1.textContent = 'water';
    $typeBox1.classList.add('water');
    $typeBox2.textContent = 'water';
    $typeBox2.classList.add('water');
  }
  if (pokemon.name === 'mawile') {
    $typeBox1.textContent = 'steel';
    $typeBox1.classList.add('steel');
    $typeBox2.textContent = 'steel';
    $typeBox2.classList.add('steel');
  }
  if (pokemon.name === 'cottonee' || pokemon.name === 'whimsicott') {
    $typeBox1.textContent = 'grass';
    $typeBox1.classList.add('grass');
    $typeBox2.textContent = 'grass';
    $typeBox2.classList.add('grass');
  }

  const $tableDataHP = document.createElement('td');
  $tableDataHP.textContent = pokemon.stats[0].base_stat;
  $tableRow.appendChild($tableDataHP);

  const $tableDataAttack = document.createElement('td');
  $tableDataAttack.textContent = pokemon.stats[1].base_stat;
  $tableRow.appendChild($tableDataAttack);

  const $tableDataDefense = document.createElement('td');
  $tableDataDefense.textContent = pokemon.stats[2].base_stat;
  $tableRow.appendChild($tableDataDefense);

  const $tableDataSPAttack = document.createElement('td');
  $tableDataSPAttack.textContent = pokemon.stats[3].base_stat;
  $tableRow.appendChild($tableDataSPAttack);

  const $tableDataSpDefense = document.createElement('td');
  $tableDataSpDefense.textContent = pokemon.stats[4].base_stat;
  $tableRow.appendChild($tableDataSpDefense);

  const $tableDataSpeed = document.createElement('td');
  $tableDataSpeed.textContent = pokemon.stats[5].base_stat;
  $tableRow.appendChild($tableDataSpeed);

  $tableRow.setAttribute('data-region', pokemon.game_indices[0].version.name);
  return $tableRow;
}

const pokedexTable = document.querySelector('.pokedex-table');

document.addEventListener('DOMContentLoaded', function () {
  getAllPokemonData(function (pokemonData) {
    const requests = [];

    for (let i = 0; i < 649; i++) {
      const pokemonName = pokemonData[i].name;
      const requestPromise = new Promise((resolve) => {
        getAllPokemonNames(pokemonName, function (pokemonDetails) {
          resolve({
            order: i,
            details: pokemonDetails,
          });
        });
      });

      requests.push(requestPromise);
    }

    Promise.all(requests)
      .then((responses) => {
        const sortedResponses = responses.sort((a, b) => a.order - b.order);

        sortedResponses.forEach((response) => {
          pokedexTable.appendChild(renderTable(response.details));
        });
      })
      .catch((error) => {
        console.error('Error fetching Pokemon details:', error);
      });
  });
});

const $regionSelect = document.getElementById('region');
const $filterButton = document.querySelector('.filter-button');
const $type1Select = document.getElementById('type-1');
const $type2Select = document.getElementById('type-2');

function filter() {
  const selectedRegion = $regionSelect.value;
  const selectedType1 = $type1Select.value;
  const selectedType2 = $type2Select.value;
  const rows = pokedexTable.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const regionData = row.getAttribute('data-region');
    const typeBox1 = row.querySelector('.type-box1');
    const typeBox2 = row.querySelector('.type-box2');
    if (
      regionData === 'always' ||
      ((regionData === selectedRegion || selectedRegion === 'all') &&
        (typeBox1.classList.contains(selectedType1) ||
          typeBox2.classList.contains(selectedType1) ||
          selectedType1 === 'all') &&
        (typeBox1.classList.contains(selectedType2) ||
          typeBox2.classList.contains(selectedType2) ||
          selectedType2 === 'all'))
    ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
}

$filterButton.addEventListener('click', filter);
