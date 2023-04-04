import React from 'react'

export default function login() {
  return (
    <>
    <h1>Blogskuy Login</h1>
    <div>
        <p>Blog</p>
        <p>Skuy</p>
    </div>
    <form action="">
        <div>
            <label htmlFor="logEmail">Email</label>
            <input type="text" name='logEmail' id='logEmail' />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' id='password' />
        </div>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}
