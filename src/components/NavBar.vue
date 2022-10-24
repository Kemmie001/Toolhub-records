<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
const showNav = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="font-open font-thin z-20 fixed md:relative md:flex w-full text-white bg-primary capitalize text-lg md:px-16 px-5"
  >
    <div class="flex items-center justify-between md:w-1/3">
      <a href="/">logo</a>
      <div @click="showNav" class="md:hidden cursor-pointer pt-4 pb-2">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>

    <nav class="pt-4 md:w-2/3">
      <div :class="{ open: isOpen }" class="mobile md:pl-5 bg-primary w-full">
        <ul class="md:flex justify-between items-center w-full">
          <div class="md:flex gap-8">
            <li class="pb-4"><router-link to="/">Homepage</router-link></li>
            <li class="pb-4">
              <router-link to="/records-dashboard">Records</router-link>
            </li>
            <li class="pb-4">
              <router-link to="/leader-board">Leaderboard</router-link>
            </li>
          </div>
          <div class="flex items-center gap-4">
            <li class="pb-4">
              <router-link to=""
                ><img src="../assets/bell.svg" alt="notification bell"
              /></router-link>
            </li>
            <li class="pb-4">
              <router-link to=""
                ><img src="../assets/user.svg" alt="User"
              /></router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
@media screen and (max-width: 768px) {
  .mobile {
    display: none;
    color: #fff;
  }
  .open {
    display: block;
  }
}
input {
  padding: 0.5rem;
  border: none;
  color: #fff;
  outline: none;
}
input:hover {
  outline: none;
}
nav a:hover {
  color: #7fc5ed;
  border-bottom: 1px solid #7fc5ed;
  font-weight: 500;
  padding-bottom: 4px;
}
nav .router-link-exact-active {
  color: #7fc5ed;
  border-bottom: 1px solid #7fc5ed;
  font-weight: 500;
  padding-bottom: 4px;
}
</style>
