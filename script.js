d3.csv("eqData.csv").then(data => {
    const alaskaData = data.filter(d => d.place.includes("Alaska"));
  
    const depth = alaskaData.map(d => parseFloat(d.depth));
    const mag = alaskaData.map(d => parseFloat(d.mag));
  
    const trace = {
      x: depth,
      y: mag,
      mode: 'markers',
      type: 'scatter',
      marker: {
        color: 'rgb(25, 150, 218)',
        size: 8
      }
    };
  
    const layout = {
      title: 'Depth vs Magnitude in Alaska',
      xaxis: {
        title: 'Depth',
        zeroline: false
      },
      yaxis: {
        title: 'Magnitude',
        zeroline: false
      }
    };
  
    Plotly.newPlot('scatterplot', [trace], layout);
  }).catch(error => {
    console.error("Error loading data:", error);
  });
  