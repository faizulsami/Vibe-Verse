import { TrendData } from "../Data/TrendData";

const TrendCard = () => {
    return (
        <div style={{backgroundColor:'var(--cardColor)'}} className="flex flex-col gap-4 p-4 rounded-2xl lg:pl-8 md:pl-4 md:w-44 lg:w-full mt-5 md:mt-0 lg:mt-0">
            <h3 className="font-bold lg:text-xl md:text-md text-lg">Trends for you</h3>
            {TrendData.map((trend)=>{
                return(
                    <div key={trend.id} className="flex flex-col gap-2">
                        <span className="font-bold lg:text-base text-sm">#{trend.name}</span>
                        <span className="lg:text-base text-xs">{trend.shares}k shares</span>
                    </div>
                )
            })}

    </div>
    );
};

export default TrendCard;