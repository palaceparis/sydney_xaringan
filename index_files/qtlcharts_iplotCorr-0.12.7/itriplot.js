"use strict";

// Generated by CoffeeScript 2.5.1
// itriplot: interactive plot of trinomial probabilities
// Karl W Broman
var itriplot;

itriplot = function itriplot(widgetdiv, data, chartOpts) {
  var boxcolor, boxwidth, chartdivid, gridcolor, gridlines, gridwidth, height, labelpos, labels, margin, mychart, pointcolor, pointsize, pointstroke, rectcolor, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, tipclass, title, titlepos, widgetdivid, width; // chartOpts start

  width = (ref = chartOpts != null ? chartOpts.width : void 0) != null ? ref : 600; // overall width of chart in pixels

  height = (ref1 = chartOpts != null ? chartOpts.height : void 0) != null ? ref1 : 520; // overall height of chart in pixels

  margin = (ref2 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref2 : {
    left: 60,
    top: 40,
    right: 60,
    bottom: 10 // margins in pixels (left, top, right, bottom)

  };
  labelpos = (ref3 = chartOpts != null ? chartOpts.labelpos : void 0) != null ? ref3 : 10; // pixels between vertex and vertex label (horizontally)

  titlepos = (ref4 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref4 : 20; // position of chart title in pixels

  title = (ref5 = chartOpts != null ? chartOpts.title : void 0) != null ? ref5 : ""; // chart title

  labels = (ref6 = chartOpts != null ? chartOpts.labels : void 0) != null ? ref6 : ["(1,0,0)", "(0,1,0)", "(0,0,1)" // labels on the corners
  ];
  rectcolor = (ref7 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? ref7 : "#e6e6e6"; // color of background rectangle

  boxcolor = (ref8 = chartOpts != null ? chartOpts.boxcolor : void 0) != null ? ref8 : "black"; // color of outer rectangle box

  boxwidth = (ref9 = chartOpts != null ? chartOpts.boxwidth : void 0) != null ? ref9 : 2; // width of outer box in pixels

  pointcolor = (ref10 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? ref10 : null; // fill color of points

  pointstroke = (ref11 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? ref11 : "black"; // color of points' outer circle

  pointsize = (ref12 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref12 : 3; // size of points in pixels

  gridlines = (ref13 = chartOpts != null ? chartOpts.gridlines : void 0) != null ? ref13 : 0; // number of grid lines

  gridcolor = (ref14 = chartOpts != null ? chartOpts.gridcolor : void 0) != null ? ref14 : "white"; // color of grid lines

  gridwidth = (ref15 = chartOpts != null ? chartOpts.gridwidth : void 0) != null ? ref15 : 1; // width of grid lines in pixels

  tipclass = (ref16 = chartOpts != null ? chartOpts.tipclass : void 0) != null ? ref16 : "tooltip"; // class name for tool tips
  // chartOpts end

  chartdivid = (ref17 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref17 : 'chart';
  widgetdivid = d3.select(widgetdiv).attr('id'); // make sure list args have all necessary bits

  margin = d3panels.check_listarg_v_default(margin, {
    left: 60,
    top: 40,
    right: 60,
    bottom: 10
  });
  mychart = d3panels.trichart({
    height: height,
    width: width,
    margin: margin,
    labelpos: labelpos,
    titlepos: titlepos,
    title: title,
    labels: labels,
    rectcolor: rectcolor,
    boxcolor: boxcolor,
    boxwidth: boxwidth,
    pointcolor: pointcolor,
    pointsize: pointsize,
    pointstroke: pointstroke,
    gridlines: gridlines,
    gridcolor: gridcolor,
    gridwidth: gridwidth,
    tipclass: widgetdivid
  });
  mychart(d3.select(widgetdiv).select("svg"), data); // increase size of point on mouseover

  mychart.points().on("mouseover", function (d) {
    return d3.select(this).attr("r", pointsize * 2);
  }).on("mouseout", function (d) {
    return d3.select(this).attr("r", pointsize);
  });

  if (chartOpts.heading != null) {
    d3.select("div#htmlwidget_container").insert("h2", ":first-child").html(chartOpts.heading).style("font-family", "sans-serif");
  }

  if (chartOpts.caption != null) {
    d3.select("body").append("p").attr("class", "caption").html(chartOpts.caption);
  }

  if (chartOpts.footer != null) {
    return d3.select("body").append("div").html(chartOpts.footer).style("font-family", "sans-serif");
  }
};