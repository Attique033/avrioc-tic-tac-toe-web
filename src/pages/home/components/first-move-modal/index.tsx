import React, { memo, useCallback } from 'react';
import { useGameActions } from '../../../../store/game/useGameActions';

interface FirstMoveModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FirstMoveModal: React.FC<FirstMoveModalProps> = ({
    isOpen,
    onClose,
}: FirstMoveModalProps) => {
    const { createNewSession } = useGameActions();

    const handleSelection = useCallback(
        (selection: boolean) => {
            createNewSession(selection);
            onClose();
        },
        [createNewSession, onClose]
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Would you like to make the first move?
                </h2>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => handleSelection(true)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => handleSelection(false)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(FirstMoveModal);
