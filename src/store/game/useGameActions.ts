import { useMemo } from 'react';

import { useAppDispatch } from '../index';
import { MakeMoveRequest } from '../../types';
import { gameSlice } from './index';
import { checkGameState, createGameSession, makeMove } from './actions';

export const useGameActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => {
        return {
            createNewSession: (startWithPlayer: boolean) => {
                dispatch(createGameSession(startWithPlayer));
            },
            makeMove: (payload: MakeMoveRequest) => {
                dispatch(makeMove(payload));
            },
            restoreGameSession: (sessionId: number) => {
                dispatch(gameSlice.actions.setSessionId(sessionId));
                dispatch(checkGameState());
            },
            resetGameSession: () => {
                dispatch(gameSlice.actions.resetGameSession());
            },
        };
    }, [dispatch]);
};
