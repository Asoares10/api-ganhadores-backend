<template>
  <div id="app">
    <HeroSection />
    <ComoParticipar />
    <Premiacao />
    <FAQ />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import ComoParticipar from './components/ComoParticipar.vue'
import Premiacao from './components/Premiacao.vue'
import FAQ from './components/FAQ.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    ComoParticipar,
    Premiacao,
    FAQ
  }
}
</script>
