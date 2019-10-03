chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#3aa757' }, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

function windowList(windows) {
  windows.forEach(function(window1) {
    window1.tabs.forEach(function(tab) {
      // console.log(`tab: ${tab.title}\n\t${tab.url}`);
    });
  });
}

function backupTabsNow() {
  // get all windows
  chrome.windows.getAll({ populate: true }, windowList);
  // window.setTimeout(backupTabsNow, 5000);
}

function expoundTree(results) {
  results.forEach(function(r) {
    console.log(`id=${r.id}, title=${r.title}`);
  });
}

chrome.bookmarks.getTree(expoundTree);
chrome.bookmarks.getChildren('0', expoundTree);

window.setTimeout(backupTabsNow, 1000);
