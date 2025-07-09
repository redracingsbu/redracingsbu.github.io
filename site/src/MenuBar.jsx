import './menubar.css'

function MenuBar(){
    return (
        <>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <a>Home</a>
                <a>About</a>
                <a>Join</a>
                <a>Sponsors</a>
                <a>Formula SAE</a>
                <a href="mailto:fsae.sbu@gmail.com">Contact Us</a>
                <div className="socialLinks">
                    <a><LinkedIn className="externalLogos"/></a>
                    <a><Instagram className="externalLogos"/></a>
                    <a><Discord className="externalLogos"/></a>
                </div>
            </div>
        </>
    )
}

export default MenuBar