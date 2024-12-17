// google-analytics.jsx
const analyticsService = {
  initialized: false,
  queue: [],
  consentSettings: {},

  initialize: async function (initialConsent) {
    this.consentSettings = initialConsent;

    // Process any queued events once initialized
    if (this.queue.length > 0) {
      this.queue.forEach((event) => this.processEvent(event));
      this.queue = [];
    }

    this.initialized = true;
  },

  processEvent: function (event) {
    if (!this.consentSettings[event.category]) {
      return; // Skip if consent not given for this category
    }

    if (typeof gtag === "function") {
      gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        non_interaction: event.nonInteraction || false,
        transport_type: "beacon",
      });
    }
  },

  trackEvent: function (category, action, label, value = null) {
    const event = { category, action, label, value };

    if (!this.initialized) {
      this.queue.push(event);
      return;
    }

    this.processEvent(event);
  },

  trackPageView: function (path, title) {
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: path,
        page_title: title,
        transport_type: "beacon",
      });
    }
  },
};

export default analyticsService;
