import path from 'node:path';
import {app, BrowserWindow,nativeImage} from 'electron';
import contextMenu from '../index.js';

contextMenu({
	labels: {
		cut: 'Configured Cut',
		copy: 'Configured Copy',
		paste: 'Configured Paste',
		save: 'Configured Save Image',
		saveImageAs: 'Configured Save Image As…',
		copyLink: 'Configured Copy Link',
		saveLinkAs: 'Configured Save Link As…',
		inspect: 'Configured Inspect',
	},
	// prepend: () => [
	// 	{
	// 		label: 'Unicorn',
	// 	},
	// 	{
	// 		type: 'separator',
	// 	},
	// 	{
	// 		type: 'separator',
	// 	},
	// 	{
	// 		label: 'Invisible',
	// 		visible: false,
	// 	},
	// 	{
	// 		type: 'separator',
	// 	},
	// 	{
	// 		type: 'separator',
	// 	},
	// ],
	append() {
		return [
			{
				label: '测试自定义图标',
				visible:true,
				icon: path.join(import.meta.dirname,'../task_complete.png'),
				// icon:nativeImage.createFromPath(path.join(path.resolve(__dirname), '../task_complete.png')),
				click(menuItem, browserWindow, event) {
					console.log("🚀 ~ click ~ menuItem:", menuItem)
					console.log('Custom clicked');
				},
			},
		];
	},
	// showSelectAll: true,
	// showCopyImageAddress: true,
	// showSaveImageAs: true,
	// showCopyVideoAddress: true,
	// showSaveVideoAs: true,
	// showInspectElement: false,
	// showSaveLinkAs: true,
});

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
	await app.whenReady();

	await (new BrowserWindow({
		webPreferences: {
			spellcheck: true,
		},
	})).loadFile(path.join(import.meta.dirname, 'fixture.html'));
})();
