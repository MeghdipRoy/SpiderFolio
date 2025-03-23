'use client';

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-gray-300-200 p-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;