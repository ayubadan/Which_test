import {Given,When,Then} from 'cucumber'
var chai = require('chai');
var expect = chai.expect;

Given(/^I navigate to the Which TV landing page$/, async function(){
    await browser.url('https://www.which.co.uk/reviews/televisions')
    var title =  await $("._1etsY")
    var mytext = await title.getText()
    console.log("mytext: "+mytext)

    var expectedTitle = 'All Televisions'
    expect(mytext).to.equal(expectedTitle,`Expected title to be "${expectedTitle}" but found "${mytext}"`);
})

Given(/^I am not logged in$/, async function(){
    const logged_out =  await $("//div[@data-which-id='gn-user-menu-inner-logged-out']")
    const attr_style = await logged_out.getAttribute('style')
    console.log("attr_style: "+attr_style)
    expect(attr_style).to.equal('display: block;')
})

When(/^I click on the Which recommendations dropdown$/, async function(){
    const dropdown = await $("//button[@data-which-button='which_recommendations-filter']")
    await dropdown.click()
})

Then(/^I should see the filter by recommendations options disabled$/, async function(){
    const best_buy_disabled = await $("#which_recommendations_best_buy")
    const buy_attr = await best_buy_disabled.getAttribute('disabled')
    expect(buy_attr).to.equal('true')

    const dont_buy_disabled = await $("#which_recommendations_don_t_buy")
    const dont_buy_attr = await dont_buy_disabled.getAttribute('disabled')
    expect(dont_buy_attr).to.equal('true')
})

When(/^I click on the sort by dropdown$/, async function(){
    const dropdown = await $("#product_listing_sorter")
    await dropdown.click()
})

Then(/^I should see the filter by highest which score disabled$/, async function(){
    const highest_score = await $("//option[@value='which_score_desc']")
    const highest_score_attr = await highest_score.getAttribute('disabled')
    expect(highest_score_attr).to.equal('true')

})