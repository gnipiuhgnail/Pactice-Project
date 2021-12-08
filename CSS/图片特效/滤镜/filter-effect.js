var tips = document.getElementById("tips"); // 如果用类名获取，注意获取到的是数组
var barBody = document.getElementById("barBody");
var barProcess = document.getElementById("barProcess");
var barBtn = document.getElementById("barBtn");
var pic = document.getElementById("pic");
var value = 0;
function changeFilter(style) {
  var pic = document.getElementById("pic");
  if(style == 'blur') {
    pic.style.filter = style+'('+value+'px)';
  } else if(style == 'hue-rotate') {
    pic.style.filter = style+'('+ parseInt(value*3.6)+'deg)';
  } else if(style == 'drop-shadow') {
    const current = parseInt(value/10);
    pic.style.filter = `${style}(${current}px ${current}px ${current}px #000)`;
  } else {
    pic.style.filter = style+'('+value+'%)';
  }
}
function init(tips, barBody, barProcess, barBtn) {
  // 事件：点击进度条，拖拽拖动条;获取点击或者拖拽的位置，设置拖动条位置和进度数据、进度条长度
  // 目标：获取进度条的长度 = 进度条的起始位置 - 进度条结束位置
  // 设置拖动条位置、进度条长度和数据
  var processLength = 0;
  barBtn.onmousedown = function(event) { // event点击事件会记录鼠标的信息
    // 进度条的起始位置 = 鼠标按下的位置到浏览器的距离 - barBody到浏览器的位置
    var processStart  = event.clientX - this.offsetLeft;
    document.onmousemove = function(event) {
      // 进度条的长度
      processLength = event.clientX - processStart;
      // 判断移动到起始点或终点
      if(processLength < 0) {
        processLength = 0;
      }
      else if(processLength > barBody.offsetWidth-barBtn.offsetWidth) {
        processLength = barBody.offsetWidth-barBtn.offsetWidth;
      }
      barBtn.style.left = processLength+ 'px';
      barProcess.style.width = processLength + 'px';
      value = parseInt(processLength/(barBody.offsetWidth-barBtn.offsetWidth)*100);
      tips.innerHTML = value +'%';
      var style = document.getElementById("pic").style.filter;
      // 截取'('前面的字符
      style = style.substring(0,style.indexOf('('));
      changeFilter(style)
      // 防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
  }
  document.onmouseup = function(){
    document.onmousemove = null; //弹起鼠标不做任何操作
  }
}
 
init(tips,  barBody, barProcess, barBtn);