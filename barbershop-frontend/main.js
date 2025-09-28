// main.js
import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'process'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')    }
  })

  // Só chama uma vez
  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173') // Vite dev server
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html')) // Build final
  }
}

// Cria a janela
app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
