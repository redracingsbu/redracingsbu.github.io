import { memo } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PageLayout = memo(function PageLayout({
  children,
  wrapperClassName = 'rr-page',
  mainClassName = 'flex-1',
  mainProps = {},
  beforeMain,
  footerWrapperClassName,
}) {
  return (
    <div className={wrapperClassName}>
      <Header />
      {beforeMain}
      <main className={mainClassName} {...mainProps}>
        {children}
      </main>

      {footerWrapperClassName ? (
        <div className={footerWrapperClassName}>
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
});

export default PageLayout;
