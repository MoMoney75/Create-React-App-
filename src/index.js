import {randChoice, remove} from './helpers'
import fruits from './foods';

const GetFruit = () =>{
    let randFruit = randChoice(fruits)

    return (
        <div>
            <p>I'd like one {randFruit}, please. </p>
            <p>Here you go: {randFruit} </p>
            <p>Delicious! May I have another?</p>
            {fruits.remove(fruits,randFruit)}
            <p>I'm sorry, we're all out of {randFruit}</p>

        </div>

    )
}

ReactDOM.render(<GetFruit/>, document.getElementById("root"));