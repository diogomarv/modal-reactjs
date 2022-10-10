import React from 'react';
import './App.css';
import Modal from 'react-modal';
import ModalContent from './Components/Modal/ModalContent';

Modal.setAppElement('#root');

function App() {

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className='button__Primary'>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal" className="modal" closeTimeoutMS={300} 
      >

        <ModalContent closeModal={closeModal} />

        
      </Modal>
    </div>
  );
}

export default App;
