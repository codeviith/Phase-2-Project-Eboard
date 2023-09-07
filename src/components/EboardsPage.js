import React, {useState, useEffect} from "react";
import EboardsList from "./EboardsList";
import NewEboardsForm from "./NewEboardsForm";
import Search from "./Search";
import Intro from "./Intro";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";

const URL = "http://127.0.0.1:7000/eboards/"

function EboardsPage() {

    const [eboards, setEboards] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        fetch(URL)
        .then(data => data.json())
        .then(eboards => {
            setEboards(eboards);
        })
    }, [])

    function addNewEboards(newBoards) {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newBoards)
        }).then(data => data.json())
        .then(newBoard => setEboards([...eboards, newBoard]))
    }

    function deletePost(id) {
        fetch(URL + `${id}`, {
            method: "DELETE"
        })
        .then(data => {
            if(data.ok) {
                const oneLessPost = eboards.filter(eboard => {
                    return eboard.id !== id;
                })
                setEboards(oneLessPost)
                alert("Added to Hall-of-Fame!")
            }
        })
        .catch(error => {
            console.log(error.message)
            alert(error.message)
        })
    }

    function updateQuery(e) {
        return setQuery(e.target.value);
    }

    const filteredEboards = eboards.filter(eboard => {
        return (eboard.battery.toLowerCase().includes(query.toLowerCase()) ||
        eboard.motor.toLowerCase().includes(query.toLowerCase())) ||
        (eboard.gear_ratio.includes(query) || eboard.top_speed.includes(query))
    })

    return (
        <main>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Intro />
                    <EboardsList eboards={eboards}
                    deletePost={deletePost}
                    URL={URL}
                    />
                </Route>
                <Route path="/Search">
                    <Search query={query}
                    updateQuery={updateQuery}
                    />
                    <EboardsList eboards={filteredEboards}
                    deletePost={deletePost}
                    URL={URL}
                    />
                </Route>
                <Route path="/New_Post">
                    <NewEboardsForm addNewEboards={addNewEboards}/>
                </Route>
            </Switch>
        </main>
    );
}

export default EboardsPage