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

type Link = {
	displayName: string;
	routeName: string;
}

export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const hamburgerShow = ref(false);
    const links: Link[] = [
      {
        displayName: 'Gyms',
        routeName: RouteName.GYM_OVERVIEW
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
  background-color: #BFBFBF;
  box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);
}

/* Style the header links */
.header a {
  color: black;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
}

.header .header-link {
	text-align: center;
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
