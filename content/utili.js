var $ = (function(){
  var doc = document;
  function init(selector){
    var test = /^#?[\w\-_]+/ig,
        exprId = /^#([\w\-_]+)/,
        exprName = /^(?!#)([\w\-_]+)/,
        r;
    if(test.test(selector)){
    }else{
      alert("select error");
    }    
    var id = selector.match(exprId);
    
    if(id == null){
      var tag = selector.match(exprName);
      var tagName = tag[1];
      r = doc.getElementsByTagName(tagName)[0];
    }else{
      var idName = id[1];
      r = doc.getElementById(idName);
    }
    return r;
  }
  return init;
})();

function $$(){
  
}

function win2bottom(){
  alert("a");
  var win =  window.getBrowser().selectedBrowser.contentWindow;
  var event = document.createEvent("MouseEvent");
  event.initMouseEvent("DOMMouseScroll",true, null, window,0,0,0,0,win.pageYOffset,false,false,false,false,0,null);
  win.dispatchEvent(event);  

}
