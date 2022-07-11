<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink class="nav-link" active-class="active" to="/nested/one"
        >One</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" active-class="active" to="/nested/two"
        >Two</RouterLink
      >
    </li>
  </ul>
  <hr class="my-4" />
  <RouterView />
</template>

<script setup></script>

<style lang="scss" scoped></style>
