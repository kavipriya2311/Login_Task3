export default function Hello(props){
    return (
        <div>
            <h2>
                    Hello {props.name}--{props.age}
            </h2>
        </div>
    )
}

export default function DestructuringProps(){
return (
    <div>
        <h2>name:</h2>
        <h2>age:</h2>
        <h2>city:</h2>
    </div>
)
}