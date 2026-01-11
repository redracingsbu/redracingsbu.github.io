import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('UI crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      const pageClassName = 'rr-page items-center justify-center px-6';
      const cardClassName = 'max-w-xl w-full text-center text-white space-y-6';

      return (
        <div className={pageClassName}>
          <div className={cardClassName} role="alert" aria-live="assertive">
            <h1 className="text-3xl lg:text-5xl font-bold">Something went wrong</h1>
            <p className="text-lg text-gray-200">
              Please refresh the page. If the issue persists, reach out to us.
            </p>
            <button
              type="button"
              className="rr-btn-primary rr-btn-md"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
