<template>
  <div class="header">

    <div class="header-main">
      <router-link class="logo" :to="{name: RouteName.HOME}">LOGO</router-link>

      <div class="hamburger-icon" @click="toggleMobileMenu">
        <font-awesome-icon icon="fa-solid fa-bars"/>
      </div>
    </div>

    <div :class="hamburgerShow ? 'header-down' : 'header-right'">
      <router-link :to="{name: link.routeName}"
                   class="header-link"
                   @click="toggleMobileMenu"
                   v-for="link in links">{{ link.displayName }}
      </router-link>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {RouteName} from "@/router";

export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const hamburgerShow = ref(false);
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

    function toggleMobileMenu() {
      hamburgerShow.value = !hamburgerShow.value;
    }

    return {
      hamburgerShow,
      links,
      RouteName,
      toggleMobileMenu
    }
  }
});
</script>

<style scoped lang="scss">
.hamburger-icon {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
}

.header-down {
  display: flex;
  flex-direction: column;
}

.header-right {
  display: none;
}

.header-main {
  display: flex;
  justify-content: space-between;
}

.header-right .router-link-active {
  border-bottom: 2px solid var(--vt-c-black);
}

/* Style the header with a grey background and some padding */
.header {
  overflow: hidden;
  background-color: #BFBFBF;
  box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
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

</style>
