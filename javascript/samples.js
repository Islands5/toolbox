// 不特定なオリジンに対して埋め込まれるiframeに対するポストメッセージ
window.addEventListener("message", function(event){
  var service_name = "MyService";
  var data = event.data;
  var prefix = data.substr(0, service_name.length - 1);
  if(prefix !== service_name){ return; }
  var json = data.substr(service_name.length)
}, false)

// post
window.parentWindow.postMessage("MyService:json_string","*")
