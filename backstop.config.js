const testBaseUrl = "http://localhost:5173/";
const refBaseUrl = "https://ebus-shop.pimoti.de/";
const defaultDelay = 1500;
const removeStartModalSelector = ["div.modal-box", "#start_modal", "dialog"];

// eslint-disable-next-line no-undef
module.exports = {
  id: "ebus-shop",
  viewports: [
    {
      label: "mobile",
      width: 380,
      height: 640,
    },
    {
      label: "desktop",
      width: 1920,
      height: 1080,
    },
  ],
  scenarios: [
    {
      label: "ebus-shop-homepage",
      url: testBaseUrl,
      referenceUrl: refBaseUrl,
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
    {
      label: "ebus-shop-checkout",
      url: testBaseUrl + "checkout",
      referenceUrl: refBaseUrl + "checkout",
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
    {
      label: "ebus-shop-overview-paypal",
      url: testBaseUrl + "overview?method=PayPal",
      referenceUrl: refBaseUrl + "overview?method=PayPal",
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
    {
      label: "ebus-shop-overview-kreditkarte",
      url: testBaseUrl + "overview?method=Kreditkarte",
      referenceUrl: refBaseUrl + "overview?method=Kreditkarte",
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
    {
      label: "ebus-shop-overview-google-pay",
      url: testBaseUrl + "overview?method=Google%20Pay",
      referenceUrl: refBaseUrl + "overview?method=Google%20Pay",
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
    {
      label: "ebus-shop-overview-apple-pay",
      url: testBaseUrl + "overview?method=Apple%20Pay",
      referenceUrl: refBaseUrl + "overview?method=Apple%20Pay",
      delay: defaultDelay,
      removeSelectors: [...removeStartModalSelector],
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
