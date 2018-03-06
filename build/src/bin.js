"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vega_util_1 = require("vega-util");
var channel_1 = require("./channel");
var util_1 = require("./util");
function binToString(bin) {
    if (vega_util_1.isBoolean(bin)) {
        return 'bin';
    }
    return 'bin' + util_1.keys(bin).map(function (p) { return util_1.varName("_" + p + "_" + bin[p]); }).join('');
}
exports.binToString = binToString;
function autoMaxBins(channel) {
    switch (channel) {
        case channel_1.ROW:
        case channel_1.COLUMN:
        case channel_1.SIZE:
        case channel_1.COLOR:
        case channel_1.OPACITY:
        // Facets and Size shouldn't have too many bins
        // We choose 6 like shape to simplify the rule
        case channel_1.SHAPE:
            return 6; // Vega's "shape" has 6 distinct values
        default:
            return 10;
    }
}
exports.autoMaxBins = autoMaxBins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUNwQyxxQ0FBNEU7QUFDNUUsK0JBQXFDO0FBNkRyQyxxQkFBNEIsR0FBd0I7SUFDbEQsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxjQUFPLENBQUMsTUFBSSxDQUFDLFNBQUksR0FBRyxDQUFDLENBQUMsQ0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUxELGtDQUtDO0FBRUQscUJBQTRCLE9BQWdCO0lBQzFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEIsS0FBSyxhQUFHLENBQUM7UUFDVCxLQUFLLGdCQUFNLENBQUM7UUFDWixLQUFLLGNBQUksQ0FBQztRQUNWLEtBQUssZUFBSyxDQUFDO1FBQ1gsS0FBSyxpQkFBTyxDQUFDO1FBQ1gsK0NBQStDO1FBQy9DLDhDQUE4QztRQUNoRCxLQUFLLGVBQUs7WUFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQ25EO1lBQ0UsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBZEQsa0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQm9vbGVhbn0gZnJvbSAndmVnYS11dGlsJztcbmltcG9ydCB7Q2hhbm5lbCwgQ09MT1IsIENPTFVNTiwgT1BBQ0lUWSwgUk9XLCBTSEFQRSwgU0laRX0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7a2V5cywgdmFyTmFtZX0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VCaW4ge1xuICAvKipcbiAgICogVGhlIG51bWJlciBiYXNlIHRvIHVzZSBmb3IgYXV0b21hdGljIGJpbiBkZXRlcm1pbmF0aW9uIChkZWZhdWx0IGlzIGJhc2UgMTApLlxuICAgKlxuICAgKiBfX0RlZmF1bHQgdmFsdWU6X18gYDEwYFxuICAgKlxuICAgKi9cbiAgYmFzZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuIGV4YWN0IHN0ZXAgc2l6ZSB0byB1c2UgYmV0d2VlbiBiaW5zLlxuICAgKlxuICAgKiBfX05vdGU6X18gSWYgcHJvdmlkZWQsIG9wdGlvbnMgc3VjaCBhcyBtYXhiaW5zIHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIHN0ZXA/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBhbGxvd2FibGUgc3RlcCBzaXplcyB0byBjaG9vc2UgZnJvbS5cbiAgICogQG1pbkl0ZW1zIDFcbiAgICovXG4gIHN0ZXBzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiBBIG1pbmltdW0gYWxsb3dhYmxlIHN0ZXAgc2l6ZSAocGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgaW50ZWdlciB2YWx1ZXMpLlxuICAgKi9cbiAgbWluc3RlcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNjYWxlIGZhY3RvcnMgaW5kaWNhdGluZyBhbGxvd2FibGUgc3ViZGl2aXNpb25zLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBbNSwgMl0sIHdoaWNoIGluZGljYXRlcyB0aGF0IGZvciBiYXNlIDEwIG51bWJlcnMgKHRoZSBkZWZhdWx0IGJhc2UpLCB0aGUgbWV0aG9kIG1heSBjb25zaWRlciBkaXZpZGluZyBiaW4gc2l6ZXMgYnkgNSBhbmQvb3IgMi4gRm9yIGV4YW1wbGUsIGZvciBhbiBpbml0aWFsIHN0ZXAgc2l6ZSBvZiAxMCwgdGhlIG1ldGhvZCBjYW4gY2hlY2sgaWYgYmluIHNpemVzIG9mIDIgKD0gMTAvNSksIDUgKD0gMTAvMiksIG9yIDEgKD0gMTAvKDUqMikpIG1pZ2h0IGFsc28gc2F0aXNmeSB0aGUgZ2l2ZW4gY29uc3RyYWludHMuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBgWzUsIDJdYFxuICAgKlxuICAgKiBAbWluSXRlbXMgMVxuICAgKi9cbiAgZGl2aWRlPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBiaW5zLlxuICAgKlxuICAgKiBfX0RlZmF1bHQgdmFsdWU6X18gYDZgIGZvciBgcm93YCwgYGNvbHVtbmAgYW5kIGBzaGFwZWAgY2hhbm5lbHM7IGAxMGAgZm9yIG90aGVyIGNoYW5uZWxzXG4gICAqXG4gICAqIEBtaW5pbXVtIDJcbiAgICovXG4gIG1heGJpbnM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiB0cnVlICh0aGUgZGVmYXVsdCksIGF0dGVtcHRzIHRvIG1ha2UgdGhlIGJpbiBib3VuZGFyaWVzIHVzZSBodW1hbi1mcmllbmRseSBib3VuZGFyaWVzLCBzdWNoIGFzIG11bHRpcGxlcyBvZiB0ZW4uXG4gICAqL1xuICBuaWNlPzogYm9vbGVhbjtcbn1cblxuXG4vKipcbiAqIEJpbm5pbmcgcHJvcGVydGllcyBvciBib29sZWFuIGZsYWcgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdG8gYmluIGRhdGEgb3Igbm90LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJpblBhcmFtcyBleHRlbmRzIEJhc2VCaW4ge1xuICAvKipcbiAgICogQSB0d28tZWxlbWVudCAoYFttaW4sIG1heF1gKSBhcnJheSBpbmRpY2F0aW5nIHRoZSByYW5nZSBvZiBkZXNpcmVkIGJpbiB2YWx1ZXMuXG4gICAqIEBtaW5JdGVtcyAyXG4gICAqIEBtYXhJdGVtcyAyXG4gICAqL1xuICBleHRlbnQ/OiBudW1iZXJbXTsgIC8vIFZnQmluVHJhbnNmb3JtIHVzZXMgYSBkaWZmZXJlbnQgZXh0ZW50IHNvIHdlIG5lZWQgdG8gcHVsbCB0aGlzIG91dC5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpblRvU3RyaW5nKGJpbjogQmluUGFyYW1zIHwgYm9vbGVhbikge1xuICBpZiAoaXNCb29sZWFuKGJpbikpIHtcbiAgICByZXR1cm4gJ2Jpbic7XG4gIH1cbiAgcmV0dXJuICdiaW4nICsga2V5cyhiaW4pLm1hcChwID0+IHZhck5hbWUoYF8ke3B9XyR7YmluW3BdfWApKS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9NYXhCaW5zKGNoYW5uZWw6IENoYW5uZWwpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNoYW5uZWwpIHtcbiAgICBjYXNlIFJPVzpcbiAgICBjYXNlIENPTFVNTjpcbiAgICBjYXNlIFNJWkU6XG4gICAgY2FzZSBDT0xPUjpcbiAgICBjYXNlIE9QQUNJVFk6XG4gICAgICAvLyBGYWNldHMgYW5kIFNpemUgc2hvdWxkbid0IGhhdmUgdG9vIG1hbnkgYmluc1xuICAgICAgLy8gV2UgY2hvb3NlIDYgbGlrZSBzaGFwZSB0byBzaW1wbGlmeSB0aGUgcnVsZVxuICAgIGNhc2UgU0hBUEU6XG4gICAgICByZXR1cm4gNjsgLy8gVmVnYSdzIFwic2hhcGVcIiBoYXMgNiBkaXN0aW5jdCB2YWx1ZXNcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDEwO1xuICB9XG59XG4iXX0=