<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="/workPage" class="text-primary hover:underline">개발용페이지</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>카메라샘플</span>
            </li>
        </ul>
    </div>
    
    <div>
      <camera :resolution="{ width: 375, height: 812 }" autoplay>
          <button>I'm on top of the video</button>
      </camera>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Camera from "simple-vue-camera";

export default defineComponent({
    setup() {
        // Get a reference of the component
        const camera = this.refs<InstanceType<typeof Camera>>();

        // Use camera reference to call functions
        const snapshot = async () => {
            const blob = await camera.value?.snapshot();

            // To show the screenshot with an image tag, create a url
            const url = URL.createObjectURL(blob);
        }

        return {
            camera,
            snapshot
        }
    }
});

</script>

<style scoped>

</style>