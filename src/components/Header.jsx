const Header = (props) => {
    return (
        <div className="header p-5 text-center">
            <h1>{props.titulo}</h1>
        </div>
    );
};
export default Header;