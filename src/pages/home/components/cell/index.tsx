import {useCallback, useMemo} from "react";
import {useAppSelector} from "../../../../store";
import {RootState} from "../../../../store/types";
import {useGameActions} from "../../../../store/game/useGameActions.ts";
import {Player} from "../../../../types";

interface CellProps {
    index: number;
    cell: number;
}

const Cell = ({index, cell}: CellProps) => {

    const {sessionId, winner, board, currentPlayer} = useAppSelector((state: RootState) => state.game);

    const {makeMove} = useGameActions();

    const handleCellClick = useCallback(() => {

        if (currentPlayer === Player.X) {
            return;
        }

        const row = Math.floor(index / 3);
        const col = index % 3;
        if (winner || !!board[row][col]) {
            return;
        }
        const newBoard = board.map((r: number[], rowIndex: number) =>
            r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? -1 : cell))
        );

        makeMove({
            board: newBoard,
            sessionId: sessionId,
        });
    }, [index, winner, board, sessionId, currentPlayer, makeMove]);

    const cellIcon = useMemo(() => {
        if (cell === -1) {
            return (
                <div className="relative w-12 h-12 content-center items-center">
                    <div className="absolute w-full h-1 bg-white transform rotate-45 origin-center"></div>
                    <div className="absolute w-full h-1 bg-white transform -rotate-45 origin-center"></div>
                </div>
            );
        } else if (cell === 1) {
            return (<div className="w-12 h-12 rounded-full border-4 border-white"></div>)
        }
        return '';
    }, [cell]);

    return (
        <div
            key={index}
            onClick={handleCellClick}
            className={`aspect-square bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg text-4xl font-bold text-white flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl ${cell === 0 && !winner ? 'hover:scale-105' : ''}`}
        >
            {cellIcon}
        </div>
    )
}

export default Cell;
