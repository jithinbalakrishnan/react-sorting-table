import React from "react";
import * as TableStyle from "./TableStyle";
import { SolidArrow } from "./svgs";
import PropTypes from "prop-types";

class Table extends React.Component {
  state = {
    currentSort: "default",
    sortingColumn: "",
    columnKeys: []
  };

  componentDidMount = () => {
    let states = {};
    states["columnKeys"] = [];
    this.props.data.head.map(item => {
      states.columnKeys.push(item.key);
      states["showUpArrow" + item.key] = true;
      states["showDownArrow" + item.key] = true;
    });
    this.setState(states);
  };
  sortTypes = () => {
    return {
      up: (a, b) =>
        this.getSortingValue(a) > this.getSortingValue(b) ? -1 : 1,
      down: (a, b) =>
        this.getSortingValue(b) > this.getSortingValue(a) ? -1 : 1,
      default: (a, b) => a
    };
  };
  getSortingValue = data => {
    return typeof data[this.state.sortingColumn] === "object"
      ? data[this.state.sortingColumn].value
      : data[this.state.sortingColumn];
  };
  onSortChange = (sortingColumn, sortType) => {
    const { currentSort } = this.state;
    let nextSort = currentSort === "down" ? "up" : "down";
    let prevSelectedColumn = this.state.sortingColumn;
    let states = {};
    states["showUpArrow" + sortingColumn] = sortType === "down";
    states["showDownArrow" + sortingColumn] = sortType === "up";
    states.currentSort = nextSort;
    states.sortingColumn = sortingColumn;
    if (prevSelectedColumn && prevSelectedColumn !== sortingColumn) {
      states["showUpArrow" + prevSelectedColumn] = true;
      states["showDownArrow" + prevSelectedColumn] = true;
    }
    this.setState(states);
  };

  getDisplayText = text => {
    return typeof text === "object" ? text.displayText : text;
  };
  render() {
    const { data } = this.props;
    const { currentSort, columnKeys } = this.state;
    return (
      data.row.length > 0 && (
        <TableStyle.TableContainer>
          <TableStyle.Table>
            <TableStyle.TableHeadContainer>
              <TableStyle.TableRow>
                {data.head.map((item, index) => (
                  <TableStyle.TableHead>
                    {item.name}
                    {item.enabledSorting && (
                      <TableStyle.ArrowContainer>
                        <TableStyle.ArrowWrapper>
                          {this.state["showUpArrow" + item.key] && (
                            <SolidArrow
                              className="up-arrow"
                              onClick={() => {
                                this.onSortChange(item.key, "up");
                              }}
                            />
                          )}
                        </TableStyle.ArrowWrapper>
                        <TableStyle.ArrowWrapper>
                          {this.state["showDownArrow" + item.key] && (
                            <SolidArrow
                              onClick={() => {
                                this.onSortChange(item.key, "down");
                              }}
                            />
                          )}
                        </TableStyle.ArrowWrapper>
                      </TableStyle.ArrowContainer>
                    )}
                  </TableStyle.TableHead>
                ))}
              </TableStyle.TableRow>
            </TableStyle.TableHeadContainer>
            <TableStyle.TableBody>
              {[...data.row].sort(this.sortTypes()[currentSort]).map(row => (
                <TableStyle.TableRow>
                  {columnKeys.map(key => {
                    return (
                      <TableStyle.TableData>
                        {this.getDisplayText(row[key])}
                      </TableStyle.TableData>
                    );
                  })}
                </TableStyle.TableRow>
              ))}
            </TableStyle.TableBody>
          </TableStyle.Table>
        </TableStyle.TableContainer>
      )
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired
};

export default Table;
