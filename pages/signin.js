import React from 'react'
import { csrfToken, providers, signIn } from 'next-auth/client'

export default function SignIn({ csrfToken, providers }) {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Sign in</h1>

        <form method='post' action='/api/auth/signin/email'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <label>Email address</label>
          <input
            type='email'
            placeholder='Enter email'
            id='email'
            name='email'
            required
          />
          <button className='button' type='submit'>
            Sign in with Email
          </button>
        </form>

        <hr />
        <ul>
          {Object.values(providers)
            .filter((p) => p.id !== 'email')
            .map((provider) => (
              <li key={provider.name}>
                <button
                  className='button'
                  id={provider.id}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
    providers: await providers(context),
  }
}
