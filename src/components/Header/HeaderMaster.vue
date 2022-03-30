<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>work</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" @click="dialogVisible = true">清空输入</el-menu-item>
    <el-menu-item index="4" @click="back">返回首页</el-menu-item>
  </el-menu>
  <el-dialog title="提示" v-model="dialogVisible" width="30%">
    <span>此操作会清空所有输入并返回起点</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="reset">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'backIndex', value: number): void
  (e: 'clearOut'): void
}>()
const activeIndex = ref('1')
const dialogVisible = ref(false)
const back = () => {
  emit('backIndex', 0)
}
const reset = () => {
  dialogVisible.value = false
  emit('clearOut')
}
</script>

<style scoped></style>
