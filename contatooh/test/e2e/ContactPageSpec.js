describe('New Contact Page', function() {
	
	beforeEach(function() {
		browser.get('http://localhost:3000/#/contact')
	});

	it('You must complete a new contact', function() {
		var rdm =  Math.floor((Math.random() * 10000000) + 1);
		var name = 'Name Test' + rdm;
		var email = 'email@test.com' + rdm;
		element(by.model('contact.name')).sendKeys(name);
		element(by.model('contact.email')).sendKeys(email);
		element(by.css('option[value="0"]')).click();
		element(by.css('.btn-primary')).click();
		expect(element(by.binding('msg.text'))
			.getText()).toContain('Success');
	});

}); 