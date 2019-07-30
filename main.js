const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768 });
  mainWindow.setMenu(null);
  mainWindow.maximize();
  mainWindow.loadURL('file://' + __dirname + '/index.html');
   
});
