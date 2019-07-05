import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Authors } from './pages/Authors';
import { About } from './pages/About';
import { SingleAuthor } from './pages/SingleAuthor';
import { SinglePost } from './pages/SinglePost';
import { Header } from './elements/Header';
import { Footer } from './elements/Footer';
import { Switch } from 'react-router-dom';
import { FormPost } from './pages/FormPost';


class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/jecakida' component={FormPost} />
          <Route exact path='/authors/:authorId' component={SingleAuthor} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts/:postId' component={SinglePost} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />

      </>

    )

  }
}


export default App;
