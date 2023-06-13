<script setup></script>

<template>
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
  </head>
  <div class="fullscreen">

  </div>
  <h1>404</h1>

  <h2>Page not found.</h2>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

$text-color: red;
$dark-text-color: #12000a;

@keyframes flicker1 {
  0% {
    stroke: $text-color;
  }

  1% {
    stroke: transparent;
  }

  3% {
    stroke: transparent;
  }

  4% {
    stroke: $text-color;
  }

  6% {
    stroke: $text-color;
  }

  7% {
    stroke: transparent;
  }

  13% {
    stroke: transparent;
  }

  14% {
    stroke: $text-color;
  }

  100% {
    stroke: $text-color;
  }
}

@keyframes flicker2 {
  0% {
    stroke: $text-color;
  }

  50% {
    stroke: $text-color;
  }

  51% {
    stroke: transparent;
  }

  61% {
    stroke: transparent;
  }

  62% {
    stroke: $text-color;
  }

  100% {
    stroke: $text-color;
  }
}

@keyframes flicker3 {
  0% {
    stroke: $text-color;
  }

  1% {
    stroke: transparent;
  }

  10% {
    stroke: transparent;
  }

  11% {
    stroke: $text-color;
  }

  40% {
    stroke: $text-color;
  }

  41% {
    stroke: transparent;
  }

  45% {
    stroke: transparent;
  }

  46% {
    stroke: $text-color;
  }

  100% {
    stroke: $text-color;
  }
}

@keyframes flicker4 {
  0% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  30% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  31% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  32% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  36% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  37% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  41% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  42% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  85% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  86% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  95% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  96% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }

  100% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }
}

@keyframes fadeInText {
  1% {
    color: $dark-text-color;
    text-shadow: 0px 0px 4px $dark-text-color;
  }

  70% {
    color: $text-color;
    text-shadow: 0px 0px 10px $text-color;
  }

  100% {
    color: $text-color;
    text-shadow: 0px 0px 4px $text-color;
  }
}

* {
  position: absolute !important;
}

html,
body {
  margin: 0px;
  overflow: hidden;
}

.fullscreen {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0;
  background: radial-gradient(circle, #000000 0%, #120000 100%);
  overflow: hidden;
}

.wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  position: absolute;
  top: 45%;
  left: 50%;
  font-size: 9vw;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  display: block;
  color: $dark-text-color;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px $dark-text-color;
  animation: fadeInText 1s ease-in 2s forwards;
}

h2 {
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 200px;
  font-size: 32px;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  display: block;
  color: $dark-text-color;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px $dark-text-color;
  animation: fadeInText 1s ease-in 2s forwards, flicker4 3s linear 5.5s infinite;
}

@media (max-width: 992px) {
  h1 {
    font-size: 20vw;
  }
  h2 {
    font-size: 5vw;
  }
}
</style>