import { Router, Request, Response } from 'express';
import { getDb } from '../db';

const router = Router();

// Get all progress, optionally filtered by module and/or theme
router.get('/', (req: Request, res: Response) => {
  const { module, theme } = req.query;
  const db = getDb();
  let query = 'SELECT * FROM progress WHERE 1=1';
  const params: any[] = [];
  if (module) { query += ' AND module = ?'; params.push(module); }
  if (theme) { query += ' AND theme = ?'; params.push(theme); }
  const rows = db.prepare(query).all(...params);
  res.json(rows);
});

// Get summary stats per module
router.get('/summary', (_req: Request, res: Response) => {
  const db = getDb();
  const rows = db.prepare(`
    SELECT module,
      COUNT(*) as total,
      SUM(CASE WHEN status = 'known' THEN 1 ELSE 0 END) as known,
      SUM(CASE WHEN status = 'seen' THEN 1 ELSE 0 END) as seen
    FROM progress GROUP BY module
  `).all();
  res.json(rows);
});

// Upsert progress for a specific item
router.post('/', (req: Request, res: Response) => {
  const { module, theme, item_id, status, score } = req.body;
  if (!module || !theme || !item_id) {
    return res.status(400).json({ error: 'module, theme, and item_id are required' });
  }
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO progress (module, theme, item_id, status, score, attempts, last_seen, updated_at)
    VALUES (?, ?, ?, ?, ?, 1, datetime('now'), datetime('now'))
    ON CONFLICT(module, theme, item_id) DO UPDATE SET
      status = excluded.status,
      score = COALESCE(excluded.score, score),
      attempts = attempts + 1,
      last_seen = datetime('now'),
      updated_at = datetime('now')
  `);
  stmt.run(module, theme, item_id, status || 'seen', score || 0);
  res.json({ success: true });
});

export default router;
