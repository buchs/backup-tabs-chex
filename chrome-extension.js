/* Algorithm:
     startup - find parent ID of folder, time started

     every time period:
	1. delete older folders according to parameter (days old)
	2. create new folder and bookmarks in it
	3. validate those entries
        4. delete 2nd last time period folder (but not further back)


   User parameters:
   - how often to bookmark - minutes
   - when to clean up older time periods - days

*/

var bookmark { }
bookmark.parentId
bookmark.title = title
bookmark.url = url

chrome.bookmarks.create(bookmark, null)


// create folder?
chrome.bookmarks.create({'parentId': bookmarkBar.id,
			 'title': 'Extension bookmarks'),
			function(newFolder) {
			    console.log("added folder: " + newFolder.title);
			});


chrome.bookmarks.removeTree(id)



// Tabs
-- get all windows
for each window:
chrome.tabs.query(windowID, callback) - callback gets (array of Tab tabs)
for each tab in array:
  tab.url is the URL



// For the manifest

