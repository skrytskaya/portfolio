
import React from 'react'
const { PropTypes } = React

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
    path2: {
      fill: props.color,
    },
  }

  return (
    <svg
      style={styles.svg}
      width={`${ props.size }rem`}
      height={`${ props.size }rem`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
      { props.icon2 && <path
        style={styles.path}
        d={props.icon2}
      ></path>}
    </svg>
  )
}

Icon.propTypes = {
  // icon: PropTypes.string.isRequired,
  // size: PropTypes.number,
  // color: PropTypes.string,
}

Icon.defaultProps = {
  size: 1.6,
}

export default Icon
