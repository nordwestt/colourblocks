
chrome.runtime.onInstalled.addListener(async () => {
    var value = "OFF";
    chrome.storage.sync.set({"myKey":value});
});

function toggleBlocks(){
    chrome.storage.sync.get("myKey", function(result) {
        var newVal = result["myKey"] == "ON" ? "OFF" : "ON";
        chrome.storage.sync.set({"myKey":newVal});
    });
}

chrome.action.onClicked.addListener((tab)=>{
    if(!tab.url.includes("chrome://")){
        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            function:toggleBlocks
        });
    }
});