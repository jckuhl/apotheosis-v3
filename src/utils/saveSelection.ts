export function saveSelection(): Selection | Range[] | null {
    if (window.getSelection) {
        const selection = window.getSelection();
        if (selection.getRangeAt && selection.rangeCount) {
            const ranges = [] as Range[];
            for (let i = 0; i < selection.rangeCount; i++) {
                ranges.push(selection.getRangeAt(i));
            }
            return ranges;
        }
    }
    return null;
}

export function restoreSelection(selection: Selection | Range[]) {
    
}