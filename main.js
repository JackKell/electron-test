const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const path = require('path');
const url = require('url');

// Allows for live reload of the html page
require('electron-reload')(__dirname);

let window = null;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 500,
        height: 400,
        show: false
    });

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'app/app.html'),
        protocol: 'file:',
        slashes: true
    }));

    window.once('ready-to-show', () => {
        window.show()
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

exports.openWindow = (file, width, height) => {
	var win = new BrowserWindow({
		width:width,
		height:height
	});
	win.loadURL(file);
}
