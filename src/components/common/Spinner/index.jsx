import SpinnerBS from 'react-bootstrap/Spinner'

const Spinner = () => {
    return (
        <SpinnerBS animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </SpinnerBS>
    )
}

export { Spinner }