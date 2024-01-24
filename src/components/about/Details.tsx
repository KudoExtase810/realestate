const detailsData = [
    {
        title: "Who are we?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur minima in doloribus neque ut sapiente vel beatae deleniti ratione consequatur recusandae voluptas dolores nulla, tempora perferendis. Assumenda incidunt iste exercitationem reiciendis.",
    },
    {
        title: "What we do?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur minima in doloribus neque ut sapiente vel beatae deleniti ratione consequatur recusandae voluptas dolores nulla, tempora perferendis. Assumenda incidunt iste exercitationem reiciendis.",
    },
    {
        title: "What can you expect?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur minima in doloribus neque ut sapiente vel beatae deleniti ratione consequatur recusandae voluptas dolores nulla, tempora perferendis. Assumenda incidunt iste exercitationem reiciendis.",
    },
];

const Details = () => {
    return (
        <div className="flex flex-col gap-12 lg:max-w-md">
            {detailsData.map((detail, index) => (
                <div key={index}>
                    <h3 className="text-xl lg:text-2xl font-semibold lg:font-boldREMOVED mb-2.5">
                        {detail.title}
                    </h3>
                    <p className="text-secondary-content">{detail.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Details;
