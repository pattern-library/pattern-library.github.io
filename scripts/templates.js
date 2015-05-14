angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<h1>Main Page</h1>\n\n{{shows}}\n");}]);
