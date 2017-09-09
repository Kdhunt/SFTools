'use strict';

describe('StarfinderApp.version module', function() {
  beforeEach(module('StarfinderApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
