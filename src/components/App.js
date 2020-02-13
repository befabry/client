import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import history from "../history";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route
                        path="/streams/edit/:id"
                        exact
                        component={StreamEdit}
                    />
                    <Route
                        path="/streams/delete/:id"
                        exact
                        component={StreamDelete}
                    />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
