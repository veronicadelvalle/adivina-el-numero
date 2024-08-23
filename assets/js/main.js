//Número aleatorio
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Botones
const play = document.querySelector('#play');
const reset = document.querySelector('#reset');

// Mensaje de error
const error = document.querySelector('#error');

// Mensaje de alertas
const boxAlert = document.querySelector('#boxAlert');
const alerText = document.querySelector('#alerText');
const alertIcon = document.querySelector('#icon');

const showMessage = (element, message, iconClass) => {
  element.textContent = message;

  if (element === alerText) {
    boxAlert.style.display = 'block';
    if (iconClass) alertIcon.classList.add(iconClass);
  }

 setTimeout(() =>{
   error.textContent = '';
   boxAlert.style.display = 'none';
   if (iconClass) alertIcon.classList.remove(iconClass);
 }, 2500);
}

const showModal = () => {
  const boxModal = document.querySelector('#boxModal');
  boxModal.style.display = 'block';
}

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#boxModal').style.display = 'none';
});

play.addEventListener('click', (e)=> {
  const boxInput = document.querySelector('#box-input');
  const valueInput = boxInput.value.trim();
  const regex = /^(100|[1-9][0-9]?)$/;

  if (valueInput === '') {
    showMessage(error, 'El campo no puede ir vacio.', null);

  } else if (!regex.test(valueInput)) {
    showMessage(error, 'Solo puede agregar números del 1 al 100.', null);

  } else {
    const valueNumber = parseInt(valueInput);

    if (valueNumber > randomNumber) {
      showMessage(alerText, 'el número ingresado es muy alto', 'fa-arrow-up-long');

    } else if(valueNumber < randomNumber) {
      showMessage(alerText, 'el número ingresado es muy bajo', 'fa-arrow-down-long');

    } else {
      showModal();
    }
  }
  
  boxInput.value = '';
});  

reset.addEventListener('click', () => {
  location.reload();
});