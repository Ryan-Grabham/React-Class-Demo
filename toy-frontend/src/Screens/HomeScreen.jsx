import React from 'react'

import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function HomeScreen() {
    return (
        <div>
           
            <div className="bg-banner">
                <div className="banner-content">
                    <h1 className="heading-text text-center">Welcome to toy land!</h1>
                    <Button as={Link} to="/products" variant="light" className="px-5">See our toys!</Button>
                    
                </div>
            </div>

        </div>
    )
}

export default HomeScreen
