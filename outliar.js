function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
      let keyValue = obj[key]; 
      
      if (acc[keyValue] === undefined) { 
          acc[keyValue] = obj;  // Error: debería ser un array, no el objeto directamente
      } else {
          acc[keyValue].push(obj);  // Error: `acc[keyValue]` no es un array, por lo tanto, no tiene el método `push`
      }

      return acc;
  }, {}); 
}

// Ejemplo de uso:
const data = [
  { id: 1, category: 'fruit', name: 'apple' },
  { id: 2, category: 'vegetable', name: 'carrot' },
  { id: 3, category: 'fruit', name: 'banana' },
  { id: 4, category: 'vegetable', name: 'broccoli' },
  { id: 5, category: 'fruit', name: 'grape' }
];

const result = groupBy(data, 'category');
console.log(result);