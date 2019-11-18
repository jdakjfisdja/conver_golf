<template>
  <div id="app">
    <video ref="video" id="video" autoplay playinline></video>
    <p>カメラ撮影ページ</p>
    <router-link to ="/">戻る</router-link>
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
      }) // .catch(err =>{
      // console.log(err)
    // })
    }
  }
}
</script>

<style>
body{
    background-color: #000000;
    margin: 0px;
}
#app{
    text-align: center;
    color: #2c3e50;
}

#video{
    background-color: #000000;
    display: block;
    width: 50%;
}

#canvas{
    display:none;
    width: 50%;
}

</style>
