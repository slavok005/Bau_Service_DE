<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <p>Schauen Sie sich Beispiele unserer abgeschlossenen Arbeiten an, um sich von der Qualität unserer Dienstleistungen zu überzeugen.</p>
    
    <div class="portfolio-images">
      <img src="@/assets/images/3.jpg" alt="Работа 1" class="portfolio-image" />
      <img src="@/assets/images/5.jpg" alt="Работа 2" class="portfolio-image" />
      <img src="@/assets/images/20.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/19.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/18.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/15.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/24.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/14.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/12.jpg" alt="Работа 3" class="portfolio-image" />
      <img src="@/assets/images/9.jpg" alt="Работа 3" class="portfolio-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView'
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.portfolio {
  text-align: center;
  margin: 20px;
}

.portfolio-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.portfolio-image {
  width: 300px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-image:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
