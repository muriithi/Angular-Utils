countWatchers = function() {
  var watchers, elementsWithScope, scope, i, len;
  watchers = 0;
  elementsWithScope = document.querySelectorAll('.ng-scope');
  for (i = 0, len = elementsWithScope.length; i < len; i++) {
    scope = angular.element(elementsWithScope[i]).scope();
    if (scope.$$watchers != null) {
      watchers += scope.$$watchers.length; 
    } 
  } 
  return watchers;
};
console.log(countWatchers());