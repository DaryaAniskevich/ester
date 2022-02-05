/*
Создать функцию createSecretHolder(secret) которая принимает любое значение и возвращает объект ТОЛЬКО с двумя методами:

getSecret() - возвращает секрет
setSecret() - задает секрет

*/

const createSecretHolder = (secret) => {
  const obj = {
    secret,
    getSecret: function () {
      return this.secret;
    },
    setSecret: function (secret) {
      this.secret = secret;
    },
  };
  return obj;
};

const obj = createSecretHolder(5);
obj.getSecret(); // returns 5
obj.setSecret(2);
obj.getSecret(); // returns 2

/*
Отсортировать массив 32-битных целых чисел в порядке возрастания количество бит в этих числах.
В случае, если 2 числа имеют одинаковое количество бит, вместо бит сравниваются сами числа.
Необходимо написать функцию которая принимает массив целых чисел и сортирует его, функция должна изменять входящий массив, а не создавать новый.
*/

const sortArray = (array) => {
  const binaryArray = [];
  const bitsArray = [];
  const list = [];

  for (let i = 0; i < array.length; i++) {
    binaryArray.push(array[i].toString(2));

    const binaryArrayElem = binaryArray[i].split("");
    let numOfBits = 0;

    for (let j = 0; j < binaryArrayElem.length; j++) {
      if (binaryArrayElem[j] === "1") {
        numOfBits++;
      }
    }

    bitsArray.push(numOfBits);

    list.push({
      number: array[i],
      binaryNumber: binaryArray[i],
      bits: bitsArray[i],
    });
  }

  list.sort(function (a, b) {
    if (a.bits === b.bits) {
      return a.number - b.number;
    } else {
      return a.bits - b.bits;
    }
  });

  for (let i = 0; i < list.length; i++) {
    array[i] = list[i].number;
  }

  return array;
};

sortArray([7, 6, 15, 8]); // функция не будет работать корректно, если элементом массива является отрицательное значение

/*
Вам дан объект содержащий языки и оценки по этим языкам. 
Необходимо вернуть массив языков где оценки =>60, отсортированный в убывающем порядке по оценкам.
*/

const sortObj = (obj) => {
  const languagesArray = [];
  const objectsList = [];

  for (let value in obj) {
    if (obj[value] >= 60) {
      objectsList.push({ language: value, grade: obj[value] });
    }
  }

  objectsList.sort((a, b) => b.grade - a.grade);

  for (let i = 0; i < objectsList.length; i++) {
    languagesArray.push(objectsList[i].language);
  }
  return languagesArray;
};

sortObj({ Hindi: 60, Dutch: 93, Greek: 71 });

/*
Дана функция:

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Необходимо изменить функцию так чтобы она возвращала все значения i (0,1,2,3,4). Нельзя использовать const и let для объявления переменных.
*/

function doSetTimeout(i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  doSetTimeout(i);
}
