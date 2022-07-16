
const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        datasets: [{
            label: 'Thông tin tháng này ', // Name the series
            data: [5000000, 1150000, 2424000, 7040000, 7141000, 4111000, 4544000, 3544000, 7000000, 1544000, 4544000, 6544000], // Specify the data values array
            fill: false,
            borderColor: '#0b7a55', 
            backgroundColor: [
                'rgba(245, 213, 39, 0.8)',
              ],
              borderColor: [
                'rgba(245, 213, 39, 0.8)',
              ],
        },
        {
            label: 'Thông tin tháng trước ', // Name the series
            data: [900000, 2040000, 1424000, 3040000, 2141000, 8111000, 2544000, 8544000, 3000000, 7544000, 2544000, 8544000], // Specify the data values array
            fill: false,
            borderColor: '#0b7a55', 
            backgroundColor: [
                'rgba(63, 39, 245, 0.8)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
              ],
        }
    ]
        
    },
    options: {
        responsive: true, 
        maintainAspectRatio: false,
    }
});

var ctx = document.getElementById("myChart1");
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        datasets: [{
            label: 'Thông tin ', // Name the series
            data: [500000, 50000, 2424000, 7040000, 7141000, 4111000, 4544000, 3544000, 7000000, 1544000, 4544000, 6544000], // Specify the data values array
            fill: false,
            borderColor: '#0b7a55', 
            backgroundColor: '#0b7a55', 
            borderWidth: 1, 
            tension: 0.01,
            segment: {
                borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
              }
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});


var ctx = document.getElementById("myChart2");
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        datasets: [{
            label: ' đại lý', // Name the series
            data: [500000, 50000, 2424000, 7040000, 7141000, 4111000, 4544000, 3544000, 7000000, 1544000, 4544000, 6544000], // Specify the data values array
            fill: false,
            borderColor: '#0b7a55', 
            backgroundColor: '#0b7a55', 
            borderWidth: 1, 
            tension: 0.01,
            segment: {
                borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
              }
        }]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});



