

export default function() {
  function filterElements(stringInput) {
    // include text from these elements:
    //   - .inner-small-hex > span.textcontent (Rank)
    //   - .info-tab > p.textContent (info/descrip)
    //   - section.module > h2 (name)
    let modules = Array.from(document.getElementsByClassName('module'));
    modules.forEach(module => {
      let filterArray = [ module.children[1].textContent, module.children[0].children[0].children[0].children[0].children[0].textContent, module.children[0].children[0].children[1].textContent ];
      allLowerCase(filterArray);
      let [name, rank, info] = filterArray;
      let includeInSearch = false;
      filterArray.forEach(searchable => {
        if (searchable.includes(stringInput)) includeInSearch = true
      })
      if (includeInSearch)  {
        module.style.display = 'block';
      } else {
        module.style.display = 'none';
      }
    })
  }

  function allLowerCase(arrOfStrings) {
    for (let i = 0; i < arrOfStrings.length; i++) {
      arrOfStrings[i] = arrOfStrings[i].toLowerCase();
    }
  }

  let filterDiv = document.createElement('div');
  let span = document.createElement('span');
  let input = document.createElement('input');
  let clearBtn = document.createElement('div');
  filterDiv.classList.add('flex', 'opacity');
  clearBtn.classList.add('clear-btn', 'opacity');
  span.classList.add('opacity');
  filterDiv.style.position = 'fixed';
  filterDiv.style.top = '2.2em';
  filterDiv.style.left = '2.2em';
  span.textContent = 'Filter: ';
  span.style.marginRight = '0.5em';
  input.placeholder = 'name/rank/description';

  input.addEventListener('input', (e) => {
    e.target.style.opacity = '1';
    filterElements(e.target.value.toLowerCase())
  })
  clearBtn.addEventListener('click', (e) => {
    input.value = '';
    filterElements(input.value)
  })

  filterDiv.append(span, input, clearBtn)
  document.body.append(filterDiv);
}