"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
var dataflow_1 = require("./dataflow");
/**
 * We don't know what a calculate node depends on so we should never move it beyond anything that produces fields.
 */
var CalculateNode = /** @class */ (function (_super) {
    __extends(CalculateNode, _super);
    function CalculateNode(transform) {
        var _this = _super.call(this) || this;
        _this.transform = transform;
        return _this;
    }
    CalculateNode.prototype.clone = function () {
        return new CalculateNode(util_1.duplicate(this.transform));
    };
    CalculateNode.prototype.producedFields = function () {
        var out = {};
        out[this.transform.as] = true;
        return out;
    };
    CalculateNode.prototype.assemble = function () {
        return {
            type: 'formula',
            expr: this.transform.calculate,
            as: this.transform.as
        };
    };
    return CalculateNode;
}(dataflow_1.DataFlowNode));
exports.CalculateNode = CalculateNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBpbGUvZGF0YS9jYWxjdWxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXFDO0FBRXJDLHVDQUF3QztBQUV4Qzs7R0FFRztBQUNIO0lBQW1DLGlDQUFZO0lBSzdDLHVCQUFvQixTQUE2QjtRQUFqRCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsZUFBUyxHQUFULFNBQVMsQ0FBb0I7O0lBRWpELENBQUM7SUFOTSw2QkFBSyxHQUFaO1FBQ0UsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLGdCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQU1NLHNDQUFjLEdBQXJCO1FBQ0UsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUztZQUM5QixFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdEJELENBQW1DLHVCQUFZLEdBc0I5QztBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FsY3VsYXRlVHJhbnNmb3JtfSBmcm9tICcuLi8uLi90cmFuc2Zvcm0nO1xuaW1wb3J0IHtkdXBsaWNhdGV9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHtWZ0Zvcm11bGFUcmFuc2Zvcm19IGZyb20gJy4uLy4uL3ZlZ2Euc2NoZW1hJztcbmltcG9ydCB7RGF0YUZsb3dOb2RlfSBmcm9tICcuL2RhdGFmbG93JztcblxuLyoqXG4gKiBXZSBkb24ndCBrbm93IHdoYXQgYSBjYWxjdWxhdGUgbm9kZSBkZXBlbmRzIG9uIHNvIHdlIHNob3VsZCBuZXZlciBtb3ZlIGl0IGJleW9uZCBhbnl0aGluZyB0aGF0IHByb2R1Y2VzIGZpZWxkcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENhbGN1bGF0ZU5vZGUgZXh0ZW5kcyBEYXRhRmxvd05vZGUge1xuICBwdWJsaWMgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBDYWxjdWxhdGVOb2RlKGR1cGxpY2F0ZSh0aGlzLnRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2Zvcm06IENhbGN1bGF0ZVRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcHJvZHVjZWRGaWVsZHMoKSB7XG4gICAgY29uc3Qgb3V0ID0ge307XG4gICAgb3V0W3RoaXMudHJhbnNmb3JtLmFzXSA9IHRydWU7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHB1YmxpYyBhc3NlbWJsZSgpOiBWZ0Zvcm11bGFUcmFuc2Zvcm0ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZm9ybXVsYScsXG4gICAgICBleHByOiB0aGlzLnRyYW5zZm9ybS5jYWxjdWxhdGUsXG4gICAgICBhczogdGhpcy50cmFuc2Zvcm0uYXNcbiAgICB9O1xuICB9XG59XG4iXX0=