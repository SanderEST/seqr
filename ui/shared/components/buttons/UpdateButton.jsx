import React from 'react'
import PropTypes from 'prop-types'

import {Popup, Segment} from 'semantic-ui-react'
import { ButtonLink } from '../StyledComponents'
import ReduxFormWrapper from '../form/ReduxFormWrapper'
import Modal from '../modal/Modal'

const UpdateButton = (
  { showInLine, onSubmit, initialValues, formFields, modalTitle, modalId, buttonText, editIconName, size, modalSize, showErrorPanel,
    disabled, confirmDialog, submitButtonText, buttonFloated, trigger, formContainer = <div /> },
) => {
  const updateButton = showInLine ?
    // React.cloneElement(formContainer = <Segment />, { children: (
    //   <ReduxFormWrapper
    //     onSubmit={onSubmit}
    //     form={modalId}
    //     initialValues={initialValues}
    //     fields={formFields}
    //     showErrorPanel={showErrorPanel}
    //     confirmDialog={confirmDialog}
    //     submitButtonText={submitButtonText}
    //     confirmCloseIfNotSaved
    //   />
    // ) })
    <ButtonLink
      content={buttonText}
      icon={editIconName || 'write'}
      labelPosition={buttonText && 'right'}
      size={size}
      disabled={disabled}
      floated={buttonFloated}
    />
    :
    <Modal
      title={modalTitle}
      modalName={modalId}
      size={modalSize}
      trigger={trigger || (
        <ButtonLink
          content={buttonText}
          icon={editIconName || 'write'}
          labelPosition={buttonText && 'right'}
          size={size}
          disabled={disabled}
          floated={buttonFloated}
        />
      )}
    >
      {React.cloneElement(formContainer, { children: (
        <ReduxFormWrapper
          onSubmit={onSubmit}
          form={modalId}
          initialValues={initialValues}
          fields={formFields}
          showErrorPanel={showErrorPanel}
          confirmDialog={confirmDialog}
          submitButtonText={submitButtonText}
          confirmCloseIfNotSaved
        />
      ) }) }
    </Modal>
  return updateButton
}


UpdateButton.propTypes = {
  showInLine: PropTypes.bool,
  formFields: PropTypes.array,
  onSubmit: PropTypes.func,
  modalTitle: PropTypes.string,
  modalId: PropTypes.string.isRequired,
  initialValues: PropTypes.object,
  buttonText: PropTypes.string,
  buttonFloated: PropTypes.string,
  submitButtonText: PropTypes.string,
  editIconName: PropTypes.string,
  formContainer: PropTypes.node,
  showErrorPanel: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  modalSize: PropTypes.string,
  confirmDialog: PropTypes.string,
  trigger: PropTypes.node,
}

export default UpdateButton
