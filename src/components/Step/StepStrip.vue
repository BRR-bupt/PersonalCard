<template>
  <div class="buttom">
    <div class="button">
      <el-button style="margin-top: 12px; margin-right: 5%" @click="previous" :disabled="active === 0"
        >上一步</el-button
      >
      <el-button style="margin-top: 12px" @click="next" :disabled="active === 4">下一步</el-button>
    </div>
    <el-steps :active="active" finish-status="success">
      <el-step title="step 1"></el-step>
      <el-step title="step 2"></el-step>
      <el-step title="step 3"></el-step>
      <el-step title="step 4"></el-step>
      <el-step title="确认"></el-step>
    </el-steps>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  active: number
}>()
const emit = defineEmits<{
  (e: 'update:active', value: number): void
}>()

const next = () => {
  emit('update:active', props.active + 1)
}

const previous = () => {
  emit('update:active', props.active - 1)
}
</script>

<style scoped>
.button {
  padding-bottom: 2%;
  text-align: center;
}
.buttom {
  margin: 0% 20%;
}
</style>
