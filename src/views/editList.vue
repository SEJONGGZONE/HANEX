<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">개발화면</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>배송순서 편집</span>
            </li>
        </ul>

        <div class="dragndrop space-y-8">

            <!-- Handler -->
            <div class="panel">
                <div class="font-semibold text-lg dark:text-white mb-5">1배차</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    <div>
                        <ul>
                            <draggable group="handler" ghost-class="gu-transit" handle=".handle" :animation="200">
                                <template v-for="(item, i) in items" :key="i">
                                    <li class="mb-2.5 cursor-grab">
                                        <div
                                            class="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center"
                                        >
                                            <div style="display: flex; align-items: center;">
                                                <div class="dispId">{{ item.id }}</div>
                                                <div class="sm:flex block justify-between items-center flex-1">
                                                    <div class="font-semibold md:my-0 my-3">
                                                        <div class="text-dark dark:text-[#bfc9d4] text-base">{{ item.text }}</div>
                                                        <div class="text-white-dark text-xs">{{ item.name }}</div>
                                                    </div>
                                                </div>
                                                <div class="text-white-dark">
                                                    <span class="handle moveHoldOn">
                                                        이 동</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </template>
                            </draggable>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { VueDraggableNext as draggable } from 'vue-draggable-next';
    import { useMeta } from '@/composables/use-meta';

    import IconBell from '@/components/icon/icon-bell.vue';
    import IconStar from '@/components/icon/icon-star.vue';
    import IconHeart from '@/components/icon/icon-heart.vue';

    useMeta({ title: 'Drag & Drop' });

    const items = ref([
        { id: '01', text: '일산센터', name: 'BOX 16 / PLT 0',},
        { id: '02', text: '일산이포점IC점', name: 'BOX 16 / PLT 0',},
        { id: '03', text: '운정센트럴점', name: 'BOX 16 / PLT 0',},
        { id: '04', text: '파주본점', name: 'BOX 16 / PLT 0',},
        { id: '05', text: '야당중심점', name: 'BOX 16 / PLT 0',},
        { id: '06', text: '일산센터', name: 'BOX 16 / PLT 0',},
        { id: '07', text: '일산이포점IC점', name: 'BOX 16 / PLT 0',},
        { id: '08', text: '운정센트럴점', name: 'BOX 16 / PLT 0',},
        { id: '09', text: '파주본점', name: 'BOX 16 / PLT 0',},
        { id: '10', text: '야당중심점', name: 'BOX 16 / PLT 0',},
    ]);
</script>
<style scoped>
.dispId {
    padding: 0.5rem 0.5rem;
    background-color: #6439ffcc;
    color:#FFFFFF;
    
}
.moveHoldOn {
    border:0px solid red;
    padding: 1.0rem 1.5rem;
    background-color: #ff4639cc;
    color:#FFFFFF;
    border-radius: 0.5rem;
    font-size: 1.2rem;
}
</style>
