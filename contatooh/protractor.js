exports.config = {
	specs : ['test/e2e/**/*.js'],
	omPrepare : function() {
		browser.driver.get('http://localhost:3000');
	}
};