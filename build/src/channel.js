"use strict";
/*
 * Constants and utilities for encoding channels (Visual variables)
 * such as 'x', 'y', 'color'.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Channel;
(function (Channel) {
    // Facet
    Channel.ROW = 'row';
    Channel.COLUMN = 'column';
    // Position
    Channel.X = 'x';
    Channel.Y = 'y';
    Channel.X2 = 'x2';
    Channel.Y2 = 'y2';
    // Mark property with scale
    Channel.COLOR = 'color';
    Channel.SHAPE = 'shape';
    Channel.SIZE = 'size';
    Channel.OPACITY = 'opacity';
    // Non-scale channel
    Channel.TEXT = 'text';
    Channel.ORDER = 'order';
    Channel.DETAIL = 'detail';
    Channel.TOOLTIP = 'tooltip';
    Channel.HREF = 'href';
})(Channel = exports.Channel || (exports.Channel = {}));
exports.X = Channel.X;
exports.Y = Channel.Y;
exports.X2 = Channel.X2;
exports.Y2 = Channel.Y2;
exports.ROW = Channel.ROW;
exports.COLUMN = Channel.COLUMN;
exports.SHAPE = Channel.SHAPE;
exports.SIZE = Channel.SIZE;
exports.COLOR = Channel.COLOR;
exports.TEXT = Channel.TEXT;
exports.DETAIL = Channel.DETAIL;
exports.ORDER = Channel.ORDER;
exports.OPACITY = Channel.OPACITY;
exports.TOOLTIP = Channel.TOOLTIP;
exports.HREF = Channel.HREF;
var UNIT_CHANNEL_INDEX = {
    x: 1,
    y: 1,
    x2: 1,
    y2: 1,
    size: 1,
    shape: 1,
    color: 1,
    order: 1,
    opacity: 1,
    text: 1,
    detail: 1,
    tooltip: 1,
    href: 1,
};
var FACET_CHANNEL_INDEX = {
    row: 1,
    column: 1
};
var CHANNEL_INDEX = __assign({}, UNIT_CHANNEL_INDEX, FACET_CHANNEL_INDEX);
exports.CHANNELS = util_1.flagKeys(CHANNEL_INDEX);
var _o = CHANNEL_INDEX.order, _d = CHANNEL_INDEX.detail, SINGLE_DEF_CHANNEL_INDEX = __rest(CHANNEL_INDEX, ["order", "detail"]);
/**
 * Channels that cannot have an array of channelDef.
 * model.fieldDef, getFieldDef only work for these channels.
 *
 * (The only two channels that can have an array of channelDefs are "detail" and "order".
 * Since there can be multiple fieldDefs for detail and order, getFieldDef/model.fieldDef
 * are not applicable for them.  Similarly, selection projection won't work with "detail" and "order".)
 */
