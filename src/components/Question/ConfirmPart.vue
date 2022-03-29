<template>
  <el-descriptions title="确认你的个人信息（建议填写完整）" direction="vertical" :column="4" :border="true">
    <el-descriptions-item label="姓名">{{ form1.name }}</el-descriptions-item>
    <el-descriptions-item label="性别">{{ form1.gender }}</el-descriptions-item>
    <el-descriptions-item label="居住地" :span="2">{{ form1.region }}</el-descriptions-item>
    <el-descriptions-item label="人生阶段">{{ form2.status }}</el-descriptions-item>
    <el-descriptions-item label="院校/单位">{{ form2.school }}</el-descriptions-item>
    <el-descriptions-item label="兴趣爱好" :span="2">{{ form3.hobby[0] }}</el-descriptions-item>
    <el-descriptions-item label="爱情状况">{{ form4.love }}</el-descriptions-item>
    <el-descriptions-item label="喜爱诗句">{{ form4.poetry[0] }}</el-descriptions-item>
  </el-descriptions>
  <el-button @click="dialogVisible = true" style="margin-top: 10px; float: right">生成资料卡片</el-button>

  <el-dialog title="提示" v-model="dialogVisible" width="30%">
    <span>信息填写完整效果更好哦，是否确认提交</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="getCard">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Iform1, Iform2, Iform3, Iform4 } from '../../utils/Interface'
const props = defineProps<{
  form1: Iform1
  form2: Iform2
  form3: Iform3
  form4: Iform4
}>()
const emit = defineEmits<{
  (e: 'showCard'): void
}>()

const dialogVisible = ref(false)

const getCard = () => {
  dialogVisible.value = false
  emit('showCard')
}
</script>

<style scoped></style>
