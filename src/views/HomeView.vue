<script setup lang="ts">
</script>

<template>
  <MainLayout>
    <div>
      <h1 class="title">Основной компонент</h1>
      <RouterLink to="/projects">Go to projects</RouterLink>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
.title {
  color: $blue;
}
</style>
