import React from 'react';
import Board from "./components/board";
import Stats from "./components/stats";

const Home: React.FC = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-blue-400 p-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 justify-center">
                    <Board/>
                    <Stats/>
                </div>
            </div>
        </div>
    );
};

export default Home;
