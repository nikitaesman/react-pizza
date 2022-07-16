import React, {FC, useEffect, useState} from 'react';
import cs from "./Modal.module.scss"

interface ModalProps {
    children: any;
    modalOpen: boolean;
    setModalOpen(state: boolean): void;
    border?: boolean;
}

const Modal: FC<ModalProps> = ({children, modalOpen, setModalOpen, border = true}) => {
    const [initState, setInitState] = useState<boolean>(!modalOpen)

    useEffect(() => {
        setTimeout(() => setInitState(false), 500)
    }, [])

    return (
        <div style={initState?{animationDuration: "0s"}:{}} className={modalOpen ? cs.root+" "+cs.rootOpen : cs.root+" "+cs.rootClose} onMouseDown={e => setModalOpen(false)}>
            <div style={!border?{padding: 0}:{}}  className={modalOpen ? cs.modal+" "+cs.modalOpen : cs.modal+" "+cs.modalClose} onMouseDown={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;