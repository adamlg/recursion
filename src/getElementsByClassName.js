// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var elements = [];

  function traverse(node) {
  	if (node.classList.contains(className)) {
  		elements.push(node);
  	};
  	if (node.hasChildNodes()) {
  		for (var i=0; i<node.children.length; i++) {
  			traverse(node.children[i]);
  		};
  	};
  };

  traverse(document.body);
  return elements;
};
