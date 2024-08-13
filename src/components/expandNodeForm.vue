<template>
  <div>
    <el-form :rules="rules" ref="dataForm" :model="tempItem" label-width="90px">
      <el-form-item label="Step Name" prop="stepName">
        <el-input size="small" v-model="tempItem.stepName"></el-input>
      </el-form-item>
      <el-form-item label="Branch" prop="stepName">
        <template v-for="(ruleItem, index) in tempItem.ruleGroupList">
          <div
            class="expand-item"
            style="display: flex; align-items: center; width: 100%; gap: 10px"
          >
            <span class="expand-title" style="width: 50px"
              >Branch {{ index + 1 }}
            </span>
            <span class="expand-content" style="padding-left: 10px">
              <el-input
                size="small"
                v-model="ruleItem.name"
                placeholder="placeholder"
              ></el-input>
            </span>

            <span
              title="Delete Branch"
              class="el-icon-btn el-icon-remove"
              @click="handleRemoveRuleGroup(index)"
            ></span>
          </div>
        </template>
        <div
          title="Create Branch"
          class="el-icon-btn rule-content-tips el-icon-circle-plus"
          @click="handleCreateRuleGroup"
        ></div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { clone } from '../utils';

function getTempItem() {
  return {
    stepName: 'Condition Group',
    ruleGroupList: [
      {
        name: '',
      },
    ],
  };
}

export default {
  name: 'ExpandNodeForm',
  props: {
    editItem: {
      type: Object,
    },
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

  created() {
    if (this.editItem && this.editItem.stepName) {
      let tempItem = clone(this.editItem);
      this.updateData(tempItem);
    }
  },

  methods: {
    updateData(tempItem) {
      this.tempItem = tempItem;
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

    handleCreateRuleGroup() {
      this.tempItem.ruleGroupList.push({
        name: '',
      });
    },

    handleRemoveRuleGroup(index) {
      this.tempItem.ruleGroupList.splice(index, 1);

      if (this.tempItem.ruleGroupList.length === 0) {
        this.handleCreateRuleGroup();
      }
    },

    _message(msg, type) {
      this.$message({
        type: type || 'error',
        message: msg,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.expand-item {
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  position: relative;
  margin-bottom: 5px;

  span {
    display: inline-block;
  }

  .expand-title {
    position: absolute;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-items: center;
    width: 33px;
    height: 100%;
    color: #fff;
    background: #87cefa;
    border: 1px solid #87cefa;
  }

  .expand-content {
    margin-left: 38px;
    max-width: 340px;
    vertical-align: middle;
    line-height: 22px;
  }
}
</style>
