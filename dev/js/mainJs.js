export var axlab = {};

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./js-libs/', true, /\.js$/));
requireAll(require.context('./custom-scripts/', true, /\.js$/));   
 

console.log(axlab);
