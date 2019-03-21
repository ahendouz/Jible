const express = require("express");
const router = express.Router();

const requireAuth = require("../../services/requireAuth");
const {
  requistSekhra,
  addSekhra,
  mySekhras,
  sekhraTodo
} = require("../../controllers/sekhra");

// POST => PRIVATE <=  - api/sekhra/request_sekhra -  Requist a sekhra.
router.post("/request_sekhra", requireAuth, requistSekhra);

// POST => PRIVATE <=  - api/sekhra/add_sekhra -  add a sekhra.
router.post("/add_sekhra", requireAuth, addSekhra);

// GET => PRIVATE <=  - api/sekhra/my_sekhras -  get cunsumer's sekhras.
router.get("/my_sekhras", requireAuth, mySekhras);

// GET => PRIVATE <=  - api/sekhra/my_sekhras -  get rider's sekhras todo.
router.get("/sekhras_todo", requireAuth, sekhraTodo);

module.exports = router;
