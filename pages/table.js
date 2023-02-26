export default function Table(){
    return (
        <div className="table text-lg text-center">
            <div className="table-header-group">
                <div className="table-row font-bold bg-lime-800 text-white">
                    <div className="table-cell w-100 px-1">Team</div>
                    <div className="table-cell px-1">Player</div>
                    <div className="table-cell w-100 px-1">Data 1</div>
                </div>
                <div className="table-row-group">
                    <div className="table-cell px-5 py-2">GREEN</div>
                </div>
            </div>
        </div>
    )
}