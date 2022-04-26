'use strict';
// МОДАЛЬНОЕ ОКНО
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
  }
  /*window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  */
  ///////////////////////////////////////////////

sendValues.onclick = function() {
  // ВЫТАСКИВАЕМ ЗНАЧЕНИЯ ИЗ ИНПУТОВ
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var input3 = document.getElementById('input3').value;
  // ИЗБАВЛЯЕМСЯ ОТ ПРОБЕЛОВ
  input1 = input1.replace(/\s+/g, '');
  input2 = input2.replace(/\s+/g, '');
  input3 = input3.replace(/\s+/g, '');
  // ПРОВЕРЯЕМ ЗНАЧЕНИЯ ИНПУТОВ НА ПУСТЫЕ СТРОЧКИ ПОСЛЕ УДАЛЕНИЯ ПРОБЕЛОВ
  if (input1 === '' &&
    input2 === '' &&
    input3 === '') {
    document.getElementById('result').innerHTML = "";
    alert('Введіть цілі числа у всі текстові поля!');
  } else if (input1 === '') {
    document.getElementById('result').innerHTML = "";
    alert('Введіть ціле число у текстове поле №1');
  } else if (input2 === '') {
    document.getElementById('result').innerHTML = "";
    alert('Введіть ціле число у текстове поле №2');
  } else if (input3 === '') {
    document.getElementById('result').innerHTML = "";
    alert('Введіть ціле число у текстове поле №3');
  }
  // ПРЕОБРАЗУЕМ СТРОКИ В ЧИСЛА
  else {
    input1 = (input1) * 1;
    input2 = (input2) * 1;
    input3 = (input3) * 1;
    // ПРОВЕРЯЕМ НА NaN (НАЛИЧИЕ СИМВОЛОВ В ИНПУТАХ)
    if (isNaN(input1) == true &&
      isNaN(input2) == true &&
      isNaN(input3) == true) {
      document.getElementById('result').innerHTML = "";
      alert('Невірно вказані сторони трикутника');
    } else if (isNaN(input1) == true) {
      document.getElementById('result').innerHTML = "";
      alert('Помилка у текстовому полі №1. Повинне бути записане ціле число');
    } else if (isNaN(input2) == true) {
      document.getElementById('result').innerHTML = "";
      alert('Помилка у текстовому полі №2. Повинне бути записане ціле число');
    } else if (isNaN(input3) == true) {
      document.getElementById('result').innerHTML = "";
      alert('Помилка у текстовому полі №3. Повинне бути записане ціле число');
    } else {
      // ПРОВЕРКА НА ОТРИЦАТЕЛЬНЫЕ ЧИСЛА
      if (Math.sign(input1) == -1) {
        document.getElementById('result').innerHTML = "";
        alert("У текстовому полі №1 від'ємне число");
      } else if (Math.sign(input2) == -1) {
        document.getElementById('result').innerHTML = "";
        alert("У текстовому полі №2 від'ємне число");
      }
      /*		else if (Math.sign(input3) === -1){
      			alert('Error');
      		} */
      else {
        // ПРОВЕРКА НА СУЩЕСТВОВАНИЕ ТРЕУГОЛЬНИКА
        if ((input1 + input2) < input3 ||
          (input2 + input3) < input1 ||
          (input3 + input1) < input2) {
          document.getElementById('result').innerHTML = "";
          alert('Правило існування трикутника не виконується');
        } else {
          if (input1 != input2 &&
            input2 != input3 &&
            input3 != input1) {
            document.getElementById('result').innerHTML = "<p> Даний трикутник є різностороннім! </p>";
          } else if (input1 == input2 &&
            input2 == input3 &&
            input3 == input1) {
            document.getElementById('result').innerHTML = "<p> Даний трикутник є рівностороннім! </p>";
          } else {
            document.getElementById('result').innerHTML = "<p> Даний трикутник є рівнобедреним! </p>";
          }
        }
      }
    }
  }
};