<template>
  <div class="if-node-form">
    <el-form :rules="rules" ref="dataForm" :model="tempItem" label-width="80px">
      <el-form-item label="Step Name" prop="stepName">
        <el-input
          size="small"
          v-model="tempItem.stepName"
          style="width: 200px"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { clone } from '@/utils';

function getTempItem() {
  return {
    stepName: 'Condition Check',
  };
}

export default {
  name: 'IfNodeForm',
  props: {
    editItem: {
      type: Object,
    },
  },
  created() {
    if (this.editItem && this.editItem.stepName) {
      let tempItem = clone(this.editItem);
      this.updateData(tempItem);
    }
    this.init();
  },

  data() {
    return {
      tempItem: getTempItem(),
      rules: {
        stepName: [
          { required: true, trigger: 'blur', message: 'Please enter a name' },
        ],
      },
    };
  },

  methods: {
    init() {},

    updateData(tempItem) {
      this.tempItem.stepName = tempItem.stepName;
    },

    validateFormData() {
      return new Promise((resolve, reject) => {
        this.$refs['dataForm'].validate((valid) => {
          if (!valid) {
            reject();
            return;
          }
          resolve();
        });
      });
    },

    formData() {
      let tempItem = clone(this.tempItem);
      return tempItem;
    },
  },
};
</script>

<style lang="scss" scoped></style>
