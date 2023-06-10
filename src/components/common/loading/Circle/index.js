import './LoadingCircle.scss';


const LoadingCircle = ({ color = 'circle-white', className = '' }) => {
  return <div className={`loading-circle ${color} ${className}`}>&nbsp;</div>;
};

export { LoadingCircle };
