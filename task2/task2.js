function deepCopy(obj, visited = new WeakMap()) {

    if (visited.has(obj)) {
        return visited.get(obj);
    }
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof Map) {
        const newMap = new Map();
        obj.forEach((value, key) => {
            newMap.set(key, deepCopy(value, visited));
        });
        return newMap;
    }
    if (obj instanceof Set) {
        const newSet = new Set();
        obj.forEach(value => {
            newSet.add(deepCopy(value, visited));
        });
        return newSet;
    }
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const newObj = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    visited.set(obj, newObj);
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = deepCopy(obj[key], visited);
        }
    }
    return newObj;
}

// Проверки
const obj1 = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4
    }
};
const obj2 = deepCopy(obj1);
obj2.c.d = 5;
console.log(obj1);
console.log(obj2);

const originalObj = {
    a: 1,
    t: "string",
    b: {
        c: 2,
        d: [3, 4]
    },
    e: new Date(),
    f: new Map([[1, 'one'], [2, 'two']]),
    g: new Set([1, 2, 3]),
    h() { console.log('Hello!'); },
    symbol1: Symbol('symbol1'),
};

const copiedObj = deepCopy(originalObj);
console.log(originalObj);
console.log(copiedObj);

const objA = { name: 'A' };
const objB = { name: 'B', ref: objA };
objA.ref = objB;
const copiedObjA = deepCopy(objA);
console.log(objA);
console.log(copiedObjA);










