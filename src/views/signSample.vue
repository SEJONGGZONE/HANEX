<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="/workPage" class="text-primary hover:underline">개발용페이지</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>서명샘플</span>
            </li>
        </ul>
    </div>
    <div class="container">
      <div class="container">
        <VueSignaturePad
          id="signature"
          width="100%"
          height="500px"
          ref="signaturePad"
          :options="options"
        />
      </div>
      <div class="buttons">
        <div class="py-1">
            <button type="button" class="btn py-3 font-normal text-lg btn-dark" @click="clearSign">지우기</button>
        </div>
        <div class="py-1">
            <button type="button" class="btn py-3 font-normal text-lg btn-dark" @click="save">서명완료</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "signSample",
  data: () => ({
    options: {
      penColor: "#1b1a58",
    },
  }),
  methods: {
    clearSign() {
      this.$refs.signaturePad.clearSignature();
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert("저장기능 대기. 저장데이타는 콘솔창 확인.");
      console.log(isEmpty);
      console.log(data);
    },
    change() {
      this.options = {
        penColor: "#00",
      };
    },
    resume() {
      this.options = {
        penColor: "#1b1a58",
      };
    },
  },
};
</script>

<style>
/** 서명영역 */
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container {
  width: "100%";
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.sample {
  color:#1b1a58;
}
</style>