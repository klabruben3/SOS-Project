window.siteConfig = {};
const url = location.href;

// second semester
const mths121 =
  "https://efundi.nwu.ac.za/portal/site/6db8e2b1-ee3a-40e9-bf1d-daa17af71026/tool/89ca1748-c090-4fdb-b3df-7f5ea9db1a37/gradebook";
const appm122 =
  "https://efundi.nwu.ac.za/portal/site/3988e8cc-3b89-4493-9faa-86686a98a6ec/tool/124ef22b-3567-4460-9b23-a74bb0d486db/gradebook";
const cmpg121 =
  "https://efundi.nwu.ac.za/portal/site/ee8bfbd1-b379-4811-969a-0ad590a54c9e/tool/67a61891-61e1-4831-af49-a96aa0279825/gradebook";
const _cmpg121_ =
  "https://efundi.nwu.ac.za/portal/site/046ca932-d563-4628-8acd-65914536c0e8/tool/3a3fe4e5-fb92-4d2a-8965-235f6c906c9b/gradebook";
const alde122 =
  "https://efundi.nwu.ac.za/portal/site/dda4c1ff-0263-4e6d-acf6-ab1588c7eb52/tool/30783e67-a5e2-4907-a4de-d9abde169c9e/gradebook";
const sttn125 =
  "https://efundi.nwu.ac.za/portal/site/57b22dc4-1eb0-4a07-8481-4d182dbe4a88/tool/3901cedd-a4b7-4528-8a7f-4eafa039c0ea/gradebook";

// first semester
const cmpg111 =
  "https://efundi.nwu.ac.za/portal/site/eac6fda5-7fed-4c98-b51b-c5e786b8b53f/tool/93bc147f-94e8-4b6e-9dcf-bc0cf4c3fe2f/gradebook";
const sttn115 =
  "https://efundi.nwu.ac.za/portal/site/a42d9f0f-0e17-4092-ae6d-2083f54bc950/tool/14894553-9118-4cfd-b217-f22632e44ed7/gradebook";
const nphy111 =
  "https://efundi.nwu.ac.za/portal/site/831631e7-fcda-432d-a005-481956178efe/tool/eab3e328-222f-4fc8-81d1-d0f9b32cf60b/gradebook";

if (url == mths121) {
  siteConfig.results = {
    0: 58, // out of 75
    1: 65,
    2: 75,
    3: 62,
    4: 56,
    5: 35,
    6: 75,
    7: 55,
    8: 48,
    9: 77,
    10: 7, // out of 10
    11: 9, // out of 10
    12: 5, // out of 10
    13: 8, // out of 10
    14: 6, // out of 10
    15: 34,
    16: 63,
    17: 78,
    18: 75,
    19: 42,
    20: 49, // out of 75
    21: 59, // out of 75
    22: 52,
    23: 63,
    24: 68,
    25: 71,
    26: 67,
    27: "-",
    28: "-",
    29: 73,
    30: 68,
  };
  siteConfig.calcIndex = 4;
  siteConfig.showGraph = true;
} else if (url == appm122) {
  siteConfig.results = {
    0: 58,
    1: 65,
    2: 75,
    3: 62,
    4: 55,
    5: 35,
    6: 75,
    7: 55,
    8: 48,
    9: 3, // out of 5
    10: 27, // out of 30
    11: 35, // out of 50
    12: 56,
    13: 75,
  };
  siteConfig.calcIndex = 4;
  siteConfig.showGraph = true;
} else if (url == alde122) {
  siteConfig.results = {
    0: 17, // out of 20
    1: 21, // out of 30
    2: 29, // out of 50
    3: 32, // out of 45
    4: 45, // out of 50
    5: 35, // out of 50
    6: 75,
    7: 66,
    8: 20, // out of 25
    9: 78,
  };
  siteConfig.calcIndex = 8;
  siteConfig.showGraph = true;
} else if (url == cmpg121) {
  siteConfig.results = {
    0: 17,
    1: 21,
    2: 29,
    3: 32,
    4: 45,
    5: 35,
    6: 75,
    7: 66,
    8: 20,
    9: 78,
    10: 54,
    11: 12,
    12: 48,
    13: 33,
    14: 71,
    15: 59,
    16: 27,
    17: 44,
    18: 63,
    19: 19,
    20: 53,
    21: 11,
    22: 68,
    23: 24,
    24: 39,
    25: 57,
    26: 73,
    27: 16,
    28: 49,
    29: 60,
    30: 75,
    31: 69,
    32: 79,
    33: 76,
    34: 52,
    35: 41,
    36: 70,
  };
  siteConfig.calcIndex = 6;
  siteConfig.showGraph = false;
} else if (url == _cmpg121_) {
  siteConfig.results = {
    0: 17, // Practicals
    1: 21,
    2: 29,
    3: 32,
    4: 45,
    5: 35,
    6: 75,
    7: 66, //
    8: 20, // quiz
    9: 78,
    10: 54,
    11: 12,
    12: 48,
    13: 33,
    14: 71,
    15: 59, //
    16: 75, // semester tests
    17: 69,
    18: 79, //
    19: 76, // formal test
    20: 27, // Tasks
    21: 44,
    22: 63,
    23: 19,
    24: 53,
    25: 11,
    26: 68,
    27: 24, //
    28: 77,
    29: 68,
  };
  siteConfig.calcIndex = 5;
  siteConfig.showGraph = false;
} else if (url == cmpg111) {
  siteConfig.results = {
    0: 71,
  };
  siteConfig.calcIndex = 1;
  siteConfig.showGraph = true;
} else if (url == sttn125) {
  siteConfig.results = {
    0: 17, // out of 35
    1: 14, // out of 30
    2: 21, // out of 35
    3: 14, // out of 35
    4: 57,
    5: 47,
  };
  siteConfig.showGraph = true;
} else if (url == sttn115) {
  siteConfig.results = {
    0: 75,
    1: 46,
    2: "-",
    3: 52,
    4: "-",
  };
  siteConfig.showGraph = true;
} else if (url == nphy111) {
  siteConfig.results = {
    0: 67,
  };
  siteConfig.showGraph = true;
}
