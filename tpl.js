$tpl = function(template, scope){
  
  $tpl.tags || ($tpl.tags = ['{', '}']);
 	
  this!=window
    && (scope=template, template=this);
  
  typeof scope!='Undefined'
    || (scope=window);
  
  return template.replace(new RegExp($tpl.tags[0]+'([^\\'+$tpl.tags[1][0]+']*)'+$tpl.tags[1], 'g'), 
    function(match, exp){
      try{ return eval("with(scope) "+exp) || ''; }
      catch (e) { return ''; }
    });
}

if(!String.prototype.tpl)
  String.prototype.tpl = $tpl;
