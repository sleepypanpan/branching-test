var makeCalculator = function () {
    var totalValue = 0

    return {
        add: function(num) {
            totalValue = totalValue + num
        }
    }
}