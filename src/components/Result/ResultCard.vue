<template>
  <div id="personalCard">
    <div class="cards">
      <div class="contact">Contact Me</div>
      <div class="contact-form">
        <a href="#" class="close"><i class="fa fa-times"></i></a>
        <form>
          <div class="control"><input type="text" id="name" /><label for="name">Your Name</label></div>
          <div class="control"><input type="text" id="email" /><label for="email">Email Address</label></div>
          <div class="control"><input type="text" id="url" /><label for="url">Website</label></div>
          <div class="control"><textarea name="" id="message"></textarea><label for="message">Message</label></div>
          <div class="control submit"><input type="submit" /></div>
        </form>
      </div>

      <div class="card active" id="overview">
        <a class="card-toggle"
          ><svg
            t="1647164515761"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7051"
            width="32"
            height="32"
            style="margin-top: 15%"
          >
            <path
              d="M512.105912 80.83812c-237.365082 0-429.779394 192.56883-429.779394 430.134481 0 237.564627 192.414311 430.132434 429.779394 430.132434 237.387595 0 429.801906-192.567807 429.801906-430.132434C941.907818 273.40695 749.494531 80.83812 512.105912 80.83812zM605.570607 696.710862c10.212596 10.166547 11.227716 25.591865 2.321882 34.477232-8.92937 8.885368-24.465205 7.844665-34.675754-2.297322l-199.88547-197.651592c-5.79089-5.7694-8.53028-13.19451-8.266267-20.180622-0.309038-7.048533 2.432399-14.541181 8.245801-20.35356l199.905936-197.651592c10.210549-10.166547 25.724895-11.183713 34.675754-2.298346 8.905834 8.884344 7.891737 24.311709-2.321882 34.477232L417.64554 510.972601 605.570607 696.710862z"
              p-id="7052"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <div class="card-content">
          <div class="row">
            <div class="left col">
              <h2>Personal <strong>Social Card</strong></h2>

              <h2>
                <strong
                  >{{ form1.name }}
                  <span
                    ><svg
                      v-if="form1.gender === '女'"
                      t="1647174066684"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5319"
                      width="32"
                      height="32"
                      style="margin-left: 5%"
                    >
                      <path
                        d="M863.7 416.2c0-194-157.7-351.7-351.7-351.7S160.3 222.2 160.3 416.2c0 183.1 140.8 334.3 320.4 350.2 0 0.5-0.5 1-0.5 1.5v64.2H352.3c-17.4 0-31.8 14.4-31.8 31.8 0 17.9 14.4 31.8 31.8 31.8h127.9v31.8c0 17.9 14.4 31.8 31.8 31.8s31.8-14.4 31.8-31.8v-31.8h127.9c17.9 0 31.8-14.4 31.8-31.8 0-17.9-14.4-31.8-31.8-31.8H543.8V768c0-0.5-0.5-1-0.5-1.5 179.6-16 320.4-166.7 320.4-350.3zM512 704.3c-158.7 0-288-129.3-288-288s129.3-288 288-288 288 129.3 288 288-129.3 288-288 288z"
                        fill="#2c2c2c"
                        p-id="5320"
                      ></path>
                    </svg>
                    <svg
                      v-else
                      t="1647174243516"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5517"
                      width="32"
                      height="32"
                      style="margin-left: 5%"
                    >
                      <path
                        d="M412.3 856.9c133.6 0 241.9-108.3 241.9-241.9S545.9 373.1 412.3 373.1 170.4 481.4 170.4 615s108.3 241.9 241.9 241.9z m232.6-435.2c43.6 52.4 69.8 119.8 69.8 193.2 0 167-135.4 302.4-302.4 302.4S110 782 110 615s135.4-302.4 302.4-302.4c71.7 0 137.6 25 189.5 66.7L729 252.1H563.5c-16.7 0-30.2-13.5-30.2-30.2s13.5-30.2 30.2-30.2h241.9c16.7 0 30.2 13.5 30.2 30.2v241.9c0 16.7-13.5 30.2-30.2 30.2s-30.2-13.5-30.2-30.2V291.5L644.9 421.7z"
                        p-id="5518"
                        fill="#2c2c2c"
                      ></path>
                    </svg> </span
                ></strong>
              </h2>

              <p>
                <em>{{ form4.poetry[0] }}</em>
              </p>

              <p>Click one of the icons below to get more information</p>

              <!-- <p>
                Click one of the social icons below to switch between card or click Contact Me link to show the contact
                form card. <br /><em>Make sure you're running this experiment in the latest Chrome browser.</em>
              </p> -->
            </div>
            <div class="right col"></div>
          </div>
        </div>
      </div>

      <div class="card" id="region">
        <a class="card-toggle"
          ><svg
            t="1647164882053"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9196"
            width="32"
            height="32"
            style="margin-top: 10%"
          >
            <path
              d="M397.034 259.796v-0.306c0-31.941-23.677-59.042-55.62-59.042h-2v-86.007c0-16.053-13.219-29.069-29.278-29.069-16.052 0-29.272 13.016-29.272 29.07v86.005h1.805c-31.943 0-59.429 27.1-59.429 59.042v0.302c-29.738 0-58.55 26.032-58.55 58.142v579.548h290.893V317.933c0.001-32.11-25.09-58.137-58.55-58.137z m-116.17 580.062h-57.623v-58.55h57.624v58.55z m0-116.17h-57.623v-58.554h57.624v58.554z m0-115.242h-57.623v-59.481h57.624v59.48z m0-117.106h-57.623v-58.55h57.624v58.55z m0-117.1h-57.623v-57.619h57.624v57.62z m116.17 465.618h-57.62v-58.55h57.62v58.55z m0-116.17h-57.62v-58.554h57.62v58.554z m0-115.242h-57.62v-59.481h57.62v59.48z m0-117.106h-57.62v-58.55h57.62v58.55z m0-117.1h-57.62v-57.619h57.62v57.62z m409.2-57.619h-58.137c-32.112 0-60.165 27.344-60.165 59.455v116.28c0-32.112-24.004-59.566-56.115-59.566h-58.142c-32.112 0-59.54 27.454-59.54 59.567V897.48h348.517V376.076c0-32.111-24.305-59.455-56.418-59.455zM631.24 839.858h-59.482v-58.55h59.482v58.55z m0-116.17h-59.482v-58.554h59.482v58.554z m0-115.242h-59.482v-59.481h59.482v59.48z m172.863 231.412h-57.62v-58.55h57.62v58.55z m0-116.17h-57.62v-58.554h57.62v58.554z m0-115.242h-57.62v-59.481h57.62v59.48z m0-117.106h-57.62v-58.55h57.62v58.55z m0 0"
              fill="#2c2c2c"
              p-id="9197"
            ></path>
          </svg>
        </a>
        <div class="card-content">
          <div class="row">
            <div class="left col">
              <h2>My <strong>City</strong></h2>

              <h2>
                <strong>{{ form1.region }}</strong>
              </h2>

              <p v-if="form1.region === '安徽'">
                安徽，简称“皖”，省名取当时安庆、徽州两府首字合成，是中华人民共和国省级行政区。省会合肥。
              </p>
              <p v-else-if="form1.region === '北京'">
                北京(Beijing)，简称“京”，古称燕京、北平，是中华人民共和国的首都、直辖市、国家中心城市、超大城市，国务院批复确定的中国政治中心、文化中心、国际交往中心、科技创新中心。
              </p>
              <p v-else-if="form1.region === '广州'">
                广州，简称“穗”，别称羊城、花城，广东省辖地级市，是广东省省会、副省级市、国家中心城市、超大城市、广州都市圈核心城市。
              </p>
              <p v-else-if="form1.region === '成都'">
                成都，简称“蓉”，别称蓉城、锦城，四川省辖地级市、省会、副省级市、超大城市、成渝地区双城经济圈核心城市。
              </p>
            </div>
            <div class="right col">
              <img src="../../assets/安徽.png" alt="" v-if="form1.region === '安徽'" />
              <img src="../../assets/北京.png" alt="" v-else-if="form1.region === '北京'" />
              <img src="../../assets/广州.png" alt="" v-else-if="form1.region === '广州'" />
              <img src="../../assets/成都.png" alt="" v-else-if="form1.region === '成都'" />
            </div>
          </div>
        </div>
      </div>

      <div class="card" id="status">
        <a class="card-toggle"
          ><svg
            v-if="form2.status === '学生'"
            t="1647164732927"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8136"
            width="32"
            height="32"
            style="margin-top: 10%"
          >
            <path
              d="M213.333333 563.2v170.666667l298.666667 162.133333 298.666667-162.133333v-170.666667L512 725.333333l-298.666667-162.133333zM512 128L42.666667 384l469.333333 256 384-209.066667V725.333333h85.333333V384L512 128z"
              p-id="8137"
              fill="#2c2c2c"
            ></path>
          </svg>
          <svg
            v-else
            t="1647171719540"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5565"
            width="32"
            height="32"
            style="margin-top: 10%"
          >
            <path
              d="M885.333333 256H725.333333V198.4C723.2 157.866667 689.066667 128 648.533333 128h-298.666666c-40.533333 2.133333-72.533333 34.133333-72.533334 74.666667V256H138.666667C98.133333 256 64 290.133333 64 330.666667V448h896v-117.333333c0-40.533333-34.133333-74.666667-74.666667-74.666667zM341.333333 202.666667c2.133333-6.4 6.4-10.666667 12.8-10.666667h296.533334c6.4 0 10.666667 6.4 10.666666 10.666667V256H341.333333V202.666667zM672 576c0 40.533333-34.133333 74.666667-74.666667 74.666667h-170.666666c-40.533333 0-74.666667-34.133333-74.666667-74.666667v-64H64v309.333333C64 861.866667 98.133333 896 138.666667 896h746.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V512H672v64z"
              p-id="5566"
              fill="#2c2c2c"
            ></path>
          </svg>
        </a>
        <div class="card-content">
          <div class="row">
            <div class="left col">
              <h2>
                My <strong v-if="form2.status === '学生'">School</strong>
                <strong v-else>Company</strong>
              </h2>

              <h2>
                <strong>{{ form2.school }}</strong>
              </h2>
              <p v-if="form2.status === '学生'">
                久违的笑脸欢迎你,熟悉的课堂等待你。暂新的课本启迪你,
                睿智的老师栽育你。最美的友谊给予你,最好的时光赋予你。活跃的校园属于你,开学的今天祝福你！
              </p>
              <p v-else>
                为梦想，沧海桑田；为事业，风霜雨露；为生活，酸甜苦辣。朋友，人生不易，我们友谊铭记，愿你安康祥吉，快乐如意！
              </p>
            </div>
            <div class="right col">
              <img src="../../assets/学习.png" alt="" v-if="form2.status === '学生'" />
              <img src="../../assets/工作.png" alt="" v-else style="margin-top: 20%" />
            </div>
          </div>
        </div>
      </div>
      <div class="card" id="love">
        <a class="card-toggle"
          ><svg
            t="1647165031142"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11368"
            width="32"
            height="32"
            style="margin-top: 15%"
          >
            <path
              d="M334.848 343.04q22.528-28.672 49.152-50.176 22.528-18.432 50.176-33.792t57.344-13.312q43.008 3.072 71.68 20.48t45.568 43.008 23.04 58.368 4.096 66.56-13.312 64.512-27.136 57.856-34.304 49.664-36.864 40.96q-27.648 28.672-58.368 54.784t-58.368 46.08-49.664 31.744-32.256 11.776q-12.288 0-32.256-12.288t-44.544-32.256-52.224-46.08-55.296-52.736q-17.408-17.408-38.912-39.424t-40.448-48.128-32.256-57.344-14.336-67.072q-2.048-34.816 7.168-66.048t27.136-55.808 44.032-41.472 58.88-24.064 65.024 6.656 58.88 33.28q30.72 22.528 58.368 54.272zM611.328 245.76q13.312 0 25.6 1.024 11.264 1.024 23.552 3.072t21.504 6.144 19.456 10.752 19.456 12.8l20.48 16.384q6.144-6.144 13.312-11.264 13.312-10.24 35.84-23.552 12.288-7.168 28.672-10.752t33.28-2.56 33.28 6.656 27.648 17.92q31.744 33.792 37.888 66.048t-1.536 60.416-23.04 49.664-27.648 33.792q-23.552 23.552-44.544 40.96t-51.712 39.936q-16.384 11.264-34.304 19.456t-27.136 8.192q-9.216 1.024-19.968-7.68t-26.112-19.968q-7.168-5.12-13.312-12.288l-12.288-11.264-12.288-12.288q11.264-20.48 18.432-46.08 6.144-21.504 9.216-50.688t-3.072-62.976q-7.168-31.744-18.944-55.296t-23.04-37.888q-13.312-17.408-28.672-28.672z"
              p-id="11369"
              fill="#2c2c2c"
            ></path>
          </svg>
        </a>
        <div class="card-content">
          <div class="row">
            <div class="left col">
              <h2>My <strong>Love</strong></h2>

              <h2>
                <strong>{{ form4.love }}</strong>
              </h2>

              <p v-if="form4.love === '单身'">
                离离原上草，光棍成天到处跑；人约黄昏后，光棍就要脸皮厚；床前明月光，光棍也要睡得香；万花丛中过，光棍其实也快活。
              </p>
              <p v-else-if="form4.love === '恋爱'">
                爱你爱不够,只想陪在你左右;紧紧握住你的手,陪你风霜雨露;天涯海角亦无悔,不离不弃永相随;缠缠绵绵到白头,一生一世与你相守。爱你久久！
              </p>
              <p v-else>
                幸福，是洁白的婚纱的在风中跳舞;幸福，是灿烂的笑容在脸上驻足;幸福，是执子之手与子偕老的道路;幸福，是今天一起迈向甜蜜的脚步。祝福百年好合，永结同心!
              </p>
            </div>
            <div class="right col">
              <img src="../../assets/爱无所不在.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="card" id="hobby">
        <a class="card-toggle"
          ><svg
            t="1647175887347"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4195"
            width="32"
            height="32"
            style="margin-top: 10%"
          >
            <path
              d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
              p-id="4196"
              fill="#2c2c2c"
            ></path>
          </svg>
        </a>
        <div class="card-content">
          <div class="row">
            <div class="left col">
              <h2>My <strong>Hobby</strong></h2>

              <h2>
                <strong>{{ form3.hobby[0] }}</strong>
              </h2>

              <p v-if="form3.hobby[0] === '体育'">
                生命因运动精彩，体育让梦想成真， 青春因坚持美丽！ 生命需要运动，学习需要勤奋，人生贵在坚持！
                跑步使生命充满活力，人生因体育勃发生机！ 挑战运动极限，演绎健美人生！ 锻炼身体、增强体质，勤奋学习
                立志报国！
              </p>
              <p v-else-if="form3.hobby[0] === '音乐'">
                音乐，让我在悲伤时感到一丝快乐，让我在感动时潸然落泪。音乐让我知道，人世间的各种欢乐，各种辛酸，各种痛楚；音乐让我知道，只要有音乐，我就不会孤独，不会寂寞。音乐，为我的生命注入了无穷的动力。
              </p>
              <p v-else-if="form3.hobby[0] === '科学'">
                提出一个问题往往比解决一个问题更重要,因为解决问题也许仅仅是一个教学上或实验上的技能而已。而提出新的问题新的可能性,从新的角度去看旧的问题,都需要有创造性的想像力,而且标志着科学的真正进步。——
                爱因斯坦
              </p>
              <p v-else>
                画家在画室的门上应该大书:室内有一双眼睛,为不幸的人 洒同情之泪。 人不可有傲气,但不可无傲骨。
                在油画的后面,跳动着画家的脉膊,在塑像之中,呼吸着雕 刻家的灵魂。
              </p>
            </div>
            <div class="right col">
              <img src="../../assets/足球.png" alt="" style="margin-top: 15%" v-if="form3.hobby[0] === '体育'" />
              <img src="../../assets/音乐.png" alt="" v-else-if="form3.hobby[0] === '音乐'" />
              <img src="../../assets/科学.png" alt="" v-else-if="form3.hobby[0] === '科学'" />
              <img src="../../assets/艺术.png" alt="" v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import $ from 'jquery'
