<template>
  <div class="about">
    <h3 class="about__title">Über uns</h3>
    <p>
      Unser Unternehmen ist auf das Bodenschleifen und die Installation von
      selbstverlaufenden Beschichtungen spezialisiert. Wir bearbeiten
      unterschiedliche Oberflächen und garantieren hochwertige Ergebnisse.
      Unsere Erfahrung ermöglicht es uns, Probleme jeder Komplexität zu lösen
      und so die Zuverlässigkeit und Haltbarkeit von Böden zu gewährleisten.
    </p>
    <p>
      Wir verwenden moderne Technologien und Materialien, wodurch wir in
      kürzester Zeit das optimale Ergebnis erzielen. Wenn Sie uns Ihr Vertrauen
      schenken, profitieren Sie von einer professionellen Betreuung und einem
      hohen Serviceniveau.
    </p>
    <img
      src="@/assets/images/shablon.jpg"
      alt="Schleifen von Böden"
      class="about__image"
    />
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.about__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
}

.about p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
}

.about__image {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  border-radius: 8px;
}

/* Адаптация под мобильные устройства */
@media (max-width: 600px) {
  .about {
    padding: 15px;
  }

  .about__title {
    font-size: 1.8rem;
  }

  .about p {
    font-size: 1rem;
  }
}
</style>
