function About() {
    return (
        <div className="flex-1 bg-white dark:bg-[#191919] py-8 lg:py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-black-900 dark:text-white mb-12">
                    About Us
                </h1>
                
                <div className="space-y-8 text-lg lg:text-xl text-black-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Formed in Spring 2025, RedRacing is Stony Brook University's official Formula SAE club and Formula 
                        racing fan club. Our mission is to unite students who are passionate about vehicle engineering, 
                        motorsports, and hands-on innovation through both collaborative design work and racing culture.
                    </p>
                    
                    <p>
                        While we are a formally recognized club, we are still in the early stages of securing CEAS approval and 
                        funding to build our first car. We're actively working through administrative, technical, and financial 
                        hurdles to turn this vision into reality — and we welcome all the support we can get.
                    </p>
                    
                    <p>
                        Whether you're a student, racing fan, alumni, or potential sponsor, we'd love to have you be part of our 
                        journey.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;