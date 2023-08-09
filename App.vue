<script>
import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js'
export default {
  onLaunch: async function () {
    await uniIdPageInit()
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
:root {
  box-sizing: border-box;
}
</style>
