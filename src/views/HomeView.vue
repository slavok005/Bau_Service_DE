<template>
  <div class="home">
    <div class="hero">
      <div class="overlay">
        <h1>Schleifen und selbstnivellierende Böden</h1>
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
          <img src="@/assets/images/11.jpg" alt="Наливные полы" />
          <h3>Lasst uns das Gebäude abreißen</h3>
          <p>Wir demontieren jedes Gebäude, unabhängig von der Komplexität. In kurzer Zeit.</p>
          <router-link to="/services" class="btn">Mehr lesen</router-link>
        </div>
      </div>
    </div>

    <div class="view-counter">Ansichten: {{ views }}</div>
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
  padding: 100px 0;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 50px;
  border-radius: 10px;
  display: inline-block;
  animation: fadeIn 1.5s ease-in-out;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn {
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background: linear-gradient(45deg, #0056b3, #0091d5);
}

.features {
  margin-top: 50px;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.feature-card {
  width: 300px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.feature-card img {
  width: 80%;
  height: auto;
  border-radius: 8px;
}

.feature-card h3 {
  margin-top: 15px;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
}

.feature-card .btn {
  margin-top: 20px;
}

.view-counter {
  margin-top: 30px;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
