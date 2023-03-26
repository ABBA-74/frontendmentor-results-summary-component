fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    handleLoadElDom(data);
  })
  .catch((error) => console.error(error));

const handleLoadElDom = (data) => {
  const listGroupEl = document.querySelector('ul.list-group');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const createListItem = (name, srcImg, score) => {
    const liEl = document.createElement('li');
    const imgEl = document.createElement('img');
    const pElLabel = document.createElement('p');
    const pElScore = document.createElement('p');
    const spanEl = document.createElement('span');

    liEl.classList.add('list-item', name);
    imgEl.src = srcImg;
    imgEl.alt = `icone ${name}`;
    pElLabel.classList.add(`${name}-label`);
    pElScore.classList.add(`${name}-score`);

    pElLabel.textContent = capitalizeFirstLetter(name);
    pElScore.textContent = `${score} `;
    spanEl.textContent = '/ 100';

    pElScore.appendChild(spanEl);
    liEl.append(imgEl, pElLabel, pElScore);
    listGroupEl.append(liEl);
  };

  data.forEach((el) => {
    createListItem(el.category.toLowerCase(), el.icon, el.score);
  });
};
