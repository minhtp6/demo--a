<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.replace("/");
    } else {
      this.$router.replace("/Home");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
</style>
