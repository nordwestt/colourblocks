
function showBlocks(){
    var colours = ["#FFB3BA", "#FFDFBA", "#FFE8B3", "#FFFFBA", "#E2FFBA"];
    var paragraphs = document.getElementsByTagName("p");
    for(var i=0; i<paragraphs.length; i++){
        paragraphs[i].style = "background:"+colours[i%colours.length]+";";
    }
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {

      if(key=="myKey"){
        if(newValue=="ON"){
            showBlocks();
        }
        break;
      }
    }
  });

chrome.storage.sync.get("myKey", function(result) {
    if(result["myKey"]=="ON") showBlocks();
});
