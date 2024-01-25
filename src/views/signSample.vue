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
    <div>
        <canvas ref="signatureCanvas" v-on:mousedown="onBegin" v-on:mouseup="onEnd"></canvas>
        <button type="button" class="btn btn-primary w-full my-2" @click="clearCanvas">지우기</button>
    </div>
</template>

<script>

// 참고URL : https://github.com/szimek/signature_pad
/**

------------------ API ------------------

const canvas = document.querySelector("canvas");

const signaturePad = new SignaturePad(canvas);

// Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
signaturePad.toDataURL(); // save image as PNG
signaturePad.toDataURL("image/jpeg"); // save image as JPEG
signaturePad.toDataURL("image/jpeg", 0.5); // save image as JPEG with 0.5 image quality
signaturePad.toDataURL("image/svg+xml"); // save image as SVG data url

// Return svg string without converting to base64
signaturePad.toSVG(); // "<svg...</svg>"
signaturePad.toSVG({includeBackgroundColor: true}); // add background color to svg output

// Draws signature image from data URL (mostly uses https://mdn.io/drawImage under-the-hood)
// NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

// Draws signature image from data URL and alters it with the given options
signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...", { ratio: 1, width: 400, height: 200, xOffset: 100, yOffset: 50 });

// Returns signature image as an array of point groups
const data = signaturePad.toData();

// Draws signature image from an array of point groups
signaturePad.fromData(data);

// Draws signature image from an array of point groups, without clearing your existing image (clear defaults to true if not provided)
signaturePad.fromData(data, { clear: false });

// Clears the canvas
signaturePad.clear();

// Returns true if canvas is empty, otherwise returns false
signaturePad.isEmpty();

// Unbinds all event handlers
signaturePad.off();

// Rebinds all event handlers
signaturePad.on();
 * 
 */
import SignaturePad from 'signature_pad';

export default {
  data() {
    return {
      signaturePad: null
    };
  },
  mounted() {
    const canvas = this.$refs.signatureCanvas;
    this.signaturePad = new SignaturePad(canvas, {
        //dotSize : 0.5,
        //minWidth : 0.1,
        //maxWidth : 1.0,
        penColor : '#5c60d1',
        //velocityFilterWeight : 0.1
    });
    setTimeout(() => {
        // console.log('Loaded...');
    }, 500);

    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/signature_pad@4.1.7/dist/signature_pad.umd.min.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    clearCanvas() {
        // 서명지우기
        this.signaturePad.clear();
    },
    onBegin() {
        // 서명시작
        this.signaturePad.onBegin();
    },
    onEnd() {
        // 서명종료
        this.signaturePad.onEnd();
    }
   }
};

</script>

<style scoped>
canvas {
  border: 0.1rem solid #5c60d1;
  width: 100%;
  height: 15rem;
}
</style>