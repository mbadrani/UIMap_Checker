'use strict';

const puppeteer = require('puppeteer');
//const {Menu} = require('./BO/menudevelop');
const {Menu} = require('./BO/menu');
require('events').EventEmitter.prototype._maxListeners = Infinity;

let argv = require('minimist')(process.argv.slice(2));

let URLBO = argv.URLBO || 'http://localhost/pshop5.1b1/admin9713xqwqx/';
let EMAIL = argv.EMAIL || 'demo@prestashop.com';
let PASSWORD = argv.PASSWORD || 'prestashop_demo';

const checkOrdersID = async (browser, page) => {

	await page.waitForSelector(Menu.Sell.Orders.orders_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Orders.orders_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Orders.invoices_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Orders.credit_slips_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Orders.delivery_slips_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Orders.shopping_carts_submenu, { timeout: 5000})

	return true
}

const checkCatalogID = async (browser, page) => {

	await page.waitForSelector(Menu.Sell.Catalog.catalog_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.products_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.category_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.monitoring_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.attributes_features_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.manufacturers_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.files_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.discounts_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Catalog.stocks_submenu, { timeout: 5000})

	return true
}

const checkCustomersID = async (browser, page) => {

	await page.waitForSelector(Menu.Sell.Customers.customers_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Customers.customers_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.Customers.addresses_submenu, { timeout: 5000})

	return true
}

const checkCustomerServiceID = async (browser, page) => {

	await page.waitForSelector(Menu.Sell.CustomerService.customer_service_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.CustomerService.customer_service_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.CustomerService.order_messages_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Sell.CustomerService.merchandise_returns_submenu, { timeout: 5000})

	return true
}

const checkStatsID = async (browser, page) => {

	await page.waitForSelector(Menu.Sell.Stats.stats_menu, { timeout: 5000})

	return true
}

const checkModulesID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.Modules.modules_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Modules.modules_services_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Modules.modules_catalog_submenu, { timeout: 5000})

	return true
}

const checkDesignID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.Design.design_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.theme_logo_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.theme_catalog_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.pages_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.positions_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.image_settings_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Design.link_widget_submenu, { timeout: 5000})

	return true
}

const checkShippingID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.Shipping.shipping_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Shipping.carriers_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Shipping.preferences_submenu, { timeout: 5000})

	return true
}

const checkPaymentID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.Payment.payment_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Payment.payment_methods_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.Payment.preferences_submenu, { timeout: 5000})

	return true
}

const checkInternationalID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.International.international_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.International.localization_submenu, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.languages_tab, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.currencies_tab, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.geolocation_tab, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.International.locations_submenu, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.countries_tab, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.states_tab, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.International.taxes_submenu, { timeout: 5000})
	//await page.waitForSelector(Menu.Improve.International.taxe_rules_tab, { timeout: 5000})
	await page.waitForSelector(Menu.Improve.International.translations_submenu, { timeout: 5000})

	return true
}

const checkShopParametersID = async (browser, page) => {

	await page.waitForSelector(Menu.Configure.ShopParameters.shop_parameters_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.general_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.order_settings_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.product_settings_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.customer_settings_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.contact_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.traffic_seo_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.search_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.ShopParameters.merchant_expertise_submenu, { timeout: 5000})

	return true
}

const checkAdvancedParametersID = async (browser, page) => {

	await page.waitForSelector(Menu.Configure.AdvancedParameters.advanced_parameters_menu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.information_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.performance_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.administration_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.email_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.import_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.team_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.database_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.logs_submenu, { timeout: 5000})
	await page.waitForSelector(Menu.Configure.AdvancedParameters.webservice_submenu, { timeout: 5000})
//	await page.waitForSelector(Menu.Configure.AdvancedParameters.multistore_submenu, { timeout: 5000})


	return true
}


const checkID = async (browser, page) => {

	await page.waitForSelector(Menu.Improve.Modules.stocks_submenu, { timeout: 5000})

	return true
}

//**************************Debut du script*****************************
const run = async () => {

	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()

	await page.goto(URLBO, { waitUntil: 'networkidle0' });
	await page.type('#email', EMAIL)
	await page.type('#passwd', PASSWORD)
  await page.click('#submit_login')
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' })


	const checkList1 = await checkOrdersID(browser, page)
	console.log("Orders = " + checkList1)

	const checkList2 = await checkCatalogID(browser, page)
	console.log("Catalog = " + checkList2)

	const checkList3 = await checkCustomersID(browser, page)
	console.log("Customers = " + checkList3)

	const checkList4 = await checkCustomerServiceID(browser, page)
	console.log("CustomerService = " + checkList4)

	const checkList5 = await checkStatsID(browser, page)
	console.log("checkStats = " + checkList5)

	const checkList6 = await checkModulesID(browser, page)
	console.log("checkModules = " + checkList6)

	const checkList7 = await checkDesignID(browser, page)
	console.log("checkDesign = " + checkList7)

	const checkList8 = await checkShippingID(browser, page)
	console.log("checkShipping = " + checkList8)

	const checkList9 = await checkPaymentID(browser, page)
	console.log("checkPayment = " + checkList9)

	const checkList10 = await checkInternationalID(browser, page)
	console.log("checkInternational = " + checkList10)

	const checkList11 = await checkShopParametersID(browser, page)
	console.log("checkShopParameters = " + checkList11)

	const checkList12 = await checkAdvancedParametersID(browser, page)
	console.log("checkAdvancedParameters = " + checkList12)

  browser.close()
}


run()
  .then(value => {
    console.log("-------- the end :-* --------")
  })
  .catch(e => console.log(`error: ${e}`))
