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
      const button = item.querySelector('.item__button');
      const text = item.querySelector('.item__text');
      checkbox.addEventListener('change', finish);
      button.addEventListener('click', deleteItem);
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
    const {target} = e;
    const words = target.childNodes[0].nodeValue;
    const input = document.createElement('input');
    input.setAttribute('class','form__input');
    input.setAttribute('type','text');
    input.setAttribute('value',words);
    input.addEventListener('keydown',commit);
    target.removeEventListener('click',edit);
    target.childNodes[0].nodeValue = '';
    target.append(input);
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if(event.keyCode == 13){
      const {target} = e
      const {parentNode} = target
      parentNode.childNodes[0].nodeValue = target.value;
      parentNode.removeChild(target);
      parentNode.addEventListener('click', edit);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.setAttribute('class','item');
    input.setAttribute('class','item__checkbox');
    input.setAttribute('type','checkbox');
    input.addEventListener('change', finish);
    span.setAttribute('class','item__text');
    span.addEventListener('click', edit);
    span.append(document.createTextNode(value));
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
