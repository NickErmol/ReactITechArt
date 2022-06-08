import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor( props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(/* error, errorInfo */) {
    // TODO: loging errors
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
