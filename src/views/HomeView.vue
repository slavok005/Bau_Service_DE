<template>
  <div class="home">
    <div class="hero">
      <h1>Шлифовка и наливные полы</h1>
      <p>Мы предоставляем качественные услуги по шлифовке и укладке наливных полов для вашего дома и бизнеса.</p>
      <router-link to="/services" class="btn">Узнать больше о наших услугах</router-link>
    </div>

    <div class="features">
      <h2>Наши услуги</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <img src="@/assets/images/15.jpg" alt="Шлифовка полов" />
          <h3>Шлифовка полов</h3>
          <p>Мы восстанавливаем деревянные покрытия, удаляем дефекты и придаём новый вид вашему полу.</p>
          <router-link to="/services" class="btn">Подробнее</router-link>
        </div>
        <div class="feature-card">
          <img src="@/assets/images/2.jpg" alt="Наливные полы" />
          <h3>Наливные полы</h3>
          <p>Создаем идеально ровные и прочные поверхности с использованием высококачественных материалов.</p>
          <router-link to="/services" class="btn">Подробнее</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  font-family: Arial, sans-serif;
   border-radius: 8px;
   width: 100%;
}


.hero {
  background: url('@/assets/images/14.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  border-radius: 8px;
  padding: 100px 0;
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
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.feature-card img {
  width: 100%;
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
</style>
