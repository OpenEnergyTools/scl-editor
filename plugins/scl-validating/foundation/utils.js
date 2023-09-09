export function isValidationResult(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid !== undefined &&
        msg.loaded === undefined);
}
export function isValidationError(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded === undefined);
}
export function isLoadSchemaResult(msg) {
    return (typeof msg !== 'string' &&
        msg.file !== undefined &&
        msg.valid === undefined &&
        msg.loaded !== undefined);
}
//# sourceMappingURL=utils.js.map