const { app, BrowserWindow } = require('electron')
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false,// 取消跨域限制
            enableRemoteModule: true, // 取消 Remote 模块警告
            contextIsolation:false,
            nodeIntegration: true, // 是否集成 Nodejs

        }
    })

    win.loadFile('build/index.html')
    // win.loadURL('http://localhost:8088/')
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
