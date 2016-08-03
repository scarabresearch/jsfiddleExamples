// Identifying the visitor so we can match and update the corresponding contact
ScarabQueue.push(['setEmail', 'visitor@test-mail.com']);

// Passing on visitor's cart contents to feed cart abandonment campaigns
ScarabQueue.push(['cart', [
    {item: 'item_1', price: 19.9, quantity: 1},
    {item: 'item_2', price: 29.7, quantity: 3}
]]);

// Firing the ScarabQueue. Should be the last call on the page, called only once.
ScarabQueue.push(['go']);

// You can easily test how this works.
// Just replace the demo Merchant ID with your own.
// Log into your Predict Dashboard, click LIVE EVENTS, and on the event screen select 'my visit' from the dropdown.
// Hit Run in JSFiddle. Refresh Live Events and you should see these event reported with the above values.
