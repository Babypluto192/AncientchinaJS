import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import posts from "../posts";

function Homepage() {
    const [todos] = useState(posts);
    const [filtered, setFiltered] = useState([]);

    useEffect(
        _ => {
            setFiltered(todos);
        },
        [todos]
    );

    const search = val => {

        let currentTodos = [], newList = [];
        if (val !== "") {

            currentTodos = todos;

            newList = currentTodos.filter(todo => {

                const lc = todo.title.toLowerCase();
                const filter = val.toLowerCase();

                return lc.includes(filter);
            });
        } else {

            newList = todos;
        }
        setFiltered(newList);
    };


    return (
        <div >
            <Header search = {search}/>
            {filtered.map(post =>
                <Posts post = {post} key = {post.key} />
            )}
        </div>
    );
}

export default Homepage;
