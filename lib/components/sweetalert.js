import React from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(swal)

const SweetAlert = ({ open, then, ...rest }) => {
  if (open) {
    mySwal(rest)
      .then((result) => then(result, mySwal))
  }

  return null
}

SweetAlert.propTypes = {
  open: PropTypes.bool,
  then: PropTypes.func,
}

SweetAlert.defaultProps = {
  open: true,
  then: () => {}
}

export default SweetAlert
