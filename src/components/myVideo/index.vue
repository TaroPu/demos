<template>
  <div class="myVideo">
    <input type="file" ref ="file" @change="getVideo" @click='e => {e.target.value = "";}'>
    <a>打开视频</a>


    <div class="main">
      <div class="v-load v" >
        <video
          id="video"
          @canplay="init()"
          loop
          src=""
          ref="v1"
          poster='../../assets/image/load.jpeg'
          controls
        >
        </video>

        <span class="text1">原视频</span>
      </div>

      <div class="v-canvas v">
        <canvas id="cvs1" ref="c1"></canvas>
        <span class="text2">绘制视频</span>
      </div>


      <div class="v-char v">
        <canvas id="cvs2" ref="c2" @click="$refs.v1.play()"></canvas>
        <span class="text3">字符视频</span>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      src: '',
      poster: '../../assets/image/load.jpeg',
      cvs1:'',
      cvs2:''
    }
  },
  mounted () {
    this.cvs1 = this.$refs.c1;
    this.cvs2 = this.$refs.c2;
    this.cvs1.height = this.cvs2.height = this.$refs.v1.offsetHeight
    this.cvs1.width = this.cvs2.width = this.$refs.v1.offsetWidth
  },
  methods:{

    getVideo(){
      let file = this.$refs.file.files[0];
      console.log(file)
      let reader = new FileReader();
      reader.readAsDataURL(file);
      let v = this.$refs.v1;
      reader.onload = function (result) {
        v.src = result.target.result;
      }
    },
    playVideo(){
      requestAnimationFrame(this.playVideo)
      const ctx1 = this.cvs1.getContext('2d')
      const ctx2 = this.cvs2.getContext('2d')
      const {width, height} = this.cvs1
      ctx1.drawImage(this.$refs.v1, 0, 0, width, height)
      const data = ctx1.getImageData(0, 0, width, height).data
      ctx2.clearRect(0, 0, width, height)
      const bl = 8
      ctx2.font = '12px serif'
      for (let i = 0; i < data.length; i += 4 * bl) {
        const x = parseInt((i + 1) % (width * 4) / 4)
        const y = parseInt(i / (width * 4))
        if (x % bl == 0 && y % bl == 0) {
          const g = parseInt((data[i] + data[i + 1] + data[i + 2]) / 1.5)
          ctx2.fillStyle = `rgba(${g},${g},${g},${data[i + 3]}`
          ctx2.fillText('6', x, y);
        }
      }
    },
    init(){
      const ctx1 = this.cvs1.getContext('2d')
      const ctx2 = this.cvs2.getContext('2d')
      this.cvs1.height = this.cvs2.height = this.$refs.v1.offsetHeight
      this.cvs1.width = this.cvs2.width = this.$refs.v1.offsetWidth
      this.playVideo();
    }
  }

}
</script>

<style scoped>
  body{
    margin: 100px 20px;
    position: relative;
  }

  input {
    margin-left: 30px;
    width: 200px;
    height: 50px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  a {
    margin-bottom: 20px;
    margin-left: 30px;
    display: block;
    width: 200px;
    height: 50px;
    background-color: #17bef1;
    border-radius: 10px;
    line-height: 50px;
    text-align: center;
    color: antiquewhite;
    /*font-size: 1.5rem;*/
  }

  /*视频样式*/
  .main {
    width: 100%;
    /*height: 600px;*/
    display: flex;
    justify-content: space-around;
  }
  .v {
    width: 30%;
    height: 300px;
    position: relative;
    /*background-color: #fff;*/
  }
  .v > video {
    /*height: 100%;*/
    width: 90%;
  }
  .v > span {
    position: absolute;
    bottom: -4rem;

    left: 50%;
    transform:translateX(-50%);
    color: #61bebe;
    font-size: 2rem;

  }

</style>
