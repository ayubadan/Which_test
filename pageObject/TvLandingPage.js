import Page from './page'
var chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;


class TvLanding extends Page {

    get ontvpage() { return $("._1etsY")}
    get logged_out_state() { return $("//div[@data-which-id='gn-user-menu-inner-logged-out']")}
    get recommendation_filter() { return $("//button[@data-which-button='which_recommendations-filter']")}
    get bestbuy() {return $("#which_recommendations_best_buy")}
    get dontbuy() {return $("#which_recommendations_don_t_buy")}
    get try_btn() {return $("//a[@data-which-id='filters-cta']")}
    get compare_btn() {return $$("._1e2c2")}
    get comapre_window_count() {return $$("//a[@data-which-id='comparison-flyout-product-name']")}
    get remove_btn() {return $("._5706O")}
    get ul_products() {return $("._2xPiO")}
    get li_product() {return $$("#product-card-wrapper")}
    get hidden_test_result() {return $("._2-Idl")}

    open() {
        super.open()
    }

    expect_actual(actual,expected){
        expect(actual).to.equal(expected)
    }
}

export default new TvLanding()