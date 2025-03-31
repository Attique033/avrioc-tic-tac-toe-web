import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-purple-400 to-blue-400 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-white/20"></div>
                            <div className="w-16 h-16 rounded-full border-4 border-white border-t-transparent animate-spin absolute top-0 left-0"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-white text-center">Loading...</h2>
                        <p className="text-white/80 text-center text-sm">
                            Please wait while we prepare your game
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