exports.SINGLE_DEF_CHANNELS = util_1.flagKeys(SINGLE_DEF_CHANNEL_INDEX);
function isChannel(str) {
    return !!CHANNEL_INDEX[str];
}
exports.isChannel = isChannel;
// CHANNELS without COLUMN, ROW
exports.UNIT_CHANNELS = util_1.flagKeys(UNIT_CHANNEL_INDEX);
// NONPOSITION_CHANNELS = UNIT_CHANNELS without X, Y, X2, Y2;
var _x = UNIT_CHANNEL_INDEX.x, _y = UNIT_CHANNEL_INDEX.y, 
// x2 and y2 share the same scale as x and y
_x2 = UNIT_CHANNEL_INDEX.x2, _y2 = UNIT_CHANNEL_INDEX.y2, 
// The rest of unit channels then have scale
NONPOSITION_CHANNEL_INDEX = __rest(UNIT_CHANNEL_INDEX, ["x", "y", "x2", "y2"]);
exports.NONPOSITION_CHANNELS = util_1.flagKeys(NONPOSITION_CHANNEL_INDEX);
// POSITION_SCALE_CHANNELS = X and Y;
var POSITION_SCALE_CHANNEL_INDEX = { x: 1, y: 1 };
exports.POSITION_SCALE_CHANNELS = util_1.flagKeys(POSITION_SCALE_CHANNEL_INDEX);
// NON_POSITION_SCALE_CHANNEL = SCALE_CHANNELS without X, Y
var 
// x2 and y2 share the same scale as x and y
// text and tooltip have format instead of scale,
// href has neither format, nor scale
_t = NONPOSITION_CHANNEL_INDEX.text, _tt = NONPOSITION_CHANNEL_INDEX.tooltip, _hr = NONPOSITION_CHANNEL_INDEX.href, 
// detail and order have no scale
_dd = NONPOSITION_CHANNEL_INDEX.detail, _oo = NONPOSITION_CHANNEL_INDEX.order, NONPOSITION_SCALE_CHANNEL_INDEX = __rest(NONPOSITION_CHANNEL_INDEX, ["text", "tooltip", "href", "detail", "order"]);
exports.NONPOSITION_SCALE_CHANNELS = util_1.flagKeys(NONPOSITION_SCALE_CHANNEL_INDEX);
// Declare SCALE_CHANNEL_INDEX
var SCALE_CHANNEL_INDEX = __assign({}, POSITION_SCALE_CHANNEL_INDEX, NONPOSITION_SCALE_CHANNEL_INDEX);
/** List of channels with scales */
exports.SCALE_CHANNELS = util_1.flagKeys(SCALE_CHANNEL_INDEX);
function isScaleChannel(channel) {
    return !!SCALE_CHANNEL_INDEX[channel];
}
exports.isScaleChannel = isScaleChannel;
/**
 * Return whether a channel supports a particular mark type.
 * @param channel  channel name
 * @param mark the mark type
 * @return whether the mark supports the channel
 */
function supportMark(channel, mark) {
    return mark in getSupportedMark(channel);
}
exports.supportMark = supportMark;
/**
 * Return a dictionary showing whether a channel supports mark type.
 * @param channel
 * @return A dictionary mapping mark types to boolean values.
 */
