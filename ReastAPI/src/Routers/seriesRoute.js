const express = require('express')
const series = require('./../models/series')

const router = express.Router();

router.post('/series', async (request, response) => {
    console.log(`Request body: ${request.body}`)
    const data = new series(request.body)
    const result = await data.save()

    if (!result) {
        response.json({
            status: "Failed",
            message: "series is register failed"
        })
    } else {
        response.json({
            status: "Success",
            message: "series is register successfully",
            data: result
        })
    }
})

module.exports = router;