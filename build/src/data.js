"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUrlData(data) {
    return !!data['url'];
}
exports.isUrlData = isUrlData;
function isInlineData(data) {
    return !!data['values'];
}
exports.isInlineData = isInlineData;
function isNamedData(data) {
    return !!data['name'];
}
exports.isNamedData = isNamedData;
exports.MAIN = 'main';
exports.RAW = 'raw';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBNEdBLG1CQUEwQixJQUFxQztJQUM3RCxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxzQkFBNkIsSUFBcUM7SUFDaEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUZELG9DQUVDO0FBRUQscUJBQTRCLElBQW1CO0lBQzdDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFGRCxrQ0FFQztBQUlZLFFBQUEsSUFBSSxHQUFXLE1BQU0sQ0FBQztBQUN0QixRQUFBLEdBQUcsR0FBVSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZnRGF0YX0gZnJvbSAnLi92ZWdhLnNjaGVtYSc7XG4vKlxuICogQ29uc3RhbnRzIGFuZCB1dGlsaXRpZXMgZm9yIGRhdGEuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhRm9ybWF0QmFzZSB7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gYXV0byAodGhlIGRlZmF1bHQpLCBwZXJmb3JtIGF1dG9tYXRpYyB0eXBlIGluZmVyZW5jZSB0byBkZXRlcm1pbmUgdGhlIGRlc2lyZWQgZGF0YSB0eXBlcy5cbiAgICogQWx0ZXJuYXRpdmVseSwgYSBwYXJzaW5nIGRpcmVjdGl2ZSBvYmplY3QgY2FuIGJlIHByb3ZpZGVkIGZvciBleHBsaWNpdCBkYXRhIHR5cGVzLiBFYWNoIHByb3BlcnR5IG9mIHRoZSBvYmplY3QgY29ycmVzcG9uZHMgdG8gYSBmaWVsZCBuYW1lLCBhbmQgdGhlIHZhbHVlIHRvIHRoZSBkZXNpcmVkIGRhdGEgdHlwZSAob25lIG9mIGBcIm51bWJlclwiYCwgYFwiYm9vbGVhblwiYCBvciBgXCJkYXRlXCJgKS5cbiAgICogRm9yIGV4YW1wbGUsIGBcInBhcnNlXCI6IHtcIm1vZGlmaWVkX29uXCI6IFwiZGF0ZVwifWAgcGFyc2VzIHRoZSBgbW9kaWZpZWRfb25gIGZpZWxkIGluIGVhY2ggaW5wdXQgcmVjb3JkIGEgRGF0ZSB2YWx1ZS5cbiAgICpcbiAgICogRm9yIGBcImRhdGVcImAsIHdlIHBhcnNlIGRhdGEgYmFzZWQgdXNpbmcgSmF2YXNjcmlwdCdzIFtgRGF0ZS5wYXJzZSgpYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS9wYXJzZSkuXG4gICAqIEZvciBTcGVjaWZpYyBkYXRlIGZvcm1hdHMgY2FuIGJlIHByb3ZpZGVkIChlLmcuLCBge2ZvbzogJ2RhdGU6XCIlbSVkJVlcIid9YCksIHVzaW5nIHRoZSBbZDMtdGltZS1mb3JtYXQgc3ludGF4XShodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtdGltZS1mb3JtYXQjbG9jYWxlX2Zvcm1hdCkuIFVUQyBkYXRlIGZvcm1hdCBwYXJzaW5nIGlzIHN1cHBvcnRlZCBzaW1pbGFybHkgKGUuZy4sIGB7Zm9vOiAndXRjOlwiJW0lZCVZXCInfWApLiBTZWUgbW9yZSBhYm91dCBbVVRDIHRpbWVdKHRpbWV1bml0Lmh0bWwjdXRjKVxuICAgKi9cbiAgcGFyc2U/OiAnYXV0bycgfCBvYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3N2RGF0YUZvcm1hdCBleHRlbmRzIERhdGFGb3JtYXRCYXNlIHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgaW5wdXQgZGF0YTogYFwianNvblwiYCwgYFwiY3N2XCJgLCBgXCJ0c3ZcImAuXG4gICAqIFRoZSBkZWZhdWx0IGZvcm1hdCB0eXBlIGlzIGRldGVybWluZWQgYnkgdGhlIGV4dGVuc2lvbiBvZiB0aGUgZmlsZSBVUkwuXG4gICAqIElmIG5vIGV4dGVuc2lvbiBpcyBkZXRlY3RlZCwgYFwianNvblwiYCB3aWxsIGJlIHVzZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHR5cGU/OiAnY3N2JyB8ICd0c3YnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpzb25EYXRhRm9ybWF0IGV4dGVuZHMgRGF0YUZvcm1hdEJhc2Uge1xuICAvKipcbiAgICogVHlwZSBvZiBpbnB1dCBkYXRhOiBgXCJqc29uXCJgLCBgXCJjc3ZcImAsIGBcInRzdlwiYC5cbiAgICogVGhlIGRlZmF1bHQgZm9ybWF0IHR5cGUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgZXh0ZW5zaW9uIG9mIHRoZSBmaWxlIFVSTC5cbiAgICogSWYgbm8gZXh0ZW5zaW9uIGlzIGRldGVjdGVkLCBgXCJqc29uXCJgIHdpbGwgYmUgdXNlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgdHlwZT86ICdqc29uJztcbiAgLyoqXG4gICAqIFRoZSBKU09OIHByb3BlcnR5IGNvbnRhaW5pbmcgdGhlIGRlc2lyZWQgZGF0YS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgd2hlbiB0aGUgbG9hZGVkIEpTT04gZmlsZSBtYXkgaGF2ZSBzdXJyb3VuZGluZyBzdHJ1Y3R1cmUgb3IgbWV0YS1kYXRhLlxuICAgKiBGb3IgZXhhbXBsZSBgXCJwcm9wZXJ0eVwiOiBcInZhbHVlcy5mZWF0dXJlc1wiYCBpcyBlcXVpdmFsZW50IHRvIHJldHJpZXZpbmcgYGpzb24udmFsdWVzLmZlYXR1cmVzYFxuICAgKiBmcm9tIHRoZSBsb2FkZWQgSlNPTiBvYmplY3QuXG4gICAqL1xuICBwcm9wZXJ0eT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb3BvRGF0YUZvcm1hdCBleHRlbmRzIERhdGFGb3JtYXRCYXNlIHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgaW5wdXQgZGF0YTogYFwianNvblwiYCwgYFwiY3N2XCJgLCBgXCJ0c3ZcImAuXG4gICAqIFRoZSBkZWZhdWx0IGZvcm1hdCB0eXBlIGlzIGRldGVybWluZWQgYnkgdGhlIGV4dGVuc2lvbiBvZiB0aGUgZmlsZSBVUkwuXG4gICAqIElmIG5vIGV4dGVuc2lvbiBpcyBkZXRlY3RlZCwgYFwianNvblwiYCB3aWxsIGJlIHVzZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHR5cGU/OiAndG9wb2pzb24nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFRvcG9KU09OIG9iamVjdCBzZXQgdG8gY29udmVydCB0byBhIEdlb0pTT04gZmVhdHVyZSBjb2xsZWN0aW9uLlxuICAgKiBGb3IgZXhhbXBsZSwgaW4gYSBtYXAgb2YgdGhlIHdvcmxkLCB0aGVyZSBtYXkgYmUgYW4gb2JqZWN0IHNldCBuYW1lZCBgXCJjb3VudHJpZXNcImAuXG4gICAqIFVzaW5nIHRoZSBmZWF0dXJlIHByb3BlcnR5LCB3ZSBjYW4gZXh0cmFjdCB0aGlzIHNldCBhbmQgZ2VuZXJhdGUgYSBHZW9KU09OIGZlYXR1cmUgb2JqZWN0IGZvciBlYWNoIGNvdW50cnkuXG4gICAqL1xuICBmZWF0dXJlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFRvcG9KU09OIG9iamVjdCBzZXQgdG8gY29udmVydCB0byBtZXNoLlxuICAgKiBTaW1pbGFyIHRvIHRoZSBgZmVhdHVyZWAgb3B0aW9uLCBgbWVzaGAgZXh0cmFjdHMgYSBuYW1lZCBUb3BvSlNPTiBvYmplY3Qgc2V0LlxuICAgKiAgVW5saWtlIHRoZSBgZmVhdHVyZWAgb3B0aW9uLCB0aGUgY29ycmVzcG9uZGluZyBnZW8gZGF0YSBpcyByZXR1cm5lZCBhcyBhIHNpbmdsZSwgdW5pZmllZCBtZXNoIGluc3RhbmNlLCBub3QgYXMgaW5kaXZpZHVhbCBHZW9KU09OIGZlYXR1cmVzLlxuICAgKiBFeHRyYWN0aW5nIGEgbWVzaCBpcyB1c2VmdWwgZm9yIG1vcmUgZWZmaWNpZW50bHkgZHJhd2luZyBib3JkZXJzIG9yIG90aGVyIGdlb2dyYXBoaWMgZWxlbWVudHMgdGhhdCB5b3UgZG8gbm90IG5lZWQgdG8gYXNzb2NpYXRlIHdpdGggc3BlY2lmaWMgcmVnaW9ucyBzdWNoIGFzIGluZGl2aWR1YWwgY291bnRyaWVzLCBzdGF0ZXMgb3IgY291bnRpZXMuXG4gICAqL1xuICBtZXNoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBEYXRhRm9ybWF0ID0gQ3N2RGF0YUZvcm1hdCB8IEpzb25EYXRhRm9ybWF0IHwgVG9wb0RhdGFGb3JtYXQ7XG5cbmV4cG9ydCB0eXBlIERhdGFGb3JtYXRUeXBlID0gJ2pzb24nIHwgJ2NzdicgfCAndHN2JyB8ICd0b3BvanNvbic7XG5cbmV4cG9ydCB0eXBlIERhdGEgPSBVcmxEYXRhIHwgSW5saW5lRGF0YSB8IE5hbWVkRGF0YTtcblxuZXhwb3J0IHR5cGUgSW5saW5lRGF0YXNldCA9IG51bWJlcltdIHwgc3RyaW5nW10gfCBib29sZWFuW10gfCBvYmplY3RbXSB8IHN0cmluZyB8IG9iamVjdDtcblxuZXhwb3J0IGludGVyZmFjZSBVcmxEYXRhIHtcbiAgLyoqXG4gICAqIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyB0aGUgZm9ybWF0IGZvciBwYXJzaW5nIHRoZSBkYXRhIGZpbGUuXG4gICAqL1xuICBmb3JtYXQ/OiBEYXRhRm9ybWF0O1xuXG4gIC8qKlxuICAgKiBBbiBVUkwgZnJvbSB3aGljaCB0byBsb2FkIHRoZSBkYXRhIHNldC4gVXNlIHRoZSBgZm9ybWF0LnR5cGVgIHByb3BlcnR5XG4gICAqIHRvIGVuc3VyZSB0aGUgbG9hZGVkIGRhdGEgaXMgY29ycmVjdGx5IHBhcnNlZC5cbiAgICovXG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElubGluZURhdGEge1xuICAvKipcbiAgICogQW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIHRoZSBmb3JtYXQgZm9yIHBhcnNpbmcgdGhlIGRhdGEgdmFsdWVzLlxuICAgKi9cbiAgZm9ybWF0PzogRGF0YUZvcm1hdDtcbiAgLyoqXG4gICAqIFRoZSBmdWxsIGRhdGEgc2V0LCBpbmNsdWRlZCBpbmxpbmUuIFRoaXMgY2FuIGJlIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgcHJpbWl0aXZlIHZhbHVlcyBvciBhIHN0cmluZy5cbiAgICogQXJyYXlzIG9mIHByaW1pdGl2ZSB2YWx1ZXMgYXJlIGluZ2VzdGVkIGFzIG9iamVjdHMgd2l0aCBhIGBkYXRhYCBwcm9wZXJ0eS4gU3RyaW5ncyBhcmUgcGFyc2VkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCB0eXBlLlxuICAgKi9cbiAgdmFsdWVzOiBJbmxpbmVEYXRhc2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVkRGF0YSB7XG4gIC8qKlxuICAgKiBBbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgdGhlIGZvcm1hdCBmb3IgcGFyc2luZyB0aGUgZGF0YS5cbiAgICovXG4gIGZvcm1hdD86IERhdGFGb3JtYXQ7XG4gIC8qKlxuICAgKiBQcm92aWRlIGEgcGxhY2Vob2xkZXIgbmFtZSBhbmQgYmluZCBkYXRhIGF0IHJ1bnRpbWUuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VybERhdGEoZGF0YTogUGFydGlhbDxEYXRhPiB8IFBhcnRpYWw8VmdEYXRhPik6IGRhdGEgaXMgVXJsRGF0YSB7XG4gIHJldHVybiAhIWRhdGFbJ3VybCddO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbmxpbmVEYXRhKGRhdGE6IFBhcnRpYWw8RGF0YT4gfCBQYXJ0aWFsPFZnRGF0YT4pOiBkYXRhIGlzIElubGluZURhdGEge1xuICByZXR1cm4gISFkYXRhWyd2YWx1ZXMnXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZWREYXRhKGRhdGE6IFBhcnRpYWw8RGF0YT4pOiBkYXRhIGlzIE5hbWVkRGF0YSB7XG4gIHJldHVybiAhIWRhdGFbJ25hbWUnXTtcbn1cblxuZXhwb3J0IHR5cGUgRGF0YVNvdXJjZVR5cGUgPSAncmF3JyB8ICdtYWluJyB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnbG9va3VwJztcblxuZXhwb3J0IGNvbnN0IE1BSU46ICdtYWluJyA9ICdtYWluJztcbmV4cG9ydCBjb25zdCBSQVc6ICdyYXcnID0gJ3Jhdyc7XG4iXX0=