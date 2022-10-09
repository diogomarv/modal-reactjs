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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >

        <ModalContent closeModal={closeModal} />

        
      </Modal>
    </div>
  );
}

export default App;
