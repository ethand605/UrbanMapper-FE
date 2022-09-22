import Link from 'next/link';
import useUser from '../hooks/useUser';
import {useRouter} from 'next/router';
import SearchBar from "./searchBar";
import React from "react";
import Image from "next/image";
import mapIcon from "../../assets/map_icon.png";


export default function Header() {
    const {user, mutateUser} = useUser();
    return (
        <header>
            <SearchBar/>
            {user?.isLoggedIn &&
                <Link href="/addresses" as="/">
                    <button>
                        Saved Addresses
                    </button>
                </Link>
            }
            <nav>
                <ul>
                    {!user?.isLoggedIn && (
                        <>
                        <li>
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/signUp">
                                Sign Up
                            </Link>
                        </li>
                        </>
                    )}
                    {user?.isLoggedIn && (
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
                    <li>
                        <Link href="/">
                            <div className="img">
                                <Image
                                    src={mapIcon}
                                    alt="clickable image"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </Link>
                    </li>
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
              
              
              .img:hover {
                cursor: pointer;
              }
              
              .img {
                display:flex;
                align-items: center;
              
              }
              
            `}
            </style>
        </header>
    )
}
