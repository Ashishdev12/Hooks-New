import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const AnalyticsPanel = () => {
  const svgRef = useRef();

  const data = [
    { x: 5, y: 20 },
    { x: 15, y: 35 },
    { x: 25, y: 80 },
    { x: 35, y: 55 },
    { x: 45, y: 120 },
    { x: 55, y: 95 },
    { x: 65, y: 130 },
    { x: 75, y: 70 },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content

    const width = 800;
    const height = 500;
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x) + 10])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) + 20])
      .range([height - margin.bottom, margin.top]);

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Axis Labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .text("X Value");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .text("Y Value");

    // Dots
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 6)
      .attr("fill", "#0077cc");

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    svg
      .selectAll("circle")
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`x: ${d.x}<br>y: ${d.y}`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));
  }, []);

  return (
    <div style={styles.panel}>
      <h2 style={styles.heading}>Analytics Panel: Scatter Plot</h2>
      <svg ref={svgRef} width={800} height={500}></svg>
    </div>
  );
};

const styles = {
  panel: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "850px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginTop: 0,
  },
};

export default AnalyticsPanel;
