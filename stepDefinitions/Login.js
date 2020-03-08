import {Given,When,Then} from 'cucumber'
var chai = require('chai');
var expect = chai.expect;

Given(/^I navigate to the Which TV landing page$/, async function(){
    await browser.url('https://www.which.co.uk/reviews/televisions')
    const title =  await $("._1etsY")
    const mytext = await title.getText()
    const expectedTitle = 'All Televisions'
    expect(mytext).to.equal(expectedTitle,`Expected title to be "${expectedTitle}" but found "${mytext}"`);
})

Given(/^I am not logged in$/, async function(){
    const logged_out =  await $("//div[@data-which-id='gn-user-menu-inner-logged-out']")
    const attr_style = await logged_out.getAttribute('style')
    console.log("attr_style: "+attr_style)
    expect(attr_style).to.equal('display: block;')
})

When(/^I click on the Which recommendations dropdown$/, function(){

})

Then(/^I should not be able to filter by recommendations$/, function(){

})