import React, { Component } from 'react'
// import Logo from '../assets/angular.png'

export default class projects extends Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="projects-heading text-center">
                        <span className="banner-main-txt">Projects</span>
                        <div className="project-container">
                        <div className="project-card">
                                <div className="project-img">
                                    {/* <img src="{Logo}" alt="image"></ img> */}
                                </div>
                                <div className="project-name">CloseVille</div>
                                <div className="project-desc">Order management business application</div>
                            </div>
                            <div className="project-card">
                                <div className="project-img">
                                    {/* <img src="{Logo}" alt="image"></ img> */}
                                </div>
                                <div className="project-name">Shelf</div>
                                <div className="project-desc">E Commerce shopping application for web and mobile</div>
                            </div>
                            <div className="project-card">
                                <div className="project-img">
                                    {/* <img src="{Logo}" alt="image"></ img> */}
                                </div>
                                <div className="project-name">Mathup</div>
                                <div className="project-desc">Mathematics Quiz application</div>
                            </div>
                            <div className="project-card">
                                <div className="project-img">
                                    {/* <img src="{Logo}" alt="image"></ img> */}
                                </div>
                                <div className="project-name">Analytics Dashboard</div>
                                <div className="project-desc">Data Visualisation through different charts</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
