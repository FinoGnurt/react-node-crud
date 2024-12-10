const { create, get, put, destroy, getOne } = require("../controllers/user");
const router = require("express").Router();

router.post("/create", create);
router.get("/get", get);
router.put("/put/:id", put);
router.delete("/destroy/:id", destroy);
router.get("/get_one/:id", getOne);

module.exports = router;
