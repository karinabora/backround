
const Box = () => {
    return (
        <div className="box">
            <h1 id="abc">This is  my heading</h1>
            <p>This is a test paragraph which is created by React. This paragraph which is also create by React</p>
        </div>
    );
};

const Row = () => {
    return (
        <div className="row">
            <div className="col">
                <Box />
            </div>
            <div className="col">
                    <Box />
            </div>
            <div className="col">
                    <Box />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
            <Row />
            <Row />
            <Row />
            <div className="row">
                <Box />
            </div>
        </>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("react-container")
   
);







