

const Overview = () => {
    return (
        <div className="bg-white dark:bg-white py-5 max-w-lg mx-auto flex mt-10">
        <div className="grid grid-cols-3 gap-4 mx-10">
            {/* Card 1: Due Amount */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Total Amount</div>
                <div className="text-3xl text-gray-900 dark:text-white">$1,200</div>
            </div>

            {/* Card 2: Total Income */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Due Income</div>
                <div className="text-3xl text-gray-900 dark:text-white">$5,000</div>
            </div>

            {/* Card 3: Add more cards here */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Expense</div>
                <div className="text-3xl text-gray-900 dark:text-white">$2,500</div>
            </div>

            {/* Card 4: Add more cards here */}
            {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold"></div>
                <div className="text-3xl text-gray-900 dark:text-white">$3,800</div>
            </div> */}
        </div>
    </div>
    );
};

export default Overview;