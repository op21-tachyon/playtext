import React from 'react';
 
export default function Footer() {
 
    return (
        <footer className="bd-footer py-4 py-md-2 mt-2 bg-body-tertiary">
            <div className="container py-3 py-md-1 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                            <span className="fs-5">PlayText </span>
                        </a>
                        <span> · 2024 - {new Date().getFullYear()}</span>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Designed and built by Rakesh.</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/op21-tachyon" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li className="mb-2"><a href="https://www.linkedin.com/in/rakesh-kumar-02a30113a/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
 
    )
}
 