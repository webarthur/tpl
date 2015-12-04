# Tpl
The most lightest template engine for JavaScript. Single, easiest to use and client templating.

## Everything is possible!
```
<div id="template">{id} - {title}  {if(1) 2} { 2 * 2 } {list[0].name}</div>

<script>
var template = $('#template').html().tpl(scope); // scope var is optional
$('#template').html(template);
</script>
```

## Example 2
```
<div id="template"></div>

<script>
$('#template').html( $tpl("{id} {name} - { 2 * 2 }", myScope) );
</script>
```

## Configurable tags
```
<script>
$tpl.tags = ["{{", "}}"];
</script>
```

## jsFiddle
http://jsfiddle.net/webarthur/xuyxeo1m/11/