import { Iform1, Iform2, Iform3, Iform4 } from '../../utils/Interface'
const props = defineProps<{
  form1: Iform1
  form2: Iform2
  form3: Iform3
  form4: Iform4
}>()
onMounted(() => {
  $('.card-toggle').on('click', function () {
    // Card toggle state
    $('.card-toggle').removeClass('active')
    $(this).addClass('active')

    let isAnimating = false

    if (!isAnimating) {
      isAnimating = true

      $('.card').find('.card-content').css('z-index', 0)
      $('.card').removeClass('active')

      const that = $(this)

      $(this).siblings().css('z-index', 1)

      setTimeout(function () {
        that
          .parent()
          .toggleClass('active')
          .find('.card-content')
          .on('transitionend', function () {
            isAnimating = false
          })
      }, 10)
    }
  })

  $('input,textarea').blur(function () {
    if ($(this).val()) {
      $(this).parent().addClass('filled')
    } else {
      $(this).parent().removeClass('filled')
    }
  })

  $('.contact').on('click', function () {
    $('.contact-form').toggleClass('active')
  })
  $('.contact-form input[type=submit], .contact-form .close').on('click', function (e) {
    e.preventDefault()
    $('.contact-form').toggleClass('active')
  })
})

// const getCity = ref('')
// const getCityFn = () => {
//   getCity.value = import(`../../assets/${props.form1.region}.png`)
//   console.log(getCity.value)
// }
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
#personalCard {
  margin-top: 10vh;
}
body {
  min-height: 100vh;
  display: flex;
  background-color: #eaeaea;
  font-family: Open Sans;
  font-weight: 300;
  line-height: 1.8;
  // background-image: url(https://dl.dropboxusercontent.com/u/26808427/cdn/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.contact {
  position: absolute;
  top: 30px;
  left: 50px;
  z-index: 6;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.1);
  line-height: 1;
  cursor: pointer;
  text-shadow: 0 1px 0px rgba(255, 255, 255, 0.1);

  &-form {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: white;
    z-index: 5;
    padding: 80px 50px;
    transform: translate3d(-100%, 0, 0);
    transition: 0.3s ease;
    border-radius: 5px;

    &.active {
      transform: translate3d(0, 0, 0);
    }

    .close {
      color: rgba(0, 0, 0, 0.7);
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
}

.cards {
  margin: auto;
  background: #fefefe;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
  width: 768px;
  height: 550px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 30px;

  .card {
    display: inline-block;
    margin-right: 20px;
  }

  .card-toggle {
    z-index: 4;
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 1.8;
    font-size: 24px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.3s ease;

    &.active {
      color: white;
      border-color: white;
    }
  }
  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: -webkit-clip-path 1s ease;
    padding: 100px 0 0;
    overflow: hidden;
    border-radius: 5px;

    .row {
      display: table;
      width: 100%;
      height: 100%;
    }

    .col {
      width: 50%;
      height: 100%;
      display: table-cell;
      transition: 0.3s ease 0.3s;
      transform: translate3d(0, 0, 0);
      vertical-align: top;

      h2 {
        font-weight: 300;
        font-size: 3em;
        line-height: 1;
        margin: 0 0 30px;
        strong {
          font-weight: 700;
          display: block;
        }
      }

      img {
        max-width: 90%;
        width: 100%;
      }

      &.left {
        transform: translate3d(0, 0, 0);
        opacity: 0;
        padding-left: 50px;
      }
      &.right {
        transform: translate3d(100px, 0, 0);
        opacity: 0;
        padding-left: 30px;
      }
    }
  }
  .card.active .col {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  #overview {
    .card-toggle {
      position: absolute;
      top: 30px;
      right: 30px;
      opacity: 1;
      color: white;
    }
    .card-content {
      background-color: #efefef;
    }
    &.active {
      .card-toggle {
        opacity: 0;
      }
    }

    .right {
      // background: url(https://dl.dropboxusercontent.com/u/26808427/cdn/james.png) no-repeat bottom right;
      background-size: contain;
    }
  }

  #region,
  #status,
  #love,
  #hobby {
    .card-content {
      color: white;

      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  #region {
    .card-content {
      background-color: #03679b;
      -webkit-clip-path: circle(0% at 76px 88%);
      clip-path: circle(0% at 50px 88%);
    }
    &.active .card-content {
      -webkit-clip-path: circle(270% at 76px 88%);
      clip-path: circle(270% at 50px 88%);
    }
  }
  #status {
    .card-content {
      background-color: #2f98d1;
      -webkit-clip-path: circle(0% at 150px 88%);
      clip-path: circle(0% at 150px 88%);
    }
    &.active .card-content {
      -webkit-clip-path: circle(270% at 150px 88%);
      clip-path: circle(270% at 150px 88%);
    }
  }
  #love {
    .card-content {
      background-color: #f46899;
      -webkit-clip-path: circle(0% at 220px 88%);
      clip-path: circle(0% at 220px 88%);
    }
    &.active .card-content {
      -webkit-clip-path: circle(270% at 220px 88%);
      clip-path: circle(270% at 220px 88%);
    }
  }
  #hobby {
    .card-content {
      background-color: #b35cec;
      -webkit-clip-path: circle(0% at 292px 88%);
      clip-path: circle(0% at 292px 88%);
    }
    &.active .card-content {
      -webkit-clip-path: circle(270% at 292px 88%);
      clip-path: circle(270% at 292px 88%);
    }
  }
}

form {
  .control {
    position: relative;
    margin-bottom: 10px;
    padding-top: 20px;
    label {
      position: absolute;
      top: 30px;
      left: 0;
      transition: 0.3s ease;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 14px;
    }

    &.submit {
      text-align: right;
    }
  }
  input,
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e3e3e3;
    outline: none;
    padding: 10px 0;
  }
  .filled label,
  input:focus + label,
  textarea:focus + label {
    top: 0;
    font-size: 12px;
  }
  textarea {
    height: 100px;
  }
  input[type='submit'] {
    width: auto;
    background-color: #f06292;
    padding: 10px 40px;
    color: white;
    border-radius: 40px;
  }
}
</style>
