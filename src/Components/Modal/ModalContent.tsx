import React from 'react'
import styles from 'Modal.module.css';

const ModalContent = ({ closeModal }: any) => {
  return (
    <div>
      <button onClick={closeModal}>Close</button>
      <h1>Title Modal Example</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo enim, explicabo deserunt saepe impedit molestias animi cum unde omnis quos cumque aut, minima consequatur corrupti quae. Possimus, temporibus illo!</p>

    </div>
  )
}

export default ModalContent