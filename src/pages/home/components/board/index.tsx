import React, { useEffect, useState } from 'react';
import Cell from '../cell';
import { useAppSelector } from '../../../../store';
import { RootState } from '../../../../store/types';
import FirstMoveModal from '../first-move-modal';
import { useGameActions } from '../../../../store/game/useGameActions';
import { getGameSessionId } from '../../../../utils/storage/Game';

const Board: React.FC = () => {
    const { board, moveInProgress } = useAppSelector((state: RootState) => state.game);
    const [showFirstMoveModal, setShowFirstMoveModal] = useState(false);

    const { user } = useAppSelector(state => state.auth);

    const { restoreGameSession } = useGameActions();

    useEffect(() => {
        const sessionId = getGameSessionId();
        if (user?.id && !!sessionId) {
            restoreGameSession(sessionId);
        } else {
            setShowFirstMoveModal(true);
        }
    }, [restoreGameSession, user?.id]);

    const newGame = () => {
        setShowFirstMoveModal(true);
    };

    return (
        <div className="w-full max-w-md">
            <FirstMoveModal
                isOpen={showFirstMoveModal}
                onClose={() => setShowFirstMoveModal(false)}
            />
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {board.flat(1).map((cell, index) => (
                        <Cell key={index} index={index} cell={cell} />
                    ))}
                </div>
                <button
                    onClick={newGame}
                    className="w-full bg-purple-500 backdrop-blur-sm hover:bg-purple-700 hover:text-red font-semibold mt-6 py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                    Start new game {JSON.stringify(moveInProgress)}
                </button>
            </div>
        </div>
    );
};

export default Board;
