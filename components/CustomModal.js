import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Modal isOpen={this.props.isOpen} onRequestHide={this.props.onRequestHide}>
        <ModalHeader>
          <ModalClose onClick={this.props.onRequestHide}/>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.props.onRequestHide}>
            Close
          </button>
          <button className='btn btn-primary'>
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default CustomModal;
