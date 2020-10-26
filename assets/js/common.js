var monthObj={
    1:"January",
    2:"February",
    3:"March",
    4:"May",
    5:"April",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December",
}

// Month redender
function MonthCellRenderer() {
}


MonthCellRenderer.prototype.init = function(params) {
    this.eGui = document.createElement('span');
    var text = monthObj[params.value];
    this.eGui.innerHTML = text;
};

MonthCellRenderer.prototype.getGui = function() {
    return this.eGui;
};
