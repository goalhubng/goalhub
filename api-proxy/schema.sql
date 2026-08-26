-- GoalHub auth schema.
--
-- users: one row per account, keyed by email (no passwords — magic-link only).
-- magic_links: single-use, short-lived tokens issued by /api/auth/send-magic-link
--   and redeemed by /api/auth/verify. Not one of the two tables the brief named,
--   but a real magic-link flow needs somewhere to hold the token between "sent"
--   and "clicked" — this is that.
-- user_sessions: one row per issued JWT (its jti). Lets a session be revoked
--   server-side even though the JWT itself is stateless/self-verifying — plain
--   JWTs can't be revoked on their own, this table is what makes that possible.

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS magic_links (
  token TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  used INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS user_sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  revoked INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_magic_links_email ON magic_links(email);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
