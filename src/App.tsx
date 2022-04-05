import { FormEvent, useCallback, useRef } from 'react'
import Modal, { ModalHandles } from './components/Modal'
import Input from './components/Input'

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })
  const modalRef = useRef<ModalHandles>(null)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    nameInputRef.current?.focus()
    console.log('Focused', nameInputRef.current?.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
    console.log('Accepted', acceptTermsRef.current.value)
  }, [])

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div>
      <form className="App">
        <Input name={"name"} label="Nome Completo" placeholder={''} ref={nameInputRef} />
        <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>
        <button onClick={handleSubmit} type="submit">Foco</button>
      </form>

      <button onClick={handleOpenModal}>
        abrir modal
      </button>

      <Modal ref={modalRef} />
    </div>
  )
}

export default App
