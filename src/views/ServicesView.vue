<template>
  <div class="services">
    <h2>Dienstleistungen</h2>
    <p>Wir bieten hochwertige Bodenschleif- und selbstnivellierende Bodenverlegungsdienste an. Diese Prozesse tragen dazu bei, Ihr Interieur zu verwandeln und ihm ein neues, elegantes Aussehen zu verleihen.</p>
    <!-- <CostCalculator /> -->
    <h2>Bodenschleifen</h2>
    <p>Wir restaurieren Holz- und Betonoberflächen, beseitigen Mängel und verleihen Ihrem Boden eine neue Optik.</p>
    <img src="@/assets/images/15.jpg" alt="Шлифовка полов" class="service-image" />
    <img src="@/assets/images/20.jpg" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/22.jpg" alt="Наливные полы" class="service-image" />

    <h2>Selbstnivellierende Böden</h2>
    <p>Selbstnivellierende Böden sind eine moderne Lösung zur Schaffung einer vollkommen ebenen und langlebigen Oberfläche. Für langfristige Ergebnisse verwenden wir ausschließlich hochwertige Materialien.</p>
    <img src="@/assets/images/1.png" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/14.jpg" alt="Наливные полы" class="service-image" />
    <img src="@/assets/images/12.jpg" alt="Наливные полы" class="service-image" />
    
   
  </div>
</template>

<script>
// import CostCalculator from '@/components/CostCalculator.vue'

// export default {
//   name: 'ServicesView',
//   components: {
//     CostCalculator
//   }
// }
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
