/** @format */

export const CampoEmails = ({ email, referTo }) => (
    <div className="flex flex-row items-center justify-between">
        <div className="h-[90rem] w-[320rem] border-black border-[1rem] bg-gray-300 p-4 px-6 rounded-[15rem] flex flex-col">
            <div className="flex h-[35rem] flex-row relative border-black border-[1rem] items-center">
                <div className="w-full flex items-center justify-center">
                    <label className="text-[var(--primary)] left-[0rem] absolute top-[-8rem] bg-gray-300 ml-2 text-[12rem]">
                        Email do signatário: ({referTo})
                    </label>

                    <label className="text-[var(--primary)] left-[0rem] bg-gray-300 ml-2 text-[12rem]">
                        {email}
                    </label>
                </div>
            </div>
        </div>
    </div>
);
