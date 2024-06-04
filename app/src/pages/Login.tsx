// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import pics from './pics'
import Logo from '../img/wiineseekertrans2.png'
import { useNavigate } from 'react-router-dom'

function Login({ onUserLoggedIn, onRegisterClick }) {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        try {

            logic.loginUser(email, password)
                .then(() => {
                    form.reset
                    onUserLoggedIn()
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()
        onRegisterClick()
    }

    logger.debug('Login -> render')
    return <>
        <main className="h-screen flex justify-center flex-col items-center">
            <div>
                <img
                    className="w-[300px]"
                    src={Logo}
                    alt="logo" />
            </div>

            <div>
                <form className="flex flex-col items-center justify-center rounded px-8 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>

                    <label className="flex items-start  text-gray-700 text-ml font-semibold antialiased" htmlFor="email">E-mail</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="email" id="email" />

                    <label className="block text-gray-700 text-ml font-semibold antialiased" htmlFor="password">Password</label>
                    <input className="shadow mb-4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />

                    <button className="bg-white hover:bg-fuchsia-200 py-2 px-20 text-fuchsia-800 font-semibold mb-2 mt-4 rounded border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased" type='submit'>Login</button>

                    <a href="" className="flex italic antialiased text-sm text-black hover:text-purple-900 justify-items-start" onClick={handleRegisterClick}>Register</a>
                </form>
            </div>
        </main>
    </>
}

export default Login
