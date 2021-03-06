$(function(){
    $('#equate').click(function(e){
        $("#tableID").css("display", "none");
        $('#equationID').css("display", "block");
    })
})

$(function(){
    $('#plot_btn').click(function(e){
        var times = [];
        var distances = [];
        var n = 0;
        $("table td").each(function(){
            if (n > 4) {
                textval = $(this).find(":text").val();
                distances.push(textval);
            } else {
                textval = $(this).find(":text").val();
                times.push(textval);
            }
            n++;
        })
        if($('#equate').is(':checked')) {
            console.log("Equation radio checked");
        } else {
            var graph = new Chart($('#time-distance-chart'), {
                type: 'line',
                data: {
                    labels: times,
                    datasets: [{
                        label: "Time-Distance",
                        data: distances,
                        fill: false,
                        borderColor: '#07C',
                    }]
                }
            });
            graph.draw();
        }
    })
})