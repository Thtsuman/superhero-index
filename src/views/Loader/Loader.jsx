import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <LoadingViewWrapper >
            <i className='bx bx-loader-alt bx-spin bx-md'></i>
        </LoadingViewWrapper>
    )
}

export default Loader


const LoadingViewWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
    i {
        background-color: unset;
    }
`
