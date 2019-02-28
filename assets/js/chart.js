let ctx = document.getElementById('myChart');

let chart = new Chart(ctx, {
    type: 'radar',
    data: {
        datasets: [{
            label: 'SKILLS',
            data: [9, 8, 6, 5, 5],
            borderWidth: 5,
            backgroundColor: 'rgba(3, 3, 3, 0.5)',
            borderColor: 'rgba(255,99,132,1)',
        }],
        labels: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'WordPress']
    },
    options: {
        scale: {
            ticks: {
                suggestedMin: 1,
                suggestedMax: 10,
            }
        }
    }
});