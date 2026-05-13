#!/usr/bin/env node
// cPanel CommonJS wrapper for ES modules
import('./server.js').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
