// Type definitions for ag-grid v3.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export default class ColumnKeyCreator {
    private existingKeys;
    getUniqueKey(colId: string, colField: string): string;
}
