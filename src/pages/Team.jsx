import PageLayout from '../components/PageLayout.jsx';

function Team() {
  return (
    <PageLayout
      wrapperClassName="rr-page"
      mainClassName="flex-1 flex flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
        Meet the Team
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        Our team roster and leadership information is coming soon. 
        Stay tuned to see the faces behind SBU Red Racing.
      </p>
      <div className="w-24 h-1 bg-red-500 rounded-full"></div>
    </PageLayout>
  );
}

export default Team;