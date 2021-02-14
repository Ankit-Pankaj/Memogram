

const express = require('express')
const memeCtrl = require('../conrollers/memeCtrl')
const router = express.Router()
// --------------------------------------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Meme:
 *       type: object
 *       required:
 *         - name
 *         - url
 *         - caption
 *         - likes
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the meme
 *         name:
 *           type: string
 *           description: The name of the uploader
 *         caption:
 *           type: string
 *           description: The caption of the meme
 *         url:
 *           type: string
 *           description: The url of the meme
 *         likes:
 *           type: number
 *           minimum: 0
 *           exclusiveMinimum: true
 *           maximum: 10000
 *           default: 0
 *           description: No of likes received on meme
 *       example:
 *         id: d5fE_asz
 *         name: Aki
 *         caption: Some cool caption
 *         url: https://someImageURL
 *         likes: 12
 */

 /**
 * @swagger
 * components:
 *   schemas:
 *     MemePost:
 *       type: object
 *       required:
 *         - name
 *         - url
 *         - caption
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the uploader
 *         caption:
 *           type: string
 *           description: The caption of the meme
 *         url:
 *           type: string
 *           description: The url of the meme
 *       example:
 *         name: Aki
 *         caption: Some cool caption
 *         url: https://someImageURL
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MemePatch:
 *       type: object
 *       required:
 *         - url
 *         - caption
 *       properties:
 *         caption:
 *           type: string
 *           description: The caption of the meme
 *         url:
 *           type: string
 *           description: The url of the meme
 *       example:
 *         caption: Some new cool caption
 *         url: https://someImageURL
 */
 
/**
 * @swagger
 * /memes:
 *   get:
 *     summary: Returns the list of all the memes
 *     tags: [Memes]
 *     responses:
 *       200:
 *         description: The list of the memes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meme'
 */
router.get('/', memeCtrl.getMemes)

// ------------------------------------------------------------------------------
/**
 * @swagger
 * /memes/{id}:
 *   get:
 *     summary: Returns the meme by id
 *     tags: [Memes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The meme id
 *     responses:
 *       200:
 *         description: The meme description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meme'
 *       404:
 *         description: The Meme was not found
 */ 

router.get("/:id",memeCtrl.getSingleMeme)

// ----------------------------------------------------

/**
 * @swagger
 * /memes:
 *   post:
 *     summary: Create a new Meme
 *     tags: [Memes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MemePost'
 *     responses:
 *       200:
 *         description: The Meme was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meme'
 *       500:
 *         description: Some server error
 *       400:
 *         description: bad Request
 */

router.post('/', memeCtrl.createMeme)

// ----------------------------------------------------------

/**
 * @swagger
 * /memes/{id}:
 *  patch:
 *    summary: Updates the Meme by the id
 *    tags: [Memes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Meme id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MemePatch'
 *    responses:
 *      200:
 *        description: The Like was increased
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Meme'
 *      500:
 *        description: Some error happened
 *      404:
 *        description: Meme not found
 */
router.patch("/:id",memeCtrl.updateMeme)
// ---------------------------------------------------------
/**
 * @swagger
 * /memes/{id}:
 *  put:
 *    summary: Update the likes by the id
 *    tags: [Memes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Meme id
 *    responses:
 *      200:
 *        description: The Like was increased
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Meme'
 *      500:
 *        description: Some error happened
 *      404:
 *        description: Meme not found
 */

router.put('/:id',memeCtrl.likeMeme)
// ------------------------------------------------------

module.exports = router


