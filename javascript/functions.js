/**
 * GET parameters to JS Object
 * @return {Object}
 */
function getParams(){
  var ret = {};
  var str = window.location.search.substr(1)
  if (str === "") return ret;
  var ary = str.split("&");
  var tmp;
  ary.forEach(function(value){
    tmp = value.split("=");
    ret[tmp[0]] = tmp[1];
  })
  return ret;
}
