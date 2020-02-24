import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../action/todolist';

interface IProps {
  onAddTodo: (input: string) => void;
}

interface IState {
  text: string;
}

class AddTodo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { text: '' };
  }

  private onChange = (value: string): void => {
    this.setState({ text: value });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const { onAddTodo } = this.props;
    e.preventDefault();

    const { text } = this.state;

    if (text.trim().length > 0) {
      onAddTodo(text.trim());
      this.setState({ text: '' });
    }
  };

  public render() {
    return (
      <section>
        <div className="row">
          <form onSubmit={e => this.handleSubmit(e)} className="form-group">
            <input type="text" onChange={e => this.onChange(e.target.value)} />
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(null, {
  onAddTodo: addTodo
})(AddTodo);
