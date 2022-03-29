<template>
  <el-form ref="form" :model="form4" label-width="80px" @submit.native.prevent>
    <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->
    <el-form-item label="爱情状况">
      <el-radio-group v-model="form4.love">
        <el-radio label="单身"></el-radio>
        <el-radio label="恋爱"></el-radio>
        <el-radio label="已婚"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="喜爱诗句">
      <el-checkbox-group v-model="form4.poetry">
        <el-checkbox label="他日若遂凌云志，敢笑黄巢不丈夫"></el-checkbox>
        <el-checkbox label="路漫漫其修远兮，吾将上下而求索"></el-checkbox>
        <el-checkbox label="我能够理解失败，但绝对不能理解未曾奋斗过的自己"></el-checkbox>
        <el-checkbox label="不要等待机会，而要创造机会"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <!-- <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item> -->
  </el-form>
</template>

<script setup lang="ts">
import { Iform4 } from '../../utils/Interface'

const props = defineProps<{
  form4: Iform4
}>()
</script>

<style scoped></style>
