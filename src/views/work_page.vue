<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">개발용</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>작업페이지</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    onMounted(() => { 
        //const routeData = this.$router.resolve({name: 'routeName', query: {data: "someData"}});
        window.open('http://ai.gzonesoft.com:9089', '_blank');
    });
    
</script>