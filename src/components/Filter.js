import React from "react";

class Filter extends React.Component {
  render() {
    const { search, filter, onFilterChange, searchChange } = this.props;
    return (
      <div className="filterWrapper">
        <input value={search} onChange={searchChange} placeholder="Search..." />
        <div>
          <button
            onClick={() => onFilterChange("All")}
            style={{
              fontWeight: filter === "All" ? "bold" : "normal",
            }}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange("Done")}
            style={{
              fontWeight: filter === "Done" ? "bold" : "normal",
            }}
          >
            Done
          </button>
          <button
            onClick={() => onFilterChange("Undone")}
            style={{
              fontWeight: filter === "Undone" ? "bold" : "normal",
            }}
          >
            Undone
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
