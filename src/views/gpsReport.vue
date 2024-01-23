<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="/workPage" class="text-primary hover:underline">개발용페이지</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>이미지보기 샘플</span>
            </li>
        </ul>
    </div>
    
    <div>
        <div class="images" v-viewer="{movable: true}">
            <img class="my-2" v-for="src in images" :src="src" :key="src">
        </div>
        <!-- <button type="button" @click="rotate(90)">ROTATE</button> -->
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import 'viewerjs/dist/viewer.css'
  import { directive as viewer } from "v-viewer"
  export default defineComponent({
    directives: {
      viewer: viewer({
        debug: true
      })
    },
    data() {
      return {
        images: [
          "https://picsum.photos/400/200",
          "https://picsum.photos/600/300",
          "https://picsum.photos/800/500",
          "https://picsum.photos/1000/500",
        ]
      }
    },
    methods: {
      show () {
        const viewer = this.$el.querySelector('.images').$viewer
        viewer.show()
      }
    }
  });

</script>
<style scoped>
img {
    width:20rem;
    height:auto;
}
</style>