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
        <button type="button" class="btn py-3 font-normal text-lg btn-primary w-full" @click="actionButton('/editList', '_self')">리스트-편집</button>
    </div>
    <!-- 재확인 요망(스와이프기능)<div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-warning w-full" @click="actionButton('/editList2', '_self')">리스트-편집2</button>
    </div> -->
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-success w-full" @click="actionButton('/imageView', '_self')">이미지조회</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-info w-full" @click="actionButton('/gpsReport', '_self')">GPS보고</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-secondary w-full" @click="actionButton('/signSample', '_self')">전자서명</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-info w-full" @click="actionButton('/cameraSample', '_self')">카메라촬영</button>
    </div>
    <br/><br/>
    
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-dark w-full" @click="actionButton('https://62fe53df410812000989322e--statuesque-madeleine-efb457.netlify.app/', '_blank')">(팝업) 카메라 참고사이트</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-dark w-full" @click="actionButton('https://www.npmjs.com/package/vue-signature-pad', '_blank')">(팝업) 서명 참고사이트</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-dark w-full" @click="actionButton('https://mirari.github.io/vue3-viewer', '_blank')">(팝업) 이미지뷰어 참고사이트</button>
    </div>
    <div class="py-1">
        <button type="button" class="btn py-3 font-normal text-lg btn-dark w-full" @click="actionButton('http://ai.gzonesoft.com:9089', '_blank')">(팝업) 샘플테마 참고사이트</button>
    </div>
    
</template>

<script lang="ts" setup>

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