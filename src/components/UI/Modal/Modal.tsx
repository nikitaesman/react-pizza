import React, {FC, useEffect} from 'react';
import cs from "./Modal.module.scss"

interface ModalProps {
    children: any;
    modalOpen: boolean;
    setModalOpen(state: boolean): void;
}

const Modal: FC<ModalProps> = ({children, modalOpen, setModalOpen}) => {

    return (
        <div className={modalOpen ? cs.root+" "+cs.rootOpen : cs.root+" "+cs.rootClose} onClick={e => setModalOpen(false)}>
            <div className={modalOpen ? cs.modal+" "+cs.modalOpen : cs.modal+" "+cs.modalClose} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;