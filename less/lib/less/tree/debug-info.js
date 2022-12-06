"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asComment(ctx) {
    return "/* line " + ctx.debugInfo.lineNumber + ", " + ctx.debugInfo.fileName + " */\n";
}
function asMediaQuery(ctx) {
    var filenameWithProtocol = ctx.debugInfo.fileName;
    if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
        filenameWithProtocol = "file://" + filenameWithProtocol;
    }
    return "@media -sass-debug-info{filename{font-family:" + filenameWithProtocol.replace(/([.:\/\\])/g, function (a) {
        if (a == '\\') {
            a = '\/';
        }
        return "\\" + a;
    }) + "}line{font-family:\\00003" + ctx.debugInfo.lineNumber + "}}\n";
}
function debugInfo(context, ctx, lineSeparator) {
    var result = '';
    if (context.dumpLineNumbers && !context.compress) {
        switch (context.dumpLineNumbers) {
            case 'comments':
                result = asComment(ctx);
                break;
            case 'mediaquery':
                result = asMediaQuery(ctx);
                break;
            case 'all':
                result = asComment(ctx) + (lineSeparator || '') + asMediaQuery(ctx);
                break;
        }
    }
    return result;
}
exports.default = debugInfo;
//# sourceMappingURL=debug-info.js.map