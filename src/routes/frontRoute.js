const router = require('express').Router();
const insfectionStatusController = require('../controller/api/insfectionStatusController');
const regionalStatusController = require('../controller/api/regionalStatusController');
const areaController = require('../controller/areaController');
const vaccineController = require('../controller/vaccineController');
const stepByDistanceController = require('../controller/stepByDistanceController');


router.get("/insfection-status", insfectionStatusController);
router.get("/regional-status", regionalStatusController);

router.get("/areas", areaController.selectList);
router.get("/areas/:areaSqno", areaController.selectOne);
router.post("/areas", areaController.createOne);
router.put("/areas/:areaSqno", areaController.updateOne);
router.patch("/areas/:areaSqno", areaController.patchUse);
router.delete("/areas/:areaSqno", areaController.deleteOne);

router.get("/sbds", stepByDistanceController.selectList);
router.get("/sbds/:stepCode", stepByDistanceController.selectOne);
router.post("/sbds", stepByDistanceController.createOne);
router.put("/sbds/:stepCode", stepByDistanceController.updateOne);
router.patch("/sbds/:stepCode", stepByDistanceController.patchUse);
router.delete("/sbds/:stepCode", stepByDistanceController.deleteOne);

router.get("/vaccines", vaccineController.selectList);
router.get("/vaccines/:vaccineSqno", vaccineController.selectOne);
router.post("/vaccines", vaccineController.createOne);
router.put("/vaccines/:vaccineSqno", vaccineController.updateOne);
router.patch("/vaccines/:vaccineSqno", vaccineController.patchUse);
router.delete("/vaccines/:vaccineSqno", vaccineController.deleteOne);

module.exports = router;