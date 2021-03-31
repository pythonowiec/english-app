import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Posts = lazy(() => import("./containers/Posts/Posts"));

const Post = lazy(() => import("./components/Post/Post"));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/posts/all">
                    <Suspense fallback={<p>Loading</p>}>
                        <Posts />
                    </Suspense>
                </Route>

                <Route
                    exact
                    path="/posts/:id"
                    render={({
                        match: {
                            params: { id }
                        }
                    }) => (
                        <Suspense fallback={<p>Loading</p>}>
                            <Post id={id} />
                        </Suspense>
                    )}
                />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
