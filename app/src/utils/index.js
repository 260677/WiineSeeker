import Logger from './Logger.js'

const logger = new Logger

function showFeedback(error) {
    logger.error(error)

    alert(error.message)
}

export {
    logger,
    Logger,
    showFeedback
}