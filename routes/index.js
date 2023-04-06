const express = require("express")
const AppController = require("../controllers/AppController")
const UsersController = require("../controllers/UsersController")
const AuthController = require("../controllers/AuthController")
const FilesController = require("../controllers/FilesController")

const router = express.Router()

router.get("/connect", AuthController.getConnect)
router.get("/disconnect", AuthController.getDisconnect)
router.post("/files", FilesController.postUpload)
router.get("/files/:id", FilesController.getShow)
router.get("/files/:id/data", FilesController.getFile)
router.get("/files", FilesController.getIndex)
router.put("/files/:id/unpublish", FilesController.putUnpublish)
router.put("/files/:id/publish", FilesController.putPublish)
router.get("/stats", AppController.getStats)
router.get("/status", AppController.getStatus)
router.post("/users", UsersController.postNew)
router.get("/users/me", UsersController.getMe)

module.exports = router
