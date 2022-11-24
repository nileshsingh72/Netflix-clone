import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase-Config";
import { FaPowerOff, FaSearch } from "react-icons//fa";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
export default function Navbar({ isScrolled }) {
  const [showSearch, setSearch] = useState(false);
  const [inputHover, setinputHover] = useState(false);
  const navigate = useNavigate();
  const links = [
    { name: "Home", link: "/home" },
    { name: "TV Show", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      return navigate("/login");
    }
  });
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="" />
          </div>
          <ul className="flex links">
            {links.map((link, i) => (
              <li key={i}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show search" : ""}`}>
            <button
              onFocus={() => setSearch(true)}
              onBlur={() => {
                if (!inputHover) setSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setinputHover(true)}
              onMouseLeave={() => setinputHover(false)}
              onBlur={() => {
                setSearch(false);
                setinputHover(false);
              }}
            />
          </div>
          <button>
            <FaPowerOff onClick={() => signOut(firebaseAuth)} />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: Black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    z-index: 2;
    justify-content: space-between;
    position: fixed;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s; ease-in-out;
    .left{
        gap: 2rem;
        .brand{
            img{
                height: 4rem;
            }
        }
        .links{
            list-style-type: none;
            gap: 2rem;
            li{
                a{
                    text-decoration: none;
                    color : white;
                }
            }
        }
    }
    .right{
        gap: 1rem;
        button{
             background-color: transparent;
        border: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    svg{
        color:#f34242;
        font-size: 1.2rem;
    }
    }
    .search{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        gap:0.4rem;
        padding-left:0.5rem;
        button{
            background-color: transparent;
            svg{
                color:#fff;
            }
        }
        input{
            background-color: transparent;
            widtth:0;
            visibility: hidden;
            transtion: 0.3s  ease-in-out;
            background-color: transparent;
            border: none;
            color : white;
            opacity: 0;
            &:focus{
                outline: none;
            }
        }
    }
    .show-search{
        border: 1px solid white;
        background-color: rgba(0,0,0,0.6);
        input{
            width: 100%;
            padding:0.3rem;
            visibilty: visible;
            opacity : 1;
        }
    }
    }
  }
`;
