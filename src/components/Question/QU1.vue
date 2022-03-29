<template>
  <el-form ref="form" :model="form1" label-width="80px" @submit.native.prevent>
    <el-form-item label="姓名">
      <el-input v-model="form1.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form1.gender" placeholder="请选择">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="居住地">
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="安徽" value="安徽"></el-option>
        <el-option label="北京" value="北京"></el-option>
        <el-option label="广州" value="广州"></el-option>
        <el-option label="成都" value="成都"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { Iform1 } from '../../utils/Interface'

const props = defineProps<{
  form1: Iform1
}>()
</script>

<style scoped></style>
