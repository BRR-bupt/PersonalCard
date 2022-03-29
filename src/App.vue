<template>
  <HeaderMaster @back-index="active = 0" @clear-out="clear" />
  <div class="container" v-show="active !== 5">
    <div class="left"></div>
    <div class="main">
      <QU1 v-model:form1="form1" v-if="active === 0" />
      <QU2 v-model:form2="form2" v-else-if="active === 1" />
      <QU3 v-model:form3="form3" v-else-if="active === 2" />
      <QU4 v-model:form4="form4" v-else-if="active === 3" />
      <ConfirmPart
        :form1="form1"
        :form2="form2"
        :form3="form3"
        :form4="form4"
        @show-card="active += 1"
        v-else-if="active === 4"
      />
    </div>
    <div class="right"></div>
  </div>
  <ResultCard :form1="form1" :form2="form2" :form3="form3" :form4="form4" v-if="active === 5" />
  <StepStrip v-model:active="active" v-else />
</template>

<script setup lang="ts">
import { Iform1, Iform2, Iform3, Iform4 } from './utils/Interface'
// import HeaderMaster from './components/Header/HeaderMaster.vue'
// import StepStrip from './components/Step/StepStrip.vue'
// import QU1 from './components/Question/QU1.vue'
// import QU2 from './components/Question/QU2.vue'
// import QU3 from './components/Question/QU3.vue'
// import QU4 from './components/Question/QU4.vue'
// import ConfirmPart from './components/Question/ConfirmPart.vue'
// import ResultCard from './components/Result/ResultCard.vue'
// import { ref, reactive } from 'vue'

const active = ref(0)

const form1 = reactive<Iform1>({
  name: '',
  gender: '',
  region: ''
})
const form2 = reactive<Iform2>({
  status: '',
  school: ''
})
const form3 = reactive<Iform3>({
  hobby: []
})
const form4 = reactive<Iform4>({
  love: '',
  poetry: []
})

const clear = () => {
  form1.name = ''
  form1.gender = ''
  form1.region = ''
  form2.status = ''
  form2.school = ''
  form3.hobby = []
  form4.love = ''
  form4.poetry = []
  active.value = 0
}

// const showCard = ref(false)
// const showCardFn = ()=>{
//   showCard.value = true
//   active.value = 5
// }
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 50vh;
  margin-top: 10%;
}
.left {
  width: 30%;
}
.right {
  width: 30%;
}
.main {
  flex: 1;
}
</style>
