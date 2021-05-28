function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num == 7) {
            msg = 
            <div>
                <h2>YASSS!!</h2>
                <img src="https://media1.tenor.com/images/f3321d0fc2b66c005cae93f9f0846b7c/tenor.gif?itemid=5498264" />
            </div>
        } else {
            msg = <p>Sorry - Try again!</p>
        }
        return (
            <div>
                <h1>Your number is {num} </h1>
                {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
                {
                    num === 7 && 
                    <img src="https://media1.tenor.com/images/f3321d0fc2b66c005cae93f9f0846b7c/tenor.gif?itemid=5498264" />
                } */}
                {msg}
            </div>
                
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));