import propTypes from "prop-types"

const ColomnContainer = ({column}) => {
  return (
    <div>{column.Title}</div>
  )
}
ColomnContainer.propTypes={
          column:propTypes.object.isRequired
}

export default ColomnContainer