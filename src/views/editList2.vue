<template slot-scope="props">
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="/workPage" class="text-primary hover:underline">개발용페이지</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>배송순서 편집</span>
            </li>
        </ul>
        <swipe-list
            ref="list"
            class="card"
            :disabled="!enabled"
            :items="mockSwipeList"
            item-key="id"
            @swipeout:click="itemClick"
        >
            <template v-slot="{ item, index, revealLeft, revealRight, close }">
                <!-- item is the corresponding object from the array -->
                <!-- index is clearly the index -->
                <!-- revealLeft is method which toggles the left side -->
                <!-- revealRight is method which toggles the right side -->
                <!-- close is method which closes an opened side -->
                <div class="card-content">
                    <!-- style content how ever you like -->
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                    <span>{{ index }}</span>
                </div>
            </template>
            <!-- left swipe side template and v-slot:left="{ item }" is the item clearly -->
            <!-- remove if you dont wanna have left swipe side  -->
            <template v-slot:left="{ item, close }">
                <div class="swipeout-action red" title="remove" @click="remove(item)">
                    <!-- place icon here or what ever you want -->
                    <i class="fa fa-trash"></i>
                </div>
                <div class="swipeout-action purple" @click="close">
                    <!-- place icon here or what ever you want -->
                    <i class="fa fa-close"></i>
                </div>
            </template>
            <!-- right swipe side template and v-slot:right"{ item }" is the item clearly -->
            <!-- remove if you dont wanna have right swipe side  -->
            <template v-slot:right="{ item }">
                <div class="swipeout-action blue">
                    <!-- place icon here or what ever you want -->
                    <i class="fa fa-heart"></i>
                </div>
                <div class="swipeout-action green">
                    <!-- place icon here or what ever you want -->
                    <i class="fa fa-heart"></i>
                </div>
            </template>
            <template v-slot:empty>
                <div>
                    <!-- change mockSwipeList to an empty array to see this slot in action  -->
                    list is empty ( filtered or just empty )
                </div>
            </template>
        </swipe-list>
    </div>
</template>

<script>
    import { SwipeList, SwipeOut } from 'vue-swipe-actions';
    
    export default {
    components: {
        SwipeOut,
        SwipeList
    },
    data() {
        return {
        enabled: true,
        mockSwipeList: [
            {
            id: 0,
            title: "Some title",
            description: "some description"
            },
            {
            id: 1,
            title: "Some title",
            description: "some description"
            },
            {
            id: 2,
            title: "Some title",
            description: "some description"
            }
        ]
        };
    },
    methods: {
        revealFirstRight() {
        this.$refs.list.revealRight(0);
        },
        revealFirstLeft() {
        this.$refs.list.revealLeft(0);
        },
        closeFirst() {
        this.$refs.list.closeActions(0);
        },
        closeAll() {
        this.$refs.list.closeActions();
        },
        remove(item) {
        this.mockSwipeList = this.mockSwipeList.filter(i => i !== item);
        // console.log(e, 'remove');
        },
        itemClick(e) {
        console.log(e, "item click");
        },
        fbClick(e) {
        console.log(e, "First Button Click");
        },
        sbClick(e) {
        console.log(e, "Second Button Click");
        },
    },
    }
</script>
<style scoped>

</style>
