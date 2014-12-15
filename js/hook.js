function tab_to_window() {
	// Get active tab
	chrome.tabs.query({
		lastFocusedWindow: true,
		active:true
	}, function (tabs) {
    if (!tabs.length) return;
    var tab = tabs[0];
    chrome.windows.getCurrent({}, function (window) {
      // Move it to a new window
      chrome.windows.create({
        tabId: tab.id,
        width: window.width,
        height: window.height,
        top: null,
        left: null,
        incognito: tab.incognito,
        focused: true
      });
    });
	});
}

chrome.commands.onCommand.addListener(tab_to_window);
