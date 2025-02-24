import PropTypes from 'prop-types';

function Tabs({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="flex items-center  pb-2">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`text-lg font-semibold px-4 ${activeTab === tab.value
                        ? "text-black border-b-2 border-black"
                        : "text-gray-500"
                        }`}
                    onClick={() => setActiveTab(tab.value)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, // label harus string dan wajib ada
            value: PropTypes.string.isRequired, // value harus string dan wajib ada
        })
    ).isRequired,
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired
}


export { Tabs }