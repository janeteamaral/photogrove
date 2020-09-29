import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth/react-auth0-wrapper";
import Pesquisa from "./Pesquisa.js";
import Upload from "./Upload.js";
import { gql } from "apollo-boost";

const FETCH_FOLLOWERS = gql`
  query($followingId: String!, $userId: String!) {
    Follow(
      where: {
        follower_id: { _eq: $userId }
        following_id: { _eq: $followingId }
      }
    ) {
      id
    }
  }
`;

function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    
  return (
    <nav className="Nav">
      <div className="Nav-menus">
        <div className="Nav-brand">
          <Link className="Nav-brand-logo" to="/">
            PhotoGrove - Janete Amaral
          </Link>
        </div>

            <button
             div className="Nav-search-button  button-no-style"
             onClick={() => Pesquisa({})}   />
        
        <div className="Nav-brand-direita"> </div>

        {!isAuthenticated && (
          <>
            <button
              className="Nav-user-button button-no-style"
              onClick={() => loginWithRedirect({})}
            />
          </>
        )}

        {isAuthenticated && (
          <>
            <Link className="Nav-user-button" to={"/user/" + user.sub} />
          </>
        )}
        
        {isAuthenticated && (
          <>
           <Upload /> 
           
           </> )}
      </div>
    </nav>
  );
}

export default Header;
