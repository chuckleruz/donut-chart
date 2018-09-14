function createChart(id, type, options) {
    var data = {
        labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
        datasets: [
            {
                data: [500, 100, 400],
                backgroundColor: [
                    '#00a65a',
                    '#f39c12',
                    '#f56954'
                ]
            }
        ]
    };
    new Chart(document.getElementById(id), {
        type: type,
        data: data,
        options: options
    });
}

['doughnut'].forEach(function (type) {

    createChart(type + '-canvas2', type, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        plugins: {
            labels: {
                render: 'percentage',
                fontColor: '#000',
                fontStyle: 'bold',
                fontSize: 13,
                precision: 2
            },
        }
    });
});