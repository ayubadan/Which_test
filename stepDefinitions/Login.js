import {Given,When,Then} from 'cucumber'
import TvLanding from '../pageObject/TvLandingPage'
var chai = require('chai');
var assert = chai.assert;

Given(/^I navigate to the Which TV landing page$/, async function(){
    TvLanding.open()
    const title =  await TvLanding.ontvpage
    const attr = await title.getAttribute('data-which-id')
    const text = await title.getText()

    TvLanding.expect_actual(attr,'active-true')
    TvLanding.expect_actual(text,'All Televisions')
})

Given(/^I am not logged in$/, async function(){
    const logged_out =  await TvLanding.logged_out_state
    const attr_style = await logged_out.getAttribute('style')
    TvLanding.expect_actual(attr_style,'display: block;')
})

When(/^I click on the Which recommendations dropdown$/, async function(){
    const dropdown = await TvLanding.recommendation_filter
    const bestbuy_initial = await TvLanding.try_btn
    const attr_initial = await bestbuy_initial.getAttribute('tabindex')
    console.log("attr_initial: "+attr_initial)
    TvLanding.expect_actual(attr_initial,'-1')
    await dropdown.click()
    const bestbuy_final = await TvLanding.try_btn
    const attr_final = await bestbuy_final.getAttribute('tabindex')
    TvLanding.expect_actual(attr_final,'0')
})

Then(/^I should see the filter by recommendations options disabled$/, async function(){
    const best_buy_disabled = await TvLanding.bestbuy
    const buy_attr = await best_buy_disabled.getAttribute('disabled')
    TvLanding.expect_actual(buy_attr,'true')

    const dont_buy_disabled = await TvLanding.dontbuy
    const dont_buy_attr = await dont_buy_disabled.getAttribute('disabled')
    TvLanding.expect_actual(dont_buy_attr,'true')
})

When(/^I click on the compare checkbox of a product$/, async function(){
    const compare_btn = await TvLanding.compare_btn
    const btn_initial_state = await compare_btn[0].getAttribute('data-which-id')
    TvLanding.expect_actual(btn_initial_state,'add-to-compare-button')
    await compare_btn[0].click()
    const btn_final_state = await compare_btn[0].getAttribute('data-which-id')
    TvLanding.expect_actual(btn_final_state,'remove-from-compare-button')
    //teardown
    const remove_btn = await TvLanding.remove_btn
    await remove_btn.click()
})

Then(/^The product should apppear in the comparision pop up window$/, async function(){
    const compare_btn = await TvLanding.compare_btn
    var compare_window_inital = await TvLanding.comapre_window_count
    TvLanding.expect_actual(compare_window_inital.length,0)

    await compare_btn[0].click()

    var compare_window_final = await TvLanding.comapre_window_count
    console.log("count: "+compare_window_final.length)
    TvLanding.expect_actual(compare_window_final.length,1)
    //teardown
    const remove_btn = await TvLanding.remove_btn
    await remove_btn.click()
})

When(/^I navigate to the products list$/, async function(){
    const ul = await TvLanding.ul_products
    const li = await ul.$$("#product-card-wrapper") 
    assert(li.length === 48, 'There are products missing')
})

Then(/^I should not be able to see the test scores$/, async function(){
    const ul = await TvLanding.ul_products
    var li = await ul.$$("#product-card-wrapper")
    var x
    for (x=0;x<li.length;x++){
        const search_padlock = await li[x].$("._2-Idl")
        const padlock = await search_padlock.getAttribute('name')
        TvLanding.expect_actual(padlock,'padlockInCircle')
    }
})