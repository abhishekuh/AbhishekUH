import React, { Component } from 'react'
import navbar from '../components/navbar'

export default class home extends Component {
    render() {
        return (
            <div>
                <>
                <navbar />
                </>
                <div className="row">
                    <div className="main-container">
                        <div className="banner text-center">
                            <span className="banner-main-txt">Abhishek Harapanahalli</span>
                            <span className="banner-text">Web Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
