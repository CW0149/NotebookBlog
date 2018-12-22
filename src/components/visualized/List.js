import React from 'react'
import PropTypes from 'prop-types'
import List from 'react-virtualized/dist/commonjs/List'

function rowRenderer(props) {
  return ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) => {
    return (
      <div
        key={key}
        style={style}
        className="vlist-option"
      >
        {props.list[index]}
      </div>
    )
  }
}




function VList(props) {
  console.log('render')
  return (
    <List
      style={{padding: '10px 0 0', height: 'auto !important', maxHeight: '300px', outline: 'none'}}
      width={props.width}
      height={300}
      rowCount={props.list.length}
      rowHeight={40}
      rowRenderer={rowRenderer(props)}
      noRowsRenderer={() => (
        <div style={{paddingBottom: '10px'}}>No Options</div>
      )}
    />
  )
}

VList.propTypes = {
  list: PropTypes.array.isRequired
}

export default VList