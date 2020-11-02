import '../styles/App.css';
import Header from './Header';
import HomePage from './HomePage';
import TodoApp from './TodoApp/TodoApp';
import AboutPage from './AboutPage';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
