import { Component } from "react";
import { Link, useLocation } from "react-router-dom";

// Class component is required: getDerivedStateFromError is not available on
// function components. The wrapper remounts on navigation so a later route
// is not stuck on the fallback.
class ErrorBoundaryInner extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-32 text-center text-slate-900">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-slate-600">
            Refresh the page, or go back home.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block border-b border-slate-400 transition hover:text-teal-800"
          >
            Go home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundary = ({ children }) => {
  const { pathname } = useLocation();
  return <ErrorBoundaryInner key={pathname}>{children}</ErrorBoundaryInner>;
};

export default ErrorBoundary;