function getSupportedMark(channel) {
    switch (channel) {
        case exports.COLOR:
        case exports.DETAIL:
        case exports.TOOLTIP:
        case exports.HREF:
        case exports.ORDER: // TODO: revise (order might not support rect, which is not stackable?)
        case exports.OPACITY:
        case exports.ROW:
        case exports.COLUMN:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, rect: true, line: true, area: true, text: true, geoshape: true
            };
        case exports.X:
        case exports.Y:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, rect: true, line: true, area: true, text: true
            };
        case exports.X2:
        case exports.Y2:
            return {
                rule: true, bar: true, rect: true, area: true
            };
        case exports.SIZE:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, text: true, line: true
            };
        case exports.SHAPE:
            return { point: true, geoshape: true };
        case exports.TEXT:
            return { text: true };
    }
}
exports.getSupportedMark = getSupportedMark;
function rangeType(channel) {
    switch (channel) {
        case exports.X:
        case exports.Y:
        case exports.SIZE:
        case exports.OPACITY:
        // X2 and Y2 use X and Y scales, so they similarly have continuous range.
        case exports.X2:
        case exports.Y2:
            return 'continuous';
        case exports.ROW:
        case exports.COLUMN:
        case exports.SHAPE:
        // TEXT, TOOLTIP, and HREF have no scale but have discrete output
        case exports.TEXT:
        case exports.TOOLTIP:
        case exports.HREF:
            return 'discrete';
        // Color can be either continuous or discrete, depending on scale type.
        case exports.COLOR:
            return 'flexible';
        // No scale, no range type.
        case exports.DETAIL:
        case exports.ORDER:
            return undefined;
    }
    /* istanbul ignore next: should never reach here. */
    throw new Error('getSupportedRole not implemented for ' + channel);
}
exports.rangeType = rangeType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNSCwrQkFBc0M7QUFFdEMsSUFBaUIsT0FBTyxDQXVCdkI7QUF2QkQsV0FBaUIsT0FBTztJQUN0QixRQUFRO0lBQ0ssV0FBRyxHQUFVLEtBQUssQ0FBQztJQUNuQixjQUFNLEdBQWEsUUFBUSxDQUFDO0lBRXpDLFdBQVc7SUFDRSxTQUFDLEdBQVEsR0FBRyxDQUFDO0lBQ2IsU0FBQyxHQUFRLEdBQUcsQ0FBQztJQUNiLFVBQUUsR0FBUyxJQUFJLENBQUM7SUFDaEIsVUFBRSxHQUFTLElBQUksQ0FBQztJQUU3QiwyQkFBMkI7SUFDZCxhQUFLLEdBQVksT0FBTyxDQUFDO0lBQ3pCLGFBQUssR0FBWSxPQUFPLENBQUM7SUFDekIsWUFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixlQUFPLEdBQWMsU0FBUyxDQUFDO0lBRTVDLG9CQUFvQjtJQUNQLFlBQUksR0FBVyxNQUFNLENBQUM7SUFDdEIsYUFBSyxHQUFZLE9BQU8sQ0FBQztJQUN6QixjQUFNLEdBQWEsUUFBUSxDQUFDO0lBQzVCLGVBQU8sR0FBYyxTQUFTLENBQUM7SUFDL0IsWUFBSSxHQUFXLE1BQU0sQ0FBQztBQUNyQyxDQUFDLEVBdkJnQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUF1QnZCO0FBSVksUUFBQSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNkLFFBQUEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDZCxRQUFBLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ2hCLFFBQUEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDaEIsUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNsQixRQUFBLE1BQU0sR0FBRyxPQUFP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Q3ZFLEtBQUssYUFBSztZQUNSLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFcEIsMkJBQTJCO1FBQzNCLEtBQUssY0FBTSxDQUFDO1FBQ1osS0FBSyxhQUFLO1lBQ1IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQS9CRCw4QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29uc3RhbnRzIGFuZCB1dGlsaXRpZXMgZm9yIGVuY29kaW5nIGNoYW5uZWxzIChWaXN1YWwgdmFyaWFibGVzKVxuICogc3VjaCBhcyAneCcsICd5JywgJ2NvbG9yJy5cbiAqL1xuXG5pbXBvcnQge1JhbmdlVHlwZX0gZnJvbSAnLi9jb21waWxlL3NjYWxlL3R5cGUnO1xuaW1wb3J0IHtFbmNvZGluZ30gZnJvbSAnLi9lbmNvZGluZyc7XG5pbXBvcnQge0ZhY2V0TWFwcGluZ30gZnJvbSAnLi9mYWNldCc7XG5pbXBvcnQge01hcmt9IGZyb20gJy4vbWFyayc7XG5pbXBvcnQge0ZsYWcsIGZsYWdLZXlzfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgbmFtZXNwYWNlIENoYW5uZWwge1xuICAvLyBGYWNldFxuICBleHBvcnQgY29uc3QgUk9XOiAncm93JyA9ICdyb3cnO1xuICBleHBvcnQgY29uc3QgQ09MVU1OOiAnY29sdW1uJyA9ICdjb2x1bW4nO1xuXG4gIC8vIFBvc2l0aW9uXG4gIGV4cG9ydCBjb25zdCBYOiAneCcgPSAneCc7XG4gIGV4cG9ydCBjb25zdCBZOiAneScgPSAneSc7XG4gIGV4cG9ydCBjb25zdCBYMjogJ3gyJyA9ICd4Mic7XG4gIGV4cG9ydCBjb25zdCBZMjogJ3kyJyA9ICd5Mic7XG5cbiAgLy8gTWFyayBwcm9wZXJ0eSB3aXRoIHNjYWxlXG4gIGV4cG9ydCBjb25zdCBDT0xPUjogJ2NvbG9yJyA9ICdjb2xvcic7XG4gIGV4cG9ydCBjb25zdCBTSEFQRTogJ3NoYXBlJyA9ICdzaGFwZSc7XG4gIGV4cG9ydCBjb25zdCBTSVpFOiAnc2l6ZScgPSAnc2l6ZSc7XG4gIGV4cG9ydCBjb25zdCBPUEFDSVRZOiAnb3BhY2l0eScgPSAnb3BhY2l0eSc7XG5cbiAgLy8gTm9uLXNjYWxlIGNoYW5uZWxcbiAgZXhwb3J0IGNvbnN0IFRFWFQ6ICd0ZXh0JyA9ICd0ZXh0JztcbiAgZXhwb3J0IGNvbnN0IE9SREVSOiAnb3JkZXInID0gJ29yZGVyJztcbiAgZXhwb3J0IGNvbnN0IERFVEFJTDogJ2RldGFpbCcgPSAnZGV0YWlsJztcbiAgZXhwb3J0IGNvbnN0IFRPT0xUSVA6ICd0b29sdGlwJyA9ICd0b29sdGlwJztcbiAgZXhwb3J0IGNvbnN0IEhSRUY6ICdocmVmJyA9ICdocmVmJztcbn1cblxuZXhwb3J0IHR5cGUgQ2hhbm5lbCA9IGtleW9mIEVuY29kaW5nPGFueT4gfCBrZXlvZiBGYWNldE1hcHBpbmc8YW55PjtcblxuZXhwb3J0IGNvbnN0IFggPSBDaGFubmVsLlg7XG5leHBvcnQgY29uc3QgWSA9IENoYW5uZWwuWTtcbmV4cG9ydCBjb25zdCBYMiA9IENoYW5uZWwuWDI7XG5leHBvcnQgY29uc3QgWTIgPSBDaGFubmVsLlkyO1xuZXhwb3J0IGNvbnN0IFJPVyA9IENoYW5uZWwuUk9XO1xuZXhwb3J0IGNvbnN0IENPTFVNTiA9IENoYW5uZWwuQ09MVU1OO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gQ2hhbm5lbC5TSEFQRTtcbmV4cG9ydCBjb25zdCBTSVpFID0gQ2hhbm5lbC5TSVpFO1xuZXhwb3J0IGNvbnN0IENPTE9SID0gQ2hhbm5lbC5DT0xPUjtcbmV4cG9ydCBjb25zdCBURVhUID0gQ2hhbm5lbC5URVhUO1xuZXhwb3J0IGNvbnN0IERFVEFJTCA9IENoYW5uZWwuREVUQUlMO1xuZXhwb3J0IGNvbnN0IE9SREVSID0gQ2hhbm5lbC5PUkRFUjtcbmV4cG9ydCBjb25zdCBPUEFDSVRZID0gQ2hhbm5lbC5PUEFDSVRZO1xuZXhwb3J0IGNvbnN0IFRPT0xUSVAgPSBDaGFubmVsLlRPT0xUSVA7XG5leHBvcnQgY29uc3QgSFJFRiA9IENoYW5uZWwuSFJFRjtcblxuY29uc3QgVU5JVF9DSEFOTkVMX0lOREVYOiBGbGFnPGtleW9mIEVuY29kaW5nPGFueT4+ID0ge1xuICB4OiAxLFxuICB5OiAxLFxuICB4MjogMSxcbiAgeTI6IDEsXG4gIHNpemU6IDEsXG4gIHNoYXBlOiAxLFxuICBjb2xvcjogMSxcbiAgb3JkZXI6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRleHQ6IDEsXG4gIGRldGFpbDogMSxcbiAgdG9vbHRpcDogMSxcbiAgaHJlZjogMSxcbn07XG5cbmNvbnN0IEZBQ0VUX0NIQU5ORUxfSU5ERVg6IEZsYWc8a2V5b2YgRmFjZXRNYXBwaW5nPGFueT4+ID0ge1xuICByb3c6IDEsXG4gIGNvbHVtbjogMVxufTtcblxuY29uc3QgQ0hBTk5FTF9JTkRFWCA9IHtcbiAgLi4uVU5JVF9DSEFOTkVMX0lOREVYLFxuICAuLi5GQUNFVF9DSEFOTkVMX0lOREVYXG59O1xuXG5leHBvcnQgY29uc3QgQ0hBTk5FTFMgPSBmbGFnS2V5cyhDSEFOTkVMX0lOREVYKTtcblxuY29uc3Qge29yZGVyOiBfbywgZGV0YWlsOiBfZCwgLi4uU0lOR0xFX0RFRl9DSEFOTkVMX0lOREVYfSA9IENIQU5ORUxfSU5ERVg7XG4vKipcbiAqIENoYW5uZWxzIHRoYXQgY2Fubm90IGhhdmUgYW4gYXJyYXkgb2YgY2hhbm5lbERlZi5cbiAqIG1vZGVsLmZpZWxkRGVmLCBnZXRGaWVsZERlZiBvbmx5IHdvcmsgZm9yIHRoZXNlIGNoYW5uZWxzLlxuICpcbiAqIChUaGUgb25seSB0d28gY2hhbm5lbHMgdGhhdCBjYW4gaGF2ZSBhbiBhcnJheSBvZiBjaGFubmVsRGVmcyBhcmUgXCJkZXRhaWxcIiBhbmQgXCJvcmRlclwiLlxuICogU2luY2UgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGZpZWxkRGVmcyBmb3IgZGV0YWlsIGFuZCBvcmRlciwgZ2V0RmllbGREZWYvbW9kZWwuZmllbGREZWZcbiAqIGFyZSBub3QgYXBwbGljYWJsZSBmb3IgdGhlbS4gIFNpbWlsYXJseSwgc2VsZWN0aW9uIHByb2plY3Rpb24gd29uJ3Qgd29yayB3aXRoIFwiZGV0YWlsXCIgYW5kIFwib3JkZXJcIi4pXG4gKi9cblxuZXhwb3J0IGNvbnN0IFNJTkdMRV9ERUZfQ0hBTk5FTFM6IFNpbmdsZURlZkNoYW5uZWxbXSA9IGZsYWdLZXlzKFNJTkdMRV9ERUZfQ0hBTk5FTF9JTkRFWCk7XG5cbi8vIFVzaW5nIHRoZSBmb2xsb3dpbmcgbGluZSBsZWFkcyB0byBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICdlbGVtZW50VHlwZXMnIG9mIHVuZGVmaW5lZFxuLy8gd2hlbiBydW5uaW5nIHRoZSBzY2hlbWEgZ2VuZXJhdG9yXG4vLyBleHBvcnQgdHlwZSBTaW5nbGVEZWZDaGFubmVsID0gdHlwZW9mIFNJTkdMRV9ERUZfQ0hBTk5FTFNbMF07XG5leHBvcnQgdHlwZSBTaW5nbGVEZWZDaGFubmVsID0gJ3gnIHwgJ3knIHwgJ3gyJyB8ICd5MicgfCAncm93JyB8ICdjb2x1bW4nIHwgJ3NpemUnIHwgJ3NoYXBlJyB8ICdjb2xvcicgfCAnb3BhY2l0eScgfCAndGV4dCcgfCAndG9vbHRpcCcgfCAnaHJlZic7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFubmVsKHN0cjogc3RyaW5nKTogc3RyIGlzIENoYW5uZWwge1xuICByZXR1cm4gISFDSEFOTkVMX0lOREVYW3N0cl07XG59XG5cbi8vIENIQU5ORUxTIHdpdGhvdXQgQ09MVU1OLCBST1dcbmV4cG9ydCBjb25zdCBVTklUX0NIQU5ORUxTID0gZmxhZ0tleXMoVU5JVF9DSEFOTkVMX0lOREVYKTtcblxuXG4vLyBOT05QT1NJVElPTl9DSEFOTkVMUyA9IFVOSVRfQ0hBTk5FTFMgd2l0aG91dCBYLCBZLCBYMiwgWTI7XG5jb25zdCB7XG4gIHg6IF94LCB5OiBfeSxcbiAgLy8geDIgYW5kIHkyIHNoYXJlIHRoZSBzYW1lIHNjYWxlIGFzIHggYW5kIHlcbiAgeDI6IF94MiwgeTI6IF95MixcbiAgLy8gVGhlIHJlc3Qgb2YgdW5pdCBjaGFubmVscyB0aGVuIGhhdmUgc2NhbGVcbiAgLi4uTk9OUE9TSVRJT05fQ0hBTk5FTF9JTkRFWFxufSA9IFVOSVRfQ0hBTk5FTF9JTkRFWDtcblxuZXhwb3J0IGNvbnN0IE5PTlBPU0lUSU9OX0NIQU5ORUxTID0gZmxhZ0tleXMoTk9OUE9TSVRJT05fQ0hBTk5FTF9JTkRFWCk7XG5leHBvcnQgdHlwZSBOb25Qb3NpdGlvbkNoYW5uZWwgPSB0eXBlb2YgTk9OUE9TSVRJT05fQ0hBTk5FTFNbMF07XG5cbi8vIFBPU0lUSU9OX1NDQUxFX0NIQU5ORUxTID0gWCBhbmQgWTtcbmNvbnN0IFBPU0lUSU9OX1NDQUxFX0NIQU5ORUxfSU5ERVg6IHt4OjEsIHk6MX0gPSB7eDoxLCB5OjF9O1xuZXhwb3J0IGNvbnN0IFBPU0lUSU9OX1NDQUxFX0NIQU5ORUxTID0gZmxhZ0tleXMoUE9TSVRJT05fU0NBTEVfQ0hBTk5FTF9JTkRFWCk7XG5leHBvcnQgdHlwZSBQb3NpdGlvblNjYWxlQ2hhbm5lbCA9IHR5cGVvZiBQT1NJVElPTl9TQ0FMRV9DSEFOTkVMU1swXTtcblxuLy8gTk9OX1BPU0lUSU9OX1NDQUxFX0NIQU5ORUwgPSBTQ0FMRV9DSEFOTkVMUyB3aXRob3V0IFgsIFlcbmNvbnN0IHtcbiAgLy8geDIgYW5kIHkyIHNoYXJlIHRoZSBzYW1lIHNjYWxlIGFzIHggYW5kIHlcbiAgLy8gdGV4dCBhbmQgdG9vbHRpcCBoYXZlIGZvcm1hdCBpbnN0ZWFkIG9mIHNjYWxlLFxuICAvLyBocmVmIGhhcyBuZWl0aGVyIGZvcm1hdCwgbm9yIHNjYWxlXG4gIHRleHQ6IF90LCB0b29sdGlwOiBfdHQsIGhyZWY6IF9ocixcbiAgLy8gZGV0YWlsIGFuZCBvcmRlciBoYXZlIG5vIHNjYWxlXG4gIGRldGFpbDogX2RkLCBvcmRlcjogX29vLFxuICAuLi5OT05QT1NJVElPTl9TQ0FMRV9DSEFOTkVMX0lOREVYXG59ID0gTk9OUE9TSVRJT05fQ0hBTk5FTF9JTkRFWDtcbmV4cG9ydCBjb25zdCBOT05QT1NJVElPTl9TQ0FMRV9DSEFOTkVMUyA9IGZsYWdLZXlzKE5PTlBPU0lUSU9OX1NDQUxFX0NIQU5ORUxfSU5ERVgpO1xuZXhwb3J0IHR5cGUgTm9uUG9zaXRpb25TY2FsZUNoYW5uZWwgPSB0eXBlb2YgTk9OUE9TSVRJT05fU0NBTEVfQ0hBTk5FTFNbMF07XG5cbi8vIERlY2xhcmUgU0NBTEVfQ0hBTk5FTF9JTkRFWFxuY29uc3QgU0NBTEVfQ0hBTk5FTF9JTkRFWCA9IHtcbiAgLi4uUE9TSVRJT05fU0NBTEVfQ0hBTk5FTF9JTkRFWCxcbiAgLi4uTk9OUE9TSVRJT05fU0NBTEVfQ0hBTk5FTF9JTkRFWFxufTtcblxuLyoqIExpc3Qgb2YgY2hhbm5lbHMgd2l0aCBzY2FsZXMgKi9cbmV4cG9ydCBjb25zdCBTQ0FMRV9DSEFOTkVMUyA9IGZsYWdLZXlzKFNDQUxFX0NIQU5ORUxfSU5ERVgpO1xuZXhwb3J0IHR5cGUgU2NhbGVDaGFubmVsID0gdHlwZW9mIFNDQUxFX0NIQU5ORUxTWzBdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2FsZUNoYW5uZWwoY2hhbm5lbDogQ2hhbm5lbCk6IGNoYW5uZWwgaXMgU2NhbGVDaGFubmVsIHtcbiAgcmV0dXJuICEhU0NBTEVfQ0hBTk5FTF9JTkRFWFtjaGFubmVsXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdXBwb3J0ZWRNYXJrIHtcbiAgcG9pbnQ/OiBib29sZWFuO1xuICB0aWNrPzogYm9vbGVhbjtcbiAgcnVsZT86IGJvb2xlYW47XG4gIGNpcmNsZT86IGJvb2xlYW47XG4gIHNxdWFyZT86IGJvb2xlYW47XG4gIGJhcj86IGJvb2xlYW47XG4gIHJlY3Q/OiBib29sZWFuO1xuICBsaW5lPzogYm9vbGVhbjtcbiAgZ2Vvc2hhcGU/OiBib29sZWFuO1xuICBhcmVhPzogYm9vbGVhbjtcbiAgdGV4dD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgYSBjaGFubmVsIHN1cHBvcnRzIGEgcGFydGljdWxhciBtYXJrIHR5cGUuXG4gKiBAcGFyYW0gY2hhbm5lbCAgY2hhbm5lbCBuYW1lXG4gKiBAcGFyYW0gbWFyayB0aGUgbWFyayB0eXBlXG4gKiBAcmV0dXJuIHdoZXRoZXIgdGhlIG1hcmsgc3VwcG9ydHMgdGhlIGNoYW5uZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRNYXJrKGNoYW5uZWw6IENoYW5uZWwsIG1hcms6IE1hcmspIHtcbiAgcmV0dXJuIG1hcmsgaW4gZ2V0U3VwcG9ydGVkTWFyayhjaGFubmVsKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBkaWN0aW9uYXJ5IHNob3dpbmcgd2hldGhlciBhIGNoYW5uZWwgc3VwcG9ydHMgbWFyayB0eXBlLlxuICogQHBhcmFtIGNoYW5uZWxcbiAqIEByZXR1cm4gQSBkaWN0aW9uYXJ5IG1hcHBpbmcgbWFyayB0eXBlcyB0byBib29sZWFuIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN1cHBvcnRlZE1hcmsoY2hhbm5lbDogQ2hhbm5lbCk6IFN1cHBvcnRlZE1hcmsge1xuICBzd2l0Y2ggKGNoYW5uZWwpIHtcbiAgICBjYXNlIENPTE9SOlxuICAgIGNhc2UgREVUQUlMOlxuICAgIGNhc2UgVE9PTFRJUDpcbiAgICBjYXNlIEhSRUY6XG4gICAgY2FzZSBPUkRFUjogICAgLy8gVE9ETzogcmV2aXNlIChvcmRlciBtaWdodCBub3Qgc3VwcG9ydCByZWN0LCB3aGljaCBpcyBub3Qgc3RhY2thYmxlPylcbiAgICBjYXNlIE9QQUNJVFk6XG4gICAgY2FzZSBST1c6XG4gICAgY2FzZSBDT0xVTU46XG4gICAgICByZXR1cm4geyAvLyBhbGwgbWFya3NcbiAgICAgICAgcG9pbnQ6IHRydWUsIHRpY2s6IHRydWUsIHJ1bGU6IHRydWUsIGNpcmNsZTogdHJ1ZSwgc3F1YXJlOiB0cnVlLFxuICAgICAgICBiYXI6IHRydWUsIHJlY3Q6IHRydWUsIGxpbmU6IHRydWUsIGFyZWE6IHRydWUsIHRleHQ6IHRydWUsIGdlb3NoYXBlOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgWDpcbiAgICBjYXNlIFk6XG4gICAgICByZXR1cm4geyAvLyBhbGwgbWFya3MgZXhjZXB0IGdlb3NoYXBlLiBnZW9zaGFwZSBkb2VzIG5vdCB1c2UgWCwgWSAtLSBpdCB1c2VzIGEgcHJvamVjdGlvblxuICAgICAgICBwb2ludDogdHJ1ZSwgdGljazogdHJ1ZSwgcnVsZTogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWUsXG4gICAgICAgIGJhcjogdHJ1ZSwgcmVjdDogdHJ1ZSwgbGluZTogdHJ1ZSwgYXJlYTogdHJ1ZSwgdGV4dDogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIFgyOlxuICAgIGNhc2UgWTI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBydWxlOiB0cnVlLCBiYXI6IHRydWUsIHJlY3Q6IHRydWUsIGFyZWE6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBTSVpFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnQ6IHRydWUsIHRpY2s6IHRydWUsIHJ1bGU6IHRydWUsIGNpcmNsZTogdHJ1ZSwgc3F1YXJlOiB0cnVlLFxuICAgICAgICBiYXI6IHRydWUsIHRleHQ6IHRydWUsIGxpbmU6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBTSEFQRTpcbiAgICAgIHJldHVybiB7cG9pbnQ6IHRydWUsIGdlb3NoYXBlOiB0cnVlfTtcbiAgICBjYXNlIFRFWFQ6XG4gICAgICByZXR1cm4ge3RleHQ6IHRydWV9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZVR5cGUoY2hhbm5lbDogQ2hhbm5lbCk6IFJhbmdlVHlwZSB7XG4gIHN3aXRjaCAoY2hhbm5lbCkge1xuICAgIGNhc2UgWDpcbiAgICBjYXNlIFk6XG4gICAgY2FzZSBTSVpFOlxuICAgIGNhc2UgT1BBQ0lUWTpcbiAgICAvLyBYMiBhbmQgWTIgdXNlIFggYW5kIFkgc2NhbGVzLCBzbyB0aGV5IHNpbWlsYXJseSBoYXZlIGNvbnRpbnVvdXMgcmFuZ2UuXG4gICAgY2FzZSBYMjpcbiAgICBjYXNlIFkyOlxuICAgICAgcmV0dXJuICdjb250aW51b3VzJztcblxuICAgIGNhc2UgUk9XOlxuICAgIGNhc2UgQ09MVU1OOlxuICAgIGNhc2UgU0hBUEU6XG4gICAgLy8gVEVYVCwgVE9PTFRJUCwgYW5kIEhSRUYgaGF2ZSBubyBzY2FsZSBidXQgaGF2ZSBkaXNjcmV0ZSBvdXRwdXRcbiAgICBjYXNlIFRFWFQ6XG4gICAgY2FzZSBUT09MVElQOlxuICAgIGNhc2UgSFJFRjpcbiAgICAgIHJldHVybiAnZGlzY3JldGUnO1xuXG4gICAgLy8gQ29sb3IgY2FuIGJlIGVpdGhlciBjb250aW51b3VzIG9yIGRpc2NyZXRlLCBkZXBlbmRpbmcgb24gc2NhbGUgdHlwZS5cbiAgICBjYXNlIENPTE9SOlxuICAgICAgcmV0dXJuICdmbGV4aWJsZSc7XG5cbiAgICAvLyBObyBzY2FsZSwgbm8gcmFuZ2UgdHlwZS5cbiAgICBjYXNlIERFVEFJTDpcbiAgICBjYXNlIE9SREVSOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2hvdWxkIG5ldmVyIHJlYWNoIGhlcmUuICovXG4gIHRocm93IG5ldyBFcnJvcignZ2V0U3VwcG9ydGVkUm9sZSBub3QgaW1wbGVtZW50ZWQgZm9yICcgKyBjaGFubmVsKTtcbn1cbiJdfQ==