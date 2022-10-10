import React from 'react'
import styles from './ModalContent.module.css';

const ModalContent = ({ closeModal }: any) => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalTop}>
        <h2>Title Modal Example</h2>
        <button onClick={closeModal} className={styles.buttonClose}><span className={`material-symbols-sharp`} >
          close
        </span></button>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo enim, explicabo deserunt saepe impedit molestias animi cum unde omnis quos cumque aut, minima consequatur corrupti quae. Possimus, temporibus illo!</p>

    </div>
  )
}

export default ModalContent