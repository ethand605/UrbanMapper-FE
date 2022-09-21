import Link from 'next/link';
import useUser from '../hooks/useUser';
import {useRouter} from 'next/router';
import SearchBar from "./searchBar";
import React from "react";


export default function Header() {
    const {user, mutateUser} = useUser()
    const router = useRouter()
    return (
        <header>
            <SearchBar/>
            <nav>

                <ul>
                    <li>
                        <Link href="/">
                            <a>Map</a>
                        </Link>
                    </li>
                    {user?.isLoggedIn === false && (
                        <li>
                            {/*TODO: fix this cannot use directions null??*/}
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                    )}
                    {user?.isLoggedIn === true && (
                        <li>
                            <Link href='/'>
                                <a
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        await mutateUser((await fetch('http://localhost:3001/auth/logout', { method: 'DELETE', credentials: 'include'}, )).json());
                                    }}
                                >
                                    Logout
                                </a>
                            </Link>
                        </li>

                    )}

                </ul>
            </nav>
            <style jsx>{`
              ul {
                display: flex;
                list-style: none;
                margin-left: 0;
                padding-left: 0;
              }

              li {
                margin-right: 1rem;
                display: flex;
              }

              li:first-child {
                margin-left: auto;
              }

              a {
                color: #fff;
                text-decoration: none;
                display: flex;
                align-items: center;
              }

              a img {
                margin-right: 1em;
              }

              header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 0.2rem;
                padding-left: 1rem;
                color: #fff;
                background-color: #333;
              }
              
            `}
            </style>
        </header>
    )
}
