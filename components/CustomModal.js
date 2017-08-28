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
  //const data={};
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
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="form-group">
              <label className="control-label" for="month">Enter Month</label>
              <input type="text" className="form-control" name="Month" id="month" value={this.props.handleData.Month} onChange={this.props.handleChange}/>
            </div>
            <div className="form-group">
              <label className="control-label" for="expenses">Enter Expenses</label>
              <input type="text" className="form-control" name="Expenses" id="expenses" value={this.props.handleData.Expenses} onChange={this.props.handleChange}/>
            </div>
          </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.props.onRequestHide}>
            Close
          </button>
          <button className='btn btn-primary' onClick={this.props.onUpdate}>
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default CustomModal;
