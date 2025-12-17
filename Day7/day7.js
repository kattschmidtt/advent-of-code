"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const filePath = 'input.txt';
const content = fs.readFileSync(filePath, 'utf-8');
const manifold = content.split(/\r?\n/); //called manifold because thats what it says in the problem
function day7() {
    const start = manifold[0].indexOf("S");
    let splitCount = 0; //number of splits that happen when a ^ is hit
    let activeBeams = new Set([start]); //apparently have to use a set instead of an array because MeMoRY
    //scanning line by line starting after the first one. since S is given as the starting point and always the top line
    for (let i = 1; i < manifold.length; i++) {
        const line = manifold[i];
        const next = new Set();
        for (const column of activeBeams) {
            const idx = line[column]; //current item we are looking at
            if (idx === "^") {
                splitCount++;
                //add 2 beams
                next.add(column - 1);
                next.add(column + 1);
            }
            else {
                next.add(column);
            }
        }
        activeBeams = next;
    }
    return splitCount;
}
console.log(day7());
