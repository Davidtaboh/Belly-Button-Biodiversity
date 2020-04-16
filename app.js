// Function for plotting
function doingPlot(id) {

  // Reading in file

  d3.json("https://gist.githubusercontent.com/Davidtaboh/36c4123907c6bac75f440e6a44946212/raw/7a6854ca9443ccf1e3f4a0efc3703a269c079455/Samples.json").
  then(function (data) {
    console.log(data);
  });

  

  //       for (let i = 0; i < data.samples.length; i++) {

//           let sample_values = data.samples[i].sample_values;
//           let otu_ids = data.samples[i].otu_ids;

//           console.log(sample_values)
//           console.log(otu_ids)
//           var trace1 = {
//             x: sample_values,
//             y: otu_ids,
//             orientation: "h",
//             type: "bar"
//           }
//            //var data = [trace1];

//            console.log(trace1)

//            // we need to sort and splice data
         
//            var sortedData = data.sort((a, b) => b.sample_values - a.sample_values)
//            console.log(sortedData)

//           // Apply the group bar mode to the layout
//           var layout = {
//             title: "Greek gods search results",
//             margin: {
//               l: 100,
//               r: 100,
//               t: 100,
//               b: 100
//             }
//           };

//           console.log(layout)

//           // // Render the plot to the div tag with id "plot"
//            Plotly.newPlot("plot", [trace1], layout);
//           // // break;


        
//       }

//     };

//   };

// });

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// Use sample_values as the values for the bar chart.

// Use otu_ids as the labels for the bar chart.


// Use otu_labels as the hovertext for the chart.

// Unsure of how to sort data

// Data is "names", "metadata", "samples"


// JQuery code i cant use

// for (let i = 0; i < data.names.length; i++) {


//   $('#selDataset').append(`<option value=${data.names[i]}>${data.names[i]} </option>`);
// }

// $('#selDataset').on('change', function () {

//   let user_pick = $(this).val();
//   // this isn't fltering data
//   console.log(user_pick)