function isValidationResult(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid !== undefined &&
        msg.loaded === undefined);
}
function isValidationError(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded === undefined);
}
function isLoadSchemaResult(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded !== undefined);
}

export { isLoadSchemaResult, isValidationError, isValidationResult };
//# sourceMappingURL=utils.js.map
