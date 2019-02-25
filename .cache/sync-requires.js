// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/mpasek/workspace/johannesproperty/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/about.js")),
  "component---src-pages-buying-and-selling-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/buying-and-selling.js")),
  "component---src-pages-buying-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/buying.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/index.js")),
  "component---src-pages-property-management-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/property-management.js")),
  "component---src-pages-renting-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/renting.js")),
  "component---src-pages-selling-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/selling.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/services.js")),
  "component---src-pages-thanks-js": preferDefault(require("/Users/mpasek/workspace/johannesproperty/src/pages/thanks.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/about.json"),
  "buying-and-selling.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/buying-and-selling.json"),
  "buying.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/buying.json"),
  "contact.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/contact.json"),
  "index.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/index.json"),
  "property-management.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/property-management.json"),
  "renting.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/renting.json"),
  "selling.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/selling.json"),
  "services.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/services.json"),
  "thanks.json": require("/Users/mpasek/workspace/johannesproperty/.cache/json/thanks.json")
}