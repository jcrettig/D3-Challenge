var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, 
// and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function(demoData) {
    console.log(demoData)

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    demoData.forEach((data) =>{
      data.poverty = +data.poverty;     
      data.smokes = +data.smokes;
      console.log(data.poverty)
      console.log(data.smokes)
    });

    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
      .domain([20, d3.max(demoData, d => d.poverty)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(demoData, d => d.smokes)])
      .range([height, 0]);

    // // Step 3: Create axis functions
    // // ==============================
    // var bottomAxis = d3.axisBottom(xLinearScale);
    // var leftAxis = d3.axisLeft(yLinearScale);

    // // Step 4: Append Axes to the chart
    // // ==============================
    // chartGroup.append("g")
    //   .attr("transform", `translate(0, ${height})`)
    //   .call(bottomAxis);

    // chartGroup.append("g")
    //   .call(leftAxis);

    // // Step 5: Create Circles
    // // ==============================
    // var circlesGroup = chartGroup.selectAll("circle")
    // .data(hairData)
    // .enter()
    // .append("circle")
    // .attr("cx", d => xLinearScale(d.hair_length))
    // .attr("cy", d => yLinearScale(d.num_hits))
    // .attr("r", "15")
    // .attr("fill", "pink")
    // .attr("opacity", "1.0");                 // opacity range is 0 to 1

    // // Step 6: Initialize tool tip
    // // ==============================
    // var toolTip = d3.tip()
    //   .attr("class", "tooltip")     //style
    //   .offset([80, -60])            //placement
    //   .html(function(d) {           //structure/content
    //     return (`${d.rockband}<br>Hair length: ${d.hair_length}<br>Hits: ${d.num_hits}`);
    //   });

    // // Step 7: Create tooltip in the chart
    // // ==============================
    // chartGroup.call(toolTip);

    // // Step 8: Create event listeners to display and hide the tooltip
    // // ==============================
    // circlesGroup.on("click", function(data) {    // could also be mouseover
    //   toolTip.show(data, this);
    // })
    //   // onmouseout event
    //   .on("mouseout", function(data, index) {
    //     toolTip.hide(data);
    //   });

    // // Create axes labels
    // chartGroup.append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 0 - margin.left + 40)
    //   .attr("x", 0 - (height / 2))
    //   .attr("dy", "1em")
    //   .attr("class", "axisText")
    //   .text("Number of Billboard 100 Hits");

    // chartGroup.append("text")
    //   .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    //   .attr("class", "axisText")
    //   .text("Hair Metal Band Hair Length (inches)");


})

  .catch(function(error) {
    console.log(error);
  });

