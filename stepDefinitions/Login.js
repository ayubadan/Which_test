import {Given,When,Then} from 'cucumber'
var chai = require('chai');
var expect = chai.expect;

Given(/^I navigate to the Which TV landing page$/, async function(){
    await browser.url('https://www.which.co.uk/reviews/televisions')
    const title =  await $("._1etsY")
    const attr = await title.getAttribute('data-which-id')
    expect(attr).to.equal('active-true')

    const mytext = await title.getText()
    console.log("mytext: "+mytext)
    expect(mytext).to.equal('All Televisions');
})

Given(/^I am not logged in$/, async function(){
    const logged_out =  await $("//div[@data-which-id='gn-user-menu-inner-logged-out']")
    const attr_style = await logged_out.getAttribute('style')
    console.log("attr_style: "+attr_style)
    expect(attr_style).to.equal('display: block;')
})

// When(/^I click on the Which recommendations dropdown$/, async function(){
//     const dropdown = await $("//button[@data-which-button='which_recommendations-filter']")
//     await dropdown.click()
// })

// Then(/^I should see the filter by recommendations options disabled$/, async function(){
//     const best_buy_disabled = await $("#which_recommendations_best_buy")
//     const buy_attr = await best_buy_disabled.getAttribute('disabled')
//     expect(buy_attr).to.equal('true')

//     const dont_buy_disabled = await $("#which_recommendations_don_t_buy")
//     const dont_buy_attr = await dont_buy_disabled.getAttribute('disabled')
//     expect(dont_buy_attr).to.equal('true')
// })

// When(/^I click on the sort by dropdown$/, async function(){
//     const dropdown = await $("#product_listing_sorter")
//     await dropdown.click()
// })

// Then(/^I should see the filter by highest which score disabled$/, async function(){
//     const highest_score = await $("//option[@value='which_score_desc']")
//     const highest_score_attr = await highest_score.getAttribute('disabled')
//     expect(highest_score_attr).to.equal('true')
// })

When(/^I check the test score for each product$/, async function(){
    const ul = await $("._2xPiO")
    const li = await ul.$$("#product-card-wrapper")
    const x;
    for (x=0;x<li.length;x++){
        const search_padlock = await li[x].$('._2-Idl')
        await search_padlock.getAttribute('name')
    }
})

Then(/^I should not see the result$/, async function(){
    const ul = await $("._2xPiO")
    const li = await ul.$$("#product-card-wrapper")
    const x;
    for (x=0;x<li.length;x++){
        const search_padlock = await li[x].$('._2-Idl')
        const padlock = await search_padlock.getAttribute('name')
        expect(padlock).to.equal('padlockInCircle')
    }
})