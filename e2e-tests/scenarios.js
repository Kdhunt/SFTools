'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /SFCharGen when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/SFCharGen");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#!/SFCharGen');
    });


    it('should render view1 when user navigates to /SFCharGen', function() {
  it('should automatically redirect to /SFCharGen when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/SFCharGen");
  });


  describe('SFCharGen', function() {

    beforeEach(function() {
      browser.get('index.html#!/SFCharGen');
    });


    it('should render SFCharGen when user navigates to /SFCharGen', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for SFCharGen/);
    });

  });


  describe('SFShipGen', function() {

    beforeEach(function() {
      browser.get('index.html#!/SFShipGen');
    });


    it('should render SFShipGen when user navigates to /SFShipGen', function() {
  describe('SFShipGen', function() {

    beforeEach(function() {
      browser.get('index.html#!/SFShipGen');
    });


    it('should render SFShipGen when user navigates to /SFShipGen', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial forSFShipGen/);
    });

  });
});
