<template>
  <div class="home">
    <div class="view-counter">Ansichten: {{ views }}</div>
    <div class="hero">
      <div class="overlay">
        <h2>Schleifen und selbstnivellierende Böden</h2>
        <p>Wir bieten hochwertige Bodenschleif- und Verlegedienste für Ihr Zuhause und Ihr Unternehmen.</p>
        <router-link to="/services" class="btn">Erfahren Sie mehr über unsere Leistungen</router-link>
      </div>
    </div>

    <div class="features">
      <h2>Unsere Leistungen</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <img src="@/assets/images/15.jpg" alt="Шлифовка полов" />
          <h3>Bodenschleifen</h3>
          <p>Wir restaurieren Holz- und Betonoberflächen, beseitigen Mängel und verleihen Ihrem Boden eine neue Optik.</p>
          <router-link to="/services" class="btn">Mehr lesen</router-link>
        </div>
        <div class="feature-card">
          <img src="@/assets/images/2.jpg" alt="Наливные полы" />
          <h3>Selbstnivellierende Böden</h3>
          <p>Durch den Einsatz hochwertiger Materialien schaffen wir perfekt glatte und langlebige Oberflächen.</p>
          <router-link to="/services" class="btn">Mehr lesen</router-link>
        </div>
        <div class="feature-card">
          <img src="@/assets/images/9.jpg" alt="Наливные полы" />
          <h3>Lasst uns das Gebäude abreißen</h3>
          <p>Wir demontieren jedes Gebäude, unabhängig von der Komplexität. In kurzer Zeit.</p>
          <router-link to="/services" class="btn">Mehr lesen</router-link>
        </div>
      </div>
    </div>

 
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      views: 0
    };
  },
  mounted() {
    this.views = localStorage.getItem('viewCount') ? parseInt(localStorage.getItem('viewCount')) : 0;
    this.views++;
    localStorage.setItem('viewCount', this.views);
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  font-family: Arial, sans-serif;
  width: 100%;
}

.hero {
  background: url('@/assets/images/14.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 80px 20px;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 10px;
  display: inline-block;
  animation: fadeIn 1.5s ease-in-out;
  max-width: 90%;
}

.main-title {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(90deg, black 33%, red 33%, red 66%, yellow 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.btn {
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-block;
}

.btn:hover {
  background: linear-gradient(45deg, #0056b3, #0091d5);
}

.features {
  margin-top: 40px;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-card {
  width: 100%;
  max-width: 300px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.feature-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.feature-card h3 {
  margin-top: 10px;
}

.feature-card p {
  font-size: 0.9rem;
  color: #555;
}

.feature-card .btn {
  margin-top: 15px;
}

.view-counter {
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
  .hero p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 10px;
  }
  .main-title {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}
</style>
