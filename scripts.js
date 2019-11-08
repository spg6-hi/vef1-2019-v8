const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    for(let item of items.querySelectorAll('.item')){
      const checkbox = item.querySelector('.item__checkbox');
      checkbox.addEventListener('change', finish);
      const button = item.querySelector('.item__button');
      button.addEventListener('click', deleteItem);
      const text = item.querySelector('.item__text');
      text.addEventListener('click', edit);
      console.log(checkbox);
    }
    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    const {target} = e;
    const input = target.querySelector('input')
    add(input.value) 


    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    console.log(e);
    const {target} = e;
    const {parentNode} = target;
    parentNode.classList.toggle('item--done', !(parentNode.classList.contains('item--done')));
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const li = document.createElement('li');
    li.setAttribute('class','item');
    const input = document.createElement('input');
    input.setAttribute('class','item__checkbox');
    input.setAttribute('type','checkbox');
    input.addEventListener('change', finish);
    const span = document.createElement('span');
    span.setAttribute('class','item__text');
    span.append(document.createTextNode(value));
    const button = document.createElement('button');
    button.setAttribute('class','item__button');
    button.append(document.createTextNode('eyða'));
    button.addEventListener('click',deleteItem);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    items.appendChild(li);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const {target} = e;
    const li = target.parentNode
    const ul = li.parentNode
    ul.removeChild(li)
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
