<template>
  <div class="contacts">
    <h1>Kontakte</h1>
    <p>Kontaktieren Sie uns, wir beantworten gerne Ihre Fragen!</p>

    <div class="contact-info">
      <p><strong>Hendy:</strong> +4915735187781, +4917634602524</p>
      <p><strong>Email:</strong> info@example.com</p>
      <p><strong>Adresse:</strong>14712 Rathenow, Drossel Weg 9</p>
    </div>

    <div class="map">
      <h3>Wir sind auf der Karte:</h3>
      <!-- Можно вставить карту Google Maps или Яндекс Карты -->
      <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsView'
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

.contacts {
  text-align: center;
  margin: 20px;
}

.contact-info {
  margin-top: 20px;
  font-size: 1.2rem;
}

.map iframe {
  margin-top: 20px;
  border: 0;
}
</style>
