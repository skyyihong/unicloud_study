<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="code" label="" required>
        <uni-easyinput placeholder="编码" v-model="formData.code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="parent_code" label="">
        <uni-easyinput placeholder="父级编码" v-model="formData.parent_code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="name" label="城市" required>
        <uni-easyinput placeholder="城市名称" v-model="formData.name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="type" label="">
        <uni-easyinput placeholder="城市类型；0省，1市，2区" type="number" v-model="formData.type"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="first_letter" label="">
        <uni-easyinput placeholder="拼音首字母" v-model="formData.first_letter"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="pinyin" label="">
        <uni-easyinput placeholder="城市名称的完整汉语拼音，用于拼音检索" v-model="formData.pinyin"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="zip_code" label="邮编">
        <uni-easyinput placeholder="邮政编码" v-model="formData.zip_code"></uni-easyinput>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/opendb-city-china.js';

  const db = uniCloud.database();
  const dbCollectionName = 'opendb-city-china';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "code": "",
        "parent_code": "",
        "name": "",
        "type": null,
        "first_letter": "",
        "pinyin": "",
        "zip_code": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("code,parent_code,name,type,first_letter,pinyin,zip_code").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>

<style>
  .uni-container {
    padding: 15px;
  }

  .uni-input-border,
  .uni-textarea-border {
    width: 100%;
    font-size: 14px;
    color: #666;
    border: 1px #e5e5e5 solid;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .uni-input-border {
    padding: 0 10px;
    height: 35px;

  }

  .uni-textarea-border {
    padding: 10px;
    height: 80px;
  }

  .uni-button-group {
    margin-top: 50px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
  }

  .uni-button {
    width: 184px;
  }
</style>
