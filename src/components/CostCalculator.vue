<template>
    <div class="cost-calculator">
      <h2>Калькулятор стоимости</h2>
      <label for="area">Площадь (м²):</label>
      <input type="number" v-model="area" placeholder="Введите площадь" />
      <p>Стоимость: {{ calculateCost }} eu.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        area: 0
      }
    },
    computed: {
      calculateCost() {
        // Примерная стоимость за м²
        const pricePerM2 = 50;
        return this.area * pricePerM2;
      }
    }
  }
  </script>
  
  <style scoped>
  .cost-calculator {
    text-align: center;
  }
  input {
    margin: 10px;
    padding: 5px;
  }
  </style>
  