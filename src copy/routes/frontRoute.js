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
router.post("/areas", areaController.insertOne);
router.put("/areas/:areaSqno", areaController.updateOne);
router.patch("/areas/:areaSqno", areaController.patchUse);
router.delete("/areas/:areaSqno", areaController.deleteOne);

router.get("/sbds", stepByDistanceController.selectList);
// router.get("/sbds/:stepCode", stepByDistanceController);
// router.post("/sbds", stepByDistanceController);
// router.put("/sbds/:stepCode", stepByDistanceController);
// router.patch("/sbds/:stepCode/use", stepByDistanceController);
// router.delete("/sbds/:stepCode", stepByDistanceController);

// router.get("/vaccines", vaccineController);
// router.get("/vaccines/:vaccines", vaccineController);
// router.post("/vaccines", vaccineController);
// router.put("/vaccines/:vaccines", vaccineController);
// router.patch("/vaccines/:vaccines/use", vaccineController);
// router.delete("/vaccines/:vaccines", vaccineController);

module.exports = router;