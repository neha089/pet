import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ohh no there is an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Error!! Use this to go back <Link to="/">click</Link>
        </h2>
      );
   
    }
}
}
export default ErrorBoundary;
