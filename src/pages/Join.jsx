function Join() {
    return (
        <div className="flex-1 bg-white dark:bg-[#191919] py-8 lg:py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-black-900 dark:text-white mb-12">
                    Join
                </h1>
                
                <div className="space-y-8 text-lg lg:text-xl text-black-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        Interested in helping us build the car? Want to join our F1 watch parties and 
                        race-themed events? Everyone is welcome here, regardless of major or study. To learn 
                        more, click the button below to join our discord!
                    </p>
                    
                    <div className="pt-4">
                        <a 
                            href="https://discord.gg/K2RYYcz5jA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 text-xl lg:text-2xl uppercase tracking-wide transition-colors duration-200"
                        >
                            Put Me In Coach
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;