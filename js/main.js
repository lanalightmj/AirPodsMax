const chooseColor = document.querySelectorAll('.choose-color__btn');
const contantItem = document.querySelectorAll('.contant-item');

chooseColor.forEach(function(element){
  element.addEventListener('click', open)
});

function open(evt){

  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contantActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item){
    item.classList.remove('choose-color__btn--active')
  });

  target.classList.add('choose-color__btn--active');

  contantItem.forEach(function(item){
    item.classList.remove('contant-item__active');
  });

  contantActive.forEach(function(item){
    item.classList.add('contant-item__active');
  });

}