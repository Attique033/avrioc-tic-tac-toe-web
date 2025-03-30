import {useEffect, useMemo, useState} from "react";
import {useAuthActions} from "../../../../store/auth/useAuthActions.ts";
import {useStatsActions} from "../../../../store/stats/useStatsActions.ts";
import {useAppSelector} from "../../../../store";
import {RootState} from "../../../../store/types";
import {getUserData} from "../../../../utils/storage/Auth.ts";
import {Player} from "../../../../types";

const Stats = () => {

    const {totalGames, wins, losses, draws} = useAppSelector((state: RootState) => state.stats)
    const {winner} = useAppSelector((state: RootState) => state.game)

    const {logoutUser} = useAuthActions();
    const {getStats} = useStatsActions();

    const winnerName = useMemo(() => {
        const userData = getUserData();
        return winner === Player.O ? 'AI' : (userData?.name || 'You');
    }, [winner])

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div className="w-full max-w-md md:flex-col-reverse">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Game Statistics</h2>
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
            {!!winner && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 mt-4">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Winner 🎉</h2>
                    <div className="space-y-4 text-white text-center">
                        Hurray!, {winnerName} won this game
                    </div>
                </div>)}
        </div>
    )
}

export default Stats;
