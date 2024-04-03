function expect(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(expected) {
            if (val === expected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// Example usage:
try {
    expect(5).toBe(5); // No error because 5 === 5
    console.log("Test 1 passed");
} catch (error) {
    console.log("Test 1 failed: " + error.message);
}

try {
    expect(5).notToBe(6); // No error because 5 !== 6
    console.log("Test 2 passed");
} catch (error) {
    console.log("Test 2 failed: " + error.message);
}
