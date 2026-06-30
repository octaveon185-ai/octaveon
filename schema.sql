-- Octave On — waitlist storage (Cloudflare D1)
-- Apply:  wrangler d1 execute octaveon-waitlist --file=./schema.sql --remote
CREATE TABLE IF NOT EXISTS waitlist (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  email      TEXT NOT NULL,
  whatsapp   TEXT,
  lang       TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist (created_at);
