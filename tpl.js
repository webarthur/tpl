$tpl = function(template, scope){
  
  $tpl.tags || ($tpl.tags = ['{', '}']);
 	
  this!=window
    && (scope=template, template=this);
  
  typeof scope!='Undefined'
    || (scope=window);
  
  return template.replace(new RegExp($tpl.tags[0]+'([^\\'+$tpl.tags[1][0]+']*)'+$tpl.tags[1], 'g'), 
    function(match, attr){
      try{ with(scope); return eval(attr) || ''; }
      catch (e) { return ''; }
    });
}

if(!String.prototype.tpl)
  String.prototype.tpl = $tpl;
