
//按钮节流
const preventReClick =(app)=>{
 app.directive('preventReClick', {
  mounted: function (el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000)
      }
    })
  }
});
}

export default preventReClick 