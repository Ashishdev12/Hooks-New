import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const ReportsPanel = () => {
  const svgRef = useRef();

  const data = [
    { label: "Marketing", value: 30 },
    { label: "Sales", value: 25 },
    { label: "Development", value: 20 },
    { label: "Support", value: 15 },
    { label: "Others", value: 10 },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.label))
      .range(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.value);
    const arcs = pie(data);

    const arc = d3.arc().innerRadius(0).outerRadius(radius - 10);

    const chart = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    chart
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.label))
      .attr("stroke", "#fff")
      .style("stroke-width", "2px");

    // Add labels
    const labelArc = d3.arc().innerRadius(radius / 2).outerRadius(radius);

    chart
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .text((d) => `${d.data.label} (${d.data.value}%)`);
  }, []);

  return (
    <div style={styles.panel}>
      <h2 style={styles.heading}>Reports Panel: Pie Chart</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

const styles = {
  panel: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginTop: 0,
  },
};

export default ReportsPanel;
