var bg = chrome.extension.getBackgroundPage(); 
document.getElementById("title").innerHTML=bg.get_time_value();