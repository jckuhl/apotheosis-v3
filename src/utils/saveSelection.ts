// modified with gratitude from https://stackoverflow.com/questions/5605401/insert-link-in-contenteditable-element

const doc = document as any;

export function saveSelection() {
    if (window.getSelection) {
        const sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            const ranges = [];
            for (let i = 0; i < sel.rangeCount; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (doc.selection && doc.selection.createRange) {
        return doc.selection.createRange();
    }
    return null;
}

export function restoreSelection(savedSel: any) {
    if (window.getSelection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        savedSel.forEach((range: Range) => sel.addRange(range));
    } else if (doc.selection && savedSel.select) {
        savedSel.select();
    }
}
