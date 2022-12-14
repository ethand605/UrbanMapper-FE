import {FormEvent} from 'react'

export default function Form({
     errorMessage,
     onSubmit,
     type
     }: {
    errorMessage: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    type: string
}) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                <span>Username</span>
                <input type="text" name="username" required/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" name="password" required/>
            </label>

            <button type="submit">{type}</button>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <style jsx>{`
              form,
              label {
                display: flex;
                flex-flow: column;
              }

              label > span {
                font-weight: 600;
              }

              input {
                padding: 8px;
                margin: 0.3rem 0 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
              }

              .error {
                color: brown;
                margin: 1rem 0 0;
              }
            `}</style>
        </form>
    )
}
