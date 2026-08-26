-- team_id is nullable: most of GoalHub's ~786 teams (allTeams in script.js)
-- don't carry a TheSportsDB id at all — only fixtures do. team_name is the
-- real unique key here (UNIQUE per user), matching how the client-side
-- favorites already work; team_id is stored when we happen to have it.
CREATE TABLE IF NOT EXISTS favorites_teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  team_id TEXT,
  team_name TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  UNIQUE(user_id, team_name)
);

CREATE INDEX IF NOT EXISTS idx_favorites_teams_user_id ON favorites_teams(user_id);
