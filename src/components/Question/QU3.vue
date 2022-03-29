<template>
  <el-form ref="form" :model="form3" label-width="80px" @submit.native.prevent>
    <el-form-item label="兴趣爱好">
      <el-checkbox-group v-model="form3.hobby">
        <el-checkbox label="体育" name="type"></el-checkbox>
        <el-checkbox label="音乐" name="type"></el-checkbox>
        <el-checkbox label="科学" name="type"></el-checkbox>
        <el-checkbox label="美术" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <!-- <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item> -->
  </el-form>
</template>

<script setup lang="ts">
import { Iform3 } from '../../utils/Interface'

const props = defineProps<{
  form3: Iform3
}>()
</script>

<style scoped></style>
