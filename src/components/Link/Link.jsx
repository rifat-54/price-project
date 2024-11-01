
const Link = ({route}) => {
    return (
        <li className="mr-9 hover:bg-yellow-500 px-4 py-2"><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;