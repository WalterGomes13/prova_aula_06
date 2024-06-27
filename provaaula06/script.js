const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcular = () => {
  alert(`O seu imc é de ${((peso.value) / ((altura.value/100) * (altura.value/100))).toFixed(2)}`)

  altura.value = '';
  peso.value = '';
}

