<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
  <MainLayout>
    <div>
      <h1>Single project {{ route.params?.id }}</h1>
      <RouterLink to="/">Go to Home</RouterLink>
    </div>
  </MainLayout>
</template>
