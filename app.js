

// Reading in file

d3.json("https://gist.githubusercontent.com/Davidtaboh/36c4123907c6bac75f440e6a44946212/raw/7a6854ca9443ccf1e3f4a0efc3703a269c079455/Samples.json").
  then(function (data) {
    // Function for plotting
for (let i = 0; i < data.names.length; i++) {


  $('#selDataset').append(`<option value=${data.names[i]}>${data.names[i]} </option>`);
}
    var inputField = d3.select("#selDataset");
    inputField.on("change", function () {
      var user_pick_value = d3.event.target.value;
      $('#sample-metadata').empty();

      const result = data.samples.filter(user => user.id == user_pick_value);
      const metadata = data.metadata.filter(user => user.id == user_pick_value);
      $('#sample-metadata').append(`<p> id: ${metadata[0].id} </p>`);
      $('#sample-metadata').append(`<p> ethnicity: ${metadata[0].ethnicity} </p>`);
      $('#sample-metadata').append(`<p> gender: ${metadata[0].gender} </p>`);
      $('#sample-metadata').append(`<p> age: ${metadata[0].age} </p>`);
      $('#sample-metadata').append(`<p> location: ${metadata[0].location} </p>`);
      $('#sample-metadata').append(`<p> bbtype: ${metadata[0].bbtype} </p>`);
      $('#sample-metadata').append(`<p> wfreq: ${metadata[0].wfreq} </p>`);

      console.log(metadata);

      let sample_values = result[0].sample_values.slice(0, 10).reverse();
      let otu_ids = result[0].otu_ids.slice(0, 10).reverse();
      let otu_labels = result[0].otu_labels.slice(0, 10).reverse();
      console.log(sample_values)
      console.log(otu_ids)
      console.log(otu_labels)

      var trace1 = {
        x: sample_values,
        y: otu_ids.map(otu => `OTU ${otu}`),
        orientation: "h",
        type: "bar"
      }

      var layout = {
        title: "Bacteria Thing",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }

      // // Render the plot to the div tag with id "plot"
      Plotly.newPlot("plot", [trace1], layout);


      var trace2 = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
          size: sample_values
        }
      };
      
     
      
      var layout2 = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot('bubble', [trace2], layout2);
    });
   

    console.log(data)


  });


