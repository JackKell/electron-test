const electron = require("electron");
const {app} = electron;
const {BrowserWindow} = electron;

app.on('ready', () => {
	var win = new BrowserWindow({
		width:800,
		height:600
	});

	win.loadURL('file://' + __dirname + '/index.html');
});

exports.openWindow = (file, width, height) => {
	var win = new BrowserWindow({
		width:width,
		height:height
	});
	win.loadURL(file);
}