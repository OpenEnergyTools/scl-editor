export const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
//# sourceMappingURL=debounce.js.map