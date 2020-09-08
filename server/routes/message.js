const express = require("express");
const pool = require("../../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await pool.query("SELECT * FROM messages");
  res.json(messages.rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const message = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  res.json(message.rows);
});

router.post("/", (req, res) => {
  const { alias, text } = req.body;
  pool.query("INSERT INTO messages(alias, text) VALUES ($1, $2)", [
    alias,
    text,
  ]);
  res.redirect("/api/messages");
});

module.exports = router;
