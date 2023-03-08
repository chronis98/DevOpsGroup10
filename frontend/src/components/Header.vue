<template>
  <div class="header">
    <router-link class="logo" :to="{name: RouteName.HOME}">LOGO</router-link>
    <div class="header-right" @click="hamburgerNavOpen=!hamburgerNavOpen">
      <router-link :to="{name: link.routeName}"
                   class="header-link"
                   v-for="link in links">{{link.displayName}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {RouteName} from "@/router";

export default defineComponent({
  name: "Header",
  setup () {
    const hamburgerNavOpen = ref(false);
    const links = [
      {
        displayName: 'Home',
        routeName: RouteName.HOME
      },
      {
        displayName: 'About',
        routeName: RouteName.ABOUT
      }
    ];

    return {
      hamburgerNavOpen,
      links,
      RouteName
    }
  }
});
</script>

<style scoped>

.container {

}

/* Style the header with a grey background and some padding */
.header {
  overflow: hidden;
  background-color: #BFBFBF;
  /*padding: 10px 5px;*/
  box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);
  /*box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);*/
  border-radius: 4px;
}

/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header-right a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}

.header-right .router-link-active {
  border-bottom: 2px solid var(--vt-c-black);
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}

</style>
