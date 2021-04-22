// pry = require('pryjs')


let superbowlWin = (x) => {
    let y = x.find(win => win.result === "W")
    if (y) { return y.year }

}
// superbowlWin(record)