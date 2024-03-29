import Image from "next/image";

const Team = () => {
    const staff = [
        {
            name: "Hanma Yujiro",
            role: "CEO",
            image: "/images/team/person1.avif",
        },
        {
            name: "Kevin Peterson",
            role: "Designer",
            image: "/images/team/person1.avif",
        },
        {
            name: "Mohammed Ali",
            role: "HR Manager",
            image: "/images/team/person1.avif",
        },
        {
            name: "Clint Eastwood",
            role: "Developer",
            image: "/images/team/person1.avif",
        },
    ];
    const firstHalf = staff.slice(0, Math.ceil(staff.length / 2));
    const secondHalf = staff.slice(Math.ceil(staff.length / 2));
    return (
        <>
            {/* Desktop version */}
            <div className="flex gap-4 max-lg:hidden">
                <div className="flex flex-col flex-wrap gap-4 lg:mt-32">
                    {firstHalf.map((member, idx) => (
                        <div key={idx} className="relative group">
                            <Image
                                className="rounded-md"
                                width={300 * 1.2}
                                height={400 * 1.2}
                                src={member.image}
                                alt={member.name}
                                quality={100}
                            />
                            <div className="absolute z-[2] right-2 bottom-2 text-neutral-100">
                                <p className="text-lg font-semibold">
                                    {member.role}
                                </p>
                                <p className="font-medium">{member.name}</p>
                            </div>
                            <div className="absolute inset-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[400ms]" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col flex-wrap gap-4 ">
                    {secondHalf.map((member, idx) => (
                        <div key={idx} className="relative group">
                            <Image
                                className="rounded-md"
                                width={300 * 1.2}
                                height={400 * 1.2}
                                src={member.image}
                                alt={member.name}
                                quality={100}
                            />
                            <div className="absolute z-[2] right-2 bottom-2 text-neutral-100">
                                <p className="text-lg font-semibold">
                                    {member.role}
                                </p>
                                <p className="font-medium">{member.name}</p>
                            </div>
                            <div className="absolute inset-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[400ms]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile version (carousel) */}
            <div className="carousel carousel-center max-w-full space-x-4 lg:hidden">
                {staff.map((member, idx) => (
                    <div key={idx} className="carousel-item">
                        <div key={idx} className="relative group">
                            <Image
                                className="rounded-md max-w-full"
                                width={300}
                                height={400}
                                src={member.image}
                                alt={member.name}
                                quality={100}
                            />
                            <div className="absolute z-[2] right-2 bottom-2 text-neutral-100">
                                <p className="text-lg font-semibold">
                                    {member.role}
                                </p>
                                <p className="font-medium">{member.name}</p>
                            </div>
                            <div className="absolute inset-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[400ms]" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Team;
