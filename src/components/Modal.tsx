import { forwardRef, ForwardRefRenderFunction, useCallback, useState, useImperativeHandle } from 'react'

export interface ModalHandles {
    openModal: () => void
    closeModal: () => void
}

const Modal: ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
    const [visible, setVisible] = useState(false)

    const openModal = useCallback(() => {
        setVisible(true)
    }, [])

    const closeModal = useCallback(() => {
        setVisible(false)
    }, [])

    useImperativeHandle(ref, () => {
        return {
            openModal,
            closeModal
        }
    })

    if (!visible) return null

    return (
        <div>
            Modal aberto
            <button onClick={closeModal}>Fechar Modal</button>
        </div>
    )
}

export default forwardRef(Modal)
