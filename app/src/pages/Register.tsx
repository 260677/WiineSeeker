// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import pics from './pics'
import Logo from '../img/wiineseekertrans2.png'
import { useNavigate } from 'react-router-dom'

function Register({ onUserRegistered, onLoginClick }) {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, password)
                .then(() => {
                    form.reset()
                    onUserRegistered()
                })
                .catch(error => alert(error))
        } catch (error) {
            alert(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()
        onLoginClick()
    }

    logger.debug('Register -> render')
    return <>
        <main>
            <div>
                <img
                    className="mx-auto w-[200px]"
                    src={Logo}
                    alt="logo" />
            </div>

            <div className="flex flex-col items-center justify-center">

                <form className="bg-white flex flex-col items-center justify-center rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>

                    <label className="flex items-start  text-gray-700 text-ml font-semibold antialiased" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight mb-4 focus:outline-none focus:shadow-outline" type="name" id="name" />

                    <label className="flex items-start  text-gray-700 text-ml font-semibold antialiased" htmlFor="email">E-mail</label>
                    <input className="shadow mb-4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" />

                    <label className="flex items-start  text-gray-700 text-ml font-semibold antialiased" htmlFor="password">Password</label>
                    <input className="shadow mb-4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" />

                    <button className="bg-white hover:bg-fuchsia-200 py-2 px-20 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-md antialiased"  type='submit'>Register</button>

                    <a href="" className="inline-block align-baseline italic text-sm text-black  hover:text-purple-900 antialiased" onClick={handleLoginClick}>Login</a>

                </form>
            </div>
        </main>
    </>
}

export default Register