import React from 'react'
import { Header } from './partials/Header.Comp'
import { Footer } from './partials/Footer.Comp'
import '../../App.css'
export const DefaultLayout = () => {
    return (

        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
            <main className="main">
                main content goes here
                 </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}


