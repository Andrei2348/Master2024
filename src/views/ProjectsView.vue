<script setup lang="ts">
</script>

<template>
  <MainLayout>
    <div>
      <h1 class="title">Проекты</h1>
      <RouterLink to="/">Go to Home page</RouterLink>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
.title{
  color: $red;
  @include heading(22);
}
</style>
