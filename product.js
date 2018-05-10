function plus(input) {
    var value = parseInt($("#input-sm" + input).val());
    $("#input-sm" + input).val(value + 1);
}

function minus(input) {
    var value = parseInt($("#input-sm" + input).val());
    if (value > 1) {
        $("#input-sm" + input).val(value - 1);
    }
}

