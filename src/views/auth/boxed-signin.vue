<template>
    <div>
        <div class="absolute inset-0">
            <img src="/assets/images/auth/bg-gradient.png" alt="image" class="h-full w-full object-cover" />
        </div>

        <div
            class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
        >
            <img src="/assets/images/auth/coming-soon-object1.png" alt="image" class="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
            <img src="/assets/images/auth/coming-soon-object2.png" alt="image" class="absolute left-24 top-0 h-40 md:left-[30%]" />
            <img src="/assets/images/auth/coming-soon-object3.png" alt="image" class="absolute right-0 top-0 h-[300px]" />
            <img src="/assets/images/auth/polygon-object.svg" alt="image" class="absolute bottom-0 end-[28%]" />
            <div
                class="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]"
            >
                <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
                    
                    <div class="mx-auto w-full max-w-[440px]">
                        <div class="mb-10">
                            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">HANEX-Mobile</h1>
                            <p class="text-base font-bold leading-normal text-white-dark">한익스프레스 모바일 웹서비스 입니다.</p>
                        </div>
                        <form class="space-y-5 dark:text-white" @submit.prevent="router.push('/')">
                            <div>
                                <label for="Email">차량번호</label>
                                <div class="relative text-white-dark">
                                    <input id="Email" type="email" placeholder="경기88아XXXX" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-mail :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="Password">휴대폰번호</label>
                                <div class="relative text-white-dark">
                                    <input id="Password" type="password" placeholder="010-XXXX-XXXX" class="form-input ps-10 placeholder:text-white-dark" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-lock-dots :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label class="flex cursor-pointer items-center">
                                    <input type="checkbox" class="form-checkbox bg-white dark:bg-black" />
                                    <span class="text-white-dark">자동로그인</span>
                                </label>
                            </div>
                            <!-- <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                로그인
                            </button> -->
                            <button type="submit" class="btn btn-primary w-full rounded-full" @click="actionButton('/workpage', '_self')">
                                로그인
                            </button>
                        </form>
                        
                        <div class="text-center dark:text-white mt-7">
                            한익스프레스 모바일 앱설치 >> 
                            <router-link to="/auth/boxed-signup" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                스토어 이동
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { computed, reactive } from 'vue';
    
    import appSetting from '@/app-setting';
    import { useAppStore } from '@/stores/index';
    import { useRouter } from 'vue-router';
    import Swal from 'sweetalert2';
    import { useMeta } from '@/composables/use-meta';

    // import IconCaretDown from '@/components/icon/icon-caret-down.vue';
    // import IconMail from '@/components/icon/icon-mail.vue';
    // import IconLockDots from '@/components/icon/icon-lock-dots.vue';
    // import IconInstagram from '@/components/icon/icon-instagram.vue';
    // import IconFacebookCircle from '@/components/icon/icon-facebook-circle.vue';
    // import IconTwitter from '@/components/icon/icon-twitter.vue';
    // import IconGoogle from '@/components/icon/icon-google.vue';

    useMeta({ title: 'HANEX-TMS,MOBILE' });
    const router = useRouter();
    const store = useAppStore();
    
    const actionButton = (inputUrl : string, popType:string) => {
        // console.log('inputVal = ' + inputVal);
        
        const userAgent = navigator.userAgent.toLowerCase();
        let userType;
        console.log(userAgent);

        if (userAgent.indexOf('android') !== -1) {
            userType = "안드로이드";
            window.HybridApp.fromMobileMessage(userType);
            //return WebViewBridge.showMessage(message);
        } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
            userType = "아이폰";
            window.webkit.HybridApp.fromMobileMessage(userType);
            //return window.webkit.messageHandlers.webViewMessageHandler.postMessage(message);
        } else { // 안드로이드, IOS 가 아닌 경우 (더 조건을 추가해서 처리해도 됨)
            userType = "";
            //return window.opener.postMEssage(message);
        }
        if (userType == "") {
            window.open(inputUrl, popType);
        } else {
            showMessage(userType+'(으)로 확인되었습니다.','bottom');
            setTimeout(() => {
                window.open(inputUrl, popType);
            }, 3000);
        }
        
        //
    };
    
  const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
    
    const toast = Swal.mixin({
          toast: true,
          position: <any>(position || 'bottom-start'),
          showConfirmButton: false,
          timer: duration,
          showCloseButton: showCloseButton,
      });
      toast.fire({
          title: msg,
      });
  };

</script>
