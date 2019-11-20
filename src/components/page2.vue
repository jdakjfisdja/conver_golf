<template>
  <div id="app">
    <h1>Conver Golf</h1>
    <p>カメラ撮影ページ</p>
    <video class="center-block" ref="video" id="video" controls playsinline></video>
    <router-link to ="/" class="button">戻る</router-link>
  </div>
</template>

<script>
export default{
  name: 'app',
  data () {
    return {
      video: {}
    }
  },

  mounted () {
    const medias = { audio: false,
      video: {
        facingMode: {
          exact: 'environment'
        }
      }}
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(medias).then(stream => {
        this.video.srcObject = stream
        // mediaRecorder = new MediaRecorder(stream)
        // mediaRecorder.start();
      }) // .catch(err =>{
      // console.log(err)
    // })
    }
  }
}
</script>

<style>
h1{
  color: #ff2222;
  font-size: 24pt
}
body{
    background-color: #000000;
    margin: 0px;
}
#app{
    text-align: center;
    color: #FFFFFF;
}
.button {
  display: block;
  position: relactive;
  margin: 0 auto;
  width: 70pt;
  color: #FFF;
  border: solid 1px silver;
  background-color: rgba(0,0,220,1);
  background-image: linear-gradient(to top left, rgba(0, 0, 0, .2),
                                                    rgba(0, 0, 0, .2) 30%
                                                    rgba(0,0,0,0) );
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none

}

#video{
    background-color: #000000;
    display: block;
    width: 100%;
}

#canvas{
    display:none;
    width: 100%;
}

</style>
