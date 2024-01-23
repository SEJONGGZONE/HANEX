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
    <div class="py-1">
        <button type="button" class="btn btn-primary w-full" @click="actionButton('/editList', '_self')">배송순서 편집</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn btn-warning w-full" @click="actionButton('/editList', '_self')">이미지조회</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn btn-warning w-full" @click="actionButton('/editList', '_self')">GPS보고</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn btn-warning w-full" @click="actionButton('/editList', '_self')">전자서명</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn btn-warning w-full" @click="actionButton('/editList', '_self')">카메라촬영</button>
    </div>
    <br/><br/>
    <div class="py-1">
        <button type="button" class="btn btn-dark w-full" @click="actionButton('https://mirari.github.io/vue3-viewer', '_blank')">(팝업) 이미지뷰어 샘플</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn btn-dark w-full" @click="actionButton('http://ai.gzonesoft.com:9089', '_blank')">(팝업) 샘플테마 페이지이동</button>
    </div>
    
</template>

<script lang="ts" setup>
/*
{ id: '02', menuName: '이미지조회', link: '/',},
{ id: '03', menuName: 'GPS보고', link: '/',},
{ id: '04', menuName: '전자서명', link: '/',},
{ id: '05', menuName: '카메라촬영', link: '/',},
*/
    import { ref, onMounted } from 'vue';
    onMounted(() => { 
        // 시작시...
    });
    
    const actionButton = (inputUrl : string, popType:string) => {
        // console.log('inputVal = ' + inputVal);
        window.open(inputUrl, popType);
    };

</script>

<style scoped>
div {
    margin-top: 1rem;
}
</style>