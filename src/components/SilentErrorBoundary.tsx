import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * A silent error boundary that renders nothing when an error occurs.
 * Use this for third-party widgets that should fail gracefully without
 * affecting the rest of the application.
 */
class SilentErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error but don't disrupt the UI
    console.warn('SilentErrorBoundary caught an error:', error.message);
  }

  render() {
    if (this.state.hasError) {
      // Render nothing - the widget silently disappears
      return null;
    }

    return this.props.children;
  }
}

export default SilentErrorBoundary;
