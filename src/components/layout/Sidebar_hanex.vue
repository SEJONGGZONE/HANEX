<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-3">
                    <!-- 로고표시 -->
                    <router-link to="/" class="main-logo flex items-center shrink-0" replace>
                        <img class="ml-[15px] flex-none" src="/assets/images/hanex/HanExpress_CI_02.png" alt="" style="height:2rem; margin-top:0rem;"/>
                    </router-link>
                    <!-- 메뉴닫기 -->
                    <a
                        href="javascript:;"
                        class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
                        @click="store.toggleSidebar()"
                    >
                        <svg class="w-5 h-5 m-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                opacity="0.5"
                                d="M16.9998 19L10.9998 12L16.9998 5"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
                <perfect-scrollbar
                    :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }"
                    class="h-[calc(100vh-80px)] relative"
                >
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0">
                        
                        <!-- 메뉴타이틀#1 -->
                        <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <svg
                                class="w-4 h-5 flex-none hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Order - 업무보고</span>
                        </h2>

                        <li class="nav-item">
                            <ul>
                                <li class="nav-item">
                                    <router-link to="/menu01" class="group" @click="toggleMobileMenu" replace>
                                        <div class="flex items-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path d="M2 5.5L3.21429 7L7.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.5" d="M2 12.5L3.21429 14L7.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 19.5L3.21429 21L7.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 19L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M22 12L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M22 5L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">배차조회</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/menu02" class="group" @click="toggleMobileMenu" replace>
                                        <div class="flex items-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M10 16H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M14 16H12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M2 10L22 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">주유등록</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- 메뉴타이틀#2 -->
                        <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <svg
                                class="w-4 h-5 flex-none hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>'Notice - 알림/공지</span>
                        </h2>
                        <li class="nav-item">
                            <ul>
                                <li class="nav-item">
                                    <router-link to="/menu03" class="group" @click="toggleMobileMenu" replace>
                                        <div class="flex items-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path d="M13.926 9.70541C13.5474 9.33386 13.5474 8.74151 13.5474 7.55682V7.24712C13.5474 3.96249 13.5474 2.32018 12.6241 2.03721C11.7007 1.75425 10.711 3.09327 8.73167 5.77133L5.66953 9.91436C4.3848 11.6526 3.74244 12.5217 4.09639 13.205C4.10225 13.2164 4.10829 13.2276 4.1145 13.2387C4.48945 13.9117 5.59888 13.9117 7.81775 13.9117C9.05079 13.9117 9.6673 13.9117 10.054 14.2754" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M13.9259 9.70557L13.9459 9.72481C14.3326 10.0885 14.9492 10.0885 16.1822 10.0885C18.4011 10.0885 19.5105 10.0885 19.8854 10.7615C19.8917 10.7726 19.8977 10.7838 19.9036 10.7951C20.2575 11.4785 19.6151 12.3476 18.3304 14.0858L15.2682 18.2288C13.2888 20.9069 12.2991 22.2459 11.3758 21.9629C10.4524 21.68 10.4524 20.0376 10.4525 16.753L10.4525 16.4434C10.4525 15.2587 10.4525 14.6663 10.074 14.2948L10.054 14.2755" stroke="currentColor" stroke-width="1.5"></path></svg>
                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">이상보고</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- 메뉴타이틀#3 -->
                        <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <svg
                                class="w-4 h-5 flex-none hidden"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Develop - 개발참고</span>
                        </h2>
                        <li class="nav-item">
                            <ul>
                                <template v-for="(item, i) in items" :key="i">
                                    <li class="nav-item">
                                        <router-link v-bind:to="item.link" class="group" @click="toggleMobileMenu" replace>
                                            <div class="flex items-center">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                                <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    {{ item.menuName }}
                                                </span>
                                            </div>
                                        </router-link>
                                    </li>
                                </template>
                            </ul>
                        </li>

                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    import { useAppStore } from '@/stores/index';
    import VueCollapsible from 'vue-height-collapsible/vue3';
    const store = useAppStore();
    const activeDropdown: any = ref('');
    const subActive: any = ref('');

    onMounted(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
    // 메뉴리스트 가져오기..
    const items = store.getMenuList();
</script>
