import { useTranslations } from "next-intl";

const Details = () => {
    const t = useTranslations("About");

    const sections = [
        {
            title: t("who-are-we.title"),
            description: t("who-are-we.description"),
        },
        {
            title: t("what-we-do.title"),
            description: t("what-we-do.description"),
        },
        {
            title: t("what-can-you-expect.title"),
            description: t("what-can-you-expect.description"),
        },
    ];

    return (
        <div className="flex flex-col gap-12 lg:max-w-md">
            {sections.map((section, idx) => (
                <div key={idx}>
                    <h3 className="text-xl lg:text-2xl font-semibold lg:font-bold mb-2.5">
                        {section.title}
                    </h3>
                    <p className="text-secondary-content">
                        {section.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Details;
