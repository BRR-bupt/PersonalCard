<template>
  <el-form ref="form" :model="form2" label-width="80px" @submit.native.prevent>
    <el-form-item label="人生阶段">
      <el-select v-model="form2.status" placeholder="请选择">
        <el-option label="学生" value="学生"></el-option>
        <el-option label="职场人" value="职场人"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="院校/单位">
      <el-input v-model="form2.school" placeholder="请填写院校或单位名称"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { Iform2 } from '../../utils/Interface'

const props = defineProps<{
  form2: Iform2
}>()
</script>

<style scoped></style>
