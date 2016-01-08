var _ = require('ep_etherpad-lite/static/js/underscore');

var colors = ['000000', 'f44336', '4caf50', '3f51b5'];

var collectContentPre = function(hook, context){
  var color = /(?:^| )color:([A-Za-z0-9]*)/.exec(context.cls);
  if(color && color[1]){
    context.cc.doAttrib(context.state, "color::" + color[1]);
  }
};

var collectContentPost = function(hook, context){
/*
  var tname = context.tname;
  var state = context.state;
  var lineAttributes = state.lineAttributes
  var tagIndex = _.indexOf(colors, tname);

  if(tagIndex >= 0){
    delete lineAttributes['color'];
  }
*/
};

exports.collectContentPre = collectContentPre;
exports.collectContentPost = collectContentPost;
