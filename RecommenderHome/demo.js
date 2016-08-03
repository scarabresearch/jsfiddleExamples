// Set language. Must match catalog field suffix, eg. c_category_fr
// ScarabQueue.push(['language', 'fr']);
// Ask for 10 HOME recommendations
for (var i = 1; i < 11; i++) {
  ScarabQueue.push(['recommend', {
    logic: 'HOME_' + i, // unique logic
    limit: 8,
    containerId: 'topic' + i, // unique container
    templateId: 'simple-tmpl',
    success: function(SC, render) {
      if (SC.topicLocalized) {
        // Demo store categories always start at Root Catalog>,
        // so let's just cut it for a nicer topic title.
        SC.title = SC.topicLocalized.replace(/Root Catalog>/g, '');
        render(SC);
      }
      // Empty topic will be displayed empty
    }
  }]);
}
// Send the request only once
ScarabQueue.push(['go']);
