const express = require("express");
const router = express.Router();
const designerController = require("../controllers/designerController");

/**
 * @swagger
 * tags:
 *   name: Designers
 *   description: API endpoints for managing designers
 */

/**
 * @swagger
 * /designers:
 *   post:
 *     summary: Create a new designer
 *     tags: [Designers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               specialization:
 *                 type: string
 *               experience:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Designer created successfully
 *       400:
 *         description: Bad request
 */
router.post("/designers", designerController.createDesigner);

/**
 * @swagger
 * /designers:
 *   get:
 *     summary: Get all designers
 *     tags: [Designers]
 *     responses:
 *       200:
 *         description: List of all designers
 */
router.get("/designers", designerController.getAllDesigners);

/**
 * @swagger
 * /designers/{id}:
 *   get:
 *     summary: Get a designer by ID
 *     tags: [Designers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Designer details retrieved successfully
 *       404:
 *         description: Designer not found
 */
router.get("/designers/:id", designerController.getDesignerById);

/**
 * @swagger
 * /designers/{id}:
 *   put:
 *     summary: Update a designer by ID
 *     tags: [Designers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               specialization:
 *                 type: string
 *               experience:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Designer updated successfully
 *       404:
 *         description: Designer not found
 */
router.put("/designers/:id", designerController.updateDesigner);

/**
 * @swagger
 * /designers/{id}:
 *   delete:
 *     summary: Delete a designer by ID
 *     tags: [Designers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Designer deleted successfully
 *       404:
 *         description: Designer not found
 */
router.delete("/designers/:id", designerController.deleteDesigner);

module.exports = router;
