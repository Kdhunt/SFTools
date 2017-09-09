'use strict';

angular.module('StarfinderApp.version', [
  'StarfinderApp.version.interpolate-filter',
  'StarfinderApp.version.version-directive'
])

.value('version', '0.1');
