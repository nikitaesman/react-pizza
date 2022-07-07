import React, {FC, useEffect, useState} from 'react';
import cs from "./Modal.module.scss"

interface ModalProps {
    children: any;
    modalOpen: boolean;
    setModalOpen(state: boolean): void;
}

const Modal: FC<ModalProps> = ({children, modalOpen, setModalOpen}) => {
    const [initState, setInitState] = useState<boolean>(!modalOpen)

    useEffect(() => {
        setTimeout(() => setInitState(false), 500)
    }, [])

    return (
        <div style={initState?{animationDuration: "0s"}:{}} className={modalOpen ? cs.root+" "+cs.rootOpen : cs.root+" "+cs.rootClose} onClick={e => setModalOpen(false)}>
            <div className={modalOpen ? cs.modal+" "+cs.modalOpen : cs.modal+" "+cs.modalClose} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;