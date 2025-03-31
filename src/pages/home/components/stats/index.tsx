import {useEffect, useMemo} from "react";
import {useAuthActions} from "../../../../store/auth/useAuthActions.ts";
import {useStatsActions} from "../../../../store/stats/useStatsActions.ts";
import {useAppSelector} from "../../../../store";
import {RootState} from "../../../../store/types";
import {getUserData} from "../../../../utils/storage/Auth.ts";
import {GameStatus, Player} from "../../../../types";

const Stats = () => {

    const {totalGames, wins, losses, draws,} = useAppSelector((state: RootState) => state.stats)
    const {winner, status} = useAppSelector((state: RootState) => state.game)
    const {user} = useAppSelector((state: RootState) => state.auth)

    const {logoutUser} = useAuthActions();
    const {getStats} = useStatsActions();

    const gameOver = useMemo(() => {
        const isOver = !!winner || status === GameStatus.DRAW;
        if (isOver) {
            getStats();
        }
        return isOver;
    }, [winner, status, getStats])

    const winnerName = useMemo(() => {
        const userData = getUserData();
        return winner === Player.O ? 'AI' : (userData?.name || 'You');
    }, [winner])

    const resultMesage = useMemo(() => {
        if (gameOver && status === GameStatus.DRAW) {
            return 'It\'s a draw! 💪';
        }
        return `Hurray! ${winnerName} won 🎉`;
    }, [gameOver, status])

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div className="w-full max-w-md md:flex-col-reverse">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">{user.name}'s Statistics</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-white">
                        <span>Total Games</span>
                        <span className="font-semibold">{totalGames}</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                        <span>Wins</span>
                        <span className="font-semibold">{wins}</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                        <span>Losses</span>
                        <span className="font-semibold">{losses}</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                        <span>Draws</span>
                        <span className="font-semibold">{draws}</span>
                    </div>
                </div>
                <button
                    onClick={logoutUser}
                    className="w-full bg-purple-500 backdrop-blur-sm hover:bg-purple-700 hover:text-red mt-16 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                    Logout
                </button>
            </div>
            {gameOver && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mt-4">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Game results</h2>
                    <div className="space-y-4 text-white text-center">
                        {resultMesage}
                    </div>
                </div>)}
        </div>
    )
}

export default Stats;
