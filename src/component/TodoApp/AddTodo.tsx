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

  private handleSubmit = (): void => {
    const { onAddTodo } = this.props;

    const { text } = this.state;

    if (text.trim().length > 0) {
      onAddTodo(text.trim());
      this.setState({ text: '' });
    }
  };

  public render() {
    return (
      <section className="row mt-2 mb-2">
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.onChange(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={() => this.handleSubmit()}
            >
              Add Todo
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default connect(null, {
  onAddTodo: addTodo,
})(AddTodo);
