-- fixture_id is TheSportsDB's numeric event id (GoalHub's main fixture
-- pipeline, not the API-Football-sourced Live Now widget — those fixtures
-- aren't stable/browsable enough to predict against).
-- points is NULL until resolved (the match has finished and been scored).
-- kickoff_at is a unix timestamp, used server-side to reject predictions
-- submitted after kickoff without needing an extra API call per submission.
CREATE TABLE IF NOT EXISTS predictions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  fixture_id TEXT NOT NULL,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  kickoff_at INTEGER NOT NULL,
  predicted_home INTEGER NOT NULL,
  predicted_away INTEGER NOT NULL,
  points INTEGER,
  resolved INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  UNIQUE(user_id, fixture_id)
);

CREATE INDEX IF NOT EXISTS idx_predictions_user_id ON predictions(user_id);
CREATE INDEX IF NOT EXISTS idx_predictions_resolved ON predictions(resolved, kickoff_at);
