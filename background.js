var timevalue=0;
var tabids=new Array();
chrome.browserAction.onClicked.addListener(function(tab) {
	//console.dir(tab);
	//chrome.tabs.create({url:"",selected:true});
		//nighttabids.splice(index,1);
		//chrome.browserAction.setIcon({tabId: tab_id, path:"icons/sun.png"});
		//chrome.browserAction.setTitle({tabId: tab_id, title:"sun"})
	
});
chrome.tabs.onUpdated.addListener(function(tab_id){

	chrome.tabs.get(tab_id,function(tab){
		var url=tab.url;
	});

	tabids.push(tab_id);

});
setInterval(function(){
	timevalue++;
	if(timevalue>=10 && timevalue<=12){
		for(var i=0;i<tabids.length;i++){
			var tabid=tabids[i];
			chrome.tabs.executeScript(tabid, {file: "hide.js"});
		}
	}
	if(timevalue>=12){
		
		for(var i=0;i<tabids.length;i++){
			var tabid=tabids[i];
			chrome.tabs.executeScript(tabid, {file: "show.js"});
		}
		timevalue=0;
	}
},1000*60);

function get_time_value(){
	return timevalue;
}