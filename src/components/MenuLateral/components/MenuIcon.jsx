/** @format */

export const MenuIcon = ({
    Icon,
    text,
    setTelaAtual,
    divRendered,
    telaSelecionada,
    reduzido,
}) =>
    reduzido ? (
        <div
            onClick={() => setTelaAtual(telaSelecionada)}
            className={`
            flex items-center hover:cursor-pointer w-[60rem] h-[60rem]
            ${divRendered ? 'bg-[var(--white)] rounded-[50rem_0rem_0rem_50rem]' : 'bg-transparent'}
          `}
        >
            {divRendered && (
                <div className="absolute left-[-30rem] bg-[var(--white)] rounded-[50rem_0rem_0rem_50rem] z-[9] h-[50rem]">
                    <div className="w-[50rem] h-[30rem] z-[9] ml-[81rem] top-[-35.4rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--primary)] absolute rotate-[0deg]"></div>
                    <div className="w-[50rem] h-[30rem] z-[9] ml-[81rem] top-[54.5rem] rounded-[0rem_0rem_0rem_35rem] bg-[var(--primary)] absolute rotate-[180deg]"></div>

                    <div className="w-[50rem] h-[60rem] z-[8] ml-[80.5rem] top-[-30rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--white)] absolute rotate-[180deg]"></div>
                    <div className="w-[50rem] h-[50rem] z-[8] ml-[80.5rem] top-[29rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--white)] absolute rotate-[90deg]"></div>
                </div>
            )}

            <div className="z-[10]">{Icon}</div>
        </div>
    ) : (
        <div
            onClick={() => setTelaAtual(telaSelecionada)}
            className="flex gap-2 w-full flex-row items-center relative"
        >
            {divRendered && (
                <div className="absolute left-[-30rem] bg-[var(--white)] rounded-[50rem_0rem_0rem_50rem] z-[9] h-[50rem] w-[360rem]">
                    <div className="w-[50rem] h-[30rem] z-[9] ml-[240rem] top-[-29.5rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--primary)] absolute rotate-[0deg]"></div>
                    <div className="w-[50rem] h-[30rem] z-[9] ml-[240rem] top-[50rem] rounded-[0rem_0rem_0rem_35rem] bg-[var(--primary)] absolute rotate-[180deg]"></div>

                    <div className="w-[50rem] h-[50rem] z-[8] ml-[240rem] top-[-29.5rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--white)] absolute rotate-[180deg]"></div>
                    <div className="w-[50rem] h-[50rem] z-[8] ml-[240rem] top-[29.5rem] rounded-[0rem_0rem_35rem_0rem] bg-[var(--white)] absolute rotate-[90deg]"></div>
                </div>
            )}

            <div className="z-[10] flex gap-2 w-full flex-row items-center hover:cursor-pointer">
                {Icon}

                <h3
                    className={`text-base ${divRendered ? 'text-[var(--primary)]' : 'text-white'}`}
                >
                    {text}
                </h3>
            </div>
        </div>
    );
