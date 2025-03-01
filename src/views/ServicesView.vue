<template>
  <div class="services">
    <h1>Услуги</h1>
    <p>Мы предоставляем высококачественные услуги по шлифовке полов и наливным полам. Эти процессы помогут преобразить ваш интерьер, придавая ему новый, элегантный вид.</p>
    <CostCalculator />
    <h2>Шлифовка полов</h2>
    <p>Шлифовка пола — это процесс улучшения поверхности деревянного покрытия, удаление дефектов и выравнивание. Это делает полы более долговечными и эстетичными.</p>
    <img src="@/assets/images/15.jpg" alt="Шлифовка полов" class="service-image" />
    <img src="@/assets/images/20.jpg" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/22.jpg" alt="Наливные полы" class="service-image" />

    <h2>Наливные полы</h2>
    <p>Наливные полы — это современное решение для создания идеально ровной и прочной поверхности. Мы используем только качественные материалы для долгосрочного результата.</p>
    <img src="@/assets/images/1.jpg" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/14.jpg" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/12.jpg" alt="Наливные полы" class="service-image" />
    
   
  </div>
</template>

<script>
import CostCalculator from '@/components/CostCalculator.vue'

export default {
  name: 'ServicesView',
  components: {
    CostCalculator
  }
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

.services {
  text-align: center;
  margin: 20px;
}

.service-image {
  width: 300px;
  margin: 20px;
  border-radius: 18px;
   height: auto;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}
</style>
