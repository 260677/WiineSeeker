import logic from '../logic'
import { useState, useEffect } from 'react'
import exiticon from '../img/blacklogouticon.svg'

function Header({ onUserLoggedOut, coordinates, error }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }, [])


    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    const handleLogoClick = () => {
        window.location.reload()
    }

    return (
        <header className="bg-fuchsia border shadow-sm shadow-fuchsia-700">
            <div className="flex justify-center">
                <img
                    className="w-32 flex cursor-pointer"
                    src={`https://images2.imgbox.com/cc/eb/7dcG3m21_o.png`}
                    alt="logo"
                    onClick={handleLogoClick}
                />
            </div>
            <div className="flex items-center">
                {user && <h1 className="text-black-500 text-sm font-light absolute top-2 right-4">{user.name}</h1>}
                <button className="absolute top-8 right-4" onClick={handleLogoutClick}>
                    <img className="w-5" src={exiticon} alt="exit" />
                </button>
            </div>
            <div className="absolute top-2">
                {error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        {coordinates && coordinates.latitude !== null && coordinates.longitude !== null && (
                            <div>
                                <img className="w-16" src={`https://images2.imgbox.com/77/46/7DFNHJbt_o.png`} alt="location detected" />
                            </div>

                        )}
                    </>
                )}
            </div>
        </header>
    )
}

export default Header