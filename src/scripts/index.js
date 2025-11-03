import '@pixu-talks/core';
import { setupNeuralyzer } from './_neuralyzer.js';
import { setupAgentBReveal } from './_agent-b-reveal.js';

// Initialize enhancements
document.addEventListener('DOMContentLoaded', () => {
  setupNeuralyzer();
  setupAgentBReveal();
});
