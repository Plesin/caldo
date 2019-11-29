/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReposList from 'components/ReposList';
import './style.scss';

const todos = [
  { title: 'Viola', desc: 'poplatek', created: 0, priority: 1, done: false },
  { title: 'Yi - Reklamace', desc: '', created: 0, priority: 1, done: false },
  {
    title: 'Chata - Elektrika',
    desc: 'Rozpocitat elektriku na sousedy',
    created: 0,
    priority: 1,
    done: false,
  },
  {
    title: 'Kancl - Nabytek',
    desc: 'stul, zidle, skrinka',
    created: 0,
    priority: 1,
    done: false,
  },
];

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    // const {
    // loading,
    // error,
    // repos,
    // username,
    // onChangeUsername,
    // onSubmitForm,
    // } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <article>
        <div className="home-page">
          <section>
            {todos.map((td, index) => (
              <div key={index}>
                <h1>{td.title}</h1>
                <span>{td.desc}</span>
                <i>{td.created}</i>
                <span>{td.priority}</span>
                <span>{td.done}</span>
              </div>
            ))}
          </section>
          {/* <section>
            <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                Show Github repositories by
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={username}
                  onChange={onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section> */}
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  todoList: PropTypes.array,
};
