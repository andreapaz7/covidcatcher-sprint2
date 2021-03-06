import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Home } from './Home';
import { Faq } from './Faq';
import { Articles } from './Articles';
import { NotExist } from './NotExist';
import { Stats } from './Stats';
import { Quest } from './Quest';
import { InfoMap } from './InfoMap';
import { About } from './About';
import { QuestStart } from './QuestStart';

export function Content() {
  return (
    <div>
      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/statistics">
            <Stats />
          </Route>
          <Route exact path="/questionnaire-start">
            <QuestStart />
          </Route>
          <Route exact path="/questionnaire">
            <Quest />
          </Route>
          <Route exact path="/map">
            <InfoMap />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotExist />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
