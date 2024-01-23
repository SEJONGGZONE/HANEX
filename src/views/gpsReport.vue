<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="/workPage" class="text-primary hover:underline">개발용페이지</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>GPS보고</span>
            </li>
        </ul>
    </div>
    <div>
      <button type="button" class="btn btn-dark w-full" @click="getCurrentPosition()">
        위치 좌표 확인
      </button>
      <div>{{ isPositionReady ? 'yes' : 'no' }}</div>
      <div>{{ curPositionObj }}</div>
    </div>

</template>


<script setup>
  import VueGeolocation from 'vue-geolocation-api'
  import { ref, onMounted } from 'vue';
    onMounted(() => { 
        // 시작시...
        getCurrentPosition();
    });

  /**
   * 위치정보 관련..
   */
  const curPositionObj = ref({})
  const isPositionReady = ref(false)
  const getCurrentPosition = () => {

    setAlert("현재 접속위치를 확인중입니다.");

    // 대기바 표시
    //startLoadingBar();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPositionValue, geolocationError)
    }
  }
  const getPositionValue = (val) => {
    curPositionObj.value.latitude = val.coords.latitude
    curPositionObj.value.longitude = val.coords.longitude
    isPositionReady.value = true
    console.log('주소 확인 완료', val);
  }

  const geolocationError = (e) => {
    console.log(e);
    console.log(CENTER_POSITION);
    setAlert('위치 정보를 찾을 수 없습니다.');

    curPositionObj.value.latitude = CENTER_POSITION.y;
    curPositionObj.value.longitude = CENTER_POSITION.x;

  }
  const setAlert = (text) => {
    alert(text)
  }

  // const positionObj = ref({})
  // const isPositionReady = ref(false)
  // const getCurrentPosition = () => {
  //   if (!navigator.geolocation) {
  //   } else {
  //     navigator.geolocation.getCurrentPosition(getPositionValue, geolocationError)
  //   }
  // }
  // const getPositionValue = (val) => {
  //   positionObj.value.latitude = val.coords.latitude
  //   positionObj.value.longitude = val.coords.longitude
  //   isPositionReady.value = true
  //   console.log('주소 확인 완료', val)
  // }
  // const geolocationError = () => {
  //   console.log('위치 정보를 찾을 수 없습니다.2')
  // }
  // const setAlert = (text) => {
  //   alert(text)
  // }
</script> 