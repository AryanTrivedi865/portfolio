import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/page404.css";

function Page404() {

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const nav = useNavigate();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const body = document.querySelector(".page404");
        if (body) {
            body.classList.add("page-transition");
            await sleep(500);
            nav("/");
            await sleep(500);
            body.classList.remove("page-transition");
        }
    };

    return (
        <div className="page404">
            <div className="page404-content">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="back-home" onClick={handleTransition}>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default Page404;
