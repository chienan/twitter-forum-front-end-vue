<template>
  <div class="spinner-container">
    <div class="spinner">
      <div class="bouncing-loader">
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner-container {
  position: relative;
}

.spinner {
  /* padding-top: 100px; */
  height: 100%;
  width: 600px;
  position: absolute;
  top: 300px;
  left: 300px;
}

.bouncing-loader {
  display: flex;
  justify-content: center;
}

.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #ff6600;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}

.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}

.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
</style>