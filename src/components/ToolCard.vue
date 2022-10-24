<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  authors: {
    type: Array,
    default: [],
  },
  missing: {
    type: Boolean,
    default: [],
  },
});
</script>

<template>
  <router-link to="/tool-details">
    <div class="mx-auto">
      <div class="card rounded-md text-center shadow-md">
        <div :class="{ red: missing }" class="blue"></div>
        <div class="">
          <h4 class="text-lg font-semibold pt-5 pb-2">{{ name }}</h4>
          <p class="text-md font-thin desc">{{ description }}</p>
          <p class="text-md ml-3 font-medium pt-5 pb-3 text-left">
            Author(s):
            <span v-for="(author, index) in authors" :key="index">{{
              author
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<style>
.blue {
  width: 100%;
  height: 30px;
  background: #7fc5ed;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.red {
  background-color: #ff5f00;
}
.card {
  width: 340px;
  height: 200px;
  background: #fff;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 15%); */
}
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  /* display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; */
  /* line-height: 1rem;
        max-height: 3rem; */
  white-space: nowrap;
  padding: 0 8px;
}
@media screen and (max-width: 768px) {
  .card {
    margin: 0 auto;
    width: 100%;
    max-width: 320px;
    height: 200px;
    background: #fff;
  }
}
</style>
