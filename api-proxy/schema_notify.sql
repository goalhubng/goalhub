-- Which live fixtures a signed-in user has toggled goal notifications on for
-- (in-tab Notification API, not true push — see toggleNotifyMe in script.js).
-- fixture_id is API-Football's id, matching the Live Now widget it's toggled
-- from.
CREATE TABLE IF NOT EXISTS notify_preferences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  fixture_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  UNIQUE(user_id, fixture_id)
);

CREATE INDEX IF NOT EXISTS idx_notify_preferences_user_id ON notify_preferences(user_id);
