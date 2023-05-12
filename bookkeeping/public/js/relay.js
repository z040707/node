// 设置如果用户不点击，5s后自动跳转
// 获取独苗信息的节点
const time = document.querySelector(".time")
// 获取后端传过来的路径信息
const link = document.querySelector("a")

// 设置等待的秒数
let num = 5
// 设置计时器，用于刷新读秒，每1s刷新一次
const timer = setInterval(() => {
    num--
    // 进行判断，如果时间到0，停止计时，跳转到指定的页面
    if (num === 0) {
        clearInterval(timer)
        location.href = link.href
    }
    time.innerHTML = num
}, 1000)

