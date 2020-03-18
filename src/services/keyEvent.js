export function focusPrevNext(e, prevField, nextField) {
    if (e.shiftKey && e.keyCode === 13) {
        focusField(prevField);
    } else if (e.ctrlKey && e.keyCode === 13) {
        focusField('cash');
    }
    else if (e.keyCode === 13) {
        focusField(nextField);
    }
}
function focusField(field) {
    document.querySelector(`#${field}`).focus();
}























var fieldArray = ['barcode', 'salesStaf', 'article', 'size', 'quantity'];

export function focusNext(e) {
    var index = fieldArray.indexOf(e.target.id);
    if (e.shiftKey && e.keyCode === 13) {
        var newIndex = index - 1;
        if (newIndex < 0) {
            newIndex = 0
        }
        doFocus(newIndex);
    } else if (e.ctrlKey && e.keyCode === 13) {
        document.querySelector(`#cash`).focus();
    } else if (e.keyCode === 13) {
        newIndex = index + 1;
        if (newIndex >= fieldArray.length) {
            newIndex = fieldArray.length - 1;
        }
        doFocus(newIndex);
    }
}

function doFocus(index) {
    document.querySelector(`#${fieldArray[index]}`).focus();
}