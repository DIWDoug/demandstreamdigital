/**
 * Route-neutral loading fallback component
 * Used for React Router Suspense boundaries and lazy-loaded routes
 * Matches the visual style of the pre-hydration splash for consistency
 */
const RouteLoadingFallback = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-[50vh]"
      role="status"
      aria-label="Loading"
    >
      <div 
        className="w-10 h-10 border-3 border-muted rounded-full animate-spin"
        style={{
          borderWidth: '3px',
          borderTopColor: '#7d953d',
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default RouteLoadingFallback;
