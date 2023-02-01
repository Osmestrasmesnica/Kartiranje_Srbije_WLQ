// Set the size of each grid line
const gridSize = 12.4;

// Select the group element for the grid lines
const gridLines = d3.select('svg');

// Create the grid lines
for (let x = 0; x < 900; x += gridSize) {
    gridLines.append('rect')
        .attr('x', x)
        .attr('y', 0)
        .attr('width', 1)
        .attr('height', 900)
        .attr('fill', 'rgb(230, 230, 230)');
}

for (let y = 0; y < 900; y += gridSize) {
    gridLines.append('rect')
        .attr('x', 0)
        .attr('y', y)
        .attr('width', 900)
        .attr('height', 1)
        .attr('fill', 'rgb(230, 230, 230)');
}

// Set the size of each grid line
const gridSize2 = 124;

// Select the group element for the grid lines
const gridLines2 = d3.select('svg');

// Create the grid lines
for (let x = 0; x < 750; x += gridSize2) {
    gridLines2.append('rect')
        .attr('x', x)
        .attr('y', 0)
        .attr('width', 1)
        .attr('height', 750)
        .attr('fill', 'red');
}

for (let y = 0; y < 750; y += gridSize2) {
    gridLines2.append('rect')
        .attr('x', 0)
        .attr('y', y)
        .attr('width', 750)
        .attr('height', 1)
        .attr('fill', 'red');
}

