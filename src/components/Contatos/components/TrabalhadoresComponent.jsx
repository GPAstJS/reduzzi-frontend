/** @format */

export const TrabalhadoresComponent = (arrayTrabalhadores) => {
    return (
        <div className="flex flex-col">
            {arrayTrabalhadores?.map((trabalhador, index) => {
                return (
                    <div key={index} className="flex flex-col gap-[15rem]">
                        <span className="text-[14rem] font-bold">
                            {trabalhador?.nome}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
